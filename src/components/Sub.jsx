import React from 'react';

import youtube from '../assets/sns/youtube.svg';
import facebook from '../assets/sns/facebook.svg';
import instagram from '../assets/sns/instagram.svg';
import linkedin from '../assets/sns/linkedin.svg';
import twitter from '../assets/sns/twitter.svg';
import blogger from '../assets/sns/blogger.svg';
import naverblog from '../assets/sns/naverblog.svg';
import thread from '../assets/sns/threads.svg';
import tiktok from '../assets/sns/tiktok.svg';
import weibo from '../assets/sns/weibo.svg';

export default function Sub() {
  const snsIcons = [
    youtube,
    facebook,
    instagram,
    linkedin,
    twitter,
    blogger,
    naverblog,
    thread,
    tiktok,
    weibo,
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 px-6 py-10 xl:flex-row xl:items-start xl:justify-between xl:px-24 bg-beige bg-opacity-80">
      {/* TEXT + SNS */}
      <div className="flex flex-col items-center w-full gap-6 lg:items-start lg:w-auto">
        <div className="text-2xl font-semibold text-center xl:text-left lg:text-3xl lg:whitespace-nowrap">
          Stay updated with more news from Yanolja Research on SNS.
        </div>

        <div className="flex flex-wrap justify-center gap-4 xl:justify-start">
          {snsIcons.map((icon, idx) => (
            <img key={idx} src={icon} className="w-4 sm:w-6 md:w-8 lg:w-6" />
          ))}
        </div>
      </div>

      {/* SUBSCRIBE BUTTON */}
      <div className="flex justify-center w-full xl:justify-end">
        <div className="flex items-center justify-center h-10 text-sm font-bold text-center text-white rounded-full sm:h-12 md:h-16 sm:text-base md:text-lg w-36 sm:w-44 md:w-52 bg-orange">
          Subscribe Now
        </div>
      </div>
    </div>
  );
}
