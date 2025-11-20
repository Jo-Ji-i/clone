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
  return (
    <div className="flex flex-row items-center justify-between w-screen px-24 bg-beige h-72 bg-opacity-80">
      <div className="flex flex-col">
        <div className="mb-5 text-3xl font-semibold">
          Stay updated with more news from Yanolja Research on SNS.
        </div>
        <div className="flex w-64 h-10 ">
          <img src={youtube} className="w-20"></img>
          <img src={facebook} className="w-20 ml-6"></img>
          <img src={instagram} className="w-20 ml-6"></img>
          <img src={linkedin} className="w-20 ml-6"></img>
          <img src={twitter} className="w-20 ml-6"></img>
          <img src={blogger} className="w-20 ml-6"></img>
          <img src={naverblog} className="w-20 ml-6"></img>
          <img src={thread} className="w-20 ml-6"></img>
          <img src={tiktok} className="w-20 ml-6"></img>
          <img src={weibo} className="w-20 ml-6"></img>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center h-16 text-lg font-bold text-center text-white rounded-full w-52 bg-orange">
          Subscribe Now
        </div>
      </div>
    </div>
  );
}
