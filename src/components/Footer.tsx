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
