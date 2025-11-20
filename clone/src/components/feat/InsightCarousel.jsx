import { useState, useEffect } from 'react';

import CircleNav from '../design/CircleNav';
import StackedCards from './StackedCards.jsx';

export default function InsightCarousel({ InsightCover, activeIndex, setActiveIndex }) {
  const total = InsightCover.length;
  return (
    <div className="flex flex-col w-full gap-6">
      <StackedCards cards={InsightCover} activeIndex={activeIndex} />
    </div>
  );
}
