import ContactActions from '@/components/ContactActions';
import { Container, Section, TextLink } from '@/components/ui/primitives';
import { sr } from '@/utils/translations/sr';

export default function NotFound() {
  return (
    <Section first>
      <Container className='py-14 md:py-24'>
        <div className='max-w-[52ch]'>
          <p className='font-mono text-[11px] uppercase tracking-label text-faint'>404</p>
          <h1 className='mt-3 text-[30px] font-semibold leading-[1.06] tracking-[-0.025em] md:text-5xl md:tracking-[-0.03em]'>
            {sr.notFound.title}
          </h1>
          <p className='mt-3.5 text-[15px] leading-[1.6] text-body md:mt-5 md:text-[18px]'>
            {sr.notFound.description}
          </p>
          <ContactActions solid='ink' size='md' className='mt-6 md:mt-8 md:max-w-sm' />
          <p className='mt-5 text-sm md:text-[15px]'>
            <TextLink href='/'>{sr.notFound.homeButton} &rarr;</TextLink>
          </p>
        </div>
      </Container>
    </Section>
  );
}
