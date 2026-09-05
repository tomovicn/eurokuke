import Image from 'next/image';

import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import Faq from '@/components/Faq';
import { SolidAction } from '@/components/ui/Actions';
import { Card, Container, H2, MonoLabel, Section } from '@/components/ui/primitives';
import { TEL_HREF } from '@/lib/contact';
import { INSTALLATION_FAQ } from '@/lib/faq';
import { PHOTO_HEIGHT, PHOTO_WIDTH, PHOTOS } from '@/lib/site';
import { sr } from '@/utils/translations/sr';

const t = sr.installation;

export default function InstallationPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: sr.navigation.installation, path: '/installation' }]} />

      {/* Hero */}
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
            {/* What the job includes */}
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

            {/* Fixed or detachable */}
            <H2 className='mt-8 md:mt-14'>{t.types.title}</H2>
            <ul className='mt-3.5 grid gap-2.5 md:mt-6 md:grid-cols-2 md:gap-5'>
              {t.types.items.map((item) => (
                <li key={item.title}>
                  <Card accent className='h-full p-3.5 px-4 md:p-6'>
                    <h3 className='text-[15.5px] font-semibold md:text-[19px]'>{item.title}</h3>
                    <p className='mt-1.5 text-[13.5px] leading-[1.55] text-body md:mt-2.5 md:text-[15px] md:leading-[1.6]'>
                      {item.description}
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-sm text-muted md:mt-4 md:text-[15px]'>{t.types.note}</p>

            {/* Which makers. People search the maker names directly and the
                page had one sentence about all three. */}
            <H2 className='mt-8 md:mt-14'>{t.brands.title}</H2>
            <p className='mt-3 max-w-[68ch] text-[15px] leading-[1.62] text-body md:mt-4 md:text-[17px] md:leading-[1.65]'>
              {t.brands.description}
            </p>
            <ul className='mt-3.5 grid gap-px border border-line-strong bg-line md:mt-6 md:grid-cols-3'>
              {t.brands.items.map((item) => (
                <li key={item.title} className='bg-surface p-3.5 md:p-[22px]'>
                  <h3 className='text-[15.5px] font-semibold md:text-[17px]'>{item.title}</h3>
                  <p className='mt-1 text-[13.5px] leading-[1.55] text-muted md:mt-2 md:text-[14.5px]'>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-sm text-muted md:mt-4 md:text-[15px]'>{t.brands.note}</p>

            {/* Atest */}
            <H2 className='mt-8 md:mt-14'>{t.atest.title}</H2>
            <p className='mt-3 max-w-[68ch] text-[15px] leading-[1.62] text-body md:mt-4 md:text-[17px] md:leading-[1.65]'>
              {t.atest.description}
            </p>
            <Card className='mt-4 p-4 px-4 md:mt-5 md:p-6'>
              <MonoLabel>{t.atest.orderLabel}</MonoLabel>
              <ol className='mt-3 grid md:mt-4 md:grid-cols-3'>
                {t.atest.order.map((step, index) => (
                  <li
                    key={step.title}
                    className={`border-b border-line py-3 last:border-b-0 md:border-b-0 md:py-0 ${
                      index < t.atest.order.length - 1 ? 'md:border-r md:border-line md:pr-5' : ''
                    } ${index > 0 ? 'md:pl-5' : ''}`}
                  >
                    <span className='font-mono text-[11px] text-accent'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className='mt-1.5 text-[15.5px] font-semibold md:mt-2'>{step.title}</h3>
                    <p className='mt-1 text-sm leading-[1.5] text-muted md:mt-1.5'>{step.description}</p>
                  </li>
                ))}
              </ol>
            </Card>

            {/* What moves the price. No numbers until there are published
                ones, but the question is answered rather than ignored. */}
            <H2 className='mt-8 md:mt-14'>{t.price.title}</H2>
            <p className='mt-3 max-w-[68ch] text-[15px] leading-[1.62] text-body md:mt-4 md:text-[17px] md:leading-[1.65]'>
              {t.price.description}
            </p>
            <ul className='mt-3.5 grid gap-px border border-line-strong bg-line md:mt-6 md:grid-cols-2'>
              {t.price.items.map((item) => (
                <li key={item.title} className='bg-surface p-3.5 md:p-[22px]'>
                  <h3 className='text-[15.5px] font-semibold md:text-[17px]'>{item.title}</h3>
                  <p className='mt-1 text-[13.5px] leading-[1.55] text-muted md:mt-2 md:text-[14.5px]'>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-sm text-muted md:mt-4 md:text-[15px]'>{t.price.note}</p>

            {/* FAQ */}
            <H2 className='mt-8 md:mt-14'>{t.faq.title}</H2>
            <div className='mt-3.5 md:mt-5'>
              <Faq entries={INSTALLATION_FAQ} />
            </div>
          </div>

          {/* Price aside. Sticky on desktop so the answer to "koliko košta"
              stays reachable through a long page. */}
          <aside className='lg:sticky lg:top-28'>
            {/* One photograph of finished work above the price card. It answers
                the question the copy cannot: what it looks like when it is
                done. Hidden below lg, where the card is already the third
                thing on a long scroll and does not need a picture on top. */}
            <div className='relative hidden aspect-[3/4] bg-ink lg:block'>
              <Image
                src={PHOTOS.boot}
                alt={t.aside.photoAlt}
                width={PHOTO_WIDTH}
                height={PHOTO_HEIGHT}
                sizes='(min-width: 1024px) 340px, 100vw'
                className='h-full w-full object-cover'
              />
              <span className='absolute bottom-3 left-3 bg-surface px-[7px] py-[5px] font-mono text-[10px] tracking-[0.06em] text-ink'>
                {t.aside.photoBadge}
              </span>
            </div>
            <div className='bg-ink p-4 px-4 text-ink-text md:p-6'>
              <p className='text-lg font-semibold md:text-[19px]'>{t.aside.title}</p>
              <p className='mt-2 text-sm leading-[1.55] text-ink-muted md:mt-2.5 md:text-[14.5px]'>
                <span className='md:hidden'>{t.aside.descriptionShort}</span>
                <span className='hidden md:inline'>{t.aside.description}</span>
              </p>
              <ContactActions ground='dark' solid='accent' size='md' className='mt-4 md:mt-[18px]' />
            </div>
          </aside>
        </Container>
      </Section>

      {/* CTA band */}
      <Section>
        <Container>
          <Card className='flex flex-col gap-4 p-4 px-4 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10'>
            <H2 className='max-w-[24ch] md:text-[32px] md:leading-[1.12]'>{t.cta.title}</H2>
            <SolidAction
              href={TEL_HREF}
              tone='accent'
              size='md'
              block={false}
              className='w-full justify-center md:h-[60px] md:w-auto md:px-7 md:text-[19px]'
            >
              {sr.actions.callAppointment}
            </SolidAction>
          </Card>
        </Container>
      </Section>
    </>
  );
}
