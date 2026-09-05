import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import { Container, JsonLd, MonoLabel, Section, TextLink } from '@/components/ui/primitives';
import { getBlogPost, getBlogPosts } from '@/lib/posts';
import { blogPostingSchema } from '@/lib/schema';
import { OG_IMAGE, SITE_LOCALE, SITE_NAME } from '@/lib/site';
import { sr } from '@/utils/translations/sr';

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    // A missing post must not be indexable, and must not inherit the section
    // title as if it were a real article.
    return { title: sr.notFound.title, robots: { index: false, follow: true } };
  }

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: SITE_LOCALE,
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.datetime,
      authors: [SITE_NAME],
      section: post.category.title,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [OG_IMAGE],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  // A slug that does not exist is a 404, not a page that renders an apology
  // with a 200 status. The old version returned 200 and was indexable.
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <Breadcrumbs
        trail={[
          { name: sr.navigation.blog, path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <Section first>
        <Container className='py-5 md:py-10'>
          <article className='mx-auto max-w-[720px]'>
            <MonoLabel tone='accent' as='p' className='text-[10.5px]'>
              {post.category.title}
            </MonoLabel>
            <h1 className='mt-3 text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] md:mt-[18px] md:text-[46px] md:tracking-[-0.03em]'>
              {post.title}
            </h1>

            <div className='mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-line-strong py-3 font-mono text-[11px] text-faint md:mt-[22px] md:py-3.5 md:text-[11.5px]'>
              <span className='text-ink-2'>{post.author.name}</span>
              <span aria-hidden='true'>·</span>
              <span>{post.readingTime}</span>
              <span aria-hidden='true'>·</span>
              <time dateTime={post.datetime}>{post.date}</time>
            </div>

            <div
              className='prose prose-lg mt-6 md:mt-7'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className='mt-8 bg-ink p-5 px-4 text-ink-text md:mt-10 md:p-8'>
              <p className='text-lg font-semibold tracking-[-0.015em] md:text-[22px]'>
                {sr.blog.inArticleCta.title}
              </p>
              <p className='mt-2.5 max-w-[52ch] text-[14.5px] leading-[1.6] text-ink-muted md:text-[15.5px]'>
                {sr.blog.inArticleCta.description}
              </p>
              <ContactActions ground='dark' solid='accent' size='md' className='mt-5 md:max-w-sm' />
            </div>

            <footer className='mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line-strong pt-5 md:mt-12 md:pt-6'>
              <p className='font-mono text-[11px] leading-relaxed text-faint md:text-[11.5px]'>
                {sr.blog.authorLabel}: {post.author.name}
                <br />
                {sr.blog.publishedLabel}: {post.date}
              </p>
              <TextLink href='/blog' className='text-sm md:text-[15px]'>
                {sr.blog.backButton} &rarr;
              </TextLink>
            </footer>
          </article>
        </Container>
      </Section>
    </>
  );
}
