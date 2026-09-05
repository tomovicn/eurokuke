# Carry-over requirements for the next design

Written 2026-09-04, after a full redesign attempt on `feature/3-redesign`.

The visual direction of that attempt was rejected. This document exists so the
*non-visual* findings do not have to be rediscovered. Everything below is
design-independent — it holds no matter what the next design looks like.

The redesign branch is preserved at **`feature/3-redesign`** (30 commits) if you
want to lift specific fixes from it rather than reimplement them. Its reasoning
lives in `docs/superpowers/specs/2026-09-02-landing-redesign-design.md` and
`docs/superpowers/plans/2026-09-02-landing-redesign.md` on that branch.

**Every line reference below points at the current `feature/2-seo` tree**, i.e.
what is live today.

---

## 1. Bugs currently live in production

### 1.1 Two of three manufacturer logos render nothing — CRITICAL

The logo strip on the homepage is broken and has been for some time. Three
separate causes stack:

1. `src/app/page.tsx` renders the logos through `next/image`. Next refuses to
   serve these SVGs, so they render as nothing at all.
2. `public/steinhof.svg` declares `.cls-1{fill:#FFFFFF}` — a white logo on a
   white page. Invisible even once it is served.
3. The markup papers over (2) with `bg-gray-300` on the `<img>` element, which
   is the grey box you can see on the live site today.

Fix all three, not just the visible symptom. Serve these with a plain `<img>`
(they are small static brand marks; the optimiser buys nothing), and use a
dark-filled copy of the Steinhof mark. Give the three logos *different* height
classes — their cap heights differ enough that a single uniform height makes
Bosal look twice the size of Steinhof.

### 1.2 Every Serbian diacritic renders in a fallback font — HIGH

`src/app/layout.tsx:8` loads `Inter({ subsets: ['latin'] })`. The `latin` subset
does not include Latin Extended-A, which is where č ć š ž đ live. Every
diacritic on the site is therefore rendering from a system fallback, which is
why some words look subtly wrong-weight next to their neighbours.

Add `'latin-ext'` to the subsets of every font you load. This is the single
cheapest visible-quality win in the codebase.

### 1.3 `/installation` promises transparent prices and shows one card — HIGH

`src/app/installation/page.tsx:145-149` renders a `lg:grid-cols-3` containing
exactly one of the three defined plans, left-aligned in the centre column. The
heading above it reads *"Transparentne cene bez skrivenih troškova"* and the one
visible price reads **"Po dogovoru"**.

You have said prices depend on vehicle model and cannot be published. So the fix
is not to render the two missing plans — it is to delete all three and replace
the section with an honest one. See section 3.5.

The two unrendered plans hold `od 15.000 RSD` and `od 20.000 RSD` in
`src/utils/translations/sr.ts`. Those figures should not ship.

### 1.4 `/contact` has lost its form — HIGH

`src/app/contact/page.tsx` still declares `formData` state, a `handleSubmit`
that only `console.log`s, and a `handleChange` — with no form anywhere to drive
them. The email block is commented out. A `md:grid-cols-2` renders with one
column filled, leaving half the row empty on every desktop view.

Either build a working form (needs a send endpoint — Resend, Formspree or
similar, plus an API key) or delete the dead code and make it an honest contact
page. Do not leave it half-built.

### 1.5 There is no mobile menu — HIGH

`src/components/Navbar.tsx` renders four nav links inline at every breakpoint,
with no hamburger and no drawer. It also shows no phone number at all. For a
local service business where most traffic is a phone in someone's hand, this is
the most consequential gap on the site.

If you build a drawer, three things are easy to forget and all three were needed:
- Lock `document.body.style.overflow` while open, and restore it on unmount.
- Close on link tap **as well as** on route change. A `useEffect` keyed on
  `pathname` alone does not fire when the tapped link is the current route — the
  overlay stays open with scroll still locked and the site appears frozen.
- Close on Escape, and set `role="dialog"` / `aria-modal="true"`.

### 1.6 An unknown blog URL throws instead of 404ing — MEDIUM

`src/app/blog/[slug]/page.tsx` guards with `if (!post)`, but the lookup goes
through `t('blog.posts.…')` and `src/utils/i18n.ts:14` returns the *key string*
on a miss rather than `undefined`. The guard can never fire, and the page throws
when it reads properties off a string.

Read posts through `src/lib/posts.ts`, which returns a real object or
`undefined`. Note that even then, a client component cannot call `notFound()`
from `next/navigation` — you will render a not-found UI with an HTTP 200. For an
SEO-focused site, make that page a server component so it returns a real 404.

### 1.7 Three 404s on every page load — LOW

`src/app/layout.tsx` references `/favicon-16x16.png`, `/favicon-32x32.png` and
`/safari-pinned-tab.svg` in six places. None of the three exist in `public/`.
The icons are also declared twice — once in `metadata.icons`, once as manual
`<link>` tags in `<head>`.

Separately, `public/site.webmanifest` points at `/android-chrome-192x192.png` and
`/android-chrome-512x512.png`; the real files are `web-app-manifest-192x192.png`
and `-512x512.png`.

### 1.8 `npm run lint` has never linted anything — HIGH (process)

This one is worth reading twice. `next lint` on Next 13.5.6 cannot read this
repo's flat `eslint.config.mjs`. It prints `ESLint output (JSON parse failed…)`
and **exits 0 without evaluating a single rule.** Every "lint passes" claim ever
made about this repo has been meaningless.

Root cause: `eslint.config.mjs` extends `next/typescript`, a config that only
ships with `eslint-config-next` 15+. This repo pins 13.5.6. The project was
scaffolded from a Next 15 template onto Next 13 dependencies.

Dropping that one string from the extends array makes ESLint run, with no
dependency change. It then immediately reports **8 real pre-existing
`react/no-unescaped-entities` errors** in `src/app/privacy/page.tsx` (lines 21
and 101).

Use this as your gate, not `npm run lint`:

```bash
npm run build
npx tsc --noEmit
ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

---

## 2. Fabricated content that must not survive into any design

You confirmed the testimonials were invented. Several more inventions turned up
during the work. All of the following are live right now.

| What | Where | Why it matters |
|---|---|---|
| Three testimonials — "Marko Petrović, Vlasnik Volkswagena Golfa", "Ana Jovanović, Vlasnik BMW X5", "Ivan Nikolić, Vlasnik Mercedesa" | `src/utils/translations/sr.ts:72+`, rendered on the homepage | Presented as real customers |
| The same three people as **blog post authors**, with invented job titles ("Sertifikovani Montažer", "Tehnički Stručnjak", "Inspektor Bezbednosti") | `sr.ts:213`, `:282`, and two more | Worse than a byline: `src/app/blog/[slug]/layout.tsx` feeds `post.author.name` into OpenGraph `authors`, publishing the fabrication as structured data |
| A **San Francisco street address and a `+1 (555)` phone**, plus `info@eurokuke.com` (a domain you do not own) | `src/app/privacy/page.tsx:109-111` | A Belgrade business's privacy policy listing a US placeholder address |
| `priceRange: '$$'` | `src/lib/schema.ts:26` | A published price band, in a USD idiom, one line above `currenciesAccepted: 'RSD'` — on a business with no publishable prices |
| `"zadovoljnih klijenata"` social proof | `sr.ts`, `home.hero.socialProof` | Currently unrendered, but sitting in the file waiting to be used |
| "Sarađujemo sa vodećim proizvođačima kuka za vuču" | `src/app/page.tsx:76` | Asserts a commercial partnership with Bosal/Oris/Steinhof that has not been established. Say "Ugrađujemo kuke proizvođača" instead — true, and just as reassuring |
| `"123 Primer Ulica, Beograd, Srbija"`, `info@eurotowbar.rs`, company name "Euro Towbar" | `src/locales/sr.ts` (whole file) | Dead duplicate of the real translation file. Nothing imports it — `src/utils/i18n.ts` uses `src/utils/translations/sr.ts`. Delete it |
| `od 15.000 RSD` / `od 20.000 RSD` | `sr.ts`, `installation.pricing.plans` | Prices you have said cannot be published |

One visitor noticing one fake signal discounts everything else on the page, and
these are the kind of thing a competitor screenshots.

---

## 3. What any new design must still do

These are conversion and content requirements, independent of how the page looks.

### 3.1 One-press contact from any scroll position on mobile
A fixed bottom bar with tap-to-call is likely the highest-impact single element
on this site. If you build one, have it render its own spacer so it cannot
occlude the end of the footer — and derive that spacer's height from the bar's
own markup rather than a hand-computed number. A literal `h-20` undershoots by
~23px on any iPhone with a home indicator, because `env(safe-area-inset-bottom)`
adds ~34px.

### 3.2 The phone number belongs in the header
It is currently nowhere in the header at all.

### 3.3 Viber and WhatsApp deep links
Both work on `+381 63 806 6462`. Formats:

```
tel:+381638066462
viber://chat?number=%2B381638066462
https://wa.me/381638066462?text=<url-encoded message>
```

**Viber cannot carry a prefilled message body reliably across platforms** — only
WhatsApp gets prefill text. Do not add a `text=` param to the Viber link.

### 3.4 One primary action, not two identical ones
Today both hero buttons fire the same `tel:` link while looking like two
different offers, and the secondary (red-700 on red-100) is low contrast.

### 3.5 Answer the price question honestly
The strongest version, given you cannot publish prices: state plainly that the
price depends on vehicle model and hitch type, that an exact figure comes on the
call, and that there is no obligation — then put the call/Viber/WhatsApp actions
right there. A promise of transparency that delivers "Po dogovoru" is worse than
saying nothing.

### 3.6 Surface the trust signals you actually have
Two real assets already exist in the codebase and appear on **no page a buyer
reads**:

- **Working hours** — Mon–Fri 08:00–20:00, Sat 10:00–16:00. Already in
  `src/lib/schema.ts` as `openingHoursSpecification`.
- **A real Google Maps listing** for "Euro Kuka Beograd" at 44.813504 /
  20.457973, in `sr.ts` as `contact.map.embedUrl`.

Both belong somewhere a visitor deciding whether to call can see them.

### 3.7 Stop saying the same thing twice
"Naše Usluge" (Brza Montaža / Certifikovani Kvalitet / Stručna Podrška) and
"Zašto Izabrati Nas" (Brza Usluga / Garancija / Certifikati) are the same three
claims, twice, one after the other. That costs a full screen of attention and
adds nothing.

---

## 4. Invariants — do not break these

Things that are correct today and easy to break by accident.

1. **The `LocalBusiness` JSON-LD on the homepage must stay a raw
   `<script type="application/ld+json">` tag.** Not `next/script`. This is
   documented in `src/lib/schema.ts` and was learned the hard way: `next/script`
   injects client-side and kept the schema out of the server-rendered HTML
   entirely.
2. **The visible FAQ and the FAQPage JSON-LD must read from one source** —
   `src/lib/faq.ts`. Structured data that disagrees with the copy on the page is
   a search-engine violation. Do not inline the questions into a component.
3. **`src/lib/schema.ts` omits `streetAddress` and `postalCode` on purpose.**
   There is no real street address. Leave them out rather than inventing one.
4. **All user-facing Serbian copy belongs in `src/utils/translations/sr.ts`**,
   including `alt` and `title` attributes — alt text is read by screen readers
   and indexed by image search. `src/app/page.tsx` currently violates this by
   hardcoding the `<h1>` and the logo-strip label.
5. **Hero images are the LCP element.** Use `next/image` with `priority` for
   them. The plain-`<img>` exception applies only to the SVG brand marks
   (section 1.1), where Next refuses to serve the file at all.

---

## 5. Copy contradictions to resolve

1. **How long does installation take?** The homepage says *"u roku od jednog
   dana"* and *"montaža u roku od 24 sata"*. The `/installation` FAQ says
   *"standardna montaža traje 3-4 sata"*. These contradict each other on the
   same site.

   The reading that makes both true: **termin u roku od 24 sata, montaža traje
   3–4 sata.** The redesign shipped that wording throughout — but you never
   confirmed it, so please check before reusing it.

2. **Two spellings of the same hours.** `common.hours.*` and
   `contact.info.workingHours` state identical hours with different dashes
   (en dash vs hyphen). Pick one.

---

## 6. Open questions only you can answer

1. **Does `info@eurokuka.rs` actually resolve?** It appears in the footer,
   `/contact`, `/privacy` and the JSON-LD — but the site's domain is
   `ugradnjaeurokuka.com`. If mail to it bounces, every contact surface on the
   site is broken. **Worth checking today, regardless of any redesign.**
2. **The privacy policy is written entirely in English** on an otherwise fully
   Serbian site. It is also a legal document, so a machine translation would be
   worse than leaving it. Your call.
3. **Do you want a contact form at all?** If yes it needs a send endpoint and an
   API key.
4. **Will you have real photos, Google reviews, or a street address?** The whole
   shape of a landing page changes if any of these appear. The redesign was
   built photo-free and review-free because you have neither; with real photos of
   completed work, a very different and much stronger page becomes possible.

---

## 7. If you want to lift the fixes without the design

Most of sections 1 and 2 is design-independent and already implemented on
`feature/3-redesign`. Ask and it can be extracted onto a clean branch on top of
`feature/2-seo` — bug fixes, fabricated-content removal, the font subset, the
lint repair and the accessibility work, with none of the visual rebrand.
