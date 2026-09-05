import { sr } from '@/utils/translations/sr';

/**
 * The logotype: the name, and a rule under it.
 *
 * The rule is always the full width of the name, never shorter, which is why
 * the wrapper is an inline flex column: it shrinks to the text and the rule
 * spans whatever that turns out to be at the current size. Hard-coding a width
 * would break the moment the name or the type size changed.
 *
 * `full` adds the city line and is for the footer and the share card. The
 * header carries the name and the rule alone; a third line at 18px would read
 * as a tagline rather than a mark.
 */

/**
 * `ink` sits on paper, `paper` on ink. `paper-lg` is the homepage header:
 * ink on the opaque bar below lg, paper once the header goes transparent over
 * the hero photograph above it.
 */
type Tone = 'ink' | 'paper' | 'paper-lg';

const TEXT: Record<Tone, string> = {
  ink: '',
  paper: 'text-ink-text',
  'paper-lg': 'lg:text-ink-text',
};

const RULE: Record<Tone, string> = {
  ink: 'bg-accent',
  paper: 'bg-accent-on-ink',
  'paper-lg': 'bg-accent lg:bg-accent-on-ink',
};

const CITY: Record<Tone, string> = {
  ink: 'text-muted',
  paper: 'text-ink-muted',
  'paper-lg': 'text-muted lg:text-ink-muted',
};

export default function Wordmark({
  full = false,
  tone = 'ink',
  className = '',
}: {
  full?: boolean;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={`inline-flex flex-col items-stretch ${TEXT[tone]} ${className}`}>
      <span
        className={`font-semibold leading-none tracking-[-0.025em] ${
          full ? 'text-2xl md:text-[30px]' : 'text-[14.5px] lg:text-lg'
        }`}
      >
        {sr.common.wordmark}
      </span>
      <span aria-hidden='true' className={`${RULE[tone]} ${full ? 'mt-[7px] h-[3px]' : 'mt-0.5 h-0.5'}`} />
      {full && (
        <span
          className={`mt-[7px] font-mono text-[9.5px] uppercase leading-none tracking-[0.18em] ${CITY[tone]}`}
        >
          {sr.common.wordmarkCity}
        </span>
      )}
    </span>
  );
}
