import React from 'react';

import right from '../../assets/etc/icon_arrow_right.svg';
import left from '../../assets/etc/icon_arrow_left.svg';

export function CircleBtn({ direction, className = '', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10
              shrink-0 bg-white border border-gray-300 rounded-full shadow-xl
              cursor-pointer select-none ${className}`}
    >
      {direction === 'right' && (
        <img
          src={right}
          alt="right arrow"
          className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-2 lg:h-2"
        />
      )}
      {direction === 'left' && (
        <img
          src={left}
          alt="left arrow"
          className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-2 lg:h-2"
        />
      )}
    </div>
  );
}
