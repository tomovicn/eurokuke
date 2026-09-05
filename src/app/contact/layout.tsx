import type { Metadata } from 'next';

import { OG_IMAGE, SITE_LOCALE } from '@/lib/site';

const TITLE = 'Kontakt: ugradnja euro kuke u Beogradu';
const DESCRIPTION =
  'Pozovite za termin za ugradnju euro kuke u Beogradu. Radno vreme Pon-Pet 08:00-20:00, Sub 10:00-16:00. Viber i WhatsApp za slike i pitanja o modelu vozila.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: '/contact',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
