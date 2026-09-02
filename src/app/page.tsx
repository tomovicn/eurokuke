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
          <div className='relative rounded-2xl bg-gradient-to-br from-white to-paper-2 p-6 shadow-2xl lg:rotate-1'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/images/hero/eurokuka.jpg'
              alt='Euro kuka za vuču spremna za ugradnju'
              width={600}
              height={519}
              className='h-auto w-full rounded-xl object-contain'
            />
          </div>
        </div>
      </section>

      <BrandStrip />

      {/* Services Overview */}
      <div className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>{t('home.services.title')}</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='pt-6'>
                <div className='flow-root bg-white rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg'>
                        <svg className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 10V3L4 14h7v7l9-11h-7z'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      {t('home.services.quickInstallation.title')}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>{t('home.services.quickInstallation.description')}</p>
                  </div>
                </div>
              </div>

              <div className='pt-6'>
                <div className='flow-root bg-white rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg'>
                        <svg className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      {t('home.services.certifiedQuality.title')}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>{t('home.services.certifiedQuality.description')}</p>
                  </div>
                </div>
              </div>

              <div className='pt-6'>
                <div className='flow-root bg-white rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg'>
                        <svg className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      {t('home.services.expertSupport.title')}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>{t('home.services.expertSupport.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='bg-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
              {t('home.whyChooseUs.title')}
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {t('home.whyChooseUs.subtitle')}
            </p>
          </div>

          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10'>
              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {t('home.whyChooseUs.fastService.title')}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>{t('home.whyChooseUs.fastService.description')}</dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {t('home.whyChooseUs.warranty.title')}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>{t('home.whyChooseUs.warranty.description')}</dd>
              </div>

              <div className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {t('home.whyChooseUs.certifications.title')}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  {t('home.whyChooseUs.certifications.description')}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

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
