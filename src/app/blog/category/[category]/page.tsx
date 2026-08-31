import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCategories, getCategory, getPostsByCategory } from '@/lib/posts';
import { OG_IMAGE } from '@/lib/site';

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategory(params.category);

  if (!category) {
    return {
      title: 'Kategorija Nije Pronađena | Ugradnja Euro Kuka',
      robots: { index: false, follow: true },
    };
  }

  const url = `/blog/category/${category.slug}`;

  return {
    title: `${category.title} | Blog o Euro Kukama`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'sr_RS',
      url,
      title: `${category.title} | Blog o Euro Kukama`,
      description: category.description,
      images: [OG_IMAGE],
    },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.slug);

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h1 className='text-3xl font-bold text-gray-900'>{category.title}</h1>
          <p className='mt-4 text-xl text-gray-500'>{category.description}</p>

          <div className='mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {posts.map((post) => (
              <div key={post.slug} className='group relative'>
                <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                  <Image
                    src={`/images/blog/post.png`}
                    alt={post.title}
                    className='h-full w-full object-cover object-center'
                    width={400}
                    height={300}
                  />
                </div>
                <h2 className='mt-6 text-lg font-semibold text-gray-900'>
                  <Link href={`/blog/${post.slug}`}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </Link>
                </h2>
                <p className='text-sm text-gray-500'>
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <p className='mt-2 text-sm text-gray-500'>{post.description}</p>
              </div>
            ))}
          </div>

          <div className='mt-12'>
            <Link
              href='/blog'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700'
            >
              Nazad na Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
