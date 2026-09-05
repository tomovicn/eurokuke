import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import { OG_IMAGE, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, SITE_LOCALE, SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * `latin-ext` is not optional here. The site is Serbian and every second
 * heading contains č ć š ž đ; with the `latin` subset alone those glyphs fall
 * back to a system font mid-word, which is visible as a change of weight and
 * colour inside a single title.
 */
const plexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const TITLE = 'Ugradnja euro kuke Beograd | Auto kuka sa atestom';
const DESCRIPTION =
  'Ugradnja euro kuke sa atestom u Beogradu, za sve marke vozila. Montaža traje 3-4 sata, termin u roku od 24 sata, garancija 2 godine. Bosal, Oris i Steinhof.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Page titles supply only their own part; the brand is appended once here
    // instead of being retyped, and never doubled up.
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  // Ochre, not paper. This colours the Android browser bar and the task
  // switcher card, and it is the one place the mark is allowed to be the
  // brand rather than a contact action. Paper there is indistinguishable
  // from Chrome's own chrome.
  themeColor: '#a85b12',
  // Every phone number on the site is already a tel: link. Without this, iOS
  // wraps them a second time and restyles them out of the design.
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    siteName: SITE_NAME,
    url: '/',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Without these Google may truncate the snippet and refuse to show the
      // large share image in results.
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='sr' className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className='bg-paper font-sans text-ink antialiased'>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
