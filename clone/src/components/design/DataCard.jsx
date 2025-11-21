import React from 'react';

import bg_mail from '../../assets/etc/icon_mail.svg';

const DataCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 font-bold text-white aspect-square w-[90%] md:w-[80%] lg:w-[80%] bg-purple rounded-3xl">
      {/* 크기를 비율로 설정 → 카드가 커지면 이미지도 자동 확대 */}
      <img src={bg_mail} className="w-24" />
      <div className="flex px-6 text-base text-center md:px-10 md:text-lg text-extraBold">
        Feel free to use the data utilized by Yanolja Research!
      </div>
    </div>
  );
};

export default DataCard;
