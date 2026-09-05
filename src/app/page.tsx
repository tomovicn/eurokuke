import Image from 'next/image';

import BrandStrip from '@/components/BrandStrip';
import ContactActions from '@/components/ContactActions';
import Faq from '@/components/Faq';
import HoursTable from '@/components/HoursTable';
import { GhostAction, SolidAction } from '@/components/ui/Actions';
import { Card, Chip, Container, H2, JsonLd, MonoLabel, Section, TextLink } from '@/components/ui/primitives';
import { TEL_HREF, VIBER_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { HOME_FAQ } from '@/lib/faq';
import { faqPageSchema, localBusinessSchema } from '@/lib/schema';
import { HERO_IMAGE, HERO_IMAGE_HEIGHT, HERO_IMAGE_WIDTH } from '@/lib/site';
import { VEHICLE_BRANDS } from '@/lib/vehicles';
import { sr } from '@/utils/translations/sr';

const t = sr.home;

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqPageSchema(HOME_FAQ)} />

      {/* Hero. The h1 is the only one on the page. */}
      <Section first>
        <Container className='grid items-start gap-8 py-8 md:gap-16 md:py-[72px] lg:grid-cols-[1fr_520px]'>
          <div>
            <MonoLabel tone='accent'>{t.hero.eyebrow}</MonoLabel>
            <h1 className='mt-3 max-w-[12ch] text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] md:mt-[18px] md:text-6xl md:leading-[1.02] md:tracking-[-0.03em]'>
              {t.hero.title}
            </h1>
            <p className='mt-3.5 max-w-[46ch] text-[15px] leading-[1.62] text-body md:mt-6 md:text-[18.5px] md:leading-[1.58]'>
              {t.hero.description}
            </p>

            <ul className='mt-[18px] flex flex-wrap gap-1.5 md:mt-7 md:gap-2'>
              {t.hero.chips.map((chip) => (
                <li key={chip}>
                  <Chip>{chip}</Chip>
                </li>
              ))}
            </ul>

            {/* One primary action. Viber and WhatsApp sit beside it on desktop
                and beneath it on mobile, always bordered, never accent. */}
            <div className='mt-[22px] flex flex-col gap-2 md:mt-9 md:flex-row md:items-stretch md:gap-3'>
              <SolidAction
                href={TEL_HREF}
                tone='ink'
                size='lg'
                eyebrow={sr.actions.callEyebrow}
                arrow
                block={false}
                className='md:min-w-[330px]'
              >
                {sr.actions.callAppointment}
              </SolidAction>
              <div className='grid grid-cols-2 gap-2 md:flex md:flex-col md:justify-between md:gap-1.5'>
                <GhostAction href={VIBER_HREF} compact>
                  {sr.actions.viber}
                </GhostAction>
                <GhostAction href={WHATSAPP_HREF} compact>
                  {sr.actions.whatsapp}
                </GhostAction>
              </div>
            </div>

            <p className='mt-4 font-mono text-[11px] text-faint md:text-[11.5px]'>{sr.common.hours.inline}</p>
          </div>

          {/*
            The one real photograph in the project, and the LCP element on both
            layouts. `priority` skips lazy-loading; the fixed width/height keep
            the box reserved so the hero never shifts as it decodes.
          */}
          <div className='border border-line-strong bg-surface'>
            <Image
              src={HERO_IMAGE}
              alt={t.hero.imageAlt}
              width={HERO_IMAGE_WIDTH}
              height={HERO_IMAGE_HEIGHT}
              sizes='(min-width: 1024px) 520px, 100vw'
              className='h-auto w-full object-contain'
              priority
            />
          </div>
        </Container>
      </Section>

      <BrandStrip />

      {/* Process */}
      <Section>
        <Container>
          <H2>{t.process.title}</H2>
          <ol className='mt-[18px] grid border border-line-strong bg-line md:mt-7 md:grid-cols-4 md:gap-px'>
            {t.process.steps.map((step, index) => (
              <li
                key={step.title}
                className='border-b border-line bg-surface p-3.5 last:border-b-0 md:border-b-0 md:p-6'
              >
                <span className='font-mono text-[11px] font-semibold text-accent md:text-xs'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className='mt-2 text-[15.5px] font-semibold md:mt-3.5 md:text-lg'>{step.title}</h3>
                <p className='mt-1 text-[13.5px] leading-[1.55] text-muted md:mt-2 md:text-[14.5px]'>
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <p className='mt-4 text-[14.5px] text-muted'>
            {t.process.note} <TextLink href='/installation'>{t.process.link} &rarr;</TextLink>
          </p>
        </Container>
      </Section>

      {/* Price. The strongest block on the page: it answers the one question
          every visitor arrives with, and it answers it honestly. */}
      <section className='mt-7 bg-ink text-ink-text md:mt-[72px]'>
        <Container className='grid gap-8 py-8 md:gap-[72px] md:py-[72px] lg:grid-cols-[1fr_480px] lg:items-start'>
          <div>
            <MonoLabel tone='accent-on-ink'>{t.price.eyebrow}</MonoLabel>
            <H2 className='mt-2.5 md:mt-[18px] md:text-[46px] md:leading-[1.06] md:tracking-[-0.025em]'>
              {t.price.title}
            </H2>
            <p className='mt-3 max-w-[48ch] text-[15px] leading-[1.6] text-ink-body md:mt-[22px] md:text-[18.5px]'>
              {t.price.description}
            </p>

            <ol className='mt-[18px] grid border border-ink-line md:mt-8 md:grid-cols-3 md:gap-px md:bg-ink-line'>
              {t.price.inputs.map((input, index) => (
                <li
                  key={input.title}
                  className='flex items-baseline justify-between gap-3 border-b border-ink-line bg-ink px-3.5 py-3 last:border-b-0 md:flex-col md:items-start md:justify-start md:border-b-0 md:p-5'
                >
                  <span className='order-2 font-mono text-[11px] text-faint md:order-none'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className='order-1 text-sm md:order-none md:mt-2.5 md:text-base md:font-semibold'>
                    {input.title}
                  </span>
                  <span className='hidden text-sm leading-[1.5] text-ink-muted md:mt-1.5 md:block'>
                    {input.description}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className='border border-ink-line bg-ink-surface p-5 md:p-7'>
            <p className='text-lg font-semibold md:text-xl'>{t.price.cardTitle}</p>
            <p className='mt-2.5 text-[14.5px] leading-[1.55] text-ink-muted'>{t.price.cardNote}</p>
            <ContactActions
              ground='dark'
              solid='accent'
              size='md'
              label={sr.actions.callPrice}
              arrow
              className='mt-[18px] md:mt-[22px]'
            />
            <p className='mt-4 font-mono text-[11px] leading-relaxed text-faint md:mt-[18px]'>
              {sr.common.hours.inline}
            </p>
          </div>
        </Container>
      </section>

      {/* What you get */}
      <Section>
        <Container>
          <H2>{t.guarantees.title}</H2>
          <ul className='mt-[18px] grid gap-2.5 md:mt-7 md:grid-cols-4 md:gap-5'>
            {t.guarantees.items.map((item) => (
              <li key={item.title}>
                <Card accent className='h-full p-3.5 px-4 md:p-6'>
                  <h3 className='text-[15.5px] font-semibold md:text-lg'>{item.title}</h3>
                  <p className='mt-1.5 text-[13.5px] leading-[1.5] text-muted md:mt-2.5 md:text-[14.5px] md:leading-[1.55]'>
                    {item.description}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Vehicle makes */}
      <Section>
        <Container>
          <div className='flex items-baseline justify-between gap-10'>
            <H2>{t.vehicles.title}</H2>
            <MonoLabel className='hidden shrink-0 md:block'>{t.vehicles.label}</MonoLabel>
          </div>
          <ul className='mt-4 grid grid-cols-3 gap-px border border-line-strong bg-line md:mt-[26px] md:grid-cols-6'>
            {VEHICLE_BRANDS.map((brand) => (
              <li key={brand} className='bg-surface px-2.5 py-3 text-[13.5px] font-medium md:px-5 md:py-[18px] md:text-base'>
                {brand}
              </li>
            ))}
          </ul>
          <p className='mt-3 text-sm leading-[1.55] text-body md:mt-4 md:text-[15.5px]'>
            {t.vehicles.noteBefore}
            <TextLink href={TEL_HREF}>{t.vehicles.noteLink}</TextLink>
            {t.vehicles.noteAfter}
          </p>
        </Container>
      </Section>

      {/* FAQ. These four questions appear nowhere else on the site; the four on
          /installation are different, so the two pages do not compete. */}
      <Section>
        <Container className='grid gap-4 md:gap-16 lg:grid-cols-[360px_1fr]'>
          <div>
            <H2>{t.faq.title}</H2>
            <p className='mt-2.5 hidden text-[15px] leading-[1.6] text-muted lg:mt-3.5 lg:block'>
              {t.faq.introBefore}
              <TextLink href='/installation'>{t.faq.introLink}</TextLink>
              {t.faq.introAfter}
            </p>
          </div>
          <div>
            <Faq entries={HOME_FAQ} />
            <p className='mt-3 text-sm lg:hidden'>
              <TextLink href='/installation'>{t.faq.moreLink} &rarr;</TextLink>
            </p>
          </div>
        </Container>
      </Section>

      {/* Hours and location. With no published street address, the hours and the
          real map listing are the two verifiable things this business can show. */}
      <Section>
        <Container>
          <H2>{t.visit.title}</H2>
          <div className='mt-4 grid gap-3 md:mt-7 lg:grid-cols-[420px_1fr] lg:gap-6'>
            <Card className='flex flex-col p-4 md:p-7'>
              <MonoLabel>{sr.common.hours.label}</MonoLabel>
              <div className='mt-3 md:mt-[18px]'>
                <HoursTable />
              </div>
              <div className='mt-auto pt-5 md:pt-6'>
                <MonoLabel>{sr.common.areaLabel}</MonoLabel>
                <p className='mt-2.5 text-[15px] leading-[1.5] md:text-base'>{sr.common.areaLong}</p>
                <SolidAction href={TEL_HREF} tone='ink' size='md' className='mt-4 md:mt-[18px]'>
                  {sr.actions.callAppointment}
                </SolidAction>
              </div>
            </Card>

            {/* Height is reserved at both breakpoints so the lazy iframe cannot
                shift the section as it loads. */}
            <div className='h-60 border border-line-strong lg:h-[420px]'>
              <iframe
                src={sr.contact.mapEmbedUrl}
                title={t.visit.mapTitle}
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <Card className='flex flex-col gap-4 p-4 px-4 md:flex-row md:items-center md:justify-between md:gap-12 md:p-12'>
            <div>
              <H2 className='md:text-[38px] md:leading-[1.1] md:tracking-[-0.025em]'>{t.finalCta.title}</H2>
              <p className='mt-3 max-w-[52ch] text-[14.5px] leading-[1.55] text-body md:mt-3.5 md:text-[17px]'>
                {t.finalCta.description}
              </p>
            </div>
            <div className='w-full shrink-0 md:w-[300px]'>
              <ContactActions solid='accent' size='md' className='md:[&>a]:h-16 md:[&>a]:text-xl' />
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
