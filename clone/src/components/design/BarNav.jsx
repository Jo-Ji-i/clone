import React from 'react';

const BarNav = () => {
  return (
    <div className="w-full pr-20">
      <div className="relative w-full h-[3px] bg-gray-300 rounded-full overflow-hidden">
        {/* 채워진 부분 */}
        <div className="absolute top-0 left-0 h-[3px] w-1/3 bg-black"></div>
      </div>
    </div>
  );
};

export default BarNav;
