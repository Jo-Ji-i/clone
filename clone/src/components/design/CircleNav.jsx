import React from 'react';
import iconPlay from '../../assets/etc/icon_play.svg';
import iconPause from '../../assets/etc/icon_pause.svg';
import iconLeft from '../../assets/etc/icon_arrow_left.svg';
import iconRight from '../../assets/etc/icon_arrow_right.svg';

export default function CircleNav({
  simple = false,
  count = 6,
  activeIndex = 0,
  onChange = () => {},
}) {
  return (
    <div className="flex items-center justify-center gap-6 text-xl text-gray-800">
      {/* simple 모드 아닐 때만 왼쪽 화살표 */}
      {!simple && (
        <img
          src={iconLeft}
          className="cursor-pointer"
          alt="left"
          onClick={() => onChange(Math.max(activeIndex - 1, 0))}
        />
      )}

      {/* 동그라미 네비게이션 */}
      <div className="flex items-center gap-3 text-xl">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`cursor-pointer ${i === activeIndex ? 'text-black' : 'text-gray-400'}`}
            onClick={() => onChange(i)}
          >
            {i === activeIndex ? '●' : '○'}
          </span>
        ))}
      </div>

      {/* simple 모드 아닐 때만 재생/정지, 오른쪽 화살표 */}
      {!simple && (
        <>
          <div className="flex items-center gap-4 text-base">
            <img src={iconPlay} className="w-3 h-3 cursor-pointer" alt="play" />
            <img src={iconPause} className="w-3 h-3 cursor-pointer" alt="pause" />
          </div>

          <img
            src={iconRight}
            className="cursor-pointer"
            alt="right"
            onClick={() => onChange(Math.min(activeIndex + 1, count - 1))}
          />
        </>
      )}
    </div>
  );
}
