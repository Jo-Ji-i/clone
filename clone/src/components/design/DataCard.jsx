import React from 'react';

import bg_mail from '../../assets/etc/icon_mail.svg';

const DataCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 px-6 py-16 mt-5 font-bold text-white bg-violet-300 rounded-3xl">
      <img src={bg_mail} className="w-30" />
      <div className="flex text-xl text-center text-extraBold">
        Feel free to use the data utilized by Yanolja Research!
      </div>
    </div>
  );
};

export default DataCard;
