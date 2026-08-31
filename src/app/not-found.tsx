import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='bg-white min-h-[70vh] flex items-center'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl'>Stranica nije pronađena</h1>
          <p className='mt-4 text-xl text-gray-500'>Žao nam je, tražena stranica ne postoji ili je premeštena.</p>
          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            <Link
              href='/'
              className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700'
            >
              Nazad na početnu
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
