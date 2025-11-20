import React from 'react';

import bg_mail from '../../assets/etc/icon_mail.svg';

const DataCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 font-bold text-white aspect-square bg-purple rounded-3xl">
      <img src={bg_mail} className="w-24" />
      <div className="flex px-10 text-lg text-center text-extraBold">
        Feel free to use the data utilized by Yanolja Research!
      </div>
    </div>
  );
};

export default DataCard;
