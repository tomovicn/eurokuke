'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactActions from '@/components/ContactActions';
import Wordmark from '@/components/Wordmark';
import { SolidAction } from '@/components/ui/Actions';
import { Container, MonoLabel } from '@/components/ui/primitives';
import { TEL_HREF } from '@/lib/contact';
import { sr } from '@/utils/translations/sr';

const NAVIGATION = [
  { key: 'home', href: '/', label: sr.navigation.home },
  { key: 'installation', href: '/installation', label: sr.navigation.installation },
  { key: 'blog', href: '/blog', label: sr.navigation.blog },
  { key: 'contact', href: '/contact', label: sr.navigation.contact },
] as const;

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Where the header stops floating over the hero and becomes a paper bar. */
const COLLAPSE_AT = 80;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /*
   * Two looks, one rule. On the homepage the header floats over the hero
   * photograph with no ground of its own; everywhere else, and as soon as the
   * page scrolls past the hero, it is a paper bar. The transparent state is
   * held to lg because below that the hero is a portrait under the headline
   * rather than a background, so there is nothing to float over.
   */
  const isHome = pathname === '/';
  const overlay = isHome && !scrolled;

  // A section is current when the path is the page itself or below it, so
  // /blog/atest-euro-kuke still marks Blog. `/` would match everything.
  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  // Route changes must dismiss the drawer, otherwise it covers the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Read once on mount as well as on scroll: a reload part-way down the page,
  // or a back navigation that restores the scroll position, both land here
  // already past the threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > COLLAPSE_AT);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The drawer is a full-screen overlay; leaving the body scrollable behind it
  // scrolls the page under the menu on iOS.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Move focus into the panel on open and hand it back to the toggle on close,
  // so a keyboard user is never left focused on an element behind the overlay.
  useEffect(() => {
    if (!open) return;
    // Read the node now, not in the cleanup: by the time cleanup runs the ref
    // may point somewhere else, and focus would land on the wrong element.
    const toggle = toggleRef.current;
    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    return () => toggle?.focus();
  }, [open]);

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (event.key !== 'Tab') return;

    // Tab must cycle inside the dialog rather than walking the page behind it.
    const focusable = Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  return (
    <>
    {/*
     * Fixed rather than sticky because the bar changes height when it lands on
     * paper. Sticky keeps the header in the flow, so the 76 to 62 collapse
     * would pull the whole page up by 14px at the moment of the switch. The
     * spacer below puts the space back.
     */}
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-[180ms] ease-out',
        overlay
          ? 'border-b border-line bg-surface lg:border-transparent lg:bg-transparent'
          : 'border-b border-line bg-surface',
        scrolled ? 'shadow-[0_8px_20px_-16px_rgba(28,26,23,0.5)]' : '',
      ].join(' ')}
    >
      {/*
        The scrim belongs to the header, not to the photograph. Swapping the
        hero image can then never take the menu down with it.
      */}
      {overlay && (
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 top-0 hidden h-[150px] bg-gradient-to-b from-ink/[0.72] via-ink/[0.28] to-transparent lg:block'
        />
      )}

      <Container
        className={`relative flex items-center justify-between transition-[height] duration-[180ms] ease-out ${
          scrolled ? 'h-[60px] lg:h-[62px]' : 'h-[60px] lg:h-[76px]'
        }`}
      >
        <Link href='/' aria-label={sr.common.companyName}>
          <Wordmark tone={overlay ? 'paper-lg' : 'ink'} />
        </Link>

        <div className='flex items-center gap-2 lg:gap-[34px]'>
          <nav
            className={`hidden items-center gap-[26px] text-[14.5px] font-medium lg:flex ${
              overlay ? 'lg:text-ink-text' : 'text-ink-2'
            }`}
            aria-label={sr.navigation.menu}
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className={
                  isCurrent(item.href)
                    ? `border-b-[1.5px] pb-[3px] ${overlay ? 'lg:border-accent-on-ink' : 'border-accent'}`
                    : 'border-b-[1.5px] border-transparent pb-[3px] transition-colors hover:border-line-strong'
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/*
            The one solid action in the header. On the scrim it takes
            accent-on-ink with ink text: the darker accent used on paper does
            not clear 4.5:1 against a gradient that has a photograph under it.
          */}
          <SolidAction
            href={TEL_HREF}
            tone='accent'
            size='sm'
            block={false}
            className={`lg:h-[46px] lg:px-[18px] lg:text-[15px] ${
              overlay ? 'lg:bg-accent-on-ink lg:text-ink lg:hover:brightness-[1.08]' : ''
            }`}
          >
            {sr.actions.call}
          </SolidAction>

          <button
            ref={toggleRef}
            type='button'
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label={sr.actions.openMenu}
            className='flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-line-strong px-2.5 lg:hidden'
          >
            <span aria-hidden='true' className='block h-[1.5px] w-full bg-ink' />
            <span aria-hidden='true' className='block h-[1.5px] w-full bg-ink' />
            <span aria-hidden='true' className='block h-[1.5px] w-full bg-ink' />
          </button>
        </div>
      </Container>

      {open && (
        <div className='fixed inset-0 z-50 lg:hidden' onKeyDown={onKeyDown}>
          {/* 46px of overlay stays uncovered so the drawer can be dismissed
              with a thumb tap without hitting a menu item. */}
          <button
            type='button'
            aria-label={sr.actions.closeMenu}
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className='absolute inset-0 bg-ink/55'
          />

          <div
            ref={panelRef}
            role='dialog'
            aria-modal='true'
            aria-label={sr.navigation.menu}
            className='absolute inset-y-0 right-0 left-[46px] flex flex-col bg-surface'
          >
            <div className='flex items-center justify-between border-b border-line px-4 py-3'>
              <MonoLabel>{sr.navigation.menu}</MonoLabel>
              <button
                type='button'
                onClick={() => setOpen(false)}
                aria-label={sr.actions.closeMenu}
                className='flex h-11 w-11 items-center justify-center border border-line-strong text-lg'
              >
                <span aria-hidden='true'>&#10005;</span>
              </button>
            </div>

            <nav className='flex flex-col overflow-y-auto' aria-label={sr.navigation.menu}>
              {NAVIGATION.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className='flex items-center justify-between border-b border-line px-4 py-[18px] text-[19px] font-semibold'
                >
                  {item.label}
                  <span aria-hidden='true' className='font-mono text-sm font-normal text-accent'>
                    &rarr;
                  </span>
                </Link>
              ))}
            </nav>

            <div className='mt-auto border-t border-line bg-paper px-4 pb-6 pt-5'>
              <MonoLabel>{sr.navigation.contact}</MonoLabel>
              <ContactActions solid='ink' size='lg' arrow className='mt-3' />
              <p className='mt-3.5 font-mono text-[10.5px] leading-relaxed text-faint'>
                {sr.common.hours.inline}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>

    {/*
      The space the fixed header would have taken in the flow. Always the
      resting height, never the collapsed one: by the time the bar collapses
      the page is 80px down and the content is scrolling behind it anyway.

      Zero on the homepage from lg up, where the hero photograph is meant to
      run under a transparent header. Below lg that header is a paper bar over
      a portrait, so the space is needed there as much as anywhere.
    */}
    <div aria-hidden='true' className={`h-[60px] ${isHome ? 'lg:h-0' : 'lg:h-[76px]'}`} />
    </>
  );
}
