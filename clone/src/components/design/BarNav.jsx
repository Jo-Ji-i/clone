import React from 'react';

const BarNav = ({ progress = 0 }) => {
  return (
    <div className="w-full pr-20">
      <div className="relative w-full h-[3px] bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-[3px] bg-black transition-all duration-500"
          style={{
            width: `${Math.min(progress * 100, 100)}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default BarNav;
