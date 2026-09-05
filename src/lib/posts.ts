import { POSTS } from '@/content/posts';
import { sr } from '@/utils/translations/sr';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  datetime: string;
  updated?: string;
  readingTime: string;
  category: { title: string; href: string };
  author: { name: string };
  content: string;
};

/**
 * Posts carry a hand-written `date` for display; `updated` is machine-readable
 * only, so it is formatted here. `sr-Latn-RS` rather than `sr-RS`: the plain
 * region tag renders Cyrillic, and the site is set in Latin throughout.
 */
export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat('sr-Latn-RS', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

export type BlogCategory = {
  slug: string;
  title: string;
  description: string;
};

/**
 * The lead article on /blog. Pinned rather than "whichever is newest": the
 * atest piece is the one people actually search for, and it should not drop out
 * of the lead slot the moment something else is published.
 */
export const FEATURED_SLUG = 'atest-euro-kuke';

/** Newest first. The index and the sitemap both rely on this order. */
export function getBlogPosts(): BlogPost[] {
  return Object.entries(POSTS)
    .map(([slug, post]) => ({ slug, ...post }))
    .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());
}

/** The pinned lead article, then everything else in date order. */
export function getFeaturedAndRest(): { featured?: BlogPost; rest: BlogPost[] } {
  const posts = getBlogPosts();
  const featured = posts.find((post) => post.slug === FEATURED_SLUG);
  return { featured, rest: posts.filter((post) => post.slug !== featured?.slug) };
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function getCategories(): BlogCategory[] {
  return Object.entries(sr.blog.categories).map(([slug, category]) => ({ slug, ...category }));
}

export function getCategory(slug: string): BlogCategory | undefined {
  return getCategories().find((category) => category.slug === slug);
}

/** Posts carry their category as a href (`/blog/category/legal`); the slug is its last segment. */
export function categorySlugOf(post: BlogPost): string {
  return post.category.href.split('/').pop() ?? '';
}

export function getPostsByCategory(slug: string): BlogPost[] {
  return getBlogPosts().filter((post) => categorySlugOf(post) === slug);
}

/**
 * A category page listing a single article is a near-duplicate of that article
 * and nothing more, which is what Google files under "crawled, currently not
 * indexed". Below this many posts a category stays crawlable but is kept out of
 * the index and out of the sitemap; it earns its way in once it has substance.
 */
export const MIN_POSTS_TO_INDEX_CATEGORY = 2;

export function isCategoryIndexable(slug: string): boolean {
  return getPostsByCategory(slug).length >= MIN_POSTS_TO_INDEX_CATEGORY;
}

/**
 * Suggestions under an article: same category first, since that is the closest
 * match, then the newest of everything else so the block is never short. Every
 * article linking to two others is what keeps the blog from being four dead
 * ends that pass nothing to each other or to the service pages.
 */
export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const post = getBlogPost(slug);
  if (!post) return [];

  const others = getBlogPosts().filter((candidate) => candidate.slug !== slug);
  const sameCategory = others.filter((candidate) => categorySlugOf(candidate) === categorySlugOf(post));
  const rest = others.filter((candidate) => !sameCategory.includes(candidate));

  return [...sameCategory, ...rest].slice(0, limit);
}
