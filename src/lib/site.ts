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

/**
 * Photographs of finished work. All three come from the same shoot and share
 * one 3:4 portrait frame, so they are only ever placed as portraits: filling a
 * column, or covered inside a wider box with `object-position` aimed at the
 * tow bar. Stretching one into a landscape box crops the hook out of it.
 */
export const PHOTO_WIDTH = 1086;
export const PHOTO_HEIGHT = 1448;

export const PHOTOS = {
  /** Mount and socket under the bumper. The hero, and the LCP element. */
  mount: '/images/rad/euro-kuka-nosac-ispod-branika.jpg',
  /** Detachable Oris ball with the cap on, hook lowered. */
  detachable: '/images/rad/euro-kuka-odvojiva-oris.jpg',
  /** Rear of the car with the boot open: the hook clears both. */
  boot: '/images/rad/euro-kuka-otvoren-gepek.jpg',
} as const;

/** Matches the Google Maps embed, which resolves to the real listing. */
export const GEO = { latitude: '44.813504', longitude: '20.457973' } as const;
