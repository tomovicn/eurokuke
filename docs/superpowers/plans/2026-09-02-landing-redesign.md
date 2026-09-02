# Landing Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the stock-Tailwind landing page with a bold automotive design system, fix the broken logo strip / pricing grid / contact page, remove fabricated trust signals, and make calling reachable in one press from any scroll position.

**Architecture:** CSS custom properties in `globals.css` are the single source of colour and are surfaced to Tailwind through `theme.extend`, so no component carries a raw hex. Contact deep links (tel / Viber / WhatsApp) are centralised in one module and consumed by a single `ContactActions` component used by the header, hero, quote block, final CTA and mobile bar. Pages compose plain section components; there is no CSS-in-JS and no component library.

**Tech Stack:** Next.js 13.5 App Router, React 18, TypeScript, Tailwind CSS 3.3, `next/font/google`. No new runtime dependencies.

**Spec:** `docs/superpowers/specs/2026-09-02-landing-redesign-design.md`

## Global Constraints

- **No test framework exists in this repo.** There is no `test` script, no runner, no test files. Do not add one — it is out of scope for this plan.
- **The verification gate is these three commands.** Run all three; all three must pass.

```bash
npm run build
npx tsc --noEmit
ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

  `npm run lint` is NOT a gate and must not be used as one. `next lint` in Next
  13.5.6 cannot read this repo's flat `eslint.config.mjs`; it prints
  `ESLint output (JSON parse failed...)` and **exits 0 without running a single
  rule**. Task 2 repairs the config; every task from Task 2 onward runs the three
  commands above. Plus visual verification at 1440px and 390px where a task
  names it.
- **No new runtime dependencies.** `package.json` dependencies must be unchanged when this plan completes.
- **No invented facts.** No price, star rating, review count, testimonial, street address, or social profile may appear on any page unless it already exists as real data in the repo. The only real trust signals available are: hours (Mon–Fri 08:00–20:00, Sat 10:00–16:00), the Google Maps listing for "Euro Kuka Beograd" at 44.813504/20.457973, and the three manufacturer brands.
- **All user-facing Serbian copy lives in `src/utils/translations/sr.ts`** and is read through `useTranslation()`. No component hardcodes Serbian text.
- **Colour tokens only.** No `bg-red-600`, no `text-gray-500`, no raw hex in any component after Task 1. Use `bg-accent`, `text-muted`, `border-line`, etc.
- Phone: `+381 63 806 6462`, dial form `+381638066462`.
- Contact prefill text (WhatsApp only): `Zdravo, zanima me cena ugradnje euro kuke.`
- Target branch: current branch `feature/2-seo`. Commit after every task.
- **Every task must leave the repo building.** Additive changes first, deletions
  only once nothing reads the thing being deleted. Never commit a state where
  `npm run build` fails.

### Colour mapping

Applied identically wherever stock Tailwind colours are replaced (Tasks 10 and 12):

| Stock class | Token class |
|---|---|
| `bg-white` | `bg-paper` |
| `bg-gray-50`, `bg-gray-100` | `bg-paper-2` |
| `bg-gray-900` | `bg-ink` |
| `text-gray-900`, `text-black` | `text-ink` |
| `text-gray-500`, `text-gray-600` | `text-muted` |
| `text-gray-300`, `text-gray-400` | `text-muted-dark` |
| `border-gray-200`, `border-gray-300` | `border-line` |
| `bg-red-500`, `bg-red-600` | `bg-accent` |
| `text-red-600`, `text-red-700` | `text-accent` |
| `bg-red-100` | `bg-paper-2` |

Opacity overlays on a dark or accent ground (`bg-white/10`, `text-white/85`) are
permitted — they are translucency, not a colour choice, and there is no token
form for them.

---

### Task 1: Design tokens, fonts, and globals cleanup

Establishes the vocabulary every later task consumes. Also fixes the live diacritics bug.

**Files:**
- Modify: `src/app/globals.css` (full rewrite)
- Modify: `tailwind.config.js`
- Modify: `src/app/layout.tsx:7` (font setup) and `:63` (body class)

**Interfaces:**
- Consumes: nothing
- Produces: Tailwind classes `bg-ink`, `bg-ink-2`, `bg-paper`, `bg-paper-2`, `text-ink`, `text-muted`, `text-muted-dark`, `bg-accent`, `text-accent`, `text-accent-ink`, `border-line`, `border-line-dark`, `font-display`, `font-sans`. CSS variables `--font-inter` and `--font-archivo` set on `<html>`.

- [ ] **Step 1: Rewrite `src/app/globals.css`**

Replaces the whole file. The `@media (prefers-color-scheme: dark)` block and the `@theme inline` block are deleted — the latter references `--font-geist-sans`, a font this project has never loaded.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/*
 * Solid colours are stored as space-separated RGB channels, not hex, so that
 * Tailwind can inject an alpha value: `bg-ink/90` compiles to
 * `rgb(11 12 14 / 0.9)`. With a plain `--ink: #0b0c0e` every `/NN` opacity
 * modifier silently compiles to nothing, which would break the translucent
 * header and the mobile call bar. Colours that are already translucent are
 * stored whole and take no alpha modifier.
 */
:root {
  --ink: 11 12 14;
  --ink-2: 22 24 28;
  --paper: 255 255 255;
  --paper-2: 244 245 247;
  --accent: 225 6 0;
  --accent-ink: 255 255 255;
  --line: 228 230 234;
  --muted: 90 96 105;

  --line-dark: rgb(255 255 255 / 0.1);
  --muted-dark: rgb(255 255 255 / 0.66);
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  background: rgb(var(--paper));
  color: rgb(var(--ink));
}

/* The mobile call bar is fixed to the bottom edge below md.
   MobileCallBar renders a matching spacer so the footer is never occluded. */
```

- [ ] **Step 2: Extend the Tailwind theme**

Replace the `theme.extend` block in `tailwind.config.js` with this. Keep the existing `content` array and the typography plugin.

```js
        extend: {
            colors: {
                ink: {
                    DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
                    2: 'rgb(var(--ink-2) / <alpha-value>)',
                },
                paper: {
                    DEFAULT: 'rgb(var(--paper) / <alpha-value>)',
                    2: 'rgb(var(--paper-2) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                    ink: 'rgb(var(--accent-ink) / <alpha-value>)',
                },
                line: { DEFAULT: 'rgb(var(--line) / <alpha-value>)', dark: 'var(--line-dark)' },
                muted: { DEFAULT: 'rgb(var(--muted) / <alpha-value>)', dark: 'var(--muted-dark)' },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-archivo)', 'var(--font-inter)', 'sans-serif'],
            },
            maxWidth: {
                container: '72rem',
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'rgb(var(--ink))',
                        a: { color: 'rgb(var(--accent))', '&:hover': { color: 'rgb(var(--accent))' } },
                    },
                },
            },
        },
```

- [ ] **Step 3: Load both fonts with `latin-ext` in `src/app/layout.tsx`**

Replace the import and font declaration at the top of the file:

```tsx
import { Archivo, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});
```

`latin-ext` is what carries č ć š ž đ. Without it every Serbian diacritic on the site renders from a system fallback font.

- [ ] **Step 4: Apply the font variables in the root element**

Change the `<html>` and `<body>` tags in `src/app/layout.tsx`:

```tsx
    <html lang='sr' className={`${inter.variable} ${archivo.variable}`}>
```

and

```tsx
      <body className='bg-paper font-sans text-ink antialiased'>
```

- [ ] **Step 7: Verify build and lint**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0.

- [ ] **Step 6: Verify diacritics visually**

```bash
npm run dev
```

Open `http://localhost:3000`. Confirm "Šta Vam Nudimo" and "Zašto Izabrati Nas" render š and ž in the same typeface as the surrounding letters, with no weight or width jump. Before this task they fall back to a system font.

- [ ] **Step 7: Verify the alpha modifier compiles**

In devtools, add `class="bg-ink/50"` to any element and confirm the computed
`background-color` is `rgba(11, 12, 14, 0.5)`, not a fully opaque colour and not
absent. If the alpha is ignored, the channel format in Step 1 was not applied
correctly, and the sticky header and mobile call bar built in Tasks 3 and 4 will
be opaque.

- [ ] **Step 8: Commit**

```bash
git add src/app/globals.css tailwind.config.js src/app/layout.tsx
git commit -m "Design tokens, Archivo + Inter with latin-ext, globals cleanup"
```

---

### Task 2: Contact link module and shared primitives

Everything that can trigger a call funnels through here, so the phone number and the deep-link formats exist in exactly one place.

**Files:**
- Create: `src/lib/contact.ts`
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ContactActions.tsx`
- Modify: `src/utils/translations/sr.ts` (add `actions` block)

**Interfaces:**
- Consumes: Task 1 tokens
- Produces:
  - `PHONE_DISPLAY: string`, `PHONE_DIAL: string`, `TEL_HREF: string`, `VIBER_HREF: string`, `WHATSAPP_HREF: string` from `@/lib/contact`
  - `<Button href tone variant size className children />` where `tone` is `'accent' | 'light' | 'dark'` and `variant` is `'solid' | 'ghost'`
  - `<ContactActions tone size showWhatsapp className />` where `tone` is `'dark' | 'light'`

- [ ] **Step 1: Repair the ESLint config so the lint gate actually runs**

`eslint.config.mjs` extends `next/typescript`, a config that does not exist in
`eslint-config-next@13.5.6` — it was introduced in Next 15. The repo was
scaffolded from a Next 15 template but pinned to Next 13.5. ESLint therefore
dies with `couldn't find the config "next/typescript"`, and `next lint` swallows
that and exits 0, so the project has had no working linter at all.

Change the one line in `eslint.config.mjs`:

```js
const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
];
```

Do **not** add or upgrade any dependency to fix this — dropping the one
unavailable config is sufficient and keeps the no-new-dependencies constraint.

- [ ] **Step 2: Confirm the linter now runs, and record the pre-existing errors**

```bash
ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: it reports **8 `react/no-unescaped-entities` errors in
`src/app/privacy/page.tsx`** (lines 21 and 101). These are pre-existing and are
NOT yours to fix — Task 12 owns `/privacy` and fixes them there. Confirm the
count is 8 and that every one is in `privacy/page.tsx`; if the linter reports
errors in any other file, stop and report it, because that means this task's
scope just changed.

For the remainder of this task, run the gate against only the files you touch:

```bash
ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src/lib src/components
```

- [ ] **Step 3: Create `src/lib/contact.ts`**

```ts
/**
 * Every call-to-action on the site resolves through here.
 *
 * Viber's `viber://chat` deep link does not carry a message body reliably
 * across platforms, so only WhatsApp gets prefilled text. Sending a broken
 * link is worse than sending an empty conversation.
 */
export const PHONE_DISPLAY = '+381 63 806 6462';
export const PHONE_DIAL = '+381638066462';

const PREFILL = 'Zdravo, zanima me cena ugradnje euro kuke.';

export const TEL_HREF = `tel:${PHONE_DIAL}`;
export const VIBER_HREF = `viber://chat?number=${encodeURIComponent(PHONE_DIAL)}`;
export const WHATSAPP_HREF = `https://wa.me/${PHONE_DIAL.replace('+', '')}?text=${encodeURIComponent(PREFILL)}`;
```

- [ ] **Step 4: Add the `actions` copy block to `src/utils/translations/sr.ts`**

Insert immediately after the `navigation` block:

```ts
  actions: {
    call: 'Pozovi',
    callLong: 'Pozovi 063 806 6462',
    viber: 'Viber',
    whatsapp: 'WhatsApp',
    openMenu: 'Otvori meni',
    closeMenu: 'Zatvori meni',
  },
```

- [ ] **Step 5: Create `src/components/ui/Button.tsx`**

```tsx
import Link from 'next/link';

type Tone = 'accent' | 'light' | 'dark';
type Variant = 'solid' | 'ghost';

const TONES: Record<Tone, Record<Variant, string>> = {
  accent: {
    solid: 'bg-accent text-accent-ink hover:brightness-110',
    ghost: 'border border-accent text-accent hover:bg-accent hover:text-accent-ink',
  },
  light: {
    solid: 'bg-paper text-ink hover:bg-paper-2',
    ghost: 'border border-line-dark text-paper hover:bg-white/10',
  },
  dark: {
    solid: 'bg-ink text-paper hover:bg-ink-2',
    ghost: 'border border-line text-ink hover:bg-paper-2',
  },
};

const SIZES = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
};

export default function Button({
  href,
  tone = 'accent',
  variant = 'solid',
  size = 'md',
  className = '',
  children,
}: {
  href: string;
  tone?: Tone;
  variant?: Variant;
  size?: keyof typeof SIZES;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight',
    'transition-colors duration-150 ease-out',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    SIZES[size],
    TONES[tone][variant],
    className,
  ].join(' ');

  // tel:, viber: and https: are all external navigations — next/link is only
  // correct for in-app routes.
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
```

- [ ] **Step 6: Create `src/components/ContactActions.tsx`**

```tsx
'use client';

import Button from '@/components/ui/Button';
import { TEL_HREF, VIBER_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { useTranslation } from '@/utils/i18n';

function PhoneIcon() {
  return (
    <svg className='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
      />
    </svg>
  );
}

export default function ContactActions({
  tone = 'dark',
  size = 'lg',
  showWhatsapp = true,
  className = '',
}: {
  tone?: 'dark' | 'light';
  size?: 'md' | 'lg';
  showWhatsapp?: boolean;
  className?: string;
}) {
  const { t } = useTranslation();
  const ghostTone = tone === 'dark' ? 'light' : 'dark';

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Button href={TEL_HREF} tone='accent' variant='solid' size={size}>
        <PhoneIcon />
        {t('actions.callLong')}
      </Button>
      <Button href={VIBER_HREF} tone={ghostTone} variant='ghost' size={size}>
        {t('actions.viber')}
      </Button>
      {showWhatsapp && (
        <Button href={WHATSAPP_HREF} tone={ghostTone} variant='ghost' size={size}>
          {t('actions.whatsapp')}
        </Button>
      )}
    </div>
  );
}
```

`tone` names the *background* the component sits on: `tone='dark'` means dark background, so ghost buttons get light borders.

- [ ] **Step 7: Verify the gate**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src/lib src/components
```

Expected: all three exit 0. Nothing renders these components yet; this step catches type and lint errors only.

- [ ] **Step 8: Commit**

```bash
git add eslint.config.mjs src/lib/contact.ts src/components/ui/Button.tsx src/components/ContactActions.tsx src/utils/translations/sr.ts
git commit -m "Repair ESLint config; contact deep-link module, Button and ContactActions"
```

---

### Task 3: Sticky dark header with mobile drawer

The current `Navbar` renders four links inline at every breakpoint and shows no phone number.

**Files:**
- Modify: `src/components/Navbar.tsx` (full rewrite)

**Interfaces:**
- Consumes: `Button`, `PHONE_DISPLAY`, `TEL_HREF`, `actions.*` copy
- Produces: nothing consumed by later tasks

- [ ] **Step 1: Rewrite `src/components/Navbar.tsx`**

```tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import { PHONE_DISPLAY, TEL_HREF } from '@/lib/contact';
import { useTranslation } from '@/utils/i18n';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'installation', href: '/installation' },
  { name: 'blog', href: '/blog' },
  { name: 'contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // Route changes must dismiss the drawer, otherwise it covers the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // The drawer is a full-screen overlay; leaving the body scrollable behind it
  // scrolls the page under the menu on iOS.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className='sticky top-0 z-50 border-b border-line-dark bg-ink/90 backdrop-blur'>
      <nav className='mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <Link href='/' className='font-display text-lg font-extrabold tracking-[-0.03em] text-paper'>
          {t('common.companyName')}
        </Link>

        <div className='hidden items-center gap-8 md:flex'>
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === link.href ? 'text-paper' : 'text-muted-dark hover:text-paper'
              }`}
            >
              {t(`navigation.${link.name}`)}
            </Link>
          ))}
          <Button href={TEL_HREF} tone='accent' size='md'>
            {PHONE_DISPLAY}
          </Button>
        </div>

        <div className='flex items-center gap-2 md:hidden'>
          <Button href={TEL_HREF} tone='accent' size='md'>
            {t('actions.call')}
          </Button>
          <button
            type='button'
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t('actions.closeMenu') : t('actions.openMenu')}
            className='inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line-dark text-paper'
          >
            <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
              {open ? (
                <path strokeLinecap='round' d='M6 6l12 12M18 6L6 18' />
              ) : (
                <path strokeLinecap='round' d='M4 7h16M4 12h16M4 17h16' />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className='fixed inset-x-0 bottom-0 top-16 z-50 bg-ink px-4 py-8 md:hidden'>
          <div className='flex flex-col gap-1'>
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`border-b border-line-dark py-4 font-display text-2xl font-bold tracking-[-0.03em] ${
                  pathname === link.href ? 'text-accent' : 'text-paper'
                }`}
              >
                {t(`navigation.${link.name}`)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Verify build and lint**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0.

- [ ] **Step 3: Verify at both breakpoints**

With `npm run dev` running, open `http://localhost:3000`:
- At 1440px wide: header is dark, sticks on scroll, four links plus a red phone pill showing `+381 63 806 6462`.
- At 390px wide (devtools device toolbar): only the wordmark, a red "Pozovi" button and a hamburger. Tapping the hamburger opens a full-screen dark menu; the page behind does not scroll; tapping a link navigates and closes the menu.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "Sticky dark header with phone CTA and mobile drawer"
```

---

### Task 4: Footer rebuild and mobile call bar

**Files:**
- Modify: `src/components/Footer.tsx` (full rewrite)
- Create: `src/components/MobileCallBar.tsx`
- Modify: `src/app/layout.tsx` (render `MobileCallBar`)
- Modify: `src/utils/translations/sr.ts` (add `common.hours`, `common.area`)

**Interfaces:**
- Consumes: `Button`, contact constants
- Produces: `<MobileCallBar />`, rendered once in the root layout

- [ ] **Step 1: Add hours and service area copy to `src/utils/translations/sr.ts`**

Add these keys inside the existing `common` block:

```ts
    area: 'Beograd i okolina',
    hours: {
      weekdays: 'Ponedeljak – Petak: 08:00 – 20:00',
      saturday: 'Subota: 10:00 – 16:00',
      sunday: 'Nedelja: zatvoreno',
    },
```

These match `contact.info.workingHours` and the `openingHoursSpecification` already in `src/lib/schema.ts`.

- [ ] **Step 2: Rewrite `src/components/Footer.tsx`**

The two `href='#'` social links are removed. A link that goes nowhere costs trust and gains nothing.

```tsx
'use client';

import Link from 'next/link';
import { PHONE_DISPLAY, TEL_HREF } from '@/lib/contact';
import { useTranslation } from '@/utils/i18n';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'installation', href: '/installation' },
  { name: 'blog', href: '/blog' },
  { name: 'contact', href: '/contact' },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='border-t border-line-dark bg-ink text-muted-dark'>
      <div className='mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid gap-10 sm:grid-cols-3'>
          <div>
            <p className='font-display text-lg font-extrabold tracking-[-0.03em] text-paper'>
              {t('common.companyName')}
            </p>
            <p className='mt-3 text-sm'>{t('common.area')}</p>
          </div>

          <div className='text-sm'>
            <a href={TEL_HREF} className='block font-semibold text-paper transition-colors hover:text-accent'>
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${t('common.email')}`} className='mt-2 block transition-colors hover:text-paper'>
              {t('common.email')}
            </a>
            <p className='mt-4'>{t('common.hours.weekdays')}</p>
            <p>{t('common.hours.saturday')}</p>
            <p>{t('common.hours.sunday')}</p>
          </div>

          <nav className='flex flex-col gap-2 text-sm' aria-label='Footer'>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className='transition-colors hover:text-paper'>
                {t(`navigation.${item.name}`)}
              </Link>
            ))}
            <Link href='/privacy' className='transition-colors hover:text-paper'>
              {t('navigation.privacy')}
            </Link>
          </nav>
        </div>

        <p className='mt-12 border-t border-line-dark pt-6 text-xs'>
          {t('footer.copyright', { year: new Date().getFullYear().toString() })}
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Add the `navigation.privacy` key to `src/utils/translations/sr.ts`**

Inside the existing `navigation` block:

```ts
    privacy: 'Politika privatnosti',
```

- [ ] **Step 4: Create `src/components/MobileCallBar.tsx`**

```tsx
'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { TEL_HREF, VIBER_HREF } from '@/lib/contact';
import { useTranslation } from '@/utils/i18n';

/**
 * Fixed call bar below md. Hidden until the viewport has scrolled past roughly
 * one screen, so it never competes with the hero's own buttons.
 *
 * Renders its own spacer so the fixed bar cannot occlude the end of the footer.
 */
export default function MobileCallBar() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div aria-hidden='true' className={visible ? 'h-20 md:hidden' : 'hidden'} />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-150 md:hidden ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className='flex gap-3'>
          <Button href={TEL_HREF} tone='accent' size='lg' className='flex-1'>
            {t('actions.call')}
          </Button>
          <Button href={VIBER_HREF} tone='light' variant='ghost' size='lg' className='flex-1'>
            {t('actions.viber')}
          </Button>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 5: Render it in `src/app/layout.tsx`**

Add the import and place it after `<Footer />`:

```tsx
import MobileCallBar from '@/components/MobileCallBar';
```

```tsx
        <Navbar />
        {children}
        <Footer />
        <MobileCallBar />
```

- [ ] **Step 6: Verify build and lint**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0.

- [ ] **Step 7: Verify visually**

At 390px: scroll past the first screen — the call bar slides up from the bottom. Scroll to the very end of the page and confirm the copyright line is fully readable and not covered by the bar. At 1440px the bar must never appear.

- [ ] **Step 8: Commit**

```bash
git add src/components/Footer.tsx src/components/MobileCallBar.tsx src/app/layout.tsx src/utils/translations/sr.ts
git commit -m "Footer rebuild with real hours, mobile sticky call bar"
```

---

### Task 5: Fix the manufacturer logo strip

Two of three logos currently render nothing and the third is a bare grey box.

**Files:**
- Create: `public/steinhof-dark.svg`
- Create: `src/components/BrandStrip.tsx`
- Modify: `src/utils/translations/sr.ts` (add `home.brands.label`)

**Interfaces:**
- Consumes: Task 1 tokens
- Produces: `<BrandStrip />`

- [ ] **Step 1: Create a dark-filled Steinhof logo**

`public/steinhof.svg` declares `.cls-1{fill:#FFFFFF}` — white on a white page. Produce a dark copy rather than editing the original, so the white version stays available for dark surfaces.

```bash
sed 's/fill:#FFFFFF/fill:#0b0c0e/' public/steinhof.svg > public/steinhof-dark.svg
grep -o 'fill:#[0-9a-fA-F]*' public/steinhof-dark.svg
```

Expected output: `fill:#0b0c0e`

- [ ] **Step 2: Add the strip label to `src/utils/translations/sr.ts`**

Inside `home`, add a new block after `hero`:

```ts
    brands: {
      label: 'Ugrađujemo kuke proizvođača',
    },
```

The previous label, "Sarađujemo sa vodećim proizvođačima kuka za vuču", asserts a commercial partnership that has not been established. It was also hardcoded in `page.tsx` rather than living in the translation file.

- [ ] **Step 3: Create `src/components/BrandStrip.tsx`**

```tsx
'use client';

import { useTranslation } from '@/utils/i18n';

/**
 * Plain <img>, not next/image.
 *
 * next/image refuses to serve these SVGs, which is why two of the three logos
 * rendered nothing at all. These are small static brand marks with no need for
 * responsive srcsets — the optimiser buys nothing here.
 */
const brands = [
  { src: '/bosal.svg', alt: 'Bosal', className: 'h-6 md:h-7' },
  { src: '/oris.jpg', alt: 'Oris', className: 'h-8 md:h-9' },
  { src: '/steinhof-dark.svg', alt: 'Steinhof', className: 'h-5 md:h-6' },
];

export default function BrandStrip() {
  const { t } = useTranslation();

  return (
    <section className='border-b border-line bg-paper-2 py-10'>
      <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
        <p className='text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted'>
          {t('home.brands.label')}
        </p>
        <div className='mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6'>
          {brands.map((brand) => (
            <img
              key={brand.src}
              src={brand.src}
              alt={brand.alt}
              className={`${brand.className} w-auto opacity-70 transition-opacity duration-150 hover:opacity-100`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

Heights differ per logo deliberately — these three marks have very different cap heights, and a single `h-8` makes Bosal look twice the size of Steinhof.

- [ ] **Step 4: Add the eslint exception if the build complains**

`next/no-img-element` is a warning in `eslint-config-next`. If the lint gate reports it, add this comment directly above the `<img>` element rather than disabling the rule globally:

```tsx
            // eslint-disable-next-line @next/next/no-img-element
```

- [ ] **Step 5: Verify build and lint**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0.

- [ ] **Step 6: Verify all three logos are visible**

`BrandStrip` is not yet mounted on a page — it is wired up in Task 7. To check it now, open `http://localhost:3000/bosal.svg`, `/oris.jpg` and `/steinhof-dark.svg` directly and confirm each renders a visible mark. Steinhof must be dark, not white.

- [ ] **Step 7: Commit**

```bash
git add public/steinhof-dark.svg src/components/BrandStrip.tsx src/utils/translations/sr.ts
git commit -m "Fix manufacturer logo strip: dark Steinhof, plain img, honest label"
```

---

### Task 6: Copy restructure and dead-code removal

Adds every string the new homepage sections need and removes the fabricated and unused content. Do this before the page work so the sections have keys to read.

**Files:**
- Modify: `src/utils/translations/sr.ts`
- Delete: `src/locales/sr.ts`
- Create: `src/lib/vehicles.ts`

**Interfaces:**
- Consumes: nothing
- Produces: `home.process.*`, `home.price.*`, `home.guarantees.*`, `home.vehicles.*`, `home.faq.*`, `home.visit.*`, `home.finalCta.*`, `home.hero.*`; `VEHICLE_BRANDS: string[]` from `@/lib/vehicles`

- [ ] **Step 1: Delete the unused duplicate translation file**

```bash
grep -rn "locales/sr" src/ || echo "no importers — safe to delete"
git rm src/locales/sr.ts
```

Expected: the grep prints nothing and the fallback message appears. `src/utils/i18n.ts` imports `./translations/sr`; nothing imports `src/locales/sr.ts`. The file contains `"123 Primer Ulica, Beograd, Srbija"`, `info@eurotowbar.rs` and the company name "Euro Towbar" — placeholder data that must not survive in the repo.

- [ ] **Step 2: Extract the vehicle brand list to `src/lib/vehicles.ts`**

These twelve names are currently inline in `src/app/installation/page.tsx`; the homepage now needs them too.

```ts
/** Vehicle makes shown on the homepage and the installation page. */
export const VEHICLE_BRANDS = [
  'Volkswagen',
  'BMW',
  'Mercedes',
  'Audi',
  'Toyota',
  'Ford',
  'Opel',
  'Peugeot',
  'Renault',
  'Citroen',
  'Hyundai',
  'Kia',
] as const;
```

- [ ] **Step 3: Add the new `home` keys to `src/utils/translations/sr.ts`**

**Additive only.** Merge these keys into the existing `home` block and leave
`home.services`, `home.whyChooseUs` and `home.testimonials` in place for now —
`src/app/page.tsx` still reads them, and removing them here would break the
build for three consecutive commits. Task 9 deletes them once nothing reads
them.

```ts
  home: {
    hero: {
      eyebrow: 'Beograd · Sve marke vozila',
      title: {
        main: 'Ugradnja euro kuke',
        accent: 'sa atestom',
      },
      description:
        'Montaža traje 3–4 sata, termin dobijate u roku od 24 sata. Originalni delovi, atest i garancija — sve na jednom mestu.',
      chips: ['Atest uključen', 'Garancija 2 godine', 'Originalni delovi'],
      imageAlt: 'Euro kuka za vuču spremna za ugradnju',
    },
    // `brands.label` was already added in Task 5 — do not add it a second time.
    process: {
      eyebrow: 'Proces montaže',
      title: 'Kako izgleda ugradnja',
      steps: [
        { title: 'Pregled vozila', description: 'Proveravamo model, kompatibilnost i stanje vozila.' },
        { title: 'Priprema', description: 'Pripremamo vozilo i biramo odgovarajuću kuku i elektro instalaciju.' },
        { title: 'Montaža', description: 'Ugradnja po specifikaciji proizvođača, 3–4 sata u proseku.' },
        { title: 'Atest i predaja', description: 'Testiramo instalaciju i izdajemo atest za registraciju.' },
      ],
    },
    price: {
      eyebrow: 'Cena',
      title: 'Koliko košta ugradnja?',
      description:
        'Cena zavisi od modela vozila i tipa kuke — fiksne cene ne postoje, jer se svako vozilo razlikuje. Pozovite nas ili pošaljite model vozila na Viber i dobijate tačnu cenu.',
      note: 'Bez obaveze. Cenu dobijate odmah, pre nego što zakažete termin.',
    },
    guarantees: {
      eyebrow: 'Zašto kod nas',
      title: 'Šta dobijate',
      items: [
        { title: 'Atest i registracija', description: 'Izdajemo atest koji vam je potreban za upis kuke u saobraćajnu dozvolu.' },
        { title: 'Garancija 2 godine', description: 'Garancija pokriva i ugrađenu kuku i elektro instalaciju.' },
        { title: 'Originalni delovi', description: 'Ugrađujemo kuke proizvođača Bosal, Oris i Steinhof.' },
        { title: 'Termin u roku od 24 sata', description: 'Sama montaža traje 3–4 sata i vozilo istog dana vraćate u upotrebu.' },
      ],
    },
    vehicles: {
      eyebrow: 'Marke vozila',
      title: 'Radimo sa svim popularnim modelima',
      note: 'Ne vidite svoje vozilo? Pozovite — radimo i sa markama koje nisu na listi.',
    },
    faq: {
      eyebrow: 'Česta pitanja',
      title: 'Ono što nas najčešće pitaju',
    },
    visit: {
      eyebrow: 'Radno vreme i lokacija',
      title: 'Kada možete da dođete',
      hoursTitle: 'Radno vreme',
      mapTitle: 'Lokacija',
    },
    finalCta: {
      title: 'Spremni da montirate euro kuku?',
      description: 'Pozovite nas i dobijate cenu za svoje vozilo odmah.',
    },
  },
```

Note the duration reconciliation carried through every string: **termin u roku od 24 sata, montaža traje 3–4 sata**. The old copy claimed "montaža u roku od 24 sata" on the homepage and "3-4 sata" in the FAQ, which contradicted each other. Confirm this reading with the owner at review.

- [ ] **Step 4: Add the replacement pricing copy to `src/utils/translations/sr.ts`**

Update the three scalar keys in `installation.pricing` to the copy below, but
leave the `plans` object in place — `src/app/installation/page.tsx` still reads
`plans.custom`. Task 10 deletes `plans` once that page no longer renders it.

```ts
    pricing: {
      title: 'Cena',
      subtitle: 'Koliko košta ugradnja?',
      description:
        'Cena zavisi od modela vozila i tipa kuke. Pozovite nas i dobijate tačnu cenu za svoje vozilo, bez obaveze.',
    },
```

- [ ] **Step 5: Verify build and lint**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0. Because this task only adds keys and deletes a file
nothing imports, the site must still build and render exactly as before.

- [ ] **Step 6: Record what Tasks 9 and 10 must clean up**

```bash
grep -rn "home.services\|home.whyChooseUs\|home.testimonials\|pricing.plans" src/
```

Expected: hits in `src/app/page.tsx` (removed in Task 9) and
`src/app/installation/page.tsx` (removed in Task 10) only. If a hit appears
anywhere else, stop and resolve it before continuing.

- [ ] **Step 7: Commit**

```bash
git add -A src/
git commit -m "Add redesign copy keys, extract vehicle list, drop dead locale file"
```

---

### Task 7: Homepage hero and brand strip

**Files:**
- Modify: `src/app/page.tsx` (replace the hero and brand-logo sections; leave later sections until Tasks 8–9)

**Interfaces:**
- Consumes: `ContactActions`, `BrandStrip`, `home.hero.*`
- Produces: nothing consumed by later tasks

- [ ] **Step 1: Replace the top of `src/app/page.tsx`**

Replace everything from the opening `<div className='bg-white'>` through the end of the brand-logos block with the following. Keep the JSON-LD script tag exactly as it is — it is server-rendered on purpose, as documented in `src/lib/schema.ts`.

**Keep the `interface Testimonial` declaration** that currently sits above
`export default function Home()`. The testimonials section still renders below
until Task 9 and will not type-check without it. Task 9 removes both together.

```tsx
'use client';

import BrandStrip from '@/components/BrandStrip';
import ContactActions from '@/components/ContactActions';
import { localBusinessSchema } from '@/lib/schema';
import { useTranslation } from '@/utils/i18n';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className='bg-paper'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Hero */}
      <section className='bg-ink'>
        <div className='mx-auto grid max-w-container items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
              {t('home.hero.eyebrow')}
            </p>
            <h1 className='mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] text-paper md:text-6xl'>
              {t('home.hero.title.main')}{' '}
              <span className='text-accent'>{t('home.hero.title.accent')}</span>
            </h1>
            <p className='mt-6 max-w-xl text-lg leading-relaxed text-muted-dark'>
              {t('home.hero.description')}
            </p>

            <ContactActions tone='dark' size='lg' className='mt-8' />

            <ul className='mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-line-dark pt-6 text-sm text-muted-dark'>
              {(t('home.hero.chips') as unknown as string[]).map((chip) => (
                <li key={chip} className='flex items-center gap-2'>
                  <span aria-hidden='true' className='h-1.5 w-1.5 rounded-full bg-accent' />
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          {/*
            The hero render is a JPEG on a white background. The light plate is
            what lets it sit on a dark section; it is also the drop-in slot for a
            real photograph or a transparent cutout later, with no relayout.
          */}
          <div className='relative rounded-2xl bg-gradient-to-br from-paper to-paper-2 p-6 shadow-2xl lg:rotate-1'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/images/hero/eurokuka.jpg'
              alt={t('home.hero.imageAlt')}
              width={600}
              height={519}
              className='h-auto w-full rounded-xl object-contain'
            />
          </div>
        </div>
      </section>

      <BrandStrip />
```

- [ ] **Step 2: Leave the rest of the file intact**

The remaining sections (services, why-choose-us, testimonials, CTA) still render
below the new hero. They look wrong next to it, and they are replaced in Tasks 8
and 9 — but they still build, because Task 6 left their keys in place.

- [ ] **Step 3: Verify build and lint**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0. Open `http://localhost:3000` and confirm the new dark
hero renders above the old sections, and that all three manufacturer logos are
now visible in the strip beneath it.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Homepage hero on dark ground with light product plate"
```

---

### Task 8: Homepage process, price and guarantees sections

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `ContactActions`, `home.process.*`, `home.price.*`, `home.guarantees.*`
- Produces: nothing consumed by later tasks

- [ ] **Step 1: Replace the services and why-choose-us sections**

Delete the existing "Services Overview" and "Why Choose Us" blocks — they state the same three claims twice — and insert these three sections after `<BrandStrip />`:

```tsx
      {/* Process */}
      <section className='bg-ink py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
            {t('home.process.eyebrow')}
          </p>
          <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] text-paper md:text-5xl'>
            {t('home.process.title')}
          </h2>

          <ol className='mt-14 grid gap-px overflow-hidden rounded-2xl bg-line-dark sm:grid-cols-2 lg:grid-cols-4'>
            {(t('home.process.steps') as unknown as { title: string; description: string }[]).map(
              (step, index) => (
                <li key={step.title} className='bg-ink-2 p-7'>
                  <span className='font-display text-3xl font-extrabold tracking-[-0.03em] text-accent'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='mt-5 font-display text-lg font-bold tracking-[-0.02em] text-paper'>
                    {step.title}
                  </h3>
                  <p className='mt-2 text-sm leading-relaxed text-muted-dark'>{step.description}</p>
                </li>
              )
            )}
          </ol>
        </div>
      </section>

      {/* Price */}
      <section className='bg-paper py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <div className='rounded-2xl border border-line bg-paper-2 p-8 md:p-14'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
              {t('home.price.eyebrow')}
            </p>
            <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl'>
              {t('home.price.title')}
            </h2>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted'>
              {t('home.price.description')}
            </p>
            <ContactActions tone='light' size='lg' className='mt-8' />
            <p className='mt-6 text-sm text-muted'>{t('home.price.note')}</p>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className='border-t border-line bg-paper-2 py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
            {t('home.guarantees.eyebrow')}
          </p>
          <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl'>
            {t('home.guarantees.title')}
          </h2>

          <dl className='mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2'>
            {(t('home.guarantees.items') as unknown as { title: string; description: string }[]).map(
              (item) => (
                <div key={item.title} className='border-t border-line pt-6'>
                  <dt className='font-display text-xl font-bold tracking-[-0.02em]'>{item.title}</dt>
                  <dd className='mt-2 leading-relaxed text-muted'>{item.description}</dd>
                </div>
              )
            )}
          </dl>
        </div>
      </section>
```

- [ ] **Step 2: Verify build and lint**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0.

- [ ] **Step 3: Verify the new sections**

Open `http://localhost:3000`. The process rail shows four cards numbered `01`–`04`
separated by hairlines; the price block states no figure; the guarantees list
shows four items and no longer repeats the process claims. The invented
testimonials are still present below — Task 9 removes them.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Homepage process rail, price block and merged guarantees"
```

---

### Task 9: Homepage vehicles, FAQ, hours/map and final CTA

Completes the homepage. This is the first task in the sequence where the build must pass again.

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `VEHICLE_BRANDS`, `getInstallationFaq`, `ContactActions`, `home.vehicles.*`, `home.faq.*`, `home.visit.*`, `home.finalCta.*`, `common.hours.*`, `contact.map.embedUrl`
- Produces: nothing consumed by later tasks

- [ ] **Step 1: Add the remaining imports to `src/app/page.tsx`**

```tsx
import { getInstallationFaq } from '@/lib/faq';
import { VEHICLE_BRANDS } from '@/lib/vehicles';
import { PHONE_DISPLAY, TEL_HREF } from '@/lib/contact';
import Button from '@/components/ui/Button';
```

- [ ] **Step 2: Replace the testimonials and CTA sections**

Delete the "Testimonials" block entirely — those three customers are invented — and the existing "CTA Section". Also delete the now-unused `interface Testimonial` declaration above `export default function Home()`, which Task 7 deliberately left in place. Then append these four sections before the closing `</div>`:

```tsx
      {/* Vehicles */}
      <section className='bg-ink py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
            {t('home.vehicles.eyebrow')}
          </p>
          <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] text-paper md:text-5xl'>
            {t('home.vehicles.title')}
          </h2>
          <ul className='mt-12 flex flex-wrap gap-3'>
            {VEHICLE_BRANDS.map((brand) => (
              <li
                key={brand}
                className='rounded-full border border-line-dark px-5 py-2 text-sm font-medium text-muted-dark'
              >
                {brand}
              </li>
            ))}
          </ul>
          <p className='mt-8 text-sm text-muted-dark'>{t('home.vehicles.note')}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className='bg-paper py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
            {t('home.faq.eyebrow')}
          </p>
          <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl'>
            {t('home.faq.title')}
          </h2>
          <div className='mt-12 border-t border-line'>
            {getInstallationFaq().map((entry) => (
              <details key={entry.question} className='group border-b border-line'>
                <summary className='flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-bold tracking-[-0.02em] marker:hidden'>
                  {entry.question}
                  <span
                    aria-hidden='true'
                    className='shrink-0 text-2xl font-normal text-accent transition-transform duration-150 group-open:rotate-45'
                  >
                    +
                  </span>
                </summary>
                <p className='pb-6 pr-10 leading-relaxed text-muted'>{entry.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Hours and location */}
      <section className='border-t border-line bg-paper-2 py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
            {t('home.visit.eyebrow')}
          </p>
          <h2 className='mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl'>
            {t('home.visit.title')}
          </h2>

          <div className='mt-12 grid gap-10 lg:grid-cols-[20rem_1fr]'>
            <div>
              <h3 className='font-display text-lg font-bold tracking-[-0.02em]'>{t('home.visit.hoursTitle')}</h3>
              <dl className='mt-4 space-y-2 text-muted'>
                <div>{t('common.hours.weekdays')}</div>
                <div>{t('common.hours.saturday')}</div>
                <div>{t('common.hours.sunday')}</div>
              </dl>
              <a
                href={TEL_HREF}
                className='mt-6 inline-block font-display text-2xl font-extrabold tracking-[-0.03em] text-accent'
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className='overflow-hidden rounded-2xl border border-line'>
              <iframe
                src={t('contact.map.embedUrl')}
                title={t('home.visit.mapTitle')}
                width='100%'
                height='360'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='bg-accent py-16 md:py-20'>
        <div className='mx-auto flex max-w-container flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
          <div>
            <h2 className='font-display text-3xl font-extrabold tracking-[-0.03em] text-accent-ink md:text-4xl'>
              {t('home.finalCta.title')}
            </h2>
            <p className='mt-3 text-lg text-white/85'>{t('home.finalCta.description')}</p>
          </div>
          <Button href={TEL_HREF} tone='light' variant='solid' size='lg' className='shrink-0'>
            {t('actions.callLong')}
          </Button>
        </div>
      </section>
```

- [ ] **Step 3: Delete the now-unread copy from `src/utils/translations/sr.ts`**

`src/app/page.tsx` no longer reads these, so they can go:

```bash
grep -n "home.services\|home.whyChooseUs\|home.testimonials" src/app/page.tsx || echo "safe to delete"
```

Expected: `safe to delete`. Then remove the `services`, `whyChooseUs` and
`testimonials` blocks from `home` in `src/utils/translations/sr.ts`. The
`testimonials` block is the one holding the three invented customers.

- [ ] **Step 4: Verify build and lint**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0. If the build reports a missing translation key, the `home` block from Task 6 Step 3 was not applied completely.

- [ ] **Step 5: Verify the whole homepage visually**

At 1440px, scroll the full page and confirm:
- Bands alternate dark → light → dark → light → light → dark → light → light → accent → dark, with the two adjacent light pairs distinguished by `--paper` vs `--paper-2`.
- All three manufacturer logos are visible.
- No testimonials appear anywhere.
- No price figure appears anywhere.
- The FAQ items open and close on click without JavaScript errors in the console.

At 390px, confirm every section is single-column with no horizontal scroll, and the call bar appears after the hero.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx src/utils/translations/sr.ts
git commit -m "Homepage vehicles, FAQ, hours and map, final CTA; drop invented testimonials"
```

---

### Task 10: Rebuild `/installation`

**Files:**
- Modify: `src/app/installation/page.tsx`

**Interfaces:**
- Consumes: `VEHICLE_BRANDS`, `ContactActions`, `getInstallationFaq`, `installation.pricing.*`
- Produces: nothing consumed by later tasks

- [ ] **Step 1: Add the imports this page now needs**

```tsx
import ContactActions from '@/components/ContactActions';
import { VEHICLE_BRANDS } from '@/lib/vehicles';
```

Remove any `next/image` import if the page no longer renders an `Image`.

- [ ] **Step 2: Restyle the page hero to the dark band**

The page currently opens with a full-bleed black block with no eyebrow and no CTA. Replace the hero wrapper with:

```tsx
      <section className='bg-ink'>
        <div className='mx-auto max-w-container px-4 py-20 sm:px-6 md:py-28 lg:px-8'>
          <h1 className='max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] text-paper md:text-6xl'>
            {t('installation.title')}
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted-dark'>
            {t('installation.description')}
          </p>
          <ContactActions tone='dark' size='lg' className='mt-8' />
        </div>
      </section>
```

- [ ] **Step 3: Replace the pricing section**

Delete the entire pricing block at `src/app/installation/page.tsx:143-165` — the grid that renders one of three tiers, off-centre, under a heading promising transparent prices. Replace it with the same quote block used on the homepage:

```tsx
      <section className='bg-paper py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <div className='rounded-2xl border border-line bg-paper-2 p-8 md:p-14'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
              {t('installation.pricing.title')}
            </p>
            <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl'>
              {t('installation.pricing.subtitle')}
            </h2>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted'>
              {t('installation.pricing.description')}
            </p>
            <ContactActions tone='light' size='lg' className='mt-8' />
          </div>
        </div>
      </section>
```

- [ ] **Step 4: Read the brand grid from the shared module**

Replace the inline array of twelve brand names with `VEHICLE_BRANDS` from `@/lib/vehicles`, and restyle the cards as hairline chips matching the homepage:

```tsx
          <ul className='mt-12 flex flex-wrap gap-3'>
            {VEHICLE_BRANDS.map((brand) => (
              <li
                key={brand}
                className='rounded-full border border-line px-5 py-2 text-sm font-medium text-muted'
              >
                {brand}
              </li>
            ))}
          </ul>
```

- [ ] **Step 5: Delete the unshown pricing tiers from `src/utils/translations/sr.ts`**

Nothing renders them now:

```bash
grep -n "pricing.plans" src/app/installation/page.tsx || echo "safe to delete"
```

Expected: `safe to delete`. Then remove the entire `plans` object from
`installation.pricing`. It holds `od 15.000 RSD` and `od 20.000 RSD`, figures the
owner has said must not be published.

- [ ] **Step 6: Normalise the duration dash in the FAQ copy**

`installation.faq.questions.duration.answer` in `src/utils/translations/sr.ts`
reads `3-4 sata` with a plain hyphen, while all the copy added in Task 6 writes
`3–4 sata` with an en dash (U+2013). Same fact, two typographies, and both now
appear on this page. Change the hyphen to an en dash.

```bash
grep -n "3-4 sata" src/utils/translations/sr.ts || echo "normalised"
```

Expected after the edit: `normalised`.

- [ ] **Step 7: Apply tokens to the remaining sections**

Sweep the rest of the file using the colour mapping in Global Constraints above —
every entry in that table, no exceptions. Section headings additionally take
`font-display` and `tracking-[-0.03em]`; eyebrows become
`text-xs font-semibold uppercase tracking-[0.18em] text-accent`.

- [ ] **Step 8: Verify no stock colours remain**

```bash
grep -nE 'gray-[0-9]|red-[0-9]|(bg|text)-white([^/]|$)|text-black' src/app/installation/page.tsx || echo "clean"
```

Expected: `clean`.

- [ ] **Step 9: Verify build, lint and appearance**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0. Then open `http://localhost:3000/installation` and confirm no price figure appears anywhere on the page, and that the FAQ and its JSON-LD still match.

- [ ] **Step 10: Commit**

```bash
git add src/app/installation/page.tsx src/utils/translations/sr.ts
git commit -m "Rebuild /installation: replace broken pricing grid with quote block"
```

---

### Task 11: Rebuild `/contact`

**Files:**
- Modify: `src/app/contact/page.tsx` (full rewrite)

**Interfaces:**
- Consumes: `ContactActions`, contact constants, `common.hours.*`, `contact.*`
- Produces: nothing consumed by later tasks

- [ ] **Step 1: Rewrite `src/app/contact/page.tsx`**

The dead `formData` state, the unused `handleSubmit`/`handleChange` handlers, the commented-out email block and the two-column grid with one empty column all go. The form is not restored — that would need a send endpoint and is out of scope.

```tsx
'use client';

import ContactActions from '@/components/ContactActions';
import { PHONE_DISPLAY, TEL_HREF } from '@/lib/contact';
import { useTranslation } from '@/utils/i18n';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className='bg-paper'>
      <section className='bg-ink'>
        <div className='mx-auto max-w-container px-4 py-20 sm:px-6 md:py-28 lg:px-8'>
          <h1 className='max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] text-paper md:text-6xl'>
            {t('contact.hero.title')}
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted-dark'>
            {t('contact.hero.description')}
          </p>
          <ContactActions tone='dark' size='lg' className='mt-8' />
        </div>
      </section>

      <section className='py-20 md:py-28'>
        <div className='mx-auto grid max-w-container gap-12 px-4 sm:px-6 lg:grid-cols-[20rem_1fr] lg:px-8'>
          <div>
            <h2 className='font-display text-2xl font-extrabold tracking-[-0.03em]'>{t('contact.info.title')}</h2>

            <a
              href={TEL_HREF}
              className='mt-6 block font-display text-3xl font-extrabold tracking-[-0.03em] text-accent'
            >
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${t('contact.email')}`} className='mt-3 block text-muted transition-colors hover:text-ink'>
              {t('contact.email')}
            </a>

            <h3 className='mt-10 font-display text-lg font-bold tracking-[-0.02em]'>
              {t('contact.info.areaTitle')}
            </h3>
            <p className='mt-3 text-muted'>{t('common.area')}</p>

            <h3 className='mt-8 font-display text-lg font-bold tracking-[-0.02em]'>
              {t('contact.info.hoursTitle')}
            </h3>
            <div className='mt-3 space-y-1 text-muted'>
              <p>{t('common.hours.weekdays')}</p>
              <p>{t('common.hours.saturday')}</p>
              <p>{t('common.hours.sunday')}</p>
            </div>
          </div>

          <div className='overflow-hidden rounded-2xl border border-line'>
            <iframe
              src={t('contact.map.embedUrl')}
              title={t('contact.map.title')}
              width='100%'
              height='480'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Add the two heading keys to `src/utils/translations/sr.ts`**

Inside `contact.info`:

```ts
      areaTitle: 'Područje rada',
      hoursTitle: 'Radno vreme',
```

`contact.info.address` holds the *value* `'Beograd, Srbija'`, not a label, so it
cannot be used as a heading. There is no street address to publish — the area
served is what this block states, and it reads from `common.area`.

Also delete `contact.info.workingHours` from `src/utils/translations/sr.ts`. This
page now reads `common.hours.*`, so that key becomes dead — and it spells the
same hours with plain hyphens where `common.hours.*` uses en dashes, which would
leave two typographies for one fact. Confirm nothing else reads it first:

```bash
grep -rn "workingHours" src/ || echo "safe to delete"
```

- [ ] **Step 3: Verify build, lint and appearance**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0. Open `http://localhost:3000/contact` at 1440px and 390px. Confirm there is no empty grid column and the map fills its side of the layout.

- [ ] **Step 4: Commit**

```bash
git add src/app/contact/page.tsx src/utils/translations/sr.ts
git commit -m "Rebuild /contact: remove dead form state, real hours, full-width map"
```

---

### Task 12: Inherited pages and final QA sweep

**Files:**
- Modify: `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/blog/category/[category]/page.tsx`, `src/app/privacy/page.tsx`, `src/app/not-found.tsx`

**Interfaces:**
- Consumes: Task 1 tokens
- Produces: nothing

- [ ] **Step 1: Find every remaining stock colour**

```bash
grep -rnE 'gray-[0-9]|red-[0-9]|(bg|text)-white([^/]|$)|text-black' src/app src/components
```

The `([^/]|$)` guard is deliberate: `bg-white/10` and `text-white/85` are
translucency overlays on dark and accent grounds, are used on purpose in
`Button` and the final CTA, and must not be rewritten.

- [ ] **Step 2: Replace each hit using the colour mapping**

Apply the mapping table in Global Constraints above, every entry, no exceptions.
Headings on these pages take `font-display` and `tracking-[-0.03em]` to match.
Do not restructure their layouts — these pages inherit the system, they are not
redesigned.

- [ ] **Step 3: Confirm the sweep is complete**

```bash
grep -rnE 'gray-[0-9]|red-[0-9]|(bg|text)-white([^/]|$)|text-black' src/app src/components || echo "clean"
```

Expected: `clean`.

- [ ] **Step 4: Replace the fabricated blog author bylines**

The same three invented people removed from the homepage testimonials are also
used as blog post authors in `src/utils/translations/sr.ts` — "Marko Petrović,
Sertifikovani Montažer" (twice), "Ana Jovanović, Tehnički Stručnjak", "Ivan
Nikolić, Inspektor Bezbednosti". Invented individuals with invented job titles.

This is worse than a visual byline: `src/app/blog/[slug]/layout.tsx:32` feeds
`post.author.name` into the OpenGraph `authors` metadata, so the fabricated
attribution is published as structured data.

Attribute the posts to the business instead. In `src/utils/translations/sr.ts`,
replace each of the four `author` objects with:

```ts
        author: {
          name: 'Ugradnja Euro Kuka',
        },
```

Then drop `role` from the type and its two render sites:

- `src/lib/posts.ts:10` → `author: { name: string };`
- `src/app/blog/page.tsx:16` → same shape in the local type
- `src/app/blog/[slug]/page.tsx:10` → same shape in the local type
- Delete the `<p>{post.author.role}</p>` line at `src/app/blog/page.tsx:74` and
  at `src/app/blog/[slug]/page.tsx:52`

Leave `src/app/blog/[slug]/layout.tsx:32` reading `post.author.name` — it now
carries the company name, which is accurate.

- [ ] **Step 5: Confirm no fabricated content survives anywhere**

```bash
grep -rni "testimonial\|Marko Petrović\|Ana Jovanović\|Ivan Nikolić\|Primer Ulica\|eurotowbar\|15.000\|20.000" src/ || echo "clean"
```

Expected: `clean`.

- [ ] **Step 6: Confirm no runtime dependency changed**

```bash
git diff --stat main -- package.json package-lock.json
```

Expected: no change to the `dependencies` block.

- [ ] **Step 7: Fix the 8 pre-existing lint errors in `src/app/privacy/page.tsx`**

Task 2 repaired the ESLint config and surfaced 8 `react/no-unescaped-entities`
errors that have been latent in this file since it was written (lines 21 and
101). Replace each bare `"` inside JSX text with `&quot;`. Do not restructure
the copy — only escape the quotes.

```bash
ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src/app/privacy/page.tsx
```

Expected: no errors.

- [ ] **Step 8: Full gate**

```bash
npm run build && npx tsc --noEmit && ESLINT_USE_FLAT_CONFIG=true ./node_modules/.bin/eslint src
```

Expected: both exit 0.

- [ ] **Step 9: Final visual pass**

With `npm run dev`, walk `/`, `/installation`, `/contact`, `/blog`, `/privacy` and a 404 URL at 1440px and 390px. Confirm on each:
- Header sticks, is dark, and shows the phone CTA.
- No horizontal scroll at 390px.
- Serbian diacritics render in Archivo/Inter, not a fallback.
- Browser console is free of errors.

- [ ] **Step 10: Commit**

```bash
git add -A src/
git commit -m "Apply design tokens to blog, privacy and 404 pages"
```

---

## Post-implementation: open questions for the owner

Two assumptions were made during the spec and carried through this plan. Both are single-string changes if wrong.

1. **Duration.** Copy now reads "termin u roku od 24 sata, montaža traje 3–4 sata", reconciling the old contradiction between the homepage ("u roku od jednog dana") and the FAQ ("3-4 sata"). Confirm this is accurate.
2. **Contact form.** Not restored. If a form is wanted, it needs a send endpoint (Resend, Formspree, or similar) and an API key — a separate piece of work.
