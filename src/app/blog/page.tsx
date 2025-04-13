'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    role: string;
  };
}

export default function BlogIndex() {
  const { t } = useTranslation();

  // Get all posts from all categories
  const posts = Object.entries(t('blog.posts') as unknown as Record<string, BlogPost>).map(([slug, post]) => ({
    slug,
    ...post,
  }));

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>{t('blog.title')}</h1>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>{t('blog.description')}</p>
        </div>

        <div className='mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
          {sortedPosts.map((post) => (
            <div key={post.slug} className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                <Image
                  src={`/images/blog/${post.slug}.jpg`}
                  alt={post.title}
                  width={400}
                  height={225}
                  className='h-48 w-full object-cover'
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-red-600'>
                    <Link href={post.category.href} className='hover:underline'>
                      {post.category.title}
                    </Link>
                  </p>
                  <Link href={`/blog/${post.slug}`} className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
                    <p className='mt-3 text-base text-gray-500'>{post.description}</p>
                  </Link>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <span className='sr-only'>{post.author.name}</span>
                  </div>
                  <div className='ml-0'>
                    <p className='text-sm font-medium text-gray-900'>{post.author.name}</p>
                    <p className='text-sm text-gray-500'>{post.author.role}</p>
                  </div>
                  <div className='ml-auto'>
                    <time dateTime={post.datetime} className='text-sm text-gray-500'>
                      {post.date}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
