import type { Metadata } from 'next';

import { OG_IMAGE, SITE_LOCALE } from '@/lib/site';

const TITLE = 'Blog: atest, zakon i vuča prikolice';
const DESCRIPTION =
  'Tekstovi iz radionice o atestu za euro kuku, upisu u saobraćajnu dozvolu, dozvoljenoj masi prikolice i bezbednoj vožnji sa prikolicom.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: '/blog',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function BlogSectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
