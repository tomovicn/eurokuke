import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import Faq from '@/components/Faq';
import { Card, Container, H2, JsonLd, MonoLabel, Section, TextLink } from '@/components/ui/primitives';
import { getVehicle, VEHICLES } from '@/content/vozila';
import { formatPostDate } from '@/lib/posts';
import { faqPageSchema, vehicleServiceSchema } from '@/lib/schema';
import { OG_IMAGE, SITE_LOCALE } from '@/lib/site';
import { sr } from '@/utils/translations/sr';

const t = sr.vehicles;

// Only the five pages in src/content/vozila.ts exist; anything else is a 404
// rather than an empty template.
export const dynamicParams = false;

export function generateStaticParams() {
  return VEHICLES.map((vehicle) => ({ model: vehicle.slug }));
}

export function generateMetadata({ params }: { params: { model: string } }): Metadata {
  const vehicle = getVehicle(params.model);
  if (!vehicle) return { title: sr.notFound.title, robots: { index: false, follow: true } };

  const path = `/kuka-za-auto/${vehicle.slug}`;
  return {
    title: vehicle.title,
    description: vehicle.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      locale: SITE_LOCALE,
      url: path,
      title: vehicle.title,
      description: vehicle.description,
      images: [OG_IMAGE],
    },
  };
}

const bodyText = 'max-w-[68ch] text-[15px] leading-[1.62] text-body md:text-[17px] md:leading-[1.65]';

export default function VehiclePage({ params }: { params: { model: string } }) {
  const vehicle = getVehicle(params.model);
  if (!vehicle) notFound();

  return (
    <>
      <JsonLd data={vehicleServiceSchema(vehicle)} />
      <JsonLd data={faqPageSchema(vehicle.faq)} />
      <Breadcrumbs
        trail={[
          { name: t.hub.breadcrumb, path: '/kuka-za-auto' },
          { name: vehicle.shortName, path: `/kuka-za-auto/${vehicle.slug}` },
        ]}
      />

      <Section first>
        <Container className='grid items-start gap-6 py-5 md:gap-16 md:py-10 lg:grid-cols-[1fr_420px]'>
          <div>
            <MonoLabel tone='accent'>{vehicle.years}</MonoLabel>
            <h1 className='mt-2 max-w-[20ch] text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] md:mt-3 md:text-[52px] md:leading-[1.04] md:tracking-[-0.03em]'>
              {t.page.h1Prefix} {vehicle.name}
            </h1>
            <p className='mt-3.5 max-w-[62ch] text-[15px] leading-[1.62] text-body md:mt-[22px] md:text-[18.5px] md:leading-[1.6]'>
              {vehicle.intro}
            </p>
          </div>

          <Card className='p-4 px-4 md:p-6'>
            <MonoLabel>{t.page.summaryLabel}</MonoLabel>
            <dl className='mt-3 md:mt-3.5'>
              {vehicle.summary.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-4 py-2.5 text-[14.5px] md:py-[11px] md:text-[15px] ${
                    index < vehicle.summary.length - 1 ? 'border-b border-line' : ''
                  }`}
                >
                  <dt className='text-muted'>{row.label}</dt>
                  <dd className='text-right font-medium'>{row.value}</dd>
                </div>
              ))}
            </dl>
            <ContactActions solid='ink' size='md' className='mt-5' />
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className='grid items-start gap-8 md:gap-16 lg:grid-cols-[1fr_420px]'>
          {/* min-w-0: a grid item will not shrink below its content otherwise,
              and the towing table would widen the page instead of scrolling
              inside its own box. */}
          <div className='min-w-0'>
            {/* Which mechanisms exist. Leads the page because it is the first
                thing the workshop has to settle, before price. */}
            <H2>{t.page.variantsTitle.replace('{name}', vehicle.shortName)}</H2>
            <p className={`mt-3 md:mt-4 ${bodyText}`}>{vehicle.variants.intro}</p>
            <ul className='mt-3.5 grid gap-px border border-line-strong bg-line md:mt-6'>
              {vehicle.variants.items.map((item) => (
                <li
                  key={item.fitment}
                  className='flex flex-col gap-1 bg-surface p-3.5 md:flex-row md:items-baseline md:justify-between md:gap-6 md:p-[22px]'
                >
                  <h3 className='text-[15.5px] font-semibold md:text-[17px]'>{item.fitment}</h3>
                  <p className='text-[13.5px] text-muted md:shrink-0 md:text-right md:text-[14.5px]'>{item.types}</p>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-sm text-muted md:mt-4 md:text-[15px]'>{vehicle.variants.note}</p>

            {/* Towing limits. Ranges unless the manufacturer publishes the
                figure, and always sent back to the registration document. */}
            <H2 className='mt-8 md:mt-14'>{t.page.towingTitle.replace('{name}', vehicle.shortName)}</H2>
            {vehicle.towing.paragraphs.map((paragraph) => (
              <p key={paragraph} className={`mt-3 md:mt-4 ${bodyText}`}>
                {paragraph}
              </p>
            ))}
            {vehicle.towing.table && (
              <div className='mt-4 overflow-x-auto md:mt-6'>
                <table className='w-full min-w-[480px] border border-line-strong bg-surface text-left text-[13.5px] md:text-[14.5px]'>
                  <caption className='pb-2 text-left font-mono text-[10.5px] uppercase tracking-label text-faint md:text-[11px]'>
                    {vehicle.towing.table.caption}
                  </caption>
                  <thead>
                    <tr className='border-b border-line-strong'>
                      {vehicle.towing.table.head.map((cell) => (
                        <th key={cell} scope='col' className='px-3 py-2.5 font-semibold md:px-4'>
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {vehicle.towing.table.rows.map((row) => (
                      <tr key={row[0]} className='border-b border-line last:border-b-0'>
                        {row.map((cell, index) => (
                          <td key={index} className={`px-3 py-2.5 md:px-4 ${index === 0 ? 'font-medium' : 'text-body'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <Card accent className='mt-4 p-3.5 px-4 md:mt-5 md:p-6'>
              <p className='max-w-[64ch] text-[14.5px] leading-[1.6] text-body md:text-[15.5px]'>
                {t.page.towingWarning}{' '}
                <TextLink href='/blog/vuca-prikolice-masa-i-kategorija'>{t.page.towingLink}</TextLink>.
              </p>
            </Card>

            {/* Wiring */}
            <H2 className='mt-8 md:mt-14'>{t.page.wiringTitle}</H2>
            {vehicle.wiring.map((paragraph) => (
              <p key={paragraph} className={`mt-3 md:mt-4 ${bodyText}`}>
                {paragraph}
              </p>
            ))}
            <p className='mt-3 text-sm md:mt-4 md:text-[15px]'>
              <TextLink href='/blog/elektro-instalacija-za-auto-kuku'>{t.page.wiringLink} &rarr;</TextLink>
            </p>

            {/* Model-specific notes */}
            <H2 className='mt-8 md:mt-14'>{vehicle.notes.title}</H2>
            <ul className='mt-3.5 grid gap-px border border-line-strong bg-line md:mt-6'>
              {vehicle.notes.items.map((item) => (
                <li key={item} className='bg-surface p-3.5 text-[14.5px] leading-[1.6] text-body md:p-[22px] md:text-[15.5px]'>
                  {item}
                </li>
              ))}
            </ul>

            {/* FAQ. Questions are written per model, so no two FAQPage blocks
                on the site describe the same content. */}
            <H2 className='mt-8 md:mt-14'>{t.page.faqTitle.replace('{name}', vehicle.shortName)}</H2>
            <div className='mt-3.5 md:mt-5'>
              <Faq entries={vehicle.faq} />
            </div>

            {/* Sources. Every figure above comes from one of these, which is
                the difference between this page and a template. */}
            <H2 className='mt-8 md:mt-14'>{t.page.sourcesTitle}</H2>
            <p className='mt-3 text-sm text-muted md:mt-4 md:text-[15px]'>
              {t.page.sourcesNote.replace('{date}', formatPostDate(vehicle.checked))}
            </p>
            <ul className='mt-3 grid gap-2 text-sm md:mt-4 md:text-[15px]'>
              {vehicle.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    rel='nofollow noopener'
                    target='_blank'
                    className='border-b border-accent-soft text-accent transition-colors hover:border-accent'
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside className='lg:sticky lg:top-28'>
            <div className='bg-ink p-4 px-4 text-ink-text md:p-6'>
              <p className='text-lg font-semibold md:text-[19px]'>{t.page.aside.title}</p>
              <p className='mt-2 text-sm leading-[1.55] text-ink-muted md:mt-2.5 md:text-[14.5px]'>
                {t.page.aside.description}
              </p>
              <ContactActions ground='dark' solid='accent' size='md' className='mt-4 md:mt-[18px]' />
            </div>
            <p className='mt-4 text-sm md:text-[15px]'>
              <TextLink href='/kuka-za-auto'>&larr; {t.page.backLink}</TextLink>
            </p>
          </aside>
        </Container>
      </Section>
    </>
  );
}
