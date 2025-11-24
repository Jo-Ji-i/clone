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
      window.location.href = '/research';
      return;
    }
    setActiveIndex(prev => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="flex flex-col flex-[1] h-auto gap-8 lg:gap-10 mia-h-[450px]">
      <div className="relative flex flex-row h-full gap-4 sm:gap-6 md:gap-10 lg:gap-6">
        <div className="absolute inset-y-0 z-50 flex items-center -left-5 ">
          <CircleBtn direction="left" onClick={prev} />
        </div>
        <div className="absolute inset-y-0 z-50 flex items-center -right-5">
          <CircleBtn direction="right" onClick={next} />
        </div>

        <div className="flex flex-col w-full h-full gap-8 pb-16">
          <div className="flex gap-3 text-3xl font-bold">
            Quarterly Trends
            <img src={arrow} className="w-5 h-5 mt-1.5" />
          </div>

          <div className="flex justify-center w-full">
            <TrendCard title={TrendList[activeIndex].title} date={TrendList[activeIndex].date} />
          </div>

          <CircleNav simple count={TrendList.length} activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
}
