import { useState } from 'react';
import InsightCard from '../design/InsightCard';
import CircleNav from '../design/CircleNav';
import { InsightCover } from '../../data/cover.js';
import StackedCards from '../animation/StackedCards';

export default function InsightCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const current = InsightCover[activeIndex];

  return (
    <div className="flex flex-col w-full gap-6">
      {/* 현재 활성 카드만 보여줌 */}
      <StackedCards cards={InsightCover} activeIndex={activeIndex} />

      {/* 동그라미 네비게이션 */}
      <CircleNav
        count={InsightCover.length}
        activeIndex={activeIndex}
        onChange={i => setActiveIndex(i)}
      />
    </div>
  );
}
