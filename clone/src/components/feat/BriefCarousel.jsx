import React, { useState } from 'react';
import { InsightCover } from '../../data/cover.js';
import BriefCard from '../design/BriefCard.jsx';
import { CircleBtn } from '../design/Button.jsx';
import BarNav from '../design/BarNav.jsx';

export default function BriefCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = InsightCover.length - 4; // 한 화면에 4개 보이므로

  const prev = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  const next = () => {
    setActiveIndex(prev => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="relative flex flex-col w-full h-full gap-10 ">
      {/* 타이틀 영역 */}
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold">Insights / Brief</div>
      </div>

      {/* 버튼 */}
      <CircleBtn
        direction="left"
        onClick={prev}
        className="absolute left-[-30px] z-30 top-1/2 -translate-y-1/2"
      />

      <CircleBtn
        direction="right"
        onClick={next}
        className="absolute right-[-30px] top-1/2 z-30 -translate-y-1/2"
      />

      {/* 슬라이더 영역 */}
      <div className="relative w-full pb-3 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${InsightCover.length * 27}%`,
            transform: `translateX(-${activeIndex * 20}%)`,
          }}
        >
          {InsightCover.map((item, idx) => (
            <div key={idx} className="flex-shrink-0" style={{ width: '30%' }}>
              <BriefCard title={item.title} date={item.date} image={item.image} />
            </div>
          ))}
        </div>
      </div>

      <BarNav />
    </div>
  );
}
