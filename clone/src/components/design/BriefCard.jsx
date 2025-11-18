import React from 'react';
import coverImage1 from '../../assets/top_bg/img2.jpg';

const BriefCard = () => {
  return (
    <div className="flex flex-col w-full h-auto gap-6">
      <img src={coverImage1} className="rounded-xl w-80"></img>
      <div className="flex flex-col w-56 gap-2 text-lg font-bold">
        <div className="text-orange-600"> Insights </div>
        <div className="text-xl">Korea Medical Tourism: Current Status and a Strategy </div>
        <div className="text-gray-500"> 2025.11.12</div>
      </div>
    </div>
  );
};

export default BriefCard;
