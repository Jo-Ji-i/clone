import MediaList from '../design/MediaList.jsx';
import DataCard from '../design/DataCard.jsx';
import arrow from '../../assets/etc/arrow_right.svg';
import { listData } from '../../data/list.js';
import SectionWrapper from './SectionWrapper.jsx';

export default function MediaSection() {
  return (
    <SectionWrapper height="auto" paddingX={20} paddingY={16} gap={16} fade>
      <div className="flex flex-col w-full gap-10 pb-20 lg:flex-row">
        {/* LEFT */}
        <div className="flex flex-col flex-[4] w-full">
          <div className="flex flex-row justify-between px-6 py-3">
            <div className="flex gap-6 text-3xl font-bold">
              <span>Media Coverage</span>
              <span className="text-gray-300">Press Release</span>
            </div>
            <div className="text-base font-semibold">See More</div>
          </div>

          <MediaList items={listData} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col w-full gap-8 lg:max-w-[320px] ">
          <div className="flex flex-row gap-2 ">
            <div className="text-3xl font-bold">Data</div>
            <img src={arrow} className="w-5 h-5 mt-1 " />
          </div>
          <div className="flex justify-center w-full">
            <DataCard />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
