// TrendCarousel.jsx
import React, { useState } from 'react';
import { TrendList } from '../../data/list.js';
import TrendCard from '../design/TrendCard.jsx';
import { CircleBtn } from '../design/Button.jsx';
import CircleNav from '../design/CircleNav.jsx';
import arrow from '../../assets/etc/icon_arrow_right.svg';

export default function TrendCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = TrendList.length - 1;

  const prev = () => setActiveIndex(prev => Math.max(prev - 1, 0));
  const next = () => {
    if (activeIndex === maxIndex) {
      window.location.href = '/trends';
      return;
    }
    setActiveIndex(prev => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="flex flex-col flex-[1] h-auto gap-8 lg:gap-10 mia-h-[450px]">
      <div className="relative flex flex-row h-full gap-4 sm:gap-6 md:gap-10 lg:gap-6">
        <CircleBtn
          direction="left"
          onClick={prev}
          className="hidden md:block absolute left-[30px] top-1/2 lg:left-[-20px] -translate-y-1/2 cursor-pointer"
        />

        <div className="flex flex-col w-full h-full gap-8 pb-16">
          <div className="flex gap-3 text-2xl font-bold whitespace-nowrap">
            Quarterly Trends
            <img src={arrow} className="w-5 h-5 mt-1.5" />
          </div>

          <div className="flex justify-center w-full">
            <TrendCard title={TrendList[activeIndex].title} date={TrendList[activeIndex].date} />
          </div>

          <CircleNav simple count={TrendList.length} activeIndex={activeIndex} />
        </div>

        <CircleBtn
          direction="right"
          onClick={next}
          className="hidden md:block absolute right-[30px] lg:right-[-20px] top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
}
