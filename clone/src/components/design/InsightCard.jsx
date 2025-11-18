import React from 'react';
import TopImg1 from '../../assets/top_bg/img1.png';

const InsightCard = () => {
  return (
    <div
      style={{ backgroundImage: `url(${TopImg1})` }}
      className="flex flex-col justify-center w-full h-full gap-20 p-6 pl-20 text-xl font-bold text-white bg-center bg-cover shadow-md bg-black/20 rounded-3xl bg-blend-darken"
    >
      <div>Insights</div>
      <div className="text-4xl text-extraBold">
        Vol. 32: Motivations for Overseas Travel and Strategies for Revitalizing Domestic Tourism in
        Korea
      </div>
      <div className="flex items-center justify-center h-16 bg-black rounded-full w-44">
        {' '}
        Detail{' '}
      </div>
    </div>
  );
};

export default InsightCard;
