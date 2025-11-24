import React from 'react';

const MediaList = ({ items }) => {
  return (
    <div className="flex flex-col w-full px-6 ">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between gap-10 py-5 text-base ">
          <span className="font-semibold text-gray-800 line-clamp-1 ">{item.title}</span>
          <span className="text-sm text-gray-800">{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default MediaList;
