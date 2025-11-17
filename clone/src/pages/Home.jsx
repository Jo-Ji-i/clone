import CircleNav from '../components/design/CircleNav';
import InsightCard from '../components/design/InsightCard';
import NavCard from '../components/design/NavCard';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full">
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

      <div className="flex w-full h-[550px] px-24 py-1 gap-6">
        <div className="flex flex-[3] bg-gray-400">Insights / Brief </div>

        <div className="flex flex-col flex-[1] bg-gray-500"> Quarterly Trends</div>
      </div>

      <div className="flex w-full flex-col h-[800px] px-24 my-20 py-12 bg-orange-50">
        <div> Research Report </div>
        <div className="flex flex-row ">
          <div> 포스트 1</div>
          <div> 포스트 2</div>
          <div> 포스트 3</div>
        </div>
      </div>

      <div className="flex w-full h-[550px] px-24 py-1 mb-20 gap-6">
        <div className="flex flex-[3] bg-gray-400">Media Cover </div>

        <div className="flex flex-col flex-[1] bg-gray-500"> Data </div>
      </div>
    </div>
  );
}
