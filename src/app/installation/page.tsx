'use client';

import ContactActions from '@/components/ContactActions';
import Button from '@/components/ui/Button';
import { TEL_HREF } from '@/lib/contact';
import { getInstallationFaq } from '@/lib/faq';
import { VEHICLE_BRANDS } from '@/lib/vehicles';
import { useTranslation } from '@/utils/i18n';

export default function EuroTowbarInstallation() {
  const { t } = useTranslation();
  const faq = getInstallationFaq();

  return (
    <div className='bg-paper'>
      {/* Hero */}
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

      {/* Installation Process */}
      <section className='bg-paper py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
            {t('installation.process.title')}
          </p>
          <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl'>
            {t('installation.process.subtitle')}
          </h2>
          <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted'>
            {t('installation.process.description')}
          </p>

          <ol className='mt-14 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                title: t('installation.process.steps.inspection.title'),
                description: t('installation.process.steps.inspection.description'),
              },
              {
                title: t('installation.process.steps.preparation.title'),
                description: t('installation.process.steps.preparation.description'),
              },
              {
                title: t('installation.process.steps.installation.title'),
                description: t('installation.process.steps.installation.description'),
              },
              {
                title: t('installation.process.steps.testing.title'),
                description: t('installation.process.steps.testing.description'),
              },
            ].map((step, index) => (
              <li key={step.title} className='bg-paper-2 p-7'>
                <span className='font-display text-3xl font-extrabold tracking-[-0.03em] text-accent'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className='mt-5 font-display text-lg font-bold tracking-[-0.02em]'>{step.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted'>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Supported Brands */}
      <section className='bg-paper-2 py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
            {t('installation.supportedBrands.title')}
          </p>
          <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl'>
            {t('installation.supportedBrands.subtitle')}
          </h2>
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
        </div>
      </section>

      {/* Price */}
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

      {/* FAQ */}
      <section className='bg-paper-2 py-20 md:py-28'>
        <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
            {t('installation.faq.title')}
          </p>
          <h2 className='mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl'>
            {t('installation.faq.subtitle')}
          </h2>

          <dl className='mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2'>
            {faq.map((entry) => (
              <div key={entry.question}>
                <dt className='font-display text-lg font-bold tracking-[-0.02em]'>{entry.question}</dt>
                <dd className='mt-2 leading-relaxed text-muted'>{entry.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className='bg-accent py-16 md:py-20'>
        <div className='mx-auto flex max-w-container flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
          <div>
            <h2 className='font-display text-3xl font-extrabold tracking-[-0.03em] text-accent-ink md:text-4xl'>
              {t('installation.cta.title')}
            </h2>
            <p className='mt-3 text-lg text-white/85'>{t('installation.cta.subtitle')}</p>
          </div>
          <Button href={TEL_HREF} tone='light' variant='solid' size='lg' className='shrink-0'>
            {t('installation.cta.button')}
          </Button>
        </div>
      </section>
    </div>
  );
}
