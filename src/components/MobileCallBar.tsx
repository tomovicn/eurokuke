'use client';

import { useEffect, useState } from 'react';

import { SolidAction } from '@/components/ui/Actions';
import { TEL_HREF, VIBER_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { sr } from '@/utils/translations/sr';

/**
 * Box-model classes shared by the fixed bar and its structural spacer clone
 * below. Border, padding and the safe-area allowance live in exactly one place
 * so the spacer's height can never drift out of sync with the bar. There is no
 * hand-derived pixel height to keep in step with the button size.
 */
const BAR_BOX =
  'border-t border-line-strong px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5 md:hidden';

function BarContent() {
  return (
    <div className='flex items-center gap-2'>
      <SolidAction href={TEL_HREF} tone='ink' className='h-12 flex-1 text-[15px]'>
        {sr.actions.callAppointmentShort}
      </SolidAction>
      {/* Two-letter marks, so they need an explicit accessible name. */}
      <a
        href={VIBER_HREF}
        aria-label={sr.actions.viber}
        className='flex h-12 w-12 shrink-0 items-center justify-center border border-line-btn font-mono text-[11px] font-semibold text-ink-2'
      >
        <span aria-hidden='true'>VB</span>
      </a>
      <a
        href={WHATSAPP_HREF}
        aria-label={sr.actions.whatsapp}
        className='flex h-12 w-12 shrink-0 items-center justify-center border border-line-btn font-mono text-[11px] font-semibold text-ink-2'
      >
        <span aria-hidden='true'>WA</span>
      </a>
    </div>
  );
}

/**
 * Fixed call bar below md. Hidden until the viewport has scrolled past roughly
 * one screen, so it never competes with the hero's own call button: the design
 * allows exactly one primary action per screenful.
 *
 * Renders an invisible structural clone of itself (same box classes, same
 * button row) in normal flow as a spacer, so the fixed bar cannot occlude the
 * end of the footer. The spacer matches the bar's height by construction, not
 * by arithmetic.
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
        <BarContent />
      </div>
      <div
        className={`fixed inset-x-0 bottom-0 z-40 bg-surface transition-transform duration-150 ${BAR_BOX} ${
          visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
        }`}
        // Off-screen links stay tabbable, which drops a keyboard user into a
        // bar they cannot see. Hide the clone from the tree until it is up.
        {...(visible ? {} : { 'aria-hidden': 'true' })}
      >
        <BarContent />
      </div>
    </>
  );
}
