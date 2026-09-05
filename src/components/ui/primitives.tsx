import Link from 'next/link';

/**
 * The small repeating pieces of the design system: mono labels, chips, cards,
 * the section shell and the standard heading sizes. Kept together so the
 * type scale lives in one file rather than being retyped per page.
 */

export function Container({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-container px-4 md:px-10 ${className}`}>{children}</div>;
}

/**
 * Vertical rhythm from the design sheet: 72px between sections on desktop,
 * 28px on mobile. `first` drops the top gap so a section can open a page.
 */
export function Section({
  className = '',
  first = false,
  children,
}: {
  className?: string;
  first?: boolean;
  children: React.ReactNode;
}) {
  return <section className={`${first ? '' : 'mt-7 md:mt-[72px]'} ${className}`}>{children}</section>;
}

/** Uppercase mono label. Accent for eyebrows above a heading, faint for meta. */
export function MonoLabel({
  tone = 'faint',
  as: Tag = 'p',
  className = '',
  children,
}: {
  tone?: 'faint' | 'accent' | 'accent-on-ink' | 'accent-on-photo' | 'ink-muted';
  as?: 'p' | 'span' | 'div';
  className?: string;
  children: React.ReactNode;
}) {
  const tones = {
    faint: 'text-faint',
    accent: 'text-accent',
    'accent-on-ink': 'text-accent-on-ink',
    'accent-on-photo': 'text-accent-on-photo',
    'ink-muted': 'text-ink-muted',
  } as const;

  return (
    <Tag
      className={`font-mono text-[10.5px] uppercase tracking-label md:text-[11.5px] ${tones[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * A statement of fact, not a quality badge. The design system forbids seals,
 * stamps and anything that implies a certification the business has not named.
 */
export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className='border border-line-strong bg-surface px-[9px] py-1.5 font-mono text-[10.5px] uppercase tracking-chip text-ink-2 md:px-[11px] md:py-2 md:text-[11px]'>
      {children}
    </span>
  );
}

export function H2({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <h2
      className={`text-2xl font-semibold leading-[1.15] tracking-[-0.015em] md:text-[34px] md:tracking-[-0.02em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <h3
      className={`text-[22px] font-semibold leading-[1.15] tracking-[-0.015em] md:text-[30px] md:tracking-[-0.02em] ${className}`}
    >
      {children}
    </h3>
  );
}

/** Bordered card on the light ground. `accent` draws the 3px rule from the sheet. */
export function Card({
  accent = false,
  className = '',
  children,
}: {
  accent?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  // The accent rule sits on the left on mobile and on top from md up, matching
  // the stacked and gridded versions of the same card in the design. The md
  // reset has to restore the left border's *colour* too: width and colour are
  // separate properties, so `md:border-l` alone leaves a 1px accent edge.
  const accentClasses = accent
    ? 'border-l-[3px] border-l-accent md:border-l md:border-l-line-strong md:border-t-[3px] md:border-t-accent'
    : '';
  return (
    <div className={`border border-line-strong bg-surface ${accentClasses} ${className}`}>{children}</div>
  );
}

/** Inline text link in body copy: accent with the soft underline rule. */
export function TextLink({
  href,
  className = '',
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = `border-b border-accent-soft text-accent transition-colors hover:border-accent ${className}`;

  if (href.startsWith('/')) {
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

/** Emits JSON-LD as server-rendered markup. Never use next/script for this. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
