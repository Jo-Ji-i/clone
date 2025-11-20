// InsightSection.jsx
import { useState, useEffect } from 'react';
import InsightCarousel from '../feat/InsightCarousel';
import CircleNav from '../design/CircleNav';

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
    <div className="flex flex-col w-full gap-6">
      {/* Carousel */}
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
        simple={false} // simple 모드가 아니면 play/pause와 화살표 활성
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
