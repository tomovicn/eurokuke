import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, Container, MonoLabel, Section, TextLink } from '@/components/ui/primitives';
import { getCategories, getCategory, getPostsByCategory } from '@/lib/posts';
import { OG_IMAGE, SITE_LOCALE } from '@/lib/site';
import { sr } from '@/utils/translations/sr';

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategory(params.category);

  if (!category) {
    return { title: sr.notFound.title, robots: { index: false, follow: true } };
  }

  const url = `/blog/category/${category.slug}`;

  return {
    title: `${category.title}: euro kuka i vuča prikolice`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: SITE_LOCALE,
      url,
      title: category.title,
      description: category.description,
      images: [OG_IMAGE],
    },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: sr.navigation.blog, path: '/blog' },
          { name: category.title, path: `/blog/category/${category.slug}` },
        ]}
      />

      <Section first>
        <Container className='py-5 md:py-14'>
          <h1 className='text-[30px] font-semibold leading-[1.06] tracking-[-0.025em] md:text-5xl md:tracking-[-0.03em]'>
            {category.title}
          </h1>
          <p className='mt-3 max-w-[56ch] text-[15px] leading-[1.6] text-body md:mt-[18px] md:text-[18px]'>
            {category.description}
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul className='grid gap-2.5 md:grid-cols-3 md:gap-5'>
            {posts.map((post) => (
              <li key={post.slug}>
                <Card className='h-full'>
                  <Link href={`/blog/${post.slug}`} className='flex h-full flex-col gap-3 p-4 px-4 md:gap-3.5 md:p-7'>
                    <MonoLabel tone='accent' as='span' className='text-[10px]'>
                      {post.category.title}
                    </MonoLabel>
                    <h2 className='text-[18px] font-semibold leading-[1.2] tracking-[-0.015em] md:text-[22px]'>
                      {post.title}
                    </h2>
                    <p className='text-[14px] leading-[1.6] text-body md:text-[15px]'>{post.description}</p>
                    <p className='mt-auto font-mono text-[11px] text-faint'>{post.readingTime}</p>
                  </Link>
                </Card>
              </li>
            ))}
          </ul>

          <p className='mt-6 text-sm md:mt-8 md:text-[15px]'>
            <TextLink href='/blog'>{sr.blog.backButton} &rarr;</TextLink>
          </p>
        </Container>
      </Section>
    </>
  );
}
