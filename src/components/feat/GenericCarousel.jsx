// Carousel.jsx
import React, { useEffect, useRef, useState } from 'react';
import { CircleBtn } from '../design/Button.jsx';
import BarNav from '../design/BarNav.jsx';

/**
 * 범용 Carousel 컴포넌트
 * @param {Array} items - 카드 데이터 배열
 * @param {React.Component} Card - 카드 컴포넌트
 * @param {string} title - 타이틀 텍스트
 * @param {string} link - 마지막에서 이동할 링크
 */
export default function Carousel({ items, Card, title, link }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // 스크롤 이벤트로 진행바 연동
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      setProgress(maxScroll > 0 ? currentScroll / maxScroll : 1);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // 다음 버튼 클릭
  const next = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    const currentProgress = maxScroll > 0 ? currentScroll / maxScroll : 1;

    if (currentProgress < 1) {
      container.scrollBy({
        left: container.clientWidth,
        behavior: 'smooth',
      });
    } else {
      link && (window.location.href = link);
    }
  };

  // 이전 버튼 클릭
  const prev = () => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({
      left: -container.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative flex flex-col w-full gap-6 py-4">
      {/* 타이틀 */}
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold lg:text-3xl">{title}</div>
      </div>

      {/* 카드 슬라이더 영역 */}
      <div className="relative w-full">
        {/* 버튼: 데스크탑 이상 */}
        <div className="absolute inset-y-0 left-0 z-50 items-center hidden lg:flex">
          <CircleBtn direction="left" onClick={prev} />
        </div>
        <div className="absolute inset-y-0 right-0 z-50 items-center hidden lg:flex">
          <CircleBtn direction="right" onClick={next} />
        </div>

        {/* 카드 컨테이너 */}
        <div
          ref={containerRef}
          className="flex gap-4 px-4 overflow-x-auto scroll-smooth hide-scrollbar"
        >
          {items.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[220px]">
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* 진행바 */}
      <BarNav progress={progress} />
    </div>
  );
}
