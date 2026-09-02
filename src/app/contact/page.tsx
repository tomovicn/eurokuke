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
