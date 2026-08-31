import { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '@/lib/posts';
import { OG_IMAGE } from '@/lib/site';

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Nije Pronađen | Ugradnja Euro Kuka',
      robots: { index: false, follow: true },
    };
  }

  const url = `/blog/${post.slug}`;

  return {
    title: `${post.title} | Ugradnja Euro Kuka`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'sr_RS',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.datetime,
      authors: [post.author.name],
      section: post.category.title,
      images: ['/images/blog/post.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/images/blog/post.png'],
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
