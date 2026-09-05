import { MetadataRoute } from 'next';

import { getBlogPosts, getCategories, isCategoryIndexable } from '@/lib/posts';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();
  // The newest post's date stands in for the blog index and the category pages,
  // which have no date of their own but change whenever a post is added.
  const latestPost = posts[0] ? new Date(posts[0].datetime) : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/installation`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: latestPost, changeFrequency: 'weekly', priority: 0.7 },
  ];

  // Categories that carry a single post are noindex, and a noindex URL in the
  // sitemap is a Search Console warning rather than a ranking signal.
  const categoryRoutes: MetadataRoute.Sitemap = getCategories()
    .filter((category) => isCategoryIndexable(category.slug))
    .map((category) => ({
      url: `${SITE_URL}/blog/category/${category.slug}`,
      lastModified: latestPost,
      changeFrequency: 'monthly',
      priority: 0.5,
    }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.datetime),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  // /privacy is deliberately absent: it is noindex, and listing a noindex URL
  // in the sitemap is a Search Console warning, not a ranking signal.
  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
