'use client';

import Button from '@/components/ui/Button';
import { TEL_HREF, VIBER_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { useTranslation } from '@/utils/i18n';

function PhoneIcon() {
  return (
    <svg className='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
      />
    </svg>
  );
}

export default function ContactActions({
  tone = 'dark',
  size = 'lg',
  showWhatsapp = true,
  className = '',
}: {
  tone?: 'dark' | 'light';
  size?: 'md' | 'lg';
  showWhatsapp?: boolean;
  className?: string;
}) {
  const { t } = useTranslation();
  const ghostTone = tone === 'dark' ? 'light' : 'dark';

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Button href={TEL_HREF} tone='accent' variant='solid' size={size}>
        <PhoneIcon />
        {t('actions.callLong')}
      </Button>
      <Button href={VIBER_HREF} tone={ghostTone} variant='ghost' size={size}>
        {t('actions.viber')}
      </Button>
      {showWhatsapp && (
        <Button href={WHATSAPP_HREF} tone={ghostTone} variant='ghost' size={size}>
          {t('actions.whatsapp')}
        </Button>
      )}
    </div>
  );
}
