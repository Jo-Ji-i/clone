import React from 'react';
import bg_trend from '../../assets/trends/img1.png';

const TrendCard = ({ title, date }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_trend})` }}
      className="flex flex-col items-start justify-end w-full h-full gap-3 px-8 pb-8 text-xl font-bold text-white bg-no-repeat bg-cover shadow-md bg-black/40 rounded-3xl bg-blend-darken"
    >
      <div className="text-xl font-semibold">{title} </div>
      <div className="text-sm"> {date} </div>
    </div>
  );
};

export default TrendCard;
