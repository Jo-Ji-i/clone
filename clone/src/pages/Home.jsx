// 컴포넌트
import BarNav from '../components/design/BarNav';
import BriefCard from '../components/design/BriefCard';
import NavCard from '../components/design/NavCard';
import ResearchCard from '../components/design/ResearchCard';
import TrendCard from '../components/design/TrendCard';
import MediaList from '../components/design/MediaList';
import CircleNav from '../components/design/CircleNav';

// 데이터
import { listData } from '../data/list.js';
import { NavCover } from '../data/cover.js';
import { InsightCover } from '../data/cover.js';

import DataCard from '../components/design/DataCard';

// 버튼
import { CircleBtn } from '../components/design/Button';

import InsightCarousel from '../components/feat/InsightCarousel.jsx';
import StackedCards from '../components/animation/StackedCards';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full">
      {/* 섹션 1  */}
      <div className="flex w-full h-[650px] px-20 py-16 gap-12">
        <div className="flex flex-col flex-[4] ">
          <InsightCarousel />
        </div>

        <div className="flex flex-col flex-[1] gap-6">
          {NavCover.map((item, idx) => (
            <NavCard key={idx} title={item.title} image={item.image} />
          ))}
        </div>
      </div>

      {/* 섹션 2 */}
      <div className="flex w-full h-[600px] px-20 py-10 gap-16">
        <div className="flex flex-[4] flex-col gap-10 h-full relative">
          <div className="flex text-3xl font-bold"> Insights / Brief </div>
          <div className="flex flex-row items-center h-full">
            <BriefCard />
            <BriefCard />
            <BriefCard />
          </div>
          <BarNav />
          <CircleBtn
            direction="right"
            className="absolute right-[-20px] top-1/2 -translate-y-1/2"
          />
        </div>

        <div className="flex flex-col flex-[1]">
          <div className="relative flex flex-row items-center h-full">
            <CircleBtn
              direction="left"
              className="absolute left-[-30px] top-1/2 -translate-y-1/2"
            />
            <div className="flex flex-col h-full gap-6 ">
              <div className="flex text-3xl font-bold"> Quarterly Trends</div>
              <TrendCard />
              <CircleNav simple count={5} />
            </div>
            <CircleBtn
              direction="right"
              className="absolute right-[-30px] top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      {/* 섹션 3 */}
      <div className="flex w-full flex-col h-[800px] relative px-20 my-20 py-12 gap-5 bg-orange-100">
        <div className="flex text-3xl font-bold"> Research Report </div>
        <div className="flex flex-row gap-5 mb-5">
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
        </div>
        <BarNav />
        <CircleBtn direction="left" className="absolute left-[40px] top-1/2 -translate-y-1/2" />
        <CircleBtn direction="right" className="absolute right-[80px] top-1/2 -translate-y-1/2" />
      </div>

      {/* 섹션 4 */}
      <div className="flex w-full h-[550px] px-20 py-1  gap-16">
        <div className="flex flex-[4] flex-col">
          <div className="flex flex-row justify-between px-6 ">
            <div className="flex gap-6 text-3xl font-bold">
              <span> Media Cover</span>
              <span className="text-gray-300"> Press Release </span>
            </div>
            <div className="text-xl"> See More </div>
          </div>
          <MediaList items={listData} />
        </div>

        <div className="flex flex-col flex-[1] ">
          <div className="text-3xl font-bold"> Data</div>
          <DataCard />
        </div>
      </div>
    </div>
  );
}
