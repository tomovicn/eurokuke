# Landing redesign — design spec

Date: 2026-09-02
Branch base: `feature/2-seo`
Status: approved for planning

## 1. Problem

`www.ugradnjaeurokuka.com` is a local-service site for euro-hitch installation in
Belgrade. It is built from stock Tailwind UI blocks and does not sell. Three
classes of problem, in order of cost:

**Broken output.** Two of the three manufacturer logos do not render, and the
third shows as a bare grey box. The `/installation` pricing section renders one
of its three tiers, off-centre, under a heading promising transparent prices —
the single visible price reads "Po dogovoru". `/contact` has lost its form: the
state and submit handler are dead code, the email block is commented out, and a
two-column grid renders with one empty column. Both footer social links point at
`href='#'`.

**Fabricated trust.** Three testimonials name invented customers and their cars.
The owner has confirmed these are not real. A visitor who detects one fake signal
discounts every other claim on the page.

**No conversion path.** Both hero buttons fire the same `tel:` link while looking
like two different offers. There is no mobile menu, no phone number in the
header, and no persistent call affordance on mobile — which is where nearly all
traffic for this category arrives.

## 2. Constraints

Established with the owner before design:

- **No photography.** No pictures of completed work, the workshop, or vehicles.
  The design must carry itself on typography and layout, and must accept real
  photography later without a relayout.
- **No published prices.** Price depends on vehicle model and hitch type. The
  `15.000 / 20.000 RSD` figures in `sr.ts` are not to be shown.
- **No customer reviews to quote.** No star rating, no review count, no
  testimonials.
- **No street address.** Deliberate and already documented in `src/lib/schema.ts`
  — inventing one is worse than omitting it.
- Contact is by phone, Viber and WhatsApp on `+381 63 806 6462`.

What *is* real and usable: working hours (Mon–Fri 08:00–20:00, Sat 10:00–16:00),
a Google Maps listing for "Euro Kuka Beograd" at 44.813504/20.457973, the three
manufacturer brands, and the installation process and FAQ copy.

## 3. Strategy

The page cannot sell on price or on proof. It sells on **removing friction**:
make the scope of the job legible, make the guarantees concrete, and make
contacting the shop a single thumb-press from any scroll position.

## 4. Design system

Tokens live in `src/app/globals.css` as CSS custom properties and are surfaced
to Tailwind via `theme.extend` in `tailwind.config.js`. No component uses a raw
hex value.

### Surfaces

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0B0C0E` | dark section ground |
| `--ink-2` | `#16181C` | raised surface on dark |
| `--paper` | `#FFFFFF` | light section ground |
| `--paper-2` | `#F4F5F7` | raised/alternate light surface |
| `--line` | `#E4E6EA` | hairline on light |
| `--line-dark` | `rgb(255 255 255 / 0.10)` | hairline on dark |

Sections alternate dark and light bands. The current page is a single
undifferentiated white wall, which is the main reason it reads as a template.

### Accent

`--accent: #E10600`, replacing Tailwind `red-600` (`#DC2626`). Motorsport red,
and it sits coherently beside Bosal's own `#ff0a07`.

Accent is permitted on: primary CTA fill, process numerals, rule accents, active
nav state. It is **not** permitted as the fill behind icon tiles — the repeated
`bg-red-500 rounded-md shadow-lg` square is the strongest template tell on the
current page and is removed entirely.

### Typography

- Display: **Archivo** 700/800, `tracking-[-0.03em]`
- Body/UI: **Inter** 400/500/600

Both via `next/font/google` with subsets `['latin', 'latin-ext']`.

The existing `Inter({ subsets: ['latin'] })` omits Latin Extended-A, so every
Serbian diacritic on the site (č ć š ž đ) currently renders from a fallback
font. This is a live bug, not a preference.

Eyebrows become small uppercase labels with positive letterspacing in the muted
foreground colour, replacing the current bold-red eyebrow that repeats above
every section.

### Layout and rhythm

- Container `max-w-6xl` (from `max-w-7xl`). At 1280px the current body copy runs
  to roughly 110 characters per line.
- Section padding: `py-20 md:py-28` on dark, `py-16 md:py-24` on light.
- Vocabulary: hairline rules, large numerals, tight type. Not shadowed rounded
  cards.

### Motion

Interactive states only, 150ms ease-out. No scroll-triggered reveals — they read
as generated filler and cost load performance.

## 5. Homepage composition

Order, band, and what each section is for. Where two light bands sit
adjacent (5/6 and 8/9) they alternate `--paper` and `--paper-2` so the
seam still reads.

1. **Sticky header** — dark, hairline bottom border, backdrop blur.
   Wordmark, nav, and the phone number as a filled accent pill. Below `md`:
   wordmark, a phone icon button, and a hamburger opening a full-screen dark
   drawer. There is currently no mobile menu of any kind.

2. **Hero** — dark, full-bleed.
   Eyebrow `BEOGRAD · SVE MARKE VOZILA`; H1; one honest supporting line; a CTA
   row of **Pozovi 063 806 6462** (accent fill), **Viber** and **WhatsApp**
   (ghost, hairline border); then three guarantee chips on a hairline row.
   The existing Oris render sits in a light, slightly angled "spotlight" plate at
   right. That plate is what allows a white-background JPEG to sit on a dark
   hero, and it is sized so a transparent cutout or a real photograph drops into
   the same slot later with no layout change.

3. **Manufacturer logos** — light band.
   Rendered with plain `<img>`, not `next/image`; the SVGs currently fail
   optimisation and render nothing. `steinhof.svg` is filled `#FFFFFF` and needs
   a dark-filled copy. Uniform optical height, consistent muted treatment.
   Label changes from "Sarađujemo sa vodećim proizvođačima kuka za vuču" to
   "Ugrađujemo kuke proizvođača" — the former asserts a commercial partnership
   that has not been established.

4. **Proces montaže** — dark band.
   The four steps currently buried on `/installation`, promoted to the homepage
   as a numbered rail with large accent `01`–`04` and a connecting hairline.
   This is the strongest honest content the business has.

5. **Koliko košta?** — light band, high emphasis.
   States plainly that the price depends on vehicle model and hitch type, that
   an exact figure is given on the call, and that there is no obligation. Call,
   Viber and WhatsApp actions. This section replaces the broken pricing grid
   wherever it appears.

6. **Garancije** — light band.
   Merges the two near-duplicate sections. "Naše Usluge" (Brza Montaža /
   Certifikovani Kvalitet / Stručna Podrška) and "Zašto Izabrati Nas" (Brza
   Usluga / Garancija / Certifikati) currently state the same three things
   twice. One set of four concrete claims: atest i registracija, garancija,
   originalni delovi, brzina.

7. **Marke vozila** — dark band.
   The twelve brand chips from `/installation`, brought to the homepage. Answers
   "radite li moj auto?" at the moment it is asked, and carries model keywords.
   Hairline chips, not shadowed cards.

8. **FAQ** — light band.
   The existing four entries as a `<details>`/`<summary>` accordion, no
   JavaScript. Continues to read from `src/lib/faq.ts` so the visible copy and
   the FAQPage JSON-LD cannot drift.

9. **Radno vreme i lokacija** — light band.
   Real hours (Mon–Fri 08:00–20:00, Sat 10:00–16:00) and the Google Maps embed
   for the existing "Euro Kuka Beograd" listing. These are genuine trust signals
   already present in the codebase and currently shown on no page a buyer reads.

10. **Final CTA** — accent band. One action: call.

11. **Footer** — dark. Phone, email, hours, service area, navigation. The two
    `href='#'` social links are removed until real profiles exist.

12. **Mobile sticky call bar** — fixed to the bottom viewport edge below `md`,
    two-up: **POZOVI** (accent) and **Viber**. Reveals once the hero scrolls out
    of view. Body gets bottom padding equal to the bar height so the footer is
    never occluded.

## 6. Other pages

**`/installation`** — inherits the system. The pricing grid is replaced by the
Koliko košta? block. Process and FAQ remain here in full; the homepage carries
condensed versions that link through.

**`/contact`** — rebuilt as an honest contact page: phone, Viber, WhatsApp,
hours, and the map. The form is not restored. Dead `formData` and `handleSubmit`
state and the empty grid column are removed.

**`/blog`, `/blog/[slug]`, `/blog/category/[category]`, `/privacy`, `/not-found`**
— inherit header, footer, tokens and type. No bespoke layout work.

## 7. Deletions

- The three invented testimonials, and the `testimonials` block in `sr.ts`.
- The three-tier pricing grid on `/installation`, and the unused `basic` and
  `premium` plan copy.
- `src/locales/sr.ts` — a 433-line unused duplicate of the translation file,
  containing `"123 Primer Ulica, Beograd, Srbija"`, `info@eurotowbar.rs` and the
  company name "Euro Towbar". `src/utils/i18n.ts` imports
  `src/utils/translations/sr.ts`; nothing imports `src/locales/sr.ts`.
- The `@media (prefers-color-scheme: dark)` block in `globals.css`, which sets a
  dark `--background` that every hardcoded `bg-white` wrapper then overrides.
- The stale `@theme inline` block in `globals.css` referencing
  `--font-geist-sans`, a font this project does not load.
- The two `href='#'` social links in the footer.

## 8. Bugs fixed en route

| Bug | Location |
|---|---|
| Serbian diacritics fall back to a system font | `layout.tsx` — Inter missing `latin-ext` |
| Two of three logos render nothing | `page.tsx` — `next/image` on unoptimisable SVGs |
| Steinhof logo is white on white | `public/steinhof.svg` |
| Pricing shows one of three tiers, off-centre | `installation/page.tsx:145` |
| Contact form absent, half the grid empty | `contact/page.tsx` |
| No mobile navigation | `Navbar.tsx` |
| Social links go nowhere | `Footer.tsx` |

## 9. Copy decisions

Two questions were raised with the owner and not answered before approval. The
spec proceeds on stated assumptions; both are cheap to change and are flagged for
confirmation at implementation review.

**Duration.** The homepage claims "u roku od jednog dana" and "montaža u roku od
24 sata od zakazivanja termina"; the `/installation` FAQ says "standardna montaža
traje 3-4 sata". *Assumption:* these describe different things and are reconciled
rather than picked between — **termin u roku od 24 sata, montaža traje 3–4 sata**.
This is both more credible and more specific than either claim alone.

**Contact form.** *Assumption:* not restored, per the call-for-quote decision.
Restoring it would require a send endpoint and is out of scope.

All user-facing strings continue to live in `src/utils/translations/sr.ts` and be
read through `useTranslation()`. New sections add keys there; no component
hardcodes Serbian copy. Note that `page.tsx` currently hardcodes the H1 and the
logo-strip label in violation of this — both move into the translation file.

## 10. Success criteria

- Every logo in the manufacturer strip is visible.
- No page presents a price, a review, a rating, an address, or a testimonial that
  is not real.
- A call, Viber, or WhatsApp action is reachable in one press from any scroll
  position on mobile.
- No section duplicates another section's claims.
- Serbian diacritics render in the loaded webfont at every weight.
- `npm run build` and `npm run lint` pass clean.
