import type { FaqEntry } from './faq';
import type { BlogPost } from './posts';
import { PHONE_DIAL } from './contact';
import { GEO, PHOTOS, PROFILES, SITE_NAME, SITE_URL } from './site';
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
    // Google reads `image` on a LocalBusiness as the pictures of the business
    // itself, so these are the three photographs of finished work rather than
    // the share card. More than one gives it something to choose from.
    image: Object.values(PHOTOS).map((path) => `${SITE_URL}${path}`),
    telephone: PHONE_DIAL,
    sameAs: [...PROFILES],
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

/**
 * The service itself, emitted on /installation.
 *
 * The homepage already carries `makesOffer` on the business; this is the same
 * service described where it is actually explained, tied back to the business
 * by `@id` so the two are one entity rather than two. `hasOfferCatalog` names
 * the four things a caller actually has to choose between.
 *
 * No `offers` with a price: there is no published price. See docs/seo-podaci.md.
 */
export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/installation#service`,
    name: 'Ugradnja euro kuke sa atestom',
    serviceType: 'Ugradnja kuke za vuču',
    description:
      'Ugradnja fiksne ili odvojive euro kuke sa elektro-instalacijom od 7 ili 13 pinova, atest uz svaku ugradnju, garancija dve godine.',
    url: `${SITE_URL}/installation`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: [
      { '@type': 'City', name: 'Beograd' },
      { '@type': 'Country', name: 'Srbija' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tipovi kuke i elektro-instalacije',
      itemListElement: [
        'Fiksna euro kuka',
        'Odvojiva euro kuka',
        'Elektro-instalacija 7 pinova',
        'Elektro-instalacija 13 pinova',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
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
    // Only claims a revision when there actually was one; `updated` is absent
    // on a post that has not been touched since it went up.
    dateModified: post.updated ?? post.datetime,
    articleSection: post.category.title,
    // A photograph of the work, not the share card. Google reads `image` on an
    // article as the picture that belongs to it, and the share card is the same
    // 1200x630 graphic on all four posts, which tells it nothing.
    image: Object.values(PHOTOS).map((path) => `${SITE_URL}${path}`),
    // The company is the author. There are no named writers on this site and
    // there never were: the four bylines the repo used to carry were invented.
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#business` },
  };
}
