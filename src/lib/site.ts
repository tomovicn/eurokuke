export const SITE_URL = 'https://www.ugradnjaeurokuka.com';
export const SITE_NAME = 'Ugradnja Euro Kuka';
export const SITE_LOCALE = 'sr_RS';

/**
 * Share image. Generated at build time by `src/app/opengraph-image.tsx`, which
 * renders the 1200x630 card from the design rather than shipping a static file.
 * The route emits the tags for the homepage on its own; these constants are for
 * the nested layouts, which need an absolute URL in their own metadata.
 */
export const OG_IMAGE = '/opengraph-image';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** The one real photograph in the project. */
export const HERO_IMAGE = '/images/hero/eurokuka.jpg';
export const HERO_IMAGE_WIDTH = 600;
export const HERO_IMAGE_HEIGHT = 519;

/** Matches the Google Maps embed, which resolves to the real listing. */
export const GEO = { latitude: '44.813504', longitude: '20.457973' } as const;
