import { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog | Saveti o Euro Kukama i Montaži',
  description:
    'Saveti o atestu, certifikaciji, izboru modela i profesionalnoj montaži euro kuke. Vodiči našeg tima sertifikovanih montažera.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: '/blog',
    title: 'Blog | Saveti o Euro Kukama i Montaži',
    description: 'Vodiči o atestu, izboru i montaži euro kuke.',
    images: [OG_IMAGE],
  },
};

export default function BlogSectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
