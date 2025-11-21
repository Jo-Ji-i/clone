import ResearchCarousel from '../feat/ResearchCarousel';
import SectionWrapper from './SectionWrapper';

export default function ResearchSection() {
  return (
    <SectionWrapper height={650} fade>
      <ResearchCarousel />
    </SectionWrapper>
  );
}
