import BriefCarousel from '../feat/BriefCarousel';
import TrendCarousel from '../feat/TrendCarousel';
import SectionWrapper from './SectionWrapper';

export default function BriefSection() {
  return (
    <SectionWrapper height={{ default: 'auto' }} paddingX={20} paddingY={10} gap={16}>
      {/* 모바일: flex-col, 태블릿 이상: flex-row */}
      <div className="flex flex-col items-start w-full h-full gap-10 lg:flex-row">
        {/* BriefCarousel 영역 */}
        <div className="flex xl:flex-[3] flex-col h-full w-full ">
          <BriefCarousel />
        </div>

        {/* TrendCarousel 영역 */}
        <div className="flex flex-[2] xl:flex-[1] flex-col h-full w-full gap-6 xl:items-center justify-center">
          <TrendCarousel />
        </div>
      </div>
    </SectionWrapper>
  );
}
