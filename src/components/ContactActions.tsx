import { GhostAction, SolidAction } from '@/components/ui/Actions';
import { TEL_HREF, VIBER_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { sr } from '@/utils/translations/sr';

/**
 * The repeated contact block: one solid action, then Viber and WhatsApp as
 * bordered halves beneath it. `ground` is the surface it sits on, which
 * decides the border and text colour of the two secondary buttons.
 */
export default function ContactActions({
  ground = 'light',
  solid = 'accent',
  size = 'md',
  label = sr.actions.callAppointment,
  eyebrow,
  arrow = false,
  className = '',
}: {
  ground?: 'light' | 'dark';
  solid?: 'ink' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  eyebrow?: string;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <SolidAction href={TEL_HREF} tone={solid} size={size} eyebrow={eyebrow} arrow={arrow}>
        {label}
      </SolidAction>
      <div className='mt-2 grid grid-cols-2 gap-2'>
        <GhostAction href={VIBER_HREF} tone={ground}>
          {sr.actions.viber}
        </GhostAction>
        <GhostAction href={WHATSAPP_HREF} tone={ground}>
          {sr.actions.whatsapp}
        </GhostAction>
      </div>
    </div>
  );
}
