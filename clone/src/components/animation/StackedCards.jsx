import React from 'react';
import InsightCard from '../design/InsightCard';

export default function StackedCards({ cards, activeIndex }) {
  // 현재 index를 기준으로 3장만 스택으로 보여주기
  const visibleCards = cards.slice(activeIndex, activeIndex + 3);

  return (
    <div className="relative flex justify-center h-[360px]">
      {visibleCards.map((card, i) => (
        <div
          key={i}
          className="absolute transition-all duration-500"
          style={{
            transform: `translateX(${i * 45}px) scale(${1 - i * 0.05})`,
            zIndex: visibleCards.length - i,
          }}
        >
          <InsightCard image={card.image} title={card.title} />
        </div>
      ))}
    </div>
  );
}
