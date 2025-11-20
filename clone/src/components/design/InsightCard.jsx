import React from 'react';

const InsightCard = ({ image, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="flex flex-col justify-center max-w-[900px] gap-6 p-10 pl-20 text-xl font-bold text-white bg-center bg-cover shadow-md min-h-[360px] bg-black/20 rounded-3xl bg-blend-darken"
    >
      <div> · Insights </div>
      <div className="text-4xl font-extrabold">{title}</div>
      <div className="flex items-center justify-center h-16 text-lg bg-black rounded-full w-36">
        Details
      </div>
    </div>
  );
};

export default InsightCard;
