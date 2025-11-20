import BriefCarousel from '../feat/BriefCarousel';
import TrendCarousel from '../feat/TrendCarousel';
import SectionWrapper from './SectionWrapper';

export default function BriefSection() {
  return (
    <SectionWrapper height={550} paddingX={20} paddingY={10} gap={16}>
      <div className="flex flex-[4] flex-col h-full min-w-0">
        <BriefCarousel />
      </div>
      <div className="flex flex-[1] flex-col h-full gap-8">
        <TrendCarousel />
      </div>
    </SectionWrapper>
  );
}
