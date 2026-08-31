import { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';
import { faqPageSchema, getInstallationFaq } from '@/lib/faq';

export const metadata: Metadata = {
  title: 'Ugradnja Euro Kuke | Proces Montaže i Cene',
  description:
    'Kako izgleda profesionalna ugradnja euro kuke: pregled vozila, priprema, montaža i testiranje. Originalni delovi Bosal, Oris i Steinhof uz garanciju.',
  alternates: { canonical: '/installation' },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: '/installation',
    title: 'Ugradnja Euro Kuke | Proces Montaže i Cene',
    description: 'Profesionalna montaža euro kuke za sve marke vozila — proces, delovi i garancija.',
    images: [OG_IMAGE],
  },
};

export default function InstallationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(getInstallationFaq())) }}
      />
      {children}
    </>
  );
}
