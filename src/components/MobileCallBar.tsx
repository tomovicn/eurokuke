'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { TEL_HREF, VIBER_HREF } from '@/lib/contact';
import { useTranslation } from '@/utils/i18n';

/**
 * Box-model classes shared by the fixed bar and its structural spacer clone
 * below. Border, padding and the safe-area allowance live in exactly one
 * place so the spacer's height can never drift out of sync with the bar —
 * there is no hand-derived height number to keep in sync with this, or with
 * Button's `SIZES.lg`.
 */
const BAR_BOX = 'border-t border-line-dark p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden';

function CallBarButtons() {
  const { t } = useTranslation();

  return (
    <div className='flex gap-3'>
      <Button href={TEL_HREF} tone='accent' size='lg' className='flex-1'>
        {t('actions.call')}
      </Button>
      <Button href={VIBER_HREF} tone='light' variant='ghost' size='lg' className='flex-1'>
        {t('actions.viber')}
      </Button>
    </div>
  );
}

/**
 * Fixed call bar below md. Hidden until the viewport has scrolled past roughly
 * one screen, so it never competes with the hero's own buttons.
 *
 * Renders an invisible structural clone of itself (same box classes, same
 * button row) in normal flow as a spacer, so the fixed bar cannot occlude
 * the end of the footer. The spacer matches the bar's height by
 * construction — same classes, same content — not by arithmetic.
 */
export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div aria-hidden='true' className={visible ? `invisible ${BAR_BOX}` : 'hidden'}>
        <CallBarButtons />
      </div>
      <div
        className={`fixed inset-x-0 bottom-0 z-40 bg-ink/95 backdrop-blur transition-transform duration-150 ${BAR_BOX} ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <CallBarButtons />
      </div>
    </>
  );
}
