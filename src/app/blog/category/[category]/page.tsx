import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCategories, getCategory, getPostsByCategory } from '@/lib/posts';
import { OG_IMAGE } from '@/lib/site';
import { useTranslation } from '@/utils/i18n';

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
  const { t } = useTranslation();
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.slug);

  return (
    <div className='bg-paper'>
      <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h1 className='font-display text-3xl font-bold tracking-[-0.03em] text-ink'>{category.title}</h1>
          <p className='mt-4 text-xl text-muted'>{category.description}</p>

          <div className='mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8'>
            {posts.map((post) => (
              <div key={post.slug} className='group relative flex flex-col rounded-2xl border border-line bg-paper-2 p-7'>
                <h2 className='font-display text-lg font-bold tracking-[-0.03em] text-ink'>
                  <Link href={`/blog/${post.slug}`}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </Link>
                </h2>
                <p className='mt-2 text-sm leading-relaxed text-muted'>{post.description}</p>
                <div className='mt-6 flex items-center justify-between border-t border-line pt-4 text-sm'>
                  <span className='font-medium text-ink'>{post.author.name}</span>
                  <time dateTime={post.datetime} className='text-muted'>
                    {post.date}
                  </time>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-12'>
            <Link
              href='/blog'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-accent-ink bg-accent hover:brightness-110'
            >
              {t('blog.backButton')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
