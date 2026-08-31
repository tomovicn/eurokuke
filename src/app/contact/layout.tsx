import { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontakt | Ugradnja Euro Kuka Beograd',
  description:
    'Kontaktirajte nas za ugradnju euro kuke u Beogradu. Zakažite termin, zatražite ponudu ili postavite pitanje našim sertifikovanim montažerima.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: '/contact',
    title: 'Kontakt | Ugradnja Euro Kuka Beograd',
    description: 'Zakažite ugradnju euro kuke ili zatražite besplatnu ponudu. Pozovite +381 63 8066462.',
    images: [OG_IMAGE],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
