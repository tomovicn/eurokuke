import type { Metadata } from 'next';

import { JsonLd } from '@/components/ui/primitives';
import { INSTALLATION_FAQ } from '@/lib/faq';
import { faqPageSchema, serviceSchema } from '@/lib/schema';
import { OG_IMAGE, SITE_LOCALE } from '@/lib/site';

const TITLE = 'Ugradnja euro kuke: proces, atest i garancija';
const DESCRIPTION =
  'Kako teče montaža auto kuke: pregled vozila, priprema, ugradnja kuke i elektro-instalacije, atest. Fiksna ili odvojiva kuka, 7 ili 13 pinova, garancija 2 godine.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/installation' },
  openGraph: {
    type: 'article',
    locale: SITE_LOCALE,
    url: '/installation',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function InstallationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* The four questions here are not the four on the homepage, so the two
          FAQPage blocks describe different content and the pages do not
          compete for the same query. */}
      {/* The service described where it is explained, tied to the business on
          the homepage by @id so the two are one entity. */}
      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqPageSchema(INSTALLATION_FAQ)} />
      {children}
    </>
  );
}
