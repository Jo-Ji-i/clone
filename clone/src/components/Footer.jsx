import { Link } from 'react-router-dom';
import logo from '../assets/etc/logo_white.svg';
import { useState } from 'react';

export default function Footer() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(prev => !prev);

  const menuItems = [
    { name: '야놀자', link: '#' },
    { name: '야놀자클라우드', link: '#' },
    { name: '인터파크', link: '#' },
  ];

  return (
    <footer className="w-screen px-6 py-12 text-gray-300 lg:px-24 lg:py-16 bg-stone-900">
      {/* 상단 로고 + Family Site */}
      <div className="flex flex-col items-start justify-between gap-6 mb-8 lg:flex-row">
        {/* 로고 / 브랜드 */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-36 lg:w-48" />
        </div>

        {/* Family Site 버튼 (모바일에서 맨 아래로) */}
        <div className="relative order-last w-full lg:w-64 lg:order-none">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full px-6 py-2 text-gray-300 transition border border-gray-500 rounded-full bg-stone-800 hover:bg-stone-700"
          >
            <span>Family Site</span>
            <span className="text-xl font-bold">+</span>
          </button>

          {open && (
            <div className="absolute right-0 z-50 w-full mt-2 border border-gray-800 rounded-md shadow-lg text-stone-200 bg-stone-900">
              {menuItems.map(item => (
                <a
                  key={item.name}
                  href={item.link}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 좌측 정보 */}
      <div className="flex flex-col gap-1 mb-1 text-lg text-left text-stone-500">
        <div className="text-2xl font-extrabold text-stone-400">Privacy Policy</div>
        <div className="flex flex-wrap gap-2">
          <span>Yanolja Research</span>
          <span className="mx-2">|</span>
          <span>CEO Seongsik Park</span>
          <span className="mx-2">|</span>
          <span>License No. 308-86-02788</span>
        </div>

        <div className="flex flex-wrap gap-2 ">
          <span className="text-yellow-800">Y-Siren (Compliance/Whistleblowing)</span>
          <span>
            E-mail.{' '}
            <a href="mailto:yanoljaresearch@yanolja.com" className="underline hover:text-white">
              yanoljaresearch@yanolja.com
            </a>
          </span>
        </div>

        <div>MDM Tower 4F, 42, Teheran-ro 108-gil, Gangnam-gu, Seoul, Republic of Korea</div>
      </div>

      {/* 저작권 */}
      <div className="mt-8 text-lg text-gray-500">
        &copy; YANOLJA RESEARCH. All rights reserved.
      </div>
    </footer>
  );
}
