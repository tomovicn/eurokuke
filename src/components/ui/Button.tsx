import Link from 'next/link';

type Tone = 'accent' | 'light' | 'dark';
type Variant = 'solid' | 'ghost';

const TONES: Record<Tone, Record<Variant, string>> = {
  accent: {
    solid: 'bg-accent text-accent-ink hover:brightness-110',
    ghost: 'border border-accent text-accent hover:bg-accent hover:text-accent-ink',
  },
  light: {
    solid: 'bg-paper text-ink hover:bg-paper-2',
    ghost: 'border border-line-dark text-paper hover:bg-white/10',
  },
  dark: {
    solid: 'bg-ink text-paper hover:bg-ink-2',
    ghost: 'border border-line text-ink hover:bg-paper-2',
  },
};

const SIZES = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
};

export default function Button({
  href,
  tone = 'accent',
  variant = 'solid',
  size = 'md',
  className = '',
  children,
}: {
  href: string;
  tone?: Tone;
  variant?: Variant;
  size?: keyof typeof SIZES;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight',
    'transition-colors duration-150 ease-out',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    SIZES[size],
    TONES[tone][variant],
    className,
  ].join(' ');

  // tel:, viber: and https: are all external navigations — next/link is only
  // correct for in-app routes.
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
