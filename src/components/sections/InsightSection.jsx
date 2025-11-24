import { useState, useEffect } from 'react';
import InsightCarousel from '../feat/InsightCarousel';
import CircleNav from '../design/CircleNav.jsx';
import NavCard from '../design/NavCard.jsx';
import { NavCover } from '../../data/cover.js';

export default function InsightSection({ InsightCover }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const total = InsightCover.length;

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, total]);

  return (
    <div className="flex flex-col items-center w-full px-3 py-10 sm:px-6 md:px-12 lg:px-20">
      {/* 최대 너비 컨테이너 */}
      <div className="flex flex-col w-full gap-10 lg:flex-row">
        {/* Carousel + CircleNav */}
        <div className="flex flex-col w-full justify-center lg:flex-[4] gap-6">
          <InsightCarousel
            InsightCover={InsightCover}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
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

        {/* NavCards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 lg:flex lg:flex-col lg:flex-[1] lg:gap-6">
          {NavCover.map((item, idx) => (
            <NavCard key={idx} title={item.title} image={item.image} color={item.bgcolor} />
          ))}
        </div>
      </div>
    </div>
  );
}
