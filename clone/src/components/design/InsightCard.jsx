import React from 'react';

const InsightCard = ({ image, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="flex flex-col justify-center w-full gap-4 p-6 text-white bg-center shadow-md h-80 rounded-3xl bg-black/20 bg-blend-darken"
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
