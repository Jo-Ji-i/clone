import React from 'react';
import bg_trend from '../../assets/trends/img1.png';

const TrendCard = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_trend})` }}
      className="flex flex-col items-start justify-end w-full h-full gap-8 px-8 pb-10 text-xl font-bold text-white bg-no-repeat bg-cover shadow-md bg-black/40 rounded-3xl bg-blend-darken"
    >
      <div className="text-2xl text-extraBold">Korean Loading Industry Trends Report Q3 2023</div>
      <div className="text-lg"> 2025.10.19</div>
    </div>
  );
};

export default TrendCard;
