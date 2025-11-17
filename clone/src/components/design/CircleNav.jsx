import React from 'react';
import iconPlay from '../../assets/etc/icon_play.svg';
import iconPause from '../../assets/etc/icon_pause.svg';
import iconLeft from '../../assets/etc/icon_arrow_left.svg';
import iconRight from '../../assets/etc/icon_arrow_right.svg';

export default function CircleNav() {
  return (
    <div className="flex items-center justify-center gap-6 text-xl text-gray-800">
      <img src={iconLeft} className="cursor-pointer"></img>

      <div className="flex items-center gap-3 text-xl">
        <span className="text-gray-400">○</span>
        <span className="text-gray-400">○</span>
        <span className="text-black">●</span>
        <span className="text-gray-400">○</span>
        <span className="text-gray-400">○</span>
        <span className="text-gray-400">○</span>
      </div>

      <div className="flex items-center gap-4 text-base">
        <img src={iconPlay} className="w-3 h-3 cursor-pointer" alt="play" />
        <img src={iconPause} className="w-3 h-3 cursor-pointer" alt="pause" />
      </div>

      <img src={iconRight} className="cursor-pointer"></img>
    </div>
  );
}
