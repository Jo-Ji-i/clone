import React from 'react';
import bg_trend from '../../assets/trends/img1.png';

const TrendCard = ({ title, date }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_trend})` }}
      className="
        flex flex-col justify-end 
        px-8 pb-8 gap-4 text-white font-bold rounded-3xl shadow-md 
        bg-black/40 bg-blend-darken bg-cover bg-center

        w-[90vw]
        sm:w-[80vw]
        md:w-[80%]
        lg:w-full
        aspect-[4/3]
      "
    >
      <div className="text-lg sm:text-xl md:text-2xl lg:text-lg">{title}</div>
      <div className="text-sm sm:text-base lg:text-sm">{date}</div>
    </div>
  );
};

export default TrendCard;
