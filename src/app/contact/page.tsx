import Breadcrumbs from '@/components/Breadcrumbs';
import HoursTable from '@/components/HoursTable';
import { GhostAction } from '@/components/ui/Actions';
import { Card, Container, MonoLabel, Section } from '@/components/ui/primitives';
import { PHONE_DISPLAY, TEL_HREF, VIBER_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { sr } from '@/utils/translations/sr';

const t = sr.contact;

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: sr.navigation.contact, path: '/contact' }]} />

      {/* No contact form, deliberately. The one that used to be here posted
          nowhere; a phone call is also simply the faster channel for a job that
          starts with "which car do you have". */}
      <Section first>
        <Container className='py-5 md:pb-0 md:pt-14'>
          <h1 className='text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] md:text-[52px] md:leading-[1.04] md:tracking-[-0.03em]'>
            {t.title}
          </h1>
          <p className='mt-3.5 max-w-[58ch] text-[15px] leading-[1.62] text-body md:mt-5 md:text-[18.5px] md:leading-[1.6]'>
            {t.description}
          </p>
        </Container>
      </Section>

      <Section>
        <Container className='grid gap-3 md:grid-cols-2 md:gap-6'>
          <div className='flex flex-col bg-ink p-5 px-4 text-ink-text md:p-9'>
            <MonoLabel tone='accent-on-ink'>{t.phoneLabel}</MonoLabel>
            {/* The number is the heading here: on the contact page it is the
                content, not a call to action wrapped around a label. */}
            <a
              href={TEL_HREF}
              className='mt-3 block text-[28px] font-semibold tracking-[-0.02em] transition-colors hover:text-accent-on-ink md:mt-3.5 md:text-[40px]'
            >
              {PHONE_DISPLAY}
            </a>
            <p className='mt-3 text-sm leading-[1.6] text-ink-muted md:mt-3.5 md:text-[15.5px]'>
              {sr.common.hours.inline}
            </p>
            {/* Pushed to the foot of the card so it lines up with the hours
                card beside it instead of leaving a third of the panel empty. */}
            <div className='mt-6 grid grid-cols-2 gap-2.5 md:mt-auto md:gap-2.5 md:pt-8'>
              <GhostAction href={VIBER_HREF} tone='dark' className='md:h-[52px] md:text-[15px]'>
                {sr.actions.viber}
              </GhostAction>
              <GhostAction href={WHATSAPP_HREF} tone='dark' className='md:h-[52px] md:text-[15px]'>
                {sr.actions.whatsapp}
              </GhostAction>
            </div>
          </div>

          <Card className='p-4 px-4 md:p-9'>
            <MonoLabel>{sr.common.hours.label}</MonoLabel>
            <div className='mt-3 md:mt-3.5'>
              <HoursTable />
            </div>
            <div className='mt-6 border-t border-line pt-5 md:mt-7 md:pt-6'>
              <MonoLabel>{sr.common.areaLabel}</MonoLabel>
              <p className='mt-2.5 text-[15px] leading-[1.55] md:mt-3 md:text-[17px]'>{sr.common.areaLong}</p>
              <p className='mt-2 text-[13.5px] leading-[1.5] text-muted md:mt-2.5 md:text-sm'>
                {sr.common.areaNote}
              </p>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Where the workshop is, which is one of the four questions the phone
          gets most. The map that used to be here pointed at a listing the
          business does not own. */}
      <Section>
        <Container>
          <MonoLabel>{t.locationLabel}</MonoLabel>
          <ul className='mt-3 grid gap-px border border-line-strong bg-line md:mt-5 md:grid-cols-3'>
            {t.locationItems.map((item) => (
              <li key={item.title} className='bg-surface p-4 md:p-7'>
                <h2 className='text-[15.5px] font-semibold md:text-[19px]'>{item.title}</h2>
                <p className='mt-1.5 text-[13.5px] leading-[1.55] text-muted md:mt-2.5 md:text-[15px]'>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
