'use client';

import BrandStrip from '@/components/BrandStrip';
import ContactActions from '@/components/ContactActions';
import Button from '@/components/ui/Button';
import { PHONE_DISPLAY, TEL_HREF } from '@/lib/contact';
import { getInstallationFaq } from '@/lib/faq';
import { localBusinessSchema } from '@/lib/schema';
import { VEHICLE_BRANDS } from '@/lib/vehicles';
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
              <span className='whitespace-nowrap text-accent'>{t('home.hero.title.accent')}</span>
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
    </div>
  );
}
