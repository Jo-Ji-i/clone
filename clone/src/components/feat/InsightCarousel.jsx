// InsightCarousel.jsx
import React from 'react';
import StackedCards from './StackedCards.jsx';
import MobileCard from './MobileCard.jsx';

export default function InsightCarousel({ InsightCover, activeIndex }) {
  return (
    <div className="flex justify-center w-full">
      {/* 모바일 / 태블릿 / 랩탑(LG 이하): MobileCard */}
      <div className="flex justify-center w-full xl:hidden">
        <MobileCard card={InsightCover[activeIndex]} />
      </div>

      {/* 데스크탑(LG 이상): StackedCards */}
      <div className="justify-center hidden w-full xl:flex">
        <StackedCards cards={InsightCover} activeIndex={activeIndex} />
      </div>
    </div>
  );
}
