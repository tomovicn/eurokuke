import Image from 'next/image';

import { GhostAction, SolidAction } from '@/components/ui/Actions';
import { Chip, Container, MonoLabel } from '@/components/ui/primitives';
import { TEL_HREF, VIBER_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { PHOTO_HEIGHT, PHOTO_WIDTH, PHOTOS } from '@/lib/site';
import { sr } from '@/utils/translations/sr';

const t = sr.home.hero;

/**
 * The homepage hero, and the only h1 on the site.
 *
 * One photograph, placed two ways. Below lg it is a band above the copy, which
 * keeps the headline and the call button inside the first screenful. From lg
 * up the same element becomes the full-bleed background and the copy moves on
 * top of it, so the picture carries the page instead of sitting beside it.
 *
 * The switch is at lg rather than md on purpose. The frame is a 3:4 portrait,
 * so covering a 620px-tall box crops it to roughly a square, and the copy is
 * 640px wide: under about 1024px the scrim and the text between them leave
 * nothing of the photograph to see, and the stacked version shows more.
 *
 * `object-position` is aimed at the tow bar at both sizes. Centred, this frame
 * is mostly bumper.
 */
export default function Hero() {
  return (
    <section className='relative isolate bg-paper lg:min-h-[696px] lg:bg-ink'>
      <div className='relative h-[300px] bg-ink md:h-[420px] lg:absolute lg:inset-0 lg:h-auto'>
        {/*
          The LCP element. `priority` skips lazy-loading, and the box is sized
          by its container at every breakpoint, so decoding cannot shift the
          headline underneath it.
        */}
        <Image
          src={PHOTOS.mount}
          alt={t.imageAlt}
          width={PHOTO_WIDTH}
          height={PHOTO_HEIGHT}
          sizes='100vw'
          priority
          className='h-full w-full object-cover object-[50%_62%] lg:object-[62%_60%]'
        />
        <div aria-hidden='true' className='hero-scrim absolute inset-0' />

        {/* Says the work in the picture is theirs. It is the one claim a
            render could never make, so it is worth the pixels. */}
        <span className='absolute bottom-3 right-3 bg-surface px-[7px] py-[5px] font-mono text-[9.5px] tracking-[0.06em] text-ink lg:bottom-[18px] lg:right-5 lg:px-2 lg:py-1.5 lg:text-[10.5px]'>
          {sr.home.proof.badge}
        </span>
      </div>

      {/*
        The top padding is the header's resting height. From lg up the header
        floats over this photograph with no ground of its own, so the copy has
        to clear it by hand; `justify-center` then centres the block in what is
        left rather than in the whole section.
      */}
      <Container className='relative py-6 md:py-8 lg:flex lg:min-h-[696px] lg:flex-col lg:justify-center lg:pb-0 lg:pt-[76px]'>
        <div className='lg:max-w-[640px]'>
          <MonoLabel tone='accent' className='lg:text-accent-on-photo'>
            {t.eyebrow}
          </MonoLabel>

          <h1 className='mt-3 max-w-[14ch] text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] md:text-[46px] lg:mt-[18px] lg:text-[56px] lg:leading-[1.03] lg:tracking-[-0.03em] lg:text-ink-text'>
            {t.title}
          </h1>

          <p className='mt-3.5 max-w-[46ch] text-[15px] leading-[1.62] text-body md:text-[17px] lg:mt-5 lg:max-w-[42ch] lg:text-[18.5px] lg:leading-[1.55] lg:text-ink-text/90'>
            {t.description}
          </p>

          {/*
            One solid action, two bordered ones. Both tones flip at lg because
            the ground does: ink on paper below it, accent on the scrim above,
            where an ink button would disappear into the gradient.
          */}
          <div className='mt-5 flex flex-col gap-2 md:flex-row md:items-center md:gap-2.5 lg:mt-8'>
            <SolidAction
              href={TEL_HREF}
              tone='ink'
              lgTone='accent'
              size='lg'
              eyebrow={sr.actions.callEyebrow}
              arrow
              block={false}
              className='lg:h-16 lg:gap-8 lg:px-[26px]'
            >
              {sr.actions.callAppointment}
            </SolidAction>
            <div className='grid grid-cols-2 gap-2 md:flex md:gap-2.5'>
              <GhostAction
                href={VIBER_HREF}
                tone='light'
                lgTone='dark'
                className='md:h-[60px] md:px-6 md:text-[15px] lg:h-16 lg:px-[22px]'
              >
                {sr.actions.viber}
              </GhostAction>
              <GhostAction
                href={WHATSAPP_HREF}
                tone='light'
                lgTone='dark'
                className='md:h-[60px] md:px-6 md:text-[15px] lg:h-16 lg:px-[22px]'
              >
                {sr.actions.whatsapp}
              </GhostAction>
            </div>
          </div>

          <p className='mt-4 font-mono text-[11px] text-faint lg:mt-[18px] lg:text-[11.5px] lg:text-ink-body'>
            {sr.common.hours.inline}
          </p>
        </div>
      </Container>
    </section>
  );
}

/**
 * The four facts the hero used to carry inside itself. On the photograph they
 * competed with the headline, so they sit under it on their own line instead.
 */
export function HeroFacts() {
  return (
    <Container className='flex flex-wrap gap-1.5 pt-5 md:gap-2 md:pt-8'>
      {t.chips.map((chip) => (
        <Chip key={chip}>{chip}</Chip>
      ))}
    </Container>
  );
}
