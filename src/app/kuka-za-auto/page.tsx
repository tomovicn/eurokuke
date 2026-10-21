import type { Metadata } from 'next';
import Link from 'next/link';

import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import { Card, Chip, Container, H2, MonoLabel, Section, TextLink } from '@/components/ui/primitives';
import { VEHICLES } from '@/content/vozila';
import { OG_IMAGE, SITE_LOCALE } from '@/lib/site';
import { VEHICLE_BRANDS } from '@/lib/vehicles';
import { sr } from '@/utils/translations/sr';

const t = sr.vehicles.hub;

/*
 * The hub for the per-model pages, and the page written for `kuka za auto`,
 * the broadest search in the niche. A Serbian slug for the same reason as
 * /prodaja-auto-kuka: no history to protect, so it gets the words people type.
 */
export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: '/kuka-za-auto' },
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: '/kuka-za-auto',
    title: t.metaTitle,
    description: t.metaDescription,
    images: [OG_IMAGE],
  },
};

export default function VehiclesHubPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: t.breadcrumb, path: '/kuka-za-auto' }]} />

      <Section first>
        <Container className='py-5 md:py-10'>
          <h1 className='max-w-[20ch] text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[52px] md:leading-[1.04] md:tracking-[-0.03em]'>
            {t.title}
          </h1>
          <p className='mt-3.5 max-w-[62ch] text-[15px] leading-[1.62] text-body md:mt-[22px] md:text-[18.5px] md:leading-[1.6]'>
            {t.description}
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>{t.modelsTitle}</H2>
          <ul className='mt-3.5 grid gap-2.5 md:mt-6 md:grid-cols-2 md:gap-5 lg:grid-cols-3'>
            {VEHICLES.map((vehicle) => (
              <li key={vehicle.slug}>
                <Link href={`/kuka-za-auto/${vehicle.slug}`} className='group block h-full'>
                  <Card accent className='h-full p-3.5 px-4 transition-colors group-hover:bg-paper md:p-6'>
                    <MonoLabel>{vehicle.years}</MonoLabel>
                    <h3 className='mt-1.5 text-[17px] font-semibold md:mt-2 md:text-[21px]'>
                      {t.cardPrefix} {vehicle.name}
                    </h3>
                    <p className='mt-1.5 text-[13.5px] leading-[1.55] text-muted md:mt-2.5 md:text-[14.5px]'>
                      {vehicle.description}
                    </p>
                    <span className='mt-3 inline-block text-sm text-accent md:mt-4'>{t.cardLink} &rarr;</span>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className='grid items-start gap-8 md:gap-16 lg:grid-cols-[1fr_420px]'>
          <div>
            {/* Every other make. The list is the one already on the homepage,
                in the workshop's own order. */}
            <H2>{t.otherTitle}</H2>
            <p className='mt-3 max-w-[68ch] text-[15px] leading-[1.62] text-body md:mt-4 md:text-[17px] md:leading-[1.65]'>
              {t.otherDescription}
            </p>
            <ul className='mt-3.5 flex flex-wrap gap-1.5 md:mt-5 md:gap-2'>
              {VEHICLE_BRANDS.map((brand) => (
                <li key={brand}>
                  <Chip>{brand}</Chip>
                </li>
              ))}
            </ul>

            {/* The three numbers, in short. The long version is the towing
                article, which these pages all point back to. */}
            <H2 className='mt-8 md:mt-14'>{t.checkTitle}</H2>
            <ol className='mt-3.5 grid border border-line-strong bg-line md:mt-6 md:grid-cols-3 md:gap-px'>
              {t.checkSteps.map((step, index) => (
                <li
                  key={step.title}
                  className='border-b border-line bg-surface p-3.5 last:border-b-0 md:border-b-0 md:p-6'
                >
                  <span className='font-mono text-[11px] text-accent'>{String(index + 1).padStart(2, '0')}</span>
                  <h3 className='mt-2 text-[15.5px] font-semibold md:mt-3.5 md:text-lg'>{step.title}</h3>
                  <p className='mt-1.5 text-[13.5px] leading-[1.55] text-muted md:mt-2 md:text-[14.5px]'>
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <p className='mt-3 text-sm md:mt-4 md:text-[15px]'>
              <TextLink href='/blog/vuca-prikolice-masa-i-kategorija'>{t.checkLink} &rarr;</TextLink>
            </p>
          </div>

          <aside className='lg:sticky lg:top-28'>
            <div className='bg-ink p-4 px-4 text-ink-text md:p-6'>
              <p className='text-lg font-semibold md:text-[19px]'>{t.aside.title}</p>
              <p className='mt-2 text-sm leading-[1.55] text-ink-muted md:mt-2.5 md:text-[14.5px]'>
                {t.aside.description}
              </p>
              <ContactActions ground='dark' solid='accent' size='md' className='mt-4 md:mt-[18px]' />
            </div>
            <div className='mt-4 flex flex-col gap-2 text-sm md:text-[15px]'>
              <TextLink href='/installation'>{t.installLink} &rarr;</TextLink>
              <TextLink href='/prodaja-auto-kuka'>{t.salesLink} &rarr;</TextLink>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
