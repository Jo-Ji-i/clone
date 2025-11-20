import MediaList from '../design/MediaList';
import DataCard from '../design/DataCard';
import arrow from '../../assets/etc/arrow_right.svg';
import { listData } from '../../data/list.js';
import SectionWrapper from './SectionWrapper';

export default function MediaSection() {
  return (
    <SectionWrapper height={550} paddingX={20} paddingY={16} gap={16} fade>
      <div className="flex flex-[4] flex-col">
        <div className="flex flex-row justify-between px-6 py-3">
          <div className="flex gap-6 text-3xl font-bold">
            <span>Media Coverage</span>
            <span className="text-gray-300">Press Release</span>
          </div>
          <div className="text-base font-semibold">See More</div>
        </div>
        <MediaList items={listData} />
      </div>

      <div className="flex flex-col flex-[1.1] max-w-[320px] gap-8">
        <div className="flex flex-row items-center gap-2">
          <div className="text-3xl font-bold">Data</div>
          <img src={arrow} className="w-5 h-5 mt-1" />
        </div>
        <DataCard />
      </div>
    </SectionWrapper>
  );
}
