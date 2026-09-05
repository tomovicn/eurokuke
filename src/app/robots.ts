import { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';

/**
 * No `disallow` for /privacy. That page carries `robots: noindex`, and a URL
 * that is disallowed here cannot be crawled, so the noindex on it would never
 * be read: Google can then keep the URL in the index with no snippet, which is
 * the opposite of what the noindex is for. Blocking and noindexing the same URL
 * is an anti-pattern; pick one, and noindex is the one that actually removes it.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
