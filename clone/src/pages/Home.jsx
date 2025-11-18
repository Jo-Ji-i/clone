// 컴포넌트
import BarNav from '../components/design/BarNav';
import BriefCard from '../components/design/BriefCard';
import CircleNav from '../components/design/CircleNav';
import InsightCard from '../components/design/InsightCard';
import NavCard from '../components/design/NavCard';
import ResearchCard from '../components/design/ResearchCard';
import TrendCard from '../components/design/TrendCard';
import MediaList from '../components/design/MediaList';

// 데이터
import { listData } from '../data/list.js';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full">
      {/* 섹션 1  */}
      <div className="flex w-full h-[650px] px-20 py-16 gap-16">
        <div className="flex flex-col flex-[4] gap-10">
          <InsightCard />
          <CircleNav />
        </div>

        <div className="flex flex-col flex-[1] gap-6">
          <NavCard />
          <NavCard />
          <NavCard />
        </div>
      </div>

      {/* 섹션 2 */}
      <div className="flex w-full h-[600px] px-20 py-10 gap-16">
        <div className="flex flex-[4] flex-col gap-10">
          <div className="flex text-3xl font-bold"> Insights / Brief </div>
          <div className="flex flex-row">
            <BriefCard />
            <BriefCard />
            <BriefCard />
          </div>
          <BarNav />
        </div>

        <div className="flex flex-col flex-[1] gap-6">
          <div className="flex text-3xl font-bold"> Quarterly Trends</div>
          <TrendCard />
        </div>
      </div>

      {/* 섹션 3 */}
      <div className="flex w-full flex-col h-[800px] px-20 my-20 py-12 gap-5 bg-orange-100">
        <div className="flex text-3xl font-bold"> Research Report </div>
        <div className="flex flex-row gap-5 mb-5">
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
        </div>
        <BarNav />
      </div>

      {/* 섹션 4 */}
      <div className="flex w-full h-[550px] px-20 py-1 mb-20 gap-16">
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

        <div className="flex flex-col flex-[1] bg-gray-500"> Data </div>
      </div>
    </div>
  );
}
