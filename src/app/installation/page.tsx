'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/utils/i18n';

export default function EuroTowbarInstallation() {
  const { t } = useTranslation();

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gray-900'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gray-900 mix-blend-multiply' />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            {t('installation.title')}
          </h1>
          <p className='mt-6 text-xl text-gray-300 max-w-3xl'>{t('installation.description')}</p>
        </div>
      </div>

      {/* Installation Process */}
      <div className='py-16 bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
              {t('installation.process.title')}
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {t('installation.process.subtitle')}
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>{t('installation.process.description')}</p>
          </div>

          <div className='mt-10'>
            <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <div className='relative'>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                  <span className='text-lg font-bold'>1</span>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  {t('installation.process.steps.inspection.title')}
                </p>
                <p className='mt-2 ml-16 text-base text-gray-500'>
                  {t('installation.process.steps.inspection.description')}
                </p>
              </div>

              <div className='relative'>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                  <span className='text-lg font-bold'>2</span>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  {t('installation.process.steps.preparation.title')}
                </p>
                <p className='mt-2 ml-16 text-base text-gray-500'>
                  {t('installation.process.steps.preparation.description')}
                </p>
              </div>

              <div className='relative'>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                  <span className='text-lg font-bold'>3</span>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  {t('installation.process.steps.installation.title')}
                </p>
                <p className='mt-2 ml-16 text-base text-gray-500'>
                  {t('installation.process.steps.installation.description')}
                </p>
              </div>

              <div className='relative'>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                  <span className='text-lg font-bold'>4</span>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  {t('installation.process.steps.testing.title')}
                </p>
                <p className='mt-2 ml-16 text-base text-gray-500'>
                  {t('installation.process.steps.testing.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Brands */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
              {t('installation.supportedBrands.title')}
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {t('installation.supportedBrands.subtitle')}
            </p>
          </div>

          <div className='mt-10'>
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6'>
              {[
                'Volkswagen',
                'BMW',
                'Mercedes',
                'Audi',
                'Toyota',
                'Ford',
                'Opel',
                'Peugeot',
                'Renault',
                'Citroen',
                'Hyundai',
                'Kia',
              ].map((brand) => (
                <div key={brand} className='col-span-1 flex justify-center py-8 px-8 bg-white rounded-lg shadow'>
                  <p className='text-lg font-medium text-gray-900'>{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
              {t('installation.pricing.title')}
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {t('installation.pricing.subtitle')}
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>{t('installation.pricing.description')}</p>
          </div>

          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto col-span-1 sm:col-span-2 lg:col-span-3'>
                <div className='px-6 py-8'>
                  <h3 className='text-2xl font-medium text-gray-900'>{t('installation.pricing.plans.custom.title')}</h3>
                  <p className='mt-4 text-base text-gray-500'>{t('installation.pricing.plans.custom.price')}</p>
                  <ul className='mt-6 space-y-4'>
                    {(t('installation.pricing.plans.custom.features') as unknown as string[]).map((feature: string) => (
                      <li key={feature} className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                          </svg>
                        </div>
                        <p className='ml-3 text-base text-gray-500'>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
              {t('installation.faq.title')}
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {t('installation.faq.subtitle')}
            </p>
          </div>

          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <div className='relative'>
                <dt>
                  <p className='text-lg leading-6 font-medium text-gray-900'>
                    {t('installation.faq.questions.duration.question')}
                  </p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>{t('installation.faq.questions.duration.answer')}</dd>
              </div>

              <div className='relative'>
                <dt>
                  <p className='text-lg leading-6 font-medium text-gray-900'>
                    {t('installation.faq.questions.bumper.question')}
                  </p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>{t('installation.faq.questions.bumper.answer')}</dd>
              </div>

              <div className='relative'>
                <dt>
                  <p className='text-lg leading-6 font-medium text-gray-900'>
                    {t('installation.faq.questions.certification.question')}
                  </p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>{t('installation.faq.questions.certification.answer')}</dd>
              </div>

              <div className='relative'>
                <dt>
                  <p className='text-lg leading-6 font-medium text-gray-900'>
                    {t('installation.faq.questions.warranty.question')}
                  </p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>{t('installation.faq.questions.warranty.answer')}</dd>
              </div>
            </dl>
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
              <Link
                href='tel:+381638066462'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50'
              >
                {t('installation.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
