import type { Metadata } from 'next';

import { JsonLd } from '@/components/ui/primitives';
import { SALES_FAQ } from '@/lib/faq';
import { faqPageSchema } from '@/lib/schema';
import { OG_IMAGE, SITE_LOCALE } from '@/lib/site';

/*
 * A Serbian slug, unlike /installation and /contact.
 *
 * Those two are English because that is how the repo was inherited, and
 * renaming them now costs a redirect and a dip for a small gain. This page has
 * no history to protect, so it gets the words people actually type. The
 * queries it is written for say `auto kuka` and `prodaja`, never `sales`.
 */
const TITLE = 'Prodaja auto kuka i slanje po Srbiji';
const DESCRIPTION =
  'Nove auto kuke sa homologacijom: Bosal, AutoHak, Oris, Steinhof i Galia, za sve marke putničkih vozila. Šaljemo pouzećem po celoj Srbiji, za 1 do 5 radnih dana.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/prodaja-auto-kuka' },
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: '/prodaja-auto-kuka',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function SalesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Four questions of its own. No question on this site appears on two
          pages, so the FAQPage blocks never describe the same content. */}
      <JsonLd data={faqPageSchema(SALES_FAQ)} />
      {children}
    </>
  );
}
