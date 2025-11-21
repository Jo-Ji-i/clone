import { Link } from 'react-router-dom';
import logo from '../assets/etc/logo.svg';
import { useState } from 'react';
import arrowDown from '../assets/etc/lang_arrow_black.svg';

export default function Header() {
  const [lang, setLang] = useState('EN');
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴

  const toggleLang = () => setLangOpen(prev => !prev);
  const selectLang = selected => {
    setLang(selected);
    setLangOpen(false);
  };

  return (
    <header className="relative flex flex-col items-start justify-between w-full h-16 gap-4 px-4 border-b border-gray-300 md:flex-row md:items-center md:px-10 lg:px-20 group md:gap-0">
      {/* 로고 */}
      <Link to="#">
        <img src={logo} alt="home" className="w-40 md:w-48" />
      </Link>

      {/* 데스크탑 네비게이션 */}
      <nav className="hidden text-base font-medium md:flex gap-x-8 lg:gap-x-28">
        <Link to="/research">Research</Link>
        <Link to="/datalab">DataLab</Link>
        <Link to="/index">Indexes</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* 언어 선택 */}
      <div className="relative hidden md:block">
        <button
          onClick={toggleLang}
          className="flex items-center text-lg font-medium cursor-pointer select-none"
        >
          {lang}
          <img
            src={arrowDown}
            alt="arrow"
            className={`ml-2 w-4 h-4 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {langOpen && (
          <div className="absolute right-0 z-50 w-24 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
            <button onClick={() => selectLang('EN')} className="w-full px-4 py-2 hover:bg-gray-100">
              EN
            </button>
            <button onClick={() => selectLang('KO')} className="w-full px-4 py-2 hover:bg-gray-100">
              KO
            </button>
          </div>
        )}
      </div>

      {/* 모바일 햄버거 버튼 */}
      <button className="text-3xl font-bold md:hidden" onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {/* 모바일 전체 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col p-6 bg-white md:hidden">
          <button className="absolute text-3xl top-4 right-4" onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <div className="flex flex-col mt-16 space-y-6 text-xl font-semibold">
            <Link to="/research" onClick={() => setMenuOpen(false)}>
              Research
            </Link>
            <Link to="/datalab" onClick={() => setMenuOpen(false)}>
              DataLab
            </Link>
            <Link to="/index" onClick={() => setMenuOpen(false)}>
              Indexes
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </div>

          {/* 언어 선택 */}
          <div className="mt-10">
            <p className="mb-2 text-gray-500">Language</p>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 border rounded-md ${lang === 'EN' ? 'bg-gray-200' : ''}`}
                onClick={() => selectLang('EN')}
              >
                EN
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${lang === 'KO' ? 'bg-gray-200' : ''}`}
                onClick={() => selectLang('KO')}
              >
                KO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 데스크탑 hover 드롭다운 */}
      <div className="absolute left-0 z-40 justify-center hidden w-full transition-all duration-150 bg-white border-t border-gray-200 shadow-lg opacity-0 pointer-events-none top-full group-hover:opacity-100 group-hover:pointer-events-auto md:flex">
        <div className="grid w-full max-w-[1200px] grid-cols-4 gap-6 px-6 py-6">
          {/* 1열 */}
          <div className="space-y-2 text-center">
            <Link to="/insights/brief" className="block px-3 py-2 hover:font-bold">
              Brief
            </Link>
            <Link to="/insights/quarterly" className="block px-3 py-2 hover:font-bold">
              Quarterly Trends
            </Link>
            <Link to="/insights/report" className="block px-3 py-2 hover:font-bold">
              Research Report
            </Link>
            <Link to="/insights/subscription" className="block px-3 py-2 hover:font-bold">
              Subscription
            </Link>
          </div>

          {/* 2열 */}
          <div className="space-y-2 text-center">
            <Link to="/indexes/lodging" className="block px-3 py-2 hover:font-bold">
              Lodging Industry Performance
            </Link>
            <Link to="/indexes/tourism" className="block px-3 py-2 hover:font-bold">
              Tourism Indicators
            </Link>
            <Link to="/indexes/data-download" className="block px-3 py-2 hover:font-bold">
              Data Download
            </Link>
          </div>

          {/* 3열 */}
          <div className="space-y-2 text-center">
            <Link to="/indexes/attractiveness" className="block px-3 py-2 hover:font-bold">
              Attractiveness Index
            </Link>
            <Link to="/indexes/brand-equity" className="block px-3 py-2 hover:font-bold">
              Brand Equity Index
            </Link>
          </div>

          {/* 4열 */}
          <div className="space-y-2 text-center">
            <Link to="/about/message" className="block px-3 py-2 hover:font-bold">
              About Us
            </Link>
            <Link to="/about/message" className="block px-3 py-2 hover:font-bold">
              Message
            </Link>
            <Link to="/about/summary" className="block px-3 py-2 hover:font-bold">
              Summary
            </Link>
            <Link to="/about/yr-media" className="block px-3 py-2 hover:font-bold">
              YR In Media
            </Link>
            <Link to="/about/notice" className="block px-3 py-2 hover:font-bold">
              Notice
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
