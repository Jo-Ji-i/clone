import React from 'react';

const MediaList = ({ items }) => {
  return (
    <div className="flex flex-col w-full px-6 py-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between py-5 text-xl ">
          <span className="font-bold text-gray-800 ">{item.title}</span>
          <span className="text-base text-gray-500">{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default MediaList;
