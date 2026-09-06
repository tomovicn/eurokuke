import Image from 'next/image';

import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import Faq from '@/components/Faq';
import { Card, Container, H2, MonoLabel, Section, TextLink } from '@/components/ui/primitives';
import { SALES_FAQ } from '@/lib/faq';
import { PHOTO_HEIGHT, PHOTO_WIDTH, PHOTOS } from '@/lib/site';
import { sr } from '@/utils/translations/sr';

const t = sr.sales;

export default function SalesPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: sr.navigation.sales, path: '/prodaja-auto-kuka' }]} />

      <Section first>
        <Container className='grid items-start gap-6 py-5 md:gap-16 md:py-10 lg:grid-cols-[1fr_420px]'>
          <div>
            <h1 className='max-w-[20ch] text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[52px] md:leading-[1.04] md:tracking-[-0.03em]'>
              {t.title}
            </h1>
            <p className='mt-3.5 max-w-[62ch] text-[15px] leading-[1.62] text-body md:mt-[22px] md:text-[18.5px] md:leading-[1.6]'>
              <span className='md:hidden'>{t.descriptionShort}</span>
              <span className='hidden md:inline'>{t.description}</span>
            </p>
          </div>

          <Card className='p-4 px-4 md:p-6'>
            <MonoLabel>{t.summary.label}</MonoLabel>
            <dl className='mt-3 md:mt-3.5'>
              {t.summary.rows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-4 py-2.5 text-[14.5px] md:py-[11px] md:text-[15px] ${
                    index < t.summary.rows.length - 1 ? 'border-b border-line' : ''
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
          <div>
            {/* What is in the box */}
            <H2>{t.includes.title}</H2>
            <ul className='mt-3.5 grid gap-px border border-line-strong bg-line md:mt-6 md:grid-cols-2'>
              {t.includes.items.map((item) => (
                <li key={item.title} className='bg-surface p-3.5 md:p-[22px]'>
                  <h3 className='text-[15.5px] font-semibold md:text-[17px]'>{item.title}</h3>
                  <p className='mt-1 text-[13.5px] leading-[1.55] text-muted md:mt-2 md:text-[14.5px]'>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            {/* Choosing the type. The one message worth repeating anywhere a
                hook can be bought without the vehicle present. */}
            <H2 className='mt-8 md:mt-14'>{t.choose.title}</H2>
            <p className='mt-3 max-w-[68ch] text-[15px] leading-[1.62] text-body md:mt-4 md:text-[17px] md:leading-[1.65]'>
              {t.choose.description}
            </p>
            <ul className='mt-3.5 flex flex-wrap gap-1.5 md:mt-5 md:gap-2'>
              {t.choose.items.map((item) => (
                <li
                  key={item}
                  className='border border-line-strong bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-chip text-ink-2 md:px-3.5 md:py-2 md:text-[11.5px]'
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className='mt-4 max-w-[68ch] text-[14.5px] leading-[1.6] text-body md:mt-5 md:text-[15.5px]'>
              {t.choose.note}
            </p>
            <Card accent className='mt-4 p-3.5 px-4 md:mt-5 md:p-6'>
              <p className='max-w-[64ch] text-[14.5px] leading-[1.6] text-body md:text-[15.5px]'>
                {t.choose.warning}
              </p>
            </Card>

            {/* Ordering */}
            <H2 className='mt-8 md:mt-14'>{t.order.title}</H2>
            <ol className='mt-3.5 grid border border-line-strong bg-line md:mt-6 md:grid-cols-3 md:gap-px'>
              {t.order.steps.map((step, index) => (
                <li
                  key={step.title}
                  className='border-b border-line bg-surface p-3.5 last:border-b-0 md:border-b-0 md:p-6'
                >
                  <span className='font-mono text-[11px] text-accent'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='mt-2 text-[15.5px] font-semibold md:mt-3.5 md:text-lg'>{step.title}</h3>
                  <p className='mt-1.5 text-[13.5px] leading-[1.55] text-muted md:mt-2 md:text-[14.5px]'>
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>

            {/* Delivery and returns. The two things a buyer at a distance asks
                first, and the page could answer neither. */}
            <H2 className='mt-8 md:mt-14'>{t.delivery.title}</H2>
            <ul className='mt-3.5 grid gap-px border border-line-strong bg-line md:mt-6 md:grid-cols-3'>
              {t.delivery.items.map((item) => (
                <li key={item.title} className='bg-surface p-3.5 md:p-[22px]'>
                  <h3 className='text-[15.5px] font-semibold md:text-[17px]'>{item.title}</h3>
                  <p className='mt-1 text-[13.5px] leading-[1.55] text-muted md:mt-2 md:text-[14.5px]'>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            {/* Fitting, which stays in Belgrade */}
            <H2 className='mt-8 md:mt-14'>{t.install.title}</H2>
            <p className='mt-3 max-w-[68ch] text-[15px] leading-[1.62] text-body md:mt-4 md:text-[17px] md:leading-[1.65]'>
              {t.install.description}
            </p>
            <p className='mt-3 text-sm md:mt-4 md:text-[15px]'>
              <TextLink href='/installation'>{t.install.linkLabel} &rarr;</TextLink>
            </p>

            {/* FAQ */}
            <H2 className='mt-8 md:mt-14'>{t.faq.title}</H2>
            <div className='mt-3.5 md:mt-5'>
              <Faq entries={SALES_FAQ} />
            </div>
          </div>

          <aside className='lg:sticky lg:top-28'>
            <div className='relative aspect-[3/4]'>
              <Image
                src={PHOTOS.detachable}
                alt={t.photoAlt}
                width={PHOTO_WIDTH}
                height={PHOTO_HEIGHT}
                sizes='(min-width: 1024px) 420px, 100vw'
                className='h-full w-full object-cover'
              />
              <span className='absolute bottom-3 right-3 bg-surface px-[7px] py-[5px] font-mono text-[9.5px] tracking-[0.06em] text-ink'>
                {t.photoBadge}
              </span>
            </div>

            <Card className='mt-2.5 p-4 px-4 md:mt-5 md:p-6'>
              <H2 className='md:text-[26px]'>{t.cta.title}</H2>
              <p className='mt-2 text-[14.5px] leading-[1.6] text-body md:mt-3 md:text-[15.5px]'>
                {t.cta.description}
              </p>
              <ContactActions solid='ink' size='md' arrow className='mt-4 md:mt-5' />
            </Card>
          </aside>
        </Container>
      </Section>
    </>
  );
}
