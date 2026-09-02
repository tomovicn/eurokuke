'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { TEL_HREF, VIBER_HREF } from '@/lib/contact';
import { useTranslation } from '@/utils/i18n';

/**
 * Fixed call bar below md. Hidden until the viewport has scrolled past roughly
 * one screen, so it never competes with the hero's own buttons.
 *
 * Renders its own spacer so the fixed bar cannot occlude the end of the footer.
 */
export default function MobileCallBar() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/*
        Spacer height must equal the bar's rendered height exactly, or the
        footer's last line sits under the bar. The bar is: 1px border-top +
        0.75rem padding-top (p-3) + 3.5rem content (h-14 Button) + a bottom
        padding that is max(0.75rem, safe-area-inset-bottom) — not a fixed
        value, since iPhones with a home indicator report ~34px there. A
        static h-20 (5rem/80px) undershoots that case by over 20px, so the
        spacer mirrors the same calc() instead of a fixed class.
      */}
      <div
        aria-hidden='true'
        className={visible ? 'h-[calc(4.3125rem+max(0.75rem,env(safe-area-inset-bottom)))] md:hidden' : 'hidden'}
      />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-150 md:hidden ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className='flex gap-3'>
          <Button href={TEL_HREF} tone='accent' size='lg' className='flex-1'>
            {t('actions.call')}
          </Button>
          <Button href={VIBER_HREF} tone='light' variant='ghost' size='lg' className='flex-1'>
            {t('actions.viber')}
          </Button>
        </div>
      </div>
    </>
  );
}
