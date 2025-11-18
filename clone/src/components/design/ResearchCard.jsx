import React from 'react';

import bg_report1 from '../../assets/report/img1.jpg';

const ResearchCard = () => {
  return (
    <div className="flex flex-col w-full h-auto gap-6 py-10 ">
      <img src={bg_report1} className="rounded-xl w-80"></img>
      <div className="px-4 text-gray-500"> 2025.11.12</div>
    </div>
  );
};

export default ResearchCard;
