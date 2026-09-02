'use client';

import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  datetime: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
  };
}

type BlogPosts = Record<string, BlogPost>;

export default function BlogIndex() {
  const { t } = useTranslation();

  // Get all posts from all categories
  const posts = Object.entries(t('blog.posts') as unknown as BlogPosts).map(([slug, post]) => ({
    slug,
    ...post,
  }));

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

  return (
    <div className='bg-paper'>
      <div className='max-w-container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl'>
            {t('blog.title')}
          </h1>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-muted sm:mt-4'>{t('blog.description')}</p>
        </div>

        <div className='mt-12 grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8'>
          {sortedPosts.map((post) => (
            <div key={post.slug} className='flex flex-col rounded-2xl border border-line bg-paper-2 p-7'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
                <Link href={post.category.href} className='hover:underline'>
                  {post.category.title}
                </Link>
              </p>
              <Link href={`/blog/${post.slug}`} className='mt-3 block flex-1'>
                <p className='font-display text-lg font-bold tracking-[-0.03em] text-ink'>{post.title}</p>
                <p className='mt-2 text-sm leading-relaxed text-muted'>{post.description}</p>
              </Link>
              <div className='mt-6 flex items-center justify-between border-t border-line pt-4 text-sm'>
                <span className='font-medium text-ink'>{post.author.name}</span>
                <time dateTime={post.datetime} className='text-muted'>
                  {post.date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
