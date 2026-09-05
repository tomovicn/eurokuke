import type { FaqEntry } from './faq';
import type { BlogPost } from './posts';
import { PHONE_DIAL } from './contact';
import { GEO, HERO_IMAGE, OG_IMAGE, SITE_NAME, SITE_URL } from './site';
import { sr } from '@/utils/translations/sr';

/**
 * All structured data is emitted as a plain <script type="application/ld+json">
 * inside a server component, never through next/script: next/script injects
 * client-side, which kept this markup out of the server-rendered HTML that
 * crawlers actually read.
 */

/**
 * LocalBusiness (AutoRepair), emitted once on the homepage.
 *
 * No streetAddress and no postalCode: the business has never published one, and
 * inventing an address is worse than omitting it. Google's local results favour
 * a complete PostalAddress, so add both here the day a real one exists.
 *
 * No priceRange and no email either. There is no published price band, and the
 * one address the repo used to carry (info@eurokuka.rs) is on a domain the site
 * does not run and was never confirmed to receive mail.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      'Ugradnja euro kuke sa atestom na sve marke vozila u Beogradu. Bosal, Oris i Steinhof, garancija dve godine.',
    url: SITE_URL,
    image: `${SITE_URL}${HERO_IMAGE}`,
    telephone: PHONE_DIAL,
    currenciesAccepted: 'RSD',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Beograd',
      addressCountry: 'RS',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Beograd' },
      { '@type': 'Country', name: 'Srbija' },
    ],
    knowsAbout: ['Ugradnja euro kuke', 'Atest za euro kuku', 'Elektro-instalacija za kuku'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Ugradnja euro kuke sa atestom',
        serviceType: 'Ugradnja kuke za vuču',
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'City', name: 'Beograd' },
      },
    },
  };
}

export function faqPageSchema(entries: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  };
}

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList for a page below the root. Pass the trail without the home
 * entry; it is prepended here so every breadcrumb on the site starts the same
 * way. `path` is site-relative and becomes an absolute URL in the markup, which
 * is what Google requires for the `item` field.
 */
export function breadcrumbSchema(trail: Crumb[]) {
  const crumbs: Crumb[] = [{ name: sr.navigation.home, path: '/' }, ...trail];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.description,
    inLanguage: 'sr-RS',
    datePublished: post.datetime,
    dateModified: post.datetime,
    articleSection: post.category.title,
    image: `${SITE_URL}${OG_IMAGE}`,
    // The company is the author. There are no named writers on this site and
    // there never were: the four bylines the repo used to carry were invented.
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#business` },
  };
}
