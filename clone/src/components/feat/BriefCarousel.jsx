import React, { useEffect, useRef, useState } from 'react';
import { InsightCover } from '../../data/cover.js';
import BriefCard from '../design/BriefCard.jsx';
import { CircleBtn } from '../design/Button.jsx';
import BarNav from '../design/BarNav.jsx';
import arrow from '../../assets/etc/icon_arrow_right.svg';

export default function BriefCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const CARD_WIDTH = 220; // 카드 실제 폭(px)
  const CARD_GAP = 40;
  const ITEM_WIDTH = CARD_WIDTH + CARD_GAP;

  const total = InsightCover.length;
  const containerRef = useRef(null);

  /** 화면 크기에 따라 보이는 카드 개수 자동 계산 */
  useEffect(() => {
    const updateVisibleCount = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;
      const count = Math.floor(width / ITEM_WIDTH);

      setVisibleCount(Math.max(1, count));
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  /** 다음 */
  const next = () => {
    const nextIndex = activeIndex + 1;
    const lastVisibleIndex = nextIndex + (visibleCount - 1);

    // 빈자리 생김 → 링크 이동
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

  const progress = activeIndex / (total - 1);

  return (
    <div className="relative flex flex-col w-full h-full gap-4 py-2">
      {/* 타이틀 */}
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold">Insights / Brief</div>
        <img src={arrow} className="w-5 h-5" />
      </div>

      {/* 버튼 */}
      <CircleBtn
        direction="left"
        onClick={prev}
        className="absolute left-[-30px] top-1/2 md:top-[45%]  lg:top-[50%] z-50"
      />
      <CircleBtn
        direction="right"
        onClick={next}
        className="absolute right-[-30px] top-1/2 md:top-[45%] lg:right-[40px] lg:top-[50%] z-50"
      />

      {/* 슬라이더 영역 */}
      <div ref={containerRef} className="relative w-full pb-3 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${activeIndex * ITEM_WIDTH}px)`,
          }}
        >
          {InsightCover.map((item, idx) => (
            <div key={idx} style={{ width: CARD_WIDTH }}>
              <BriefCard title={item.title} date={item.date} image={item.image} />
            </div>
          ))}
        </div>
      </div>

      {/* 바 네비 */}
      <BarNav progress={progress} />
    </div>
  );
}
