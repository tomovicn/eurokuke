import { Container, MonoLabel } from '@/components/ui/primitives';
import { sr } from '@/utils/translations/sr';

/**
 * Plain <img>, not next/image.
 *
 * next/image refuses to serve these SVGs, which is why two of the three logos
 * rendered nothing at all. They are small static brand marks with no need for a
 * responsive srcset, so the optimiser buys nothing here.
 *
 * Each mark carries its own height. The three files have different cap heights
 * and different amounts of internal padding, so a single shared height makes
 * Bosal look twice the size of Steinhof. These numbers are tuned per file, not
 * derived from anything.
 */
const brands = [
  // Grayscaled red lands on a mid grey, noticeably lighter than the other two
  // marks; this brings it back to their weight.
  { src: '/bosal.svg', alt: 'Bosal', className: 'h-[19px] brightness-[0.62] md:h-6' },
  // oris.jpg is the only non-transparent mark. `brightness/contrast` lifts its
  // pale grey plate to pure white, which `mix-blend-multiply` below then drops
  // out entirely, while the dark wordmark is pushed the other way and stays.
  { src: '/oris.jpg', alt: 'Oris', className: 'h-4 brightness-125 contrast-[1.6] md:h-5' },
  { src: '/steinhof-dark.svg', alt: 'Steinhof', className: 'h-[14px] md:h-[17px]' },
];

/**
 * No top margin: the section above already ends on its own padding, and adding
 * one here doubles the gap to about 144px.
 */
export default function BrandStrip() {
  return (
    <section className='border-y border-line bg-surface'>
      <Container className='flex flex-col gap-3 py-4 md:flex-row md:items-center md:gap-12 md:py-[26px]'>
        <MonoLabel className='shrink-0'>{sr.home.brands.label}</MonoLabel>
        <div className='flex items-center gap-8 md:gap-11'>
          {brands.map((brand) => (
            /*
             * `grayscale` puts all three marks at one optical weight, which is
             * how the design draws them: Bosal is a solid red wordmark and next
             * to a thin black one it otherwise reads as an advertisement rather
             * than a spec.
             *
             * `mix-blend-multiply` is there for oris.jpg specifically. It is the
             * only one of the three that is not a transparent SVG, and its pale
             * grey plate is plainly visible as a rectangle on the cream ground.
             * Multiplying it against that ground makes the plate disappear
             * while leaving the two SVGs untouched.
             */
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={brand.src}
              src={brand.src}
              alt={brand.alt}
              className={`${brand.className} w-auto opacity-90 mix-blend-multiply grayscale`}
              loading='lazy'
              decoding='async'
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
