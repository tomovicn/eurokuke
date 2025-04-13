'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would normally make an API call to your backend
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
          <div>
            <h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>Contact Us</h2>
            <div className='mt-3'>
              <p className='text-lg text-gray-500'>
                Have a question or want to work with us? We'd love to hear from you. Fill out the form and we'll get
                back to you as soon as possible.
              </p>
            </div>
            <div className='mt-9'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <svg
                    className='h-6 w-6 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <div className='ml-3 text-base text-gray-500'>
                  <p>+1 (555) 123-4567</p>
                  <p className='mt-1'>Mon-Fri 9am to 6pm</p>
                </div>
              </div>
              <div className='mt-6 flex'>
                <div className='flex-shrink-0'>
                  <svg
                    className='h-6 w-6 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div className='ml-3 text-base text-gray-500'>
                  <p>info@eurokuke.com</p>
                </div>
              </div>
              <div className='mt-6 flex'>
                <div className='flex-shrink-0'>
                  <svg
                    className='h-6 w-6 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <div className='ml-3 text-base text-gray-500'>
                  <p>123 Main Street</p>
                  <p className='mt-1'>Suite 200</p>
                  <p className='mt-1'>San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 md:mt-0'>
            {isSubmitted ? (
              <div className='bg-green-50 border border-green-200 rounded-md p-6'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='h-6 w-6 text-green-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                    </svg>
                  </div>
                  <div className='ml-3'>
                    <h3 className='text-lg font-medium text-green-800'>Thank you for your message!</h3>
                    <div className='mt-2 text-sm text-green-700'>
                      <p>We've received your message and will get back to you as soon as possible.</p>
                    </div>
                    <div className='mt-4'>
                      <button
                        type='button'
                        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                    Name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      autoComplete='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                    Phone
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      value={formData.phone}
                      onChange={handleChange}
                      className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                    Message
                  </label>
                  <div className='mt-1'>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full'
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
