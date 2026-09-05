import Link from 'next/link';

/**
 * The whole action system: one solid button and one bordered button.
 *
 * Rules carried over from the design system sheet:
 *  - exactly one solid action per screenful; Viber and WhatsApp are always
 *    bordered, and never take the accent colour;
 *  - the phone number is never the label. The label says what happens, the
 *    number lives in the tel: href;
 *  - no radius and no shadow anywhere in this design.
 */

type Tone = 'ink' | 'accent';
type Ghost = 'light' | 'dark';

const BASE =
  'inline-flex items-center font-semibold tracking-[-0.01em] transition-colors duration-150 ease-out';

const SIZES = {
  sm: 'h-11 px-3 text-[13.5px]',
  md: 'h-[54px] px-5 text-base',
  lg: 'h-[60px] px-[18px] text-[19px] md:h-[68px] md:px-6 md:text-[21px]',
} as const;

const TONES: Record<Tone, string> = {
  ink: 'bg-ink text-ink-text hover:bg-ink-surface',
  accent: 'bg-accent text-accent-ink hover:brightness-[1.08]',
};

/*
 * The same two tones from lg up. The hero needs them because its ground
 * changes at that breakpoint: the copy sits on paper below it and on the
 * photograph above it, and an ink button would vanish into the scrim.
 * Rendering two buttons and hiding one would put the same tel: link in the
 * document twice, so the tone flips instead.
 */
const LG_TONES: Record<Tone, string> = {
  ink: 'lg:bg-ink lg:text-ink-text lg:hover:bg-ink-surface',
  accent: 'lg:bg-accent lg:text-accent-ink lg:hover:brightness-[1.08]',
};

/** Eyebrow and arrow both sit on the button, so they follow its tone. */
const ON_TONE = {
  ink: { eyebrow: 'text-ink-muted', arrow: 'text-accent-on-ink' },
  accent: { eyebrow: 'text-accent-ink/75', arrow: 'text-current' },
} as const;

const LG_ON_TONE = {
  ink: { eyebrow: 'lg:text-ink-muted', arrow: 'lg:text-accent-on-ink' },
  accent: { eyebrow: 'lg:text-accent-ink/75', arrow: 'lg:text-current' },
} as const;

const GHOSTS: Record<Ghost, string> = {
  light: 'border-line-btn text-ink-2 hover:bg-paper-2',
  dark: 'border-ink-btn text-ink-btn-text hover:bg-white/5',
};

const LG_GHOSTS: Record<Ghost, string> = {
  light: 'lg:border-line-btn lg:text-ink-2 lg:hover:bg-paper-2',
  dark: 'lg:border-ink-btn lg:text-ink-btn-text lg:hover:bg-white/5',
};

/** tel:, viber: and https: are external navigations; next/link is only for routes. */
function Anchor({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export function SolidAction({
  href,
  tone = 'accent',
  lgTone,
  size = 'md',
  eyebrow,
  arrow = false,
  block = true,
  className = '',
  ariaLabel,
  children,
}: {
  href: string;
  tone?: Tone;
  /** Tone from lg up, when the button changes ground at that breakpoint. */
  lgTone?: Tone;
  size?: keyof typeof SIZES;
  /** Small mono line above the label. Only the primary hero action uses it. */
  eyebrow?: string;
  arrow?: boolean;
  /** Full width with the label centred, or hugging its content. */
  block?: boolean;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  // With an eyebrow or an arrow the two halves push apart; otherwise the label
  // centres, which is what every full-width button in the design does.
  const spread = eyebrow || arrow ? 'justify-between gap-6' : 'justify-center';
  const classes = [
    BASE,
    SIZES[size],
    TONES[tone],
    lgTone ? LG_TONES[lgTone] : '',
    block ? 'w-full' : '',
    spread,
    className,
  ].join(' ');

  const eyebrowColor = `${ON_TONE[tone].eyebrow} ${lgTone ? LG_ON_TONE[lgTone].eyebrow : ''}`;
  const arrowColor = `${ON_TONE[tone].arrow} ${lgTone ? LG_ON_TONE[lgTone].arrow : ''}`;

  return (
    <Anchor href={href} className={classes} ariaLabel={ariaLabel}>
      {eyebrow ? (
        <span className='flex flex-col items-start gap-0.5'>
          <span className={`font-mono text-[9.5px] font-normal uppercase tracking-eyebrow ${eyebrowColor}`}>
            {eyebrow}
          </span>
          <span>{children}</span>
        </span>
      ) : (
        <span>{children}</span>
      )}
      {arrow && (
        <span aria-hidden='true' className={`font-mono text-xl font-normal ${arrowColor}`}>
          &rarr;
        </span>
      )}
    </Anchor>
  );
}

export function GhostAction({
  href,
  tone = 'light',
  lgTone,
  /**
   * `compact` shrinks only from md up. The 44px mobile height is a tap target
   * and is never reduced; the hero stacks two compact buttons beside the
   * primary on desktop, where pointer accuracy is not the constraint.
   */
  compact = false,
  className = '',
  ariaLabel,
  children,
}: {
  href: string;
  tone?: Ghost;
  /** Tone from lg up. See LG_TONES above for why this exists. */
  lgTone?: Ghost;
  compact?: boolean;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const classes = [
    'inline-flex h-11 items-center justify-center border px-4 text-[13.5px] font-medium',
    'transition-colors duration-150 ease-out',
    compact ? 'md:h-[31px] md:text-[13px]' : 'md:h-[46px] md:text-sm',
    GHOSTS[tone],
    lgTone ? LG_GHOSTS[lgTone] : '',
    className,
  ].join(' ');

  return (
    <Anchor href={href} className={classes} ariaLabel={ariaLabel}>
      {children}
    </Anchor>
  );
}
