import Image from 'next/image';

import { Container, H2, MonoLabel } from '@/components/ui/primitives';
import { PHOTO_HEIGHT, PHOTO_WIDTH, PHOTOS } from '@/lib/site';
import { sr } from '@/utils/translations/sr';

const t = sr.home.proof;

/**
 * Three frames from one job, in one format, read as a series rather than a
 * gallery: the ball with its cap on, the mount and socket under the bumper,
 * and the rear of the car with the boot open. Together they answer the three
 * things people actually want to see before they call.
 *
 * All three are the same 3:4 portrait, so the boxes are too. None of them is
 * above the fold, so none of them is `priority`.
 */
export default function ProofStrip() {
  return (
    <Container>
      <div className='flex items-baseline justify-between gap-6'>
        <H2>{t.title}</H2>
        <MonoLabel className='hidden shrink-0 md:block'>{t.label}</MonoLabel>
      </div>

      <ul className='mt-4 grid grid-cols-3 gap-2 md:mt-6 md:gap-5'>
        {t.items.map((item) => (
          <li key={item.key} className='flex flex-col gap-2 md:gap-2.5'>
            <div className='aspect-[3/4] bg-ink'>
              <Image
                src={PHOTOS[item.key]}
                alt={item.alt}
                width={PHOTO_WIDTH}
                height={PHOTO_HEIGHT}
                sizes='33vw'
                className='h-full w-full object-cover'
              />
            </div>
            <p className='text-[13px] leading-[1.5] text-muted md:text-[14.5px] md:text-body'>
              {item.caption}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
