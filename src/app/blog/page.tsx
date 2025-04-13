'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/utils/i18n';

const blogSlugs = ['euro-towbar-certification', 'choosing-right-towbar', 'professional-installation'];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h2 className='text-3xl font-bold text-gray-900'>{t('blog.latestArticles')}</h2>

          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {blogSlugs.map((slug, index) => {
              const post = t(`blog.posts.${slug}`);
              return (
                <div key={slug} className='group relative'>
                  <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                    <Image
                      src={`/images/blog/${index + 1}.jpg`}
                      alt={post.title}
                      className='h-full w-full object-cover object-center'
                      width={400}
                      height={300}
                    />
                  </div>
                  <h3 className='mt-6 text-lg font-semibold text-gray-900'>
                    <Link href={`/blog/${slug}`}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </Link>
                  </h3>
                  <p className='text-base font-semibold text-gray-900'>{post.author.name}</p>
                  <p className='text-sm text-gray-500'>{post.date}</p>
                  <p className='mt-2 text-sm text-gray-500'>{post.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
