import React, { useState } from 'react';
import { TrendList } from '../../data/list.js';
import TrendCard from '../design/TrendCard.jsx';
import { CircleBtn } from '../design/Button.jsx';
import CircleNav from '../design/CircleNav.jsx';
import arrow from '../../assets/etc/icon_arrow_right.svg';

export default function TrendCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = TrendList.length - 1;

  const prev = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  const next = () => {
    // 👉 마지막에서 한번 더 누르면 링크 이동
    if (activeIndex === maxIndex) {
      window.location.href = '/trends';
      return;
    }

    setActiveIndex(prev => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="flex flex-col flex-[1] h-full gap-8">
      <div className="relative flex flex-row items-center h-full">
        {/* LEFT BTN */}
        <CircleBtn
          direction="left"
          onClick={prev}
          className="absolute left-[-30px] top-1/2 -translate-y-1/2 cursor-pointer"
        />

        {/* CONTENT */}
        <div className="flex flex-col h-full gap-6 pb-16">
          <div className="flex gap-3 text-2xl font-bold">
            Quarterly Trends
            <img src={arrow} className="w-5 h-5 mt-1.5" />
          </div>

          <TrendCard title={TrendList[activeIndex].title} date={TrendList[activeIndex].date} />

          <CircleNav simple count={TrendList.length} activeIndex={activeIndex} />
        </div>

        {/* RIGHT BTN */}
        <CircleBtn
          direction="right"
          onClick={next}
          className="absolute right-[-30px] top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
}
