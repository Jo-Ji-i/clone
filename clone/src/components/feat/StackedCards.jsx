// StackedCards.jsx
import React from 'react';
import { motion } from 'framer-motion';
import InsightCard from '../design/InsightCard';

export default function StackedCards({ cards, activeIndex }) {
  const total = cards.length;

  // activeIndex 기준으로 3장씩 반복
  const visibleCards = Array.from({ length: 3 }).map((_, i) => {
    const index = (activeIndex + i) % total; // 무한 반복
    return { ...cards[index], originalIndex: index };
  });

  return (
    <div className="relative flex justify-center h-[360px]">
      {visibleCards.map((card, i) => (
        <div
          key={card.originalIndex} // 반복되도 고유 key
          className="absolute transition-all duration-500"
          style={{
            transform: `translateX(${i * 45}px) scale(${1 - i * 0.05})`,
            zIndex: 3 - i,
          }}
        >
          <InsightCard image={card.image} title={card.title} />
        </div>
      ))}
    </div>
  );
}
