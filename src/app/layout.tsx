import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Euro Kuka | Profesionalna Ugradnja Euro Kuka u Beogradu',
  description:
    'Stručna ugradnja euro kuka za sve marke vozila. Brza montaža, povoljne cene, garancija kvaliteta. Pozovite nas danas za besplatnu konsultaciju.',
  keywords: 'ugradnja euro kuka, auto kuka, kuka za vuču, montaža kuke, bosal, oris, steinhof, beograd',
  openGraph: {
    title: 'Euro Kuka | Profesionalna Ugradnja Euro Kuka u Beogradu',
    description: 'Stručna ugradnja euro kuka za sve marke vozila. Brza montaža, povoljne cene, garancija kvaliteta.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Euro Kuka - Profesionalna Montaža Euro Kuka u Srbiji',
    description:
      'Profesionalna montaža euro kuka za sve marke automobila. Certifikovani tehničari, kvalitetna usluga i konkurentne cene.',
  },
  alternates: {
    canonical: 'https://ugradnjaeurokuka.rs',
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
