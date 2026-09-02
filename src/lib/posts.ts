import { sr } from '@/utils/translations/sr';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  datetime: string;
  category: { title: string; href: string };
  author: { name: string };
  content: string;
};

export type BlogCategory = {
  slug: string;
  title: string;
  description: string;
};

export function getBlogPosts(): BlogPost[] {
  return Object.entries(sr.blog.posts).map(([slug, post]) => ({ slug, ...post }));
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
function categorySlugOf(post: BlogPost): string {
  return post.category.href.split('/').pop() ?? '';
}

export function getPostsByCategory(slug: string): BlogPost[] {
  return getBlogPosts().filter((post) => categorySlugOf(post) === slug);
}
