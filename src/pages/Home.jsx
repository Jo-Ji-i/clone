import { InsightCover } from '../data/cover.js';
import InsightSection from '../components/sections/InsightSection.jsx';
import BriefSection from '../components/sections/BrifeSection.jsx';
import ResearchSection from '../components/sections/ResearchSection.jsx';
import MediaSection from '../components/sections/MediaSection.jsx';

// 모바일 퍼스트
// md: 태블릿, 랩탑(1024px) 크기
// lg: 랩탑L, 크기

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full">
      <InsightSection InsightCover={InsightCover} />
      <BriefSection />
      <ResearchSection />
      <MediaSection />
    </div>
  );
}
