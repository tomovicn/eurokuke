import Link from 'next/link';

import { Container, JsonLd } from '@/components/ui/primitives';
import { breadcrumbSchema, type Crumb } from '@/lib/schema';
import { sr } from '@/utils/translations/sr';

/**
 * The visible trail and its BreadcrumbList JSON-LD are rendered from one array,
 * so the markup can never describe a path the page does not show.
 *
 * Pass the trail below the homepage; the Početna crumb is added here.
 */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const crumbs: Crumb[] = [{ name: sr.navigation.home, path: '/' }, ...trail];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Container className='pt-3.5 md:pt-5'>
        <nav aria-label='Breadcrumb'>
          <ol className='flex flex-wrap items-center gap-x-1.5 font-mono text-[10.5px] tracking-[0.06em] text-faint md:text-[11px]'>
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <li key={crumb.path} className='flex items-center gap-x-1.5'>
                  {isLast ? (
                    <span className='text-ink-2' aria-current='page'>
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.path} className='transition-colors hover:text-ink-2'>
                      {crumb.name}
                    </Link>
                  )}
                  {!isLast && <span aria-hidden='true'>/</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </>
  );
}
