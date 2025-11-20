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
import arrow from '../assets/etc/arrow_right.svg';

import DataCard from '../components/design/DataCard';

// 버튼
import { CircleBtn } from '../components/design/Button';

import InsightCarousel from '../components/feat/InsightCarousel.jsx';
import StackedCards from '../components/animation/StackedCards';
import BriefCarousel from '../components/feat/BriefCarousel';
import TrendCarousel from '../components/feat/TrendCarousel';
import ResearchCarousel from '../components/feat/ResearchCarousel';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full">
      {/* 섹션 1  */}
      <div className="flex w-full h-[480px] px-20 py-12 gap-12">
        <div className="flex flex-col flex-[4] ">
          <InsightCarousel />
        </div>

        <div className="flex flex-col flex-[1] gap-6">
          {NavCover.map((item, idx) => (
            <NavCard key={idx} title={item.title} image={item.image} color={item.bgcolor} />
          ))}
        </div>
      </div>

      {/* 섹션 2 */}
      <div className="flex w-full h-[550px] px-20 pt-10 gap-16 ">
        <div className="flex flex-[4] flex-col h-full min-w-0">
          <BriefCarousel />
        </div>

        <div className="flex flex-col flex-[1] h-full gap-8">
          <div className="relative flex flex-row items-center h-full ">
            <TrendCarousel />
          </div>
        </div>
      </div>

      {/* 섹션 3 */}
      <div className="flex w-full h-[650px]">
        <ResearchCarousel />
      </div>

      {/* 섹션 4 */}
      <div className="flex w-full h-[550px] px-20 py-16 gap-16 items-center">
        <div className="flex flex-[4] flex-col">
          <div className="flex flex-row justify-between px-6 py-3">
            <div className="flex gap-6 text-3xl font-bold">
              <span> Media Coverage</span>
              <span className="text-gray-300"> Press Release </span>
            </div>
            <div className="text-base font-semibold"> See More </div>
          </div>
          <MediaList items={listData} />
        </div>

        <div className="flex flex-col flex-[1.1] max-w-[320px] gap-8">
          <div className="flex flex-row items-center gap-2">
            <div className="text-3xl font-bold"> Data</div>
            <img src={arrow} className="w-5 h-5 mt-1" />
          </div>
          <DataCard />
        </div>
      </div>
    </div>
  );
}
