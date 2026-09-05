import type { FaqEntry } from '@/lib/faq';

/**
 * Accordion built on <details>, so it opens with no JavaScript and its answers
 * are present in the server-rendered HTML. Collapsed <details> content is still
 * in the DOM and still indexed, which is what lets the FAQPage markup match.
 *
 * The +/- marker is drawn here because the native disclosure triangle is
 * suppressed in globals.css.
 */
export default function Faq({ entries }: { entries: FaqEntry[] }) {
  return (
    <div className='border-t border-line-strong'>
      {entries.map((entry) => (
        <details key={entry.question} className='group border-b border-line'>
          <summary className='flex cursor-pointer items-center justify-between gap-4 py-4 text-[15.5px] font-semibold md:py-[22px] md:text-[19px]'>
            {entry.question}
            <span
              aria-hidden='true'
              className='shrink-0 font-mono text-lg font-normal text-accent transition-transform duration-150 group-open:rotate-45'
            >
              +
            </span>
          </summary>
          <p className='max-w-[70ch] pb-4 pr-8 text-[14.5px] leading-relaxed text-body md:pb-[22px] md:text-[15.5px]'>
            {entry.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
