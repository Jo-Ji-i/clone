import React, { useEffect, useRef, useState } from 'react';
import ResearchCard from '../design/ResearchCard.jsx';
import { CircleBtn } from '../design/Button.jsx';
import BarNav from '../design/BarNav.jsx';
import { ResearchCover } from '../../data/cover.js';

export default function ResearchCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const CARD_WIDTH = 250;
  const CARD_GAP = 45;
  const ITEM_WIDTH = CARD_WIDTH + CARD_GAP;

  const total = ResearchCover.length;

  const containerRef = useRef(null);

  /** 화면 너비에 맞춰 보이는 카드 개수 계산 */
  useEffect(() => {
    const updateVisibleCount = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;
      const count = Math.floor(width / ITEM_WIDTH);

      setVisibleCount(Math.max(1, count)); // 최소 1개
    };

    updateVisibleCount();

    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  /** 다음으로 이동 */
  const next = () => {
    const nextIndex = activeIndex + 1;

    const lastVisibleIndex = nextIndex + (visibleCount - 1);

    // ⛔ 마지막을 넘어감 → 빈자리 → 링크 이동
    if (lastVisibleIndex >= total) {
      window.location.href = '/research';
      return;
    }

    setActiveIndex(nextIndex);
  };

  /** 이전 */
  const prev = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="relative flex flex-col justify-center w-full h-full px-20 py-5 bg-beige">
      <div className="flex text-2xl font-bold">Research Report</div>

      <CircleBtn
        direction="left"
        onClick={prev}
        className="absolute left-[50px] z-50 top-1/2 -translate-y-1/2 cursor-pointer"
      />
      <CircleBtn
        direction="right"
        onClick={next}
        className="absolute right-[50px] z-50 top-1/2 -translate-y-1/2 cursor-pointer"
      />

      <div ref={containerRef} className="w-full overflow-hidden ">
        <div
          className="flex transition-transform duration-500"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${activeIndex * ITEM_WIDTH}px)`,
          }}
        >
          {ResearchCover.map((item, idx) => (
            <div key={idx} style={{ width: CARD_WIDTH }}>
              <ResearchCard image={item.image} date={item.date} />
            </div>
          ))}
        </div>
      </div>

      <BarNav progress={activeIndex / (total - 1)} />
    </div>
  );
}
