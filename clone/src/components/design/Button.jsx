import React from 'react';

import right from '../../assets/etc/icon_arrow_right.svg';
import left from '../../assets/etc/icon_arrow_left.svg';

export function CircleBtn({ direction, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center w-14 h-14 shrink-0
                  bg-white border border-gray-300 rounded-full shadow-xl
                  ${className}`}
    >
      {direction === 'right' && <img src={right} alt="right arrow" />}
      {direction === 'left' && <img src={left} alt="left arrow" />}
    </div>
  );
}
