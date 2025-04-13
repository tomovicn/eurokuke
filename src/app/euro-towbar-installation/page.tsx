import Link from 'next/link';

export default function EuroTowbarInstallation() {
  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gray-900'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gray-900 mix-blend-multiply' />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            Euro Towbar Installation
          </h1>
          <p className='mt-6 text-xl text-gray-300 max-w-3xl'>
            Professional installation of euro towbars for all major car brands. Certified technicians, quality service,
            and competitive prices.
          </p>
        </div>
      </div>

      {/* Installation Process */}
      <div className='py-16 bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>Installation Process</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              How We Install Your Euro Towbar
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              Our certified technicians follow a precise installation process to ensure the highest quality and safety
              standards.
            </p>
          </div>

          <div className='mt-10'>
            <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <div className='relative'>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                  <span className='text-lg font-bold'>1</span>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Vehicle Inspection</p>
                <p className='mt-2 ml-16 text-base text-gray-500'>
                  We start with a thorough inspection of your vehicle to determine the best installation approach.
                </p>
              </div>

              <div className='relative'>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                  <span className='text-lg font-bold'>2</span>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Preparation</p>
                <p className='mt-2 ml-16 text-base text-gray-500'>
                  We prepare the vehicle and gather all necessary tools and materials for the installation.
                </p>
              </div>

              <div className='relative'>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                  <span className='text-lg font-bold'>3</span>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Installation</p>
                <p className='mt-2 ml-16 text-base text-gray-500'>
                  Our technicians install the towbar following manufacturer specifications and safety standards.
                </p>
              </div>

              <div className='relative'>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white'>
                  <span className='text-lg font-bold'>4</span>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>Testing & Certification</p>
                <p className='mt-2 ml-16 text-base text-gray-500'>
                  We test the installation and provide official certification and warranty documentation.
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
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>Supported Brands</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              We Work With All Major Car Brands
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
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>Pricing</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Competitive Prices for Quality Service
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              Prices vary depending on your vehicle model and the type of towbar required.
            </p>
          </div>

          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='px-6 py-8'>
                  <h3 className='text-2xl font-medium text-gray-900'>Basic Installation</h3>
                  <p className='mt-4 text-base text-gray-500'>Starting from 15,000 RSD</p>
                  <ul className='mt-6 space-y-4'>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <p className='ml-3 text-base text-gray-500'>Standard towbar installation</p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <p className='ml-3 text-base text-gray-500'>Basic certification</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='px-6 py-8'>
                  <h3 className='text-2xl font-medium text-gray-900'>Premium Installation</h3>
                  <p className='mt-4 text-base text-gray-500'>Starting from 25,000 RSD</p>
                  <ul className='mt-6 space-y-4'>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <p className='ml-3 text-base text-gray-500'>Advanced towbar installation</p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <p className='ml-3 text-base text-gray-500'>Extended warranty</p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <p className='ml-3 text-base text-gray-500'>Premium certification</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='px-6 py-8'>
                  <h3 className='text-2xl font-medium text-gray-900'>Custom Installation</h3>
                  <p className='mt-4 text-base text-gray-500'>Price on request</p>
                  <ul className='mt-6 space-y-4'>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <p className='ml-3 text-base text-gray-500'>Custom towbar solutions</p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <p className='ml-3 text-base text-gray-500'>Special vehicle modifications</p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <p className='ml-3 text-base text-gray-500'>Full certification package</p>
                    </li>
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
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>FAQ</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Frequently Asked Questions
            </p>
          </div>

          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <div className='relative'>
                <dt>
                  <p className='text-lg leading-6 font-medium text-gray-900'>How long does installation take?</p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Most installations are completed within 2-3 hours. The exact time depends on your vehicle model and
                  the type of towbar being installed.
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <p className='text-lg leading-6 font-medium text-gray-900'>Will the bumper be cut?</p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  In most cases, no. Modern towbar installations are designed to be minimally invasive. However, some
                  vehicle models may require minor modifications.
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <p className='text-lg leading-6 font-medium text-gray-900'>Is certification (atest) necessary?</p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Yes, certification is required by law in Serbia. We provide all necessary documentation and
                  certification for your installation.
                </dd>
              </div>

              <div className='relative'>
                <dt>
                  <p className='text-lg leading-6 font-medium text-gray-900'>What is the warranty period?</p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  We offer a standard 2-year warranty on all installations. Premium installations come with extended
                  warranty options.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-red-600'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
            <span className='block'>Ready to install your euro towbar?</span>
            <span className='block text-red-200'>Book your installation today.</span>
          </h2>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50'
              >
                Book Installation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
