import React from 'react';

const NavCard = ({ title, image, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative flex flex-col w-full h-20 gap-2 px-4 py-3 overflow-hidden font-bold text-white md:h-24 lg:h-26 rounded-2xl "
    >
      <img
        src={image}
        alt="bg"
        className="absolute bottom-0 right-0 w-24 pointer-events-none opacity-30"
      />

      <div className="text-base font-extrabold">{title}</div>
      <div className="text-sm text-gray-200">Go To &gt;</div>
    </div>
  );
};

export default NavCard;
