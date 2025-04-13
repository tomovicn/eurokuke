'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';

interface BlogPost {
  title: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  content: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { t } = useTranslation();
  const post = t(`blog.posts.${params.slug}`) as unknown as BlogPost;

  if (!post) {
    return (
      <div className='bg-white min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900'>{t('blog.notFound.title')}</h1>
          <p className='mt-4 text-xl text-gray-500'>{t('blog.notFound.description')}</p>
          <Link
            href='/blog'
            className='mt-6 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700'
          >
            {t('blog.notFound.backButton')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <article>
            <header className='mb-8'>
              <h1 className='text-4xl font-bold text-gray-900'>{post.title}</h1>
              <div className='mt-4 flex items-center'>
                <div className='flex-shrink-0'>
                  <span className='sr-only'>{post.author.name}</span>
                  <div className='h-10 w-10 rounded-full bg-gray-200' />
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>{post.author.name}</p>
                  <p className='text-sm text-gray-500'>{post.author.role}</p>
                </div>
                <div className='ml-auto'>
                  <p className='text-sm text-gray-500'>{post.date}</p>
                </div>
              </div>
            </header>

            <div className='prose prose-lg prose-red mx-auto'>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className='mt-12'>
              <Link
                href='/blog'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700'
              >
                {t('blog.backButton')}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
