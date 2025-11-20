// InsightSection.jsx
import { useState, useEffect } from 'react';
import InsightCarousel from '../feat/InsightCarousel';
import CircleNav from '../design/CircleNav';
import NavCard from '../design/NavCard';
import { NavCover } from '../../data/cover.js';

export default function InsightSection({ InsightCover }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // 재생/정지 상태
  const total = InsightCover.length;

  // 자동 슬라이드
  useEffect(() => {
    if (!isPlaying) return; // 정지 상태면 interval X

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, total]);

  return (
    <div className="flex w-full h-[480px] px-20 py-12 gap-12">
      {/* 좌측 Carousel + 하단 네비 */}
      <div className="flex flex-col flex-[4] gap-6">
        <InsightCarousel
          InsightCover={InsightCover}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        {/* 아래 네비게이션 + play/pause 버튼 */}
        <CircleNav
          count={InsightCover.length}
          activeIndex={activeIndex}
          onChange={i => setActiveIndex(i)}
          simple={false}
          isPlaying={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      {/* 우측 Nav 카드 리스트 */}
      <div className="flex flex-col flex-[1] gap-6">
        {NavCover.map((item, idx) => (
          <NavCard key={idx} title={item.title} image={item.image} color={item.bgcolor} />
        ))}
      </div>
    </div>
  );
}
