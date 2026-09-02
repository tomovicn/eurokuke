import { sr } from '@/utils/translations/sr';
import { OG_IMAGE, SITE_URL } from './site';

/**
 * LocalBusiness (AutoRepair) markup for the homepage.
 *
 * Emitted as a plain <script type="application/ld+json"> rather than via
 * next/script: the latter injects client-side, which kept this schema out of
 * the server-rendered HTML entirely.
 *
 * No streetAddress or postalCode — the repo has never held a real one, and
 * inventing an address is worse than omitting it. Add them here when known;
 * Google's local results favour a complete PostalAddress.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE_URL}/#business`,
    name: sr.common.companyName,
    description: 'Profesionalna ugradnja euro kuka za sve marke vozila u Beogradu',
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: '+381638066462',
    email: sr.common.email,
    currenciesAccepted: 'RSD',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Beograd',
      addressCountry: 'RS',
    },
    // Matches the Google Maps embed on /contact, which resolves to the real listing.
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.813504',
      longitude: '20.457973',
    },
    areaServed: [
      { '@type': 'City', name: 'Beograd' },
      { '@type': 'Country', name: 'Srbija' },
    ],
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
  };
}
