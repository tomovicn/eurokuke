import type { Metadata } from 'next';

import { JsonLd } from '@/components/ui/primitives';
import { INSTALLATION_FAQ } from '@/lib/faq';
import { faqPageSchema, serviceSchema } from '@/lib/schema';
import { OG_IMAGE, SITE_LOCALE } from '@/lib/site';

/*
 * Both title and description are written against the queries this page
 * actually draws, from Search Console over the six months to 2026-09-05:
 * `ugradnja kuke`, `ugradnja auto kuka`, `ugradnja kuka za auto`,
 * `ugradnja kuke na auto`, `auto kuka ugradnja`. Every one of them says
 * `auto kuka`, not `euro kuka`, which the old title led with. The title is
 * also short enough that the brand suffix from the root template survives
 * instead of being cut off mid-word.
 */
const TITLE = 'Ugradnja auto kuke sa atestom, Beograd';
const DESCRIPTION =
  'Ugradnja auto kuke na sve marke vozila u Beogradu. Fiksna ili odvojiva kuka, instalacija sa 7 ili 13 pinova, atest uz svaku ugradnju. Bosal, Oris i Steinhof.';

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
