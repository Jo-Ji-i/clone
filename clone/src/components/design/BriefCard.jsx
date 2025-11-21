import React from 'react';

const BriefCard = ({ title, date, image }) => {
  return (
    <div className="flex flex-col w-full h-auto gap-4">
      <img src={image} className="px-2 w-72 rounded-xl" alt={title} />
      <div className="flex flex-col w-56 gap-2 ml-2 text-lg font-medium">
        <div className="text-sm font-bold text-orange">Insights</div>
        <div className="text-xl font-semibold line-clamp-2">{title}</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  );
};

export default BriefCard;
