# Claude Design brief: Ugradnja Euro Kuka

Paste everything below the line into Claude Design (or run `/design` with it).
Everything in it is verified against the repo as of 2026-09-04; nothing is invented.

---

## The job

Design a landing page and a small page set for **Ugradnja Euro Kuka**, a
tow-bar (euro kuka) installation service in Belgrade, Serbia. The site exists to
produce **one action: a phone call**. Viber and WhatsApp are the only accepted
substitutes. There is no cart, no booking engine, no contact form, no account.

Deliver a canvas with these artboards:

1. **Homepage, mobile** (390px wide, full length) - design this one first, it is
   where most traffic lands
2. **Homepage, desktop** (1440px wide, full length)
3. **Installation page** (`/installation`), desktop and mobile
4. **Contact page** (`/contact`), desktop
5. **Blog index and one blog article**, desktop
6. **Mobile nav drawer**, open state
7. **Design system sheet**: color tokens, type scale, buttons, cards, form-free
   CTA blocks, iconography rules

If a direction is not obvious, put **2 to 3 distinct visual directions** of the
mobile homepage hero plus one full section side by side on the canvas before
building out the rest.

## The business, in facts

| Field | Value |
|---|---|
| Name | Ugradnja Euro Kuka |
| Service | Installation of tow bars (euro kuka) on all car makes, with atest (Serbian roadworthiness certificate) |
| Location | Beograd, Srbija. Serves "Beograd i okolina". No publishable street address |
| Map | Real Google listing at 44.813504 / 20.457973 |
| Phone | +381 63 806 6462 |
| Hours | Pon - Pet 08:00 - 20:00, Subota 10:00 - 16:00, Nedelja zatvoreno |
| Email | info@eurokuka.rs (deliverability unconfirmed, treat as low-priority) |
| Domain | https://www.ugradnjaeurokuka.com |
| Language | Serbian (Latin script) only. `lang="sr"` |
| Parts installed | Bosal, Oris, Steinhof |
| Turnaround | Appointment within 24h, the installation itself takes 3-4 hours |
| Warranty | 2 years, covering the tow bar and the electrical wiring |

Contact deep links, all three verified working:

```
tel:+381638066462
viber://chat?number=%2B381638066462          (no prefilled text, Viber drops it)
https://wa.me/381638066462?text=<urlencoded> (prefill works here)
```

## Who the visitor is

A Serbian car owner who has decided they need a tow bar and is now choosing a
shop. They are on a phone, usually standing next to the car or at work. They
want to know four things, in this order:

1. Can you do *my* car?
2. What will it cost?
3. Do I get the atest so I can register it?
4. How fast, and when can I come?

They are also quietly asking a fifth thing: *is this a real business or a guy in
a yard?* Every design decision should answer that one. Warmth, order and
competence beat cleverness here.

## Hard content rules (non-negotiable)

The previous version of this site shipped invented content. It has been removed
and must not come back in any form, including as placeholder or lorem.

- **No testimonials, reviews, star ratings, or named customers.** There are none.
- **No counters** ("500+ zadovoljnih klijenata", years in business, cars done).
- **No prices.** Price genuinely depends on car model and hitch type and cannot
  be published. Do not design a pricing table, tier cards, or a "od X RSD" badge.
- **No street address**, no map pin with a fake location, no "our showroom".
- **No claimed partnerships.** Say "Ugrađujemo kuke proizvođača Bosal, Oris,
  Steinhof", never "official partner" or "sarađujemo sa".
- **No certification badges, ISO marks, award seals, or trust-seal graphics**
  that do not exist.
- **No stock photography of a shiny workshop, smiling mechanics, or handshake
  imagery.** If a photo slot has no real photo behind it, design the section so
  it works without one.

Available real assets, and that is the whole list:

- `public/images/hero/eurokuka.jpg` - one photo, 600x519, small
- `public/bosal.svg`, `public/steinhof-dark.svg`, `public/oris.jpg` - three brand
  marks with **different cap heights**, so give them individually tuned heights
  rather than one uniform class, or Bosal will read twice the size of Steinhof

Design as if that is all you get. If a layout needs more imagery, prefer
diagrams, type, iconography, or structured cards over photo placeholders. Also
mark clearly on the canvas any slot where a **real** photo of finished work
would later slot in, since the owner may shoot some.

## Homepage composition

This section order is already validated by content and should be kept unless you
have a strong reason. Real Serbian copy is given; treat it as the source of
truth and improve wording only where it stays true.

1. **Hero**
   - Eyebrow: `Beograd · Sve marke vozila`
   - H1: `Ugradnja euro kuke sa atestom`
   - Sub: `Montaža traje 3-4 sata, termin dobijate u roku od 24 sata. Originalni
     delovi, atest i garancija, sve na jednom mestu.`
   - Chips: `Atest uključen` / `Garancija 2 godine` / `Originalni delovi`
   - **One** primary action (call), with Viber and WhatsApp as clearly secondary
     shapes. Do not ship two buttons that look like two different offers and
     both fire `tel:`. That is the current bug.
   - Hero image is the LCP element.
2. **Brand strip** - label `Ugrađujemo kuke proizvođača`, three logos.
3. **Process** - `Kako izgleda ugradnja`: Pregled vozila, Priprema, Montaža,
   Atest i predaja. Four steps, each one line.
4. **Price, answered honestly** - `Koliko košta ugradnja?` The strongest section
   on the page. State plainly that price depends on model and hitch type, that
   the exact figure comes on the call, and that there is no obligation, then put
   call / Viber / WhatsApp right inside the section. A transparency promise that
   resolves to "Po dogovoru" is worse than saying nothing.
5. **What you get** - `Šta dobijate`: Atest i registracija, Garancija 2 godine,
   Originalni delovi, Termin u roku od 24 sata.
6. **Vehicle makes** - Volkswagen, BMW, Mercedes, Audi, Toyota, Ford, Opel,
   Peugeot, Renault, Citroen, Hyundai, Kia, plus the line `Ne vidite svoje
   vozilo? Pozovite, radimo i sa markama koje nisu na listi.`
7. **FAQ** - four questions, links through to `/installation`.
8. **Hours and location** - working hours block plus the real Google Maps embed.
   These are the two genuine trust assets that currently appear on no page a
   buyer reads. Give them real estate.
9. **Final CTA** - `Spremni da montirate euro kuku?`

Do not run two sections that make the same three claims twice. The old site had
"Naše Usluge" and "Zašto Izabrati Nas" saying the same thing back to back.

## Mobile behavior that must be designed, not assumed

- **Fixed bottom call bar** on mobile, present at every scroll position. Design
  its spacer too: `env(safe-area-inset-bottom)` adds ~34px on iPhones with a
  home indicator, so a hand-computed height will occlude the footer.
- **Phone number visible in the header**, at every breakpoint.
- **Hamburger and drawer** below `md`. Design the open state: overlay, close
  affordance, the phone number and the three contact actions inside the drawer.
- Tap targets 44px minimum. Thumb-reachable primary action.

## SEO requirements

This site's traffic is local Serbian search. The design must not fight it.

- **Server-rendered content.** Everything a crawler needs is in the initial HTML.
  No content behind client-only rendering, no text that appears only after
  hydration.
- **One `<h1>` per page**, then a clean `h2`/`h3` order that matches the visual
  hierarchy. Do not pick a heading level for its font size.
- **No text baked into images.** All Serbian copy is selectable text.
- **Serbian alt text on every image**, written for a person, not stuffed.
- Target phrases to appear naturally in copy and headings: *ugradnja euro kuke*,
  *euro kuka Beograd*, *atest za euro kuku*, *kuka za vuču*, *montaža auto kuke*,
  *Bosal / Oris / Steinhof*.
- **JSON-LD**: `AutoRepair` LocalBusiness on the homepage (name, phone, geo,
  areaServed, openingHoursSpecification, currenciesAccepted RSD, no
  streetAddress since none exists, no priceRange since no price is publishable)
  and `FAQPage` on `/installation`. The visible FAQ and the FAQ schema must read
  from one source so they can never disagree.
- **Core Web Vitals are a design constraint.** Hero image is LCP: it needs a real
  size and a priority load. Nothing may shift on load, which means the fixed
  bars, the logo strip and any embed need reserved height. No carousel, no
  hero video, no animation library, no icon font.
- **A 1200x630 OG image is missing and needs designing.** The current share image
  is a 600x519 photo, undersized for large cards. Design the OG card too.
- Serbian diacritics **č ć š ž đ** must render in the chosen typeface, not a
  fallback. Any font you pick must ship Latin Extended-A. Check that
  "Zakažite montažu euro kuke" renders in one consistent weight.
- The blog exists and matters for search: three categories (Pravne informacije,
  Vodiči, Bezbednost) and long-form articles about atest and legality. Design a
  readable article template: measure ~65-75 characters, real `h2` rhythm, list
  and table styling, and an in-article contact block. Articles carry the company
  as author, never a personal byline.

## Technical constraints

- **Next.js 13.5.6 App Router, React 18, TypeScript, Tailwind CSS 3.** Whatever
  you design must be buildable in these with no new runtime dependency.
- Color tokens live in `src/app/globals.css` as **space-separated RGB channels**
  (`--accent: 225 6 0`) so Tailwind alpha modifiers work. Deliver your palette
  in that shape, and give each token a stated role, not just a hex.
- Fonts are loaded via `next/font/google` with `subsets: ['latin', 'latin-ext']`.
  Two families maximum; one is fine.
- All user-facing Serbian copy, including `alt` and `title` attributes, lives in
  `src/utils/translations/sr.ts`. Nothing is hardcoded in a component.
- Pick one dash convention for hours and ranges and use it everywhere. The site
  currently spells the same hours two ways.

## Visual direction

Aim for: **credible, current, and calm.** A local trade business that clearly
takes itself seriously. Precision and order signal a good mechanic. Think
well-set type, generous spacing, restrained color, real hierarchy, and detailing
that looks maintained rather than decorated.

Avoid: template-generic SaaS gradients, glassmorphism, floating 3D blobs,
oversized emoji as icons, three identical feature cards with three identical
circle icons, and any layout whose credibility depends on photography that does
not exist.

One previous attempt was **rejected on visual direction**: near-black surfaces
alternating full-bleed with white, a single red accent (`#e10600`), Archivo
Extrabold display type at very tight tracking, photo-free throughout. Its
structure and content decisions were sound and are reflected in this brief, but
do not reproduce that look. Come with something different, and show options.

## What "done" means

- The mobile homepage can be understood and acted on in one thumb scroll without
  a single tap on anything but a contact action.
- Nothing on any artboard is a claim the business cannot substantiate.
- Every section survives having no photograph in it.
- The heading outline of each page reads as a sensible document on its own.
- Palette and type are delivered as tokens ready to drop into `globals.css` and
  `tailwind.config.js`.
