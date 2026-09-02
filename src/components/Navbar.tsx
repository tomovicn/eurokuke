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

  // Keyboard users need a way to dismiss the modal overlay without a mouse.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
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
                onClick={() => setOpen(false)}
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
