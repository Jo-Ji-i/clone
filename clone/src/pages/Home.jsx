import { InsightCover } from '../data/cover.js';
import InsightSection from '../components/common/InsightSection.jsx';
import BriefSection from '../components/common/BrifeSection.jsx';
import ResearchSection from '../components/common/ResearchSection.jsx';
import MediaSection from '../components/common/MediaSection.jsx';

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
