import React from 'react';
import bg_chart from '../../assets/etc/bg_chart.svg';

const NavCard = () => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full gap-3 pl-6 overflow-hidden font-bold text-white bg-orange-600 h-44 rounded-3xl">
      <img
        src={bg_chart}
        alt="bg chart"
        className="absolute bottom-0 right-0 w-40 pointer-events-none opacity-30"
      />

      <div className="text-2xl font-extrabold">Yanolja Attractiveness Index</div>
      <div className="text-lg"> Go to &gt; </div>
    </div>
  );
};

export default NavCard;
