import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Euro Towbar - Profesionalna Montaža Euro Kuka u Srbiji',
  description:
    'Profesionalna montaža euro kuka za sve marke automobila. Certifikovani tehničari, kvalitetna usluga i konkurentne cene u Beogradu i Srbiji.',
  keywords:
    'euro kuka, montaža kuke, euro towbar, montaža kuke beograd, certifikovana kuka, atest kuke, montaža kuke srbija',
  openGraph: {
    title: 'Euro Towbar - Profesionalna Montaža Euro Kuka u Srbiji',
    description:
      'Profesionalna montaža euro kuka za sve marke automobila. Certifikovani tehničari, kvalitetna usluga i konkurentne cene.',
    url: 'https://eurotowbar.rs',
    siteName: 'Euro Towbar',
    locale: 'sr_RS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Euro Towbar - Profesionalna Montaža Euro Kuka u Srbiji',
    description:
      'Profesionalna montaža euro kuka za sve marke automobila. Certifikovani tehničari, kvalitetna usluga i konkurentne cene.',
  },
  alternates: {
    canonical: 'https://eurotowbar.rs',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='sr'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
