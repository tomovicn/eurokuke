'use client';

import BrandStrip from '@/components/BrandStrip';
import ContactActions from '@/components/ContactActions';
import { localBusinessSchema } from '@/lib/schema';
import { useTranslation } from '@/utils/i18n';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

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

      {/* Testimonials */}
      <div className='bg-gray-50 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
              {t('home.testimonials.title')}
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {(t('home.testimonials.items') as unknown as Testimonial[]).map((testimonial, index) => (
                <div key={index} className='bg-white rounded-lg shadow-lg p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='ml-0'>
                      <h4 className='text-lg font-medium text-gray-900'>{testimonial.name}</h4>
                      <p className='text-gray-500'>{testimonial.role}</p>
                    </div>
                  </div>
                  <p className='text-gray-600'>{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-red-600'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
            <span className='block'>{t('installation.cta.title')}</span>
            <span className='block text-red-200'>{t('installation.cta.subtitle')}</span>
          </h2>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <a
                href='tel:+381638066462'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50'
              >
                {t('installation.cta.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
