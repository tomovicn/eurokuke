'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';
import Script from 'next/script';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className='bg-white'>
      <Script
        id='schema-markup'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoRepair',
            name: 'Ugradnja Euro Kuka',
            description: 'Profesionalna ugradnja euro kuka za sve marke vozila u Beogradu',
            image: '/images/hero/eurokuka.jpg',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Beograd',
              addressRegion: 'Srbija',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '44.786568',
              longitude: '20.448922',
            },
            url: 'https://www.ugradnjaeurokuka.com',
            telephone: '+381638066462',
            priceRange: '$$',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday'],
                opens: '10:00',
                closes: '16:00',
              },
            ],
          }),
        }}
      />

      {/* Hero section */}
      <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <div className='pt-10 px-4 sm:px-6 md:px-8 sm:pt-16 lg:pt-8 xl:pt-16'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>Profesionalna Ugradnja</span>{' '}
                  <span className='block text-red-600 xl:inline'>Euro Kuka</span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  {t('home.hero.description')}
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <a
                      href='tel:+381638066462'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10'
                    >
                      {t('home.hero.cta.book')}
                    </a>
                  </div>
                  <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <a
                      href='tel:+381638066462'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10'
                    >
                      {t('home.hero.cta.call')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <Image
            src='/images/hero/eurokuka.jpg'
            alt='Ugradnja euro kuke u Beogradu - Profesionalna montaža za sve marke vozila'
            width={600}
            height={400}
            className=''
            priority
          />
        </div>
      </div>

      {/* Brand Logos */}
      <div className='py-8 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-6'>
            <p className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
              Sarađujemo sa vodećim proizvođačima kuka za vuču
            </p>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12'>
            <div className='w-32 h-16 flex items-center justify-center'>
              <Image
                src='/bosal.svg'
                alt='Bosal - Originalne kuke za vuču'
                width={120}
                height={48}
                className='h-8 md:h-10 w-auto object-contain grayscale-0 transition-all duration-300'
              />
            </div>
            <div className='w-32 h-16 flex items-center justify-center'>
              <Image
                src='/oris.jpg'
                alt='Oris - Kvalitetne euro kuke'
                width={120}
                height={48}
                className='h-8 md:h-10 w-auto object-contain grayscale-0 transition-all duration-300'
              />
            </div>
            <div className='w-32 h-16 flex items-center justify-center'>
              <Image
                src='/steinhof.svg'
                alt='Steinhof - Profesionalne kuke za vozila'
                width={120}
                height={48}
                className='h-8 md:h-10 w-auto object-contain grayscale-0 transition-all duration-300 bg-gray-300'
              />
            </div>
          </div>
        </div>
      </div>

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
