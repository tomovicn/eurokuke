import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Euro Towbar Installation',
  description: 'Get in touch with our team for euro towbar installation services in Serbia.',
};

export default function Contact() {
  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gray-900'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gray-900 mix-blend-multiply' />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>Contact Us</h1>
          <p className='mt-6 text-xl text-gray-300 max-w-3xl'>
            Get in touch with our team for professional euro towbar installation services.
          </p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {/* Contact Form */}
            <div>
              <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>Send us a message</h2>
              <form action='#' method='POST' className='mt-8 space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                    Name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      required
                      className='py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      required
                      className='py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                    Phone
                  </label>
                  <div className='mt-1'>
                    <input
                      type='tel'
                      name='phone'
                      id='phone'
                      required
                      className='py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
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
                      required
                      className='py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className='lg:pl-8'>
              <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>Contact Information</h2>
              <div className='mt-8 space-y-6'>
                <div>
                  <h3 className='text-lg font-medium text-gray-900'>Address</h3>
                  <p className='mt-2 text-base text-gray-500'>
                    123 Example Street
                    <br />
                    Belgrade, Serbia
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
                  <div className='mt-2 flex space-x-4'>
                    <a href='tel:+381601234567' className='text-base text-gray-500 hover:text-gray-900'>
                      +381 60 123 4567
                    </a>
                    <a
                      href='viber://chat?number=%2B381601234567'
                      className='text-base text-gray-500 hover:text-gray-900'
                    >
                      Viber
                    </a>
                    <a href='https://wa.me/381601234567' className='text-base text-gray-500 hover:text-gray-900'>
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className='text-lg font-medium text-gray-900'>Working Hours</h3>
                  <p className='mt-2 text-base text-gray-500'>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className='bg-gray-50'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='rounded-lg overflow-hidden'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.78041004297!2d20.4473153155364!3d44.8041119790987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1645562345678!5m2!1sen!2srs'
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
