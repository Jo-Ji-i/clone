import React, { useEffect, useRef, useState } from 'react';
import { InsightCover } from '../../data/cover.js';
import BriefCard from '../design/BriefCard.jsx';
import { CircleBtn } from '../design/Button.jsx';
import BarNav from '../design/BarNav.jsx';
import arrow from '../../assets/etc/icon_arrow_right.svg';

export default function BriefCarousel() {
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
      window.location.href = '/research';
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
    <div className="relative flex flex-col w-full gap-8 py-2 md:pr-10">
      {/* 타이틀 */}
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold lg:text-3xl">Insights / Brief</div>
        <img src={arrow} className="w-5 h-5" />
      </div>

      {/* 카드 슬라이더 영역 */}
      <div className="relative w-full">
        {/* 버튼: LG 이상만 */}
        <div className="absolute inset-y-0 z-50 items-center hidden -left-1 lg:flex">
          <CircleBtn direction="left" onClick={prev} />
        </div>
        <div className="absolute inset-y-0 z-50 items-center hidden -right-5 lg:flex">
          <CircleBtn direction="right" onClick={next} />
        </div>

        {/* 카드 컨테이너 */}
        <div
          ref={containerRef}
          className="flex gap-4 px-4 overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {InsightCover.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={{ width: '220px', scrollSnapAlign: 'start' }}
            >
              <BriefCard title={item.title} date={item.date} image={item.image} />
            </div>
          ))}
        </div>
      </div>

      {/* 진행바 */}
      <BarNav progress={progress} />
    </div>
  );
}
