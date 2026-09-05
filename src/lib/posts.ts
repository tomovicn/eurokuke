import { POSTS } from '@/content/posts';
import { sr } from '@/utils/translations/sr';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  datetime: string;
  readingTime: string;
  category: { title: string; href: string };
  author: { name: string };
  content: string;
};

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
