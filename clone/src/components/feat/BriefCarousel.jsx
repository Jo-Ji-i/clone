import React, { useState } from 'react';
import { InsightCover } from '../../data/cover.js';
import BriefCard from '../design/BriefCard.jsx';
import { CircleBtn } from '../design/Button.jsx';
import BarNav from '../design/BarNav.jsx';
import arrow from '../../assets/etc/icon_arrow_right.svg';

export default function BriefCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = InsightCover.length;
  const cardWidth = 28; // 한 장 폭 (%)
  const visibleCount = 3.2; // 실제 보이는 개수 느낌

  const goToLink = () => {
    const lastItem = InsightCover[InsightCover.length - 1];
    if (lastItem?.link) {
      window.location.href = '/insight';
    } else {
      console.warn('link가 없습니다.');
    }
  };

  // 이전
  const prev = () => {
    if (activeIndex === 0) return; // 더 이상 못 가면 멈춤
    setActiveIndex(prev => prev - 1);
  };

  // 다음
  const next = () => {
    // 마지막 카드 근처에서 더 넘길 수 없음 → 링크 이동
    if (activeIndex >= total - visibleCount) {
      goToLink();
      return;
    }
    setActiveIndex(prev => prev + 1);
  };

  /** progress: 0 ~ 1 */
  const progress = activeIndex / (total - visibleCount);

  return (
    <div className="relative flex flex-col w-full h-full gap-10">
      {/* 타이틀 */}
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold">Insights / Brief</div>
        <img src={arrow} className="w-5 h-5" />
      </div>

      {/* 버튼 */}
      <CircleBtn
        direction="left"
        onClick={prev}
        className="absolute left-[-30px] z-50 top-1/2 -translate-y-1/2"
      />
      <CircleBtn
        direction="right"
        onClick={next}
        className="absolute right-[-30px] z-50 top-1/2 -translate-y-1/2"
      />

      {/* 슬라이더 영역 */}
      <div className="relative w-full pb-3 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${total * cardWidth}%`,
            transform: `translateX(-${activeIndex * cardWidth}%)`,
          }}
        >
          {InsightCover.map((item, idx) => (
            <div key={idx} className="flex-shrink-0" style={{ width: `${cardWidth}%` }}>
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
