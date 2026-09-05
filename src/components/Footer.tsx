import Link from 'next/link';

import Wordmark from '@/components/Wordmark';
import { Container, MonoLabel } from '@/components/ui/primitives';
import { PHONE_DISPLAY, TEL_HREF, VIBER_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { sr } from '@/utils/translations/sr';

const PAGES = [
  { href: '/installation', label: sr.navigation.installation },
  { href: '/blog', label: sr.navigation.blog },
  { href: '/contact', label: sr.navigation.contact },
  { href: '/privacy', label: sr.navigation.privacy },
];

export default function Footer() {
  return (
    <footer className='mt-7 bg-ink text-ink-muted md:mt-[72px]'>
      <Container className='grid gap-8 py-10 md:grid-cols-[1fr_200px_200px_260px] md:gap-10 md:py-11'>
        <div>
          {/* The full logotype, with the city line the header leaves off. */}
          <Wordmark full tone='paper' />
          <p className='mt-4 text-[13.5px] leading-relaxed'>{sr.footer.blurb}</p>
        </div>

        <nav className='flex flex-col gap-2 text-[13.5px]' aria-label={sr.footer.pagesLabel}>
          <MonoLabel tone='ink-muted' as='span' className='text-[10px] opacity-70'>
            {sr.footer.pagesLabel}
          </MonoLabel>
          {PAGES.map((page) => (
            <Link key={page.href} href={page.href} className='transition-colors hover:text-ink-text'>
              {page.label}
            </Link>
          ))}
        </nav>

        <div className='flex flex-col gap-2 text-[13.5px]'>
          <MonoLabel tone='ink-muted' as='span' className='text-[10px] opacity-70'>
            {sr.common.hours.label}
          </MonoLabel>
          {sr.common.hours.rows.map((row) => (
            <span key={row.day}>
              {row.dayShort} {row.time}
            </span>
          ))}
        </div>

        <div className='flex flex-col gap-2 text-[13.5px]'>
          <MonoLabel tone='ink-muted' as='span' className='text-[10px] opacity-70'>
            {sr.footer.contactLabel}
          </MonoLabel>
          {/* The one place the number is printed rather than hidden behind a
              label: search engines read it here as the business NAP. */}
          <a href={TEL_HREF} className='text-[15px] font-semibold text-ink-text transition-colors hover:text-accent-on-ink'>
            {PHONE_DISPLAY}
          </a>
          <div className='flex gap-4'>
            <a href={VIBER_HREF} className='transition-colors hover:text-ink-text'>
              {sr.actions.viber}
            </a>
            <a href={WHATSAPP_HREF} className='transition-colors hover:text-ink-text'>
              {sr.actions.whatsapp}
            </a>
          </div>
          <span>{sr.common.area}</span>
        </div>
      </Container>

      <div className='border-t border-ink-line'>
        <Container className='py-4 font-mono text-[10.5px] text-ink-muted md:text-[11px]'>
          {sr.footer.copyright.replace('{year}', String(new Date().getFullYear()))}
        </Container>
      </div>
    </footer>
  );
}
