import React from 'react';
import InsightCard from '../design/InsightCard';

export default function StackedCards({ cards, activeIndex }) {
  const total = cards.length;
  const visibleCount = 3; // 한 번에 보여줄 카드 수

  // 현재 activeIndex부터 visibleCount만큼 순환해서 가져오기
  const visibleCards = Array.from({ length: visibleCount }).map((_, i) => {
    const idx = (activeIndex + i) % total;
    return { ...cards[idx], originalIndex: idx, order: i };
  });

  return (
    <div className="flex w-full">
      {/* 카드들을 절대 위치로 배치하여 오른쪽으로 겹치게 */}
      <div className="relative w-full h-80">
        {visibleCards.map((card, i) => {
          // 각 카드를 오른쪽으로 조금씩 이동 (4%씩)
          const leftPosition = i * 4;
          const cardWidth = 100 - (visibleCount - 1) * 4; // 92%

          return (
            <div
              key={card.originalIndex}
              className="absolute top-0 left-0 w-full transition-all duration-300"
              style={{
                left: `${leftPosition}%`,
                width: `${cardWidth}%`, // w-full 대신
                zIndex: 10 - i, // 오른쪽 카드가 아래로
              }}
            >
              <InsightCard image={card.image} title={card.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
