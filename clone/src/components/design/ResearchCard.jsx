import React from 'react';

const ResearchCard = ({ image, date }) => {
  return (
    <div className="flex flex-col w-64 h-auto gap-3 py-10">
      <img src={image} className="rounded-sm w-80" alt="report" />
      <div className="text-sm text-gray-500 ">{date}</div>
    </div>
  );
};

export default ResearchCard;
