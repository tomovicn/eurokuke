'use client';

import { useState } from 'react';
import { useTranslation } from '@/utils/i18n';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gray-900'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gray-900 mix-blend-multiply' />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            {t('contact.hero.title')}
          </h1>
          <p className='mt-6 text-xl text-gray-300 max-w-3xl'>{t('contact.hero.description')}</p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
            <div>
              <h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>{t('contact.title')}</h2>
              <div className='mt-3'>
                <p className='text-lg text-gray-500'>{t('contact.description')}</p>
              </div>
              <div className='mt-9'>
                <div className='mt-6 flex'>
                  <div className='flex-shrink-0'>
                    <svg className='h-6 w-6 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div className='ml-3 text-base text-gray-500'>
                    <p>{t('contact.phone')}</p>
                  </div>
                </div>

                <div className='mt-6 flex'>
                  <div className='flex-shrink-0'>
                    <svg className='h-6 w-6 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div className='ml-3 text-base text-gray-500'>
                    <p>{t('contact.email')}</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className='bg-gray-50'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl mb-8'>{t('contact.map.title')}</h2>
          <div className='rounded-lg overflow-hidden'>
            <iframe
              src={t('contact.map.embedUrl')}
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
