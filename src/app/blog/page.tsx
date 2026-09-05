import Link from 'next/link';

import Breadcrumbs from '@/components/Breadcrumbs';
import { SolidAction } from '@/components/ui/Actions';
import { Card, Container, MonoLabel, Section } from '@/components/ui/primitives';
import { TEL_HREF } from '@/lib/contact';
import { getCategories, getFeaturedAndRest, type BlogPost } from '@/lib/posts';
import { sr } from '@/utils/translations/sr';

const t = sr.blog;

/**
 * The lead article. Two columns of type, not a headline beside a picture: there
 * is exactly one photograph in this project and it is the homepage hero, so a
 * second column reserved for an image would be a permanently empty box.
 * Splitting title from summary uses the width and still says something.
 */
function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Card>
      <Link href={`/blog/${post.slug}`} className='grid gap-4 p-4 px-4 md:grid-cols-[1.1fr_1fr] md:gap-12 md:p-10'>
        <div>
          <MonoLabel tone='accent' as='span'>
            {post.category.title}
          </MonoLabel>
          <h2 className='mt-3 text-[22px] font-semibold leading-[1.12] tracking-[-0.02em] md:mt-4 md:text-[34px] md:tracking-[-0.025em]'>
            {post.title}
          </h2>
        </div>
        <div className='md:border-l md:border-line md:pl-12'>
          <p className='text-[14.5px] leading-[1.6] text-body md:text-[16.5px]'>{post.description}</p>
          <p className='mt-4 font-mono text-[11px] text-faint md:mt-6'>
            {post.author.name} · {post.readingTime} ·{' '}
            <time dateTime={post.datetime}>{post.date}</time>
          </p>
        </div>
      </Link>
    </Card>
  );
}

export default function BlogIndex() {
  const { featured, rest } = getFeaturedAndRest();
  const categories = getCategories();

  return (
    <>
      <Breadcrumbs trail={[{ name: sr.navigation.blog, path: '/blog' }]} />

      <Section first>
        <Container className='py-5 md:flex md:items-end md:justify-between md:gap-10 md:pb-1 md:pt-10'>
          <div>
            <h1 className='text-[30px] font-semibold leading-[1.06] tracking-[-0.025em] md:text-5xl md:tracking-[-0.03em]'>
              {t.title}
            </h1>
            <p className='mt-3 max-w-[56ch] text-[15px] leading-[1.6] text-body md:mt-[18px] md:text-[18px]'>
              {t.description}
            </p>
          </div>

          <nav aria-label={t.allLabel} className='mt-4 flex flex-wrap gap-2 md:mt-0 md:shrink-0'>
            <span className='bg-ink px-3 py-2 font-mono text-[11px] uppercase tracking-chip text-ink-text'>
              {t.allLabel}
            </span>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className='border border-line-strong bg-surface px-3 py-2 font-mono text-[11px] uppercase tracking-chip text-ink-2 transition-colors hover:bg-paper-2'
              >
                {category.title}
              </Link>
            ))}
          </nav>
        </Container>
      </Section>

      <Section className='mt-4 md:mt-9'>
        <Container>
          {featured && <FeaturedPost post={featured} />}

          {rest.length > 0 && (
            <ul className='mt-2.5 grid gap-2.5 md:mt-5 md:grid-cols-3 md:gap-5'>
              {rest.map((post) => (
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
          )}
        </Container>
      </Section>

      <Section>
        <Container>
          <div className='flex flex-col gap-4 bg-ink p-5 px-4 text-ink-text md:flex-row md:items-center md:justify-between md:gap-10 md:p-9 md:px-10'>
            <div>
              <p className='text-xl font-semibold tracking-[-0.02em] md:text-[26px]'>{t.cta.title}</p>
              <p className='mt-2 text-[14.5px] text-ink-muted md:mt-2.5 md:text-base'>{t.cta.description}</p>
            </div>
            <SolidAction
              href={TEL_HREF}
              tone='accent'
              size='md'
              block={false}
              className='w-full justify-center md:h-[58px] md:w-auto md:px-[26px] md:text-lg'
            >
              {sr.actions.callAppointment}
            </SolidAction>
          </div>
        </Container>
      </Section>
    </>
  );
}
