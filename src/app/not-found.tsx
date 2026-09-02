'use client';

import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className='bg-paper min-h-[70vh] flex items-center'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl'>
            {t('notFound.title')}
          </h1>
          <p className='mt-4 text-xl text-muted'>{t('notFound.description')}</p>
          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            <Link
              href='/'
              className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-accent-ink bg-accent hover:brightness-110'
            >
              {t('notFound.homeButton')}
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center px-4 py-2 border border-line text-base font-medium rounded-md text-ink bg-paper hover:bg-paper-2'
            >
              {t('notFound.contactButton')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
