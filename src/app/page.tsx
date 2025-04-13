'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className='bg-white'>
      {/* Hero section */}
      <div className='relative isolate overflow-hidden bg-gradient-to-b from-gray-50 to-white'>
        {/* Content container */}
        <div className='mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-24 sm:pb-32 lg:pt-32'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center'>
              {/* Text content */}
              <div className='lg:pr-8'>
                <div className='lg:max-w-lg'>
                  {/* Trust indicators */}
                  <div className='flex items-center gap-x-6 text-sm text-gray-600 mb-8'>
                    <div className='flex items-center gap-x-2'>
                      <svg className='h-5 w-5 text-red-600' fill='currentColor' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {t('home.hero.trust.quality')}
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <svg className='h-5 w-5 text-red-600' fill='currentColor' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {t('home.hero.trust.warranty')}
                    </div>
                  </div>

                  {/* Main content */}
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    {t('home.hero.title')}
                  </h1>
                  <p className='mt-6 text-lg leading-8 text-gray-600'>{t('home.hero.description')}</p>

                  {/* CTA Buttons */}
                  <div className='mt-10 flex items-center gap-x-6'>
                    <Link
                      href='/euro-towbar-installation'
                      className='group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-700 hover:to-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none'
                    >
                      <span className='relative'>{t('home.hero.cta.book')}</span>
                      <span className='ml-2 transition-transform group-hover:translate-x-1'>→</span>
                    </Link>
                    <Link
                      href='/contact'
                      className='group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-gray-900 transition-all rounded-lg hover:text-red-600 focus:ring-4 focus:ring-gray-300 focus:outline-none'
                    >
                      <span className='relative'>{t('home.hero.cta.call')}</span>
                      <span className='ml-2 transition-transform group-hover:translate-x-1'>→</span>
                    </Link>
                  </div>

                  {/* Social proof */}
                  <div className='mt-16 flex items-center gap-x-6'>
                    <div className='flex -space-x-4'>
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className='inline-block h-10 w-10 rounded-full ring-2 ring-white bg-gradient-to-r from-red-100 to-red-50'
                        />
                      ))}
                    </div>
                    <div className='text-sm text-gray-600'>
                      <span className='font-semibold text-gray-900'>1000+</span> {t('home.hero.socialProof')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image container */}
              <div className='relative'>
                <div className='relative mx-auto w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 bg-gray-50'>
                  <Image
                    src='/images/hero/towbar.png'
                    alt='Euro Towbar Installation'
                    width={600}
                    height={600}
                    className='w-full h-auto object-cover'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-red-600'>{t('home.services.title')}</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {t('home.services.subtitle')}
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            <div className='flex flex-col'>
              <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                {t('home.services.quickInstallation.title')}
              </dt>
              <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                <p className='flex-auto'>{t('home.services.quickInstallation.description')}</p>
              </dd>
            </div>
            <div className='flex flex-col'>
              <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                {t('home.services.certifiedQuality.title')}
              </dt>
              <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                <p className='flex-auto'>{t('home.services.certifiedQuality.description')}</p>
              </dd>
            </div>
            <div className='flex flex-col'>
              <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                {t('home.services.expertSupport.title')}
              </dt>
              <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                <p className='flex-auto'>{t('home.services.expertSupport.description')}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Why choose us section */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-red-600'>{t('home.whyChooseUs.title')}</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {t('home.whyChooseUs.subtitle')}
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            <div className='flex flex-col'>
              <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                {t('home.whyChooseUs.fastService.title')}
              </dt>
              <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                <p className='flex-auto'>{t('home.whyChooseUs.fastService.description')}</p>
              </dd>
            </div>
            <div className='flex flex-col'>
              <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                {t('home.whyChooseUs.warranty.title')}
              </dt>
              <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                <p className='flex-auto'>{t('home.whyChooseUs.warranty.description')}</p>
              </dd>
            </div>
            <div className='flex flex-col'>
              <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                {t('home.whyChooseUs.certifications.title')}
              </dt>
              <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                <p className='flex-auto'>{t('home.whyChooseUs.certifications.description')}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
