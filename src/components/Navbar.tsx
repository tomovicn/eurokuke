'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactActions from '@/components/ContactActions';
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

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // A section is current when the path is the page itself or below it, so
  // /blog/atest-euro-kuke still marks Blog. `/` would match everything.
  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  // Route changes must dismiss the drawer, otherwise it covers the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []
    );
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
    <header className='sticky top-0 z-50 border-b border-line bg-surface'>
      <Container className='flex h-[60px] items-center justify-between md:h-[76px]'>
        <Link href='/' className='flex flex-col gap-0.5' aria-label={sr.common.companyName}>
          <span className='text-sm font-bold uppercase tracking-[-0.01em] md:text-[17px]'>
            <span className='md:hidden'>{sr.common.companyShort}</span>
            <span className='hidden md:inline'>{sr.common.companyName}</span>
          </span>
          <span className='font-mono text-[9px] uppercase tracking-[0.12em] text-faint md:text-[9.5px] md:tracking-label'>
            <span className='md:hidden'>{sr.common.tagline}</span>
            <span className='hidden md:inline'>{sr.common.area}</span>
          </span>
        </Link>

        <div className='flex items-center gap-2 md:gap-[34px]'>
          <nav className='hidden items-center gap-[26px] text-[14.5px] font-medium text-ink-2 md:flex' aria-label={sr.navigation.menu}>
            {NAVIGATION.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className={
                  isCurrent(item.href)
                    ? 'border-b-[1.5px] border-accent pb-[3px]'
                    : 'border-b-[1.5px] border-transparent pb-[3px] transition-colors hover:border-line-strong'
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <SolidAction href={TEL_HREF} tone='accent' size='sm' block={false} className='md:h-[46px] md:px-4 md:text-[15px]'>
            {sr.actions.call}
          </SolidAction>

          <button
            ref={toggleRef}
            type='button'
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label={sr.actions.openMenu}
            className='flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-line-strong px-2.5 md:hidden'
          >
            <span aria-hidden='true' className='block h-[1.5px] w-full bg-ink' />
            <span aria-hidden='true' className='block h-[1.5px] w-full bg-ink' />
            <span aria-hidden='true' className='block h-[1.5px] w-full bg-ink' />
          </button>
        </div>
      </Container>

      {open && (
        <div className='fixed inset-0 z-50 md:hidden' onKeyDown={onKeyDown}>
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
  );
}
