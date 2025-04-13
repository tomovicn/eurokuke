import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='bg-white min-h-[70vh] flex items-center'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl'>Page not found</h1>
          <p className='mt-4 text-xl text-gray-500'>Sorry, we couldn't find the page you're looking for.</p>
          <div className='mt-10'>
            <Link
              href='/'
              className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
