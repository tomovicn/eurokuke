'use client';

import { useTranslation } from '@/utils/i18n';

/**
 * Plain <img>, not next/image.
 *
 * next/image refuses to serve these SVGs, which is why two of the three logos
 * rendered nothing at all. These are small static brand marks with no need for
 * responsive srcsets — the optimiser buys nothing here.
 */
const brands = [
  { src: '/bosal.svg', alt: 'Bosal', className: 'h-6 md:h-7' },
  { src: '/oris.jpg', alt: 'Oris', className: 'h-8 md:h-9' },
  { src: '/steinhof-dark.svg', alt: 'Steinhof', className: 'h-5 md:h-6' },
];

export default function BrandStrip() {
  const { t } = useTranslation();

  return (
    <section className='border-b border-line bg-paper-2 py-10'>
      <div className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
        <p className='text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted'>
          {t('home.brands.label')}
        </p>
        <div className='mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6'>
          {brands.map((brand) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={brand.src}
              src={brand.src}
              alt={brand.alt}
              className={`${brand.className} w-auto opacity-70 transition-opacity duration-150 hover:opacity-100`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
