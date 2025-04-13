'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Euro Towbar Installation', href: '/euro-towbar-installation' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='bg-white'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='flex w-full items-center justify-between border-b border-gray-200 py-6 lg:border-none'>
          <div className='flex items-center'>
            <Link href='/'>
              <span className='sr-only'>Euro Towbar Installation</span>
              <span className='text-2xl font-bold text-gray-900'>Euro Towbar</span>
            </Link>
          </div>
          <div className='ml-10 space-x-8'>
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium ${
                  pathname === link.href ? 'text-red-600' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
