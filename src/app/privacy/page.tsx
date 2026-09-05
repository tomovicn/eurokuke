import type { Metadata } from 'next';

import { Container, Section } from '@/components/ui/primitives';
import { PHONE_DISPLAY, TEL_HREF } from '@/lib/contact';
import { sr } from '@/utils/translations/sr';

/**
 * Serbian, like the rest of the site. This page used to be a generic English
 * GDPR template on a page declaring `lang="sr"`, describing data collection
 * that does not happen here: there is no account, no order form and no contact
 * form anywhere on this site.
 */
export const metadata: Metadata = {
  title: sr.privacy.title,
  description:
    'Politika privatnosti sajta ugradnjaeurokuka.com: koje podatke sajt beleži, zašto nema kontakt forme i kako se koriste podaci saopšteni telefonom.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section first>
      <Container className='py-8 md:py-16'>
        <div className='max-w-[70ch]'>
          <h1 className='text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[42px] md:tracking-[-0.03em]'>
            {sr.privacy.title}
          </h1>
          <p className='mt-3 font-mono text-[11px] uppercase tracking-label text-faint'>
            {sr.privacy.updatedLabel}: {sr.privacy.updated}
          </p>

          <div className='mt-8 flex flex-col gap-6 md:mt-10 md:gap-7'>
            {sr.privacy.sections.map((section) => (
              <section key={section.title}>
                <h2 className='text-lg font-semibold md:text-xl'>{section.title}</h2>
                <p className='mt-2 text-[15px] leading-[1.65] text-body md:text-[17px]'>{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className='text-lg font-semibold md:text-xl'>{sr.privacy.contactTitle}</h2>
              <p className='mt-2 text-[15px] leading-[1.65] text-body md:text-[17px]'>
                {sr.privacy.contactBody}{' '}
                <a href={TEL_HREF} className='border-b border-accent-soft text-accent'>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
