import React from 'react';

const NavCard = ({ title, image, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative flex flex-col items-start justify-center w-full h-32 gap-3 px-6 py-6 overflow-hidden text-base font-bold text-white rounded-3xl "
    >
      <img
        src={image}
        alt="bg"
        className="absolute bottom-0 right-0 w-24 pointer-events-none opacity-30"
      />

      <div className="text-lg font-extrabold">{title}</div>
      <div className="text-sm text-gray-200">Go To &gt;</div>
    </div>
  );
};

export default NavCard;
