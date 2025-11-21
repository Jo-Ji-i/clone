import BriefCarousel from '../feat/BriefCarousel';
import TrendCarousel from '../feat/TrendCarousel';
import SectionWrapper from './SectionWrapper';

export default function BriefSection() {
  return (
    <SectionWrapper height={{ default: 'auto' }} paddingX={20} paddingY={10} gap={16}>
      {/* 모바일: flex-col, 태블릿 이상: flex-row */}
      <div className="flex flex-col w-full h-full gap-8 lg:flex-row">
        {/* BriefCarousel 영역 */}
        <div className="flex flex-[4] flex-col h-full min-w-0">
          <BriefCarousel />
        </div>

        {/* TrendCarousel 영역 */}
        <div className="flex flex-[1] flex-col h-full gap-8 pb-4">
          <TrendCarousel />
        </div>
      </div>
    </SectionWrapper>
  );
}
