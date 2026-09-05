import { sr } from '@/utils/translations/sr';

/**
 * Opening hours as day/time rows. The same three rows feed the
 * openingHoursSpecification in the AutoRepair markup, so if these change, the
 * schema in `lib/schema.ts` changes with them.
 */
export default function HoursTable({ short = false, size = 'md' }: { short?: boolean; size?: 'sm' | 'md' }) {
  const text = size === 'sm' ? 'text-[14.5px]' : 'text-base md:text-[17px]';

  return (
    <dl className='flex flex-col'>
      {sr.common.hours.rows.map((row, index) => (
        <div
          key={row.day}
          className={`flex items-baseline justify-between gap-4 py-2.5 md:py-3 ${
            index < sr.common.hours.rows.length - 1 ? 'border-b border-line' : ''
          } ${text} ${row.closed ? 'text-faint' : ''}`}
        >
          <dt>{short ? row.dayShort : row.day}</dt>
          <dd className='font-mono font-medium'>{row.time}</dd>
        </div>
      ))}
    </dl>
  );
}
