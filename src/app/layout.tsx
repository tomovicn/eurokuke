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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
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
    canonical: 'https://www.ugradnjaeurokuka.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='sr'>
      <head>
        <link rel='canonical' href='https://www.ugradnjaeurokuka.com' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon-16x16.png' type='image/png' sizes='16x16' />
        <link rel='icon' href='/favicon-32x32.png' type='image/png' sizes='32x32' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
