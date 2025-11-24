import { InsightCover } from '../data/cover.js';
import InsightSection from '../components/sections/InsightSection.jsx';
import BriefSection from '../components/sections/BrifeSection.jsx';
import ResearchSection from '../components/sections/ResearchSection.jsx';
import MediaSection from '../components/sections/MediaSection.jsx';

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
