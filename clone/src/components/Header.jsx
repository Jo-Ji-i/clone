import { Link } from 'react-router-dom';
import logo from '../assets/etc/logo.svg';
import { useState } from 'react';
import arrowDown from '../assets/etc/lang_arrow_black.svg';

export default function Header() {
  const [lang, setLang] = useState('EN');
  const [langOpen, setLangOpen] = useState(false); // 드롭다운 열림 상태

  const toggleLang = () => {
    setLangOpen(prev => !prev);
  };

  const selectLang = selected => {
    setLang(selected);
    setLangOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between w-screen h-24 px-10 border-b border-gray-300 group">
      {/* 로고 */}
      <Link to="#">
        <img src={logo} alt="home" className="w-68" />
      </Link>

      <nav className="flex justify-between text-base font-medium w-[600px] mr-48 gap-x-4 ">
        <Link to="/research" className="w-1/4 text-center">
          Research
        </Link>
        <Link to="/datalab" className="w-1/4 text-center">
          DataLab
        </Link>
        <Link to="/index" className="w-1/4 text-center">
          Indexes
        </Link>
        <Link to="/about" className="w-1/4 text-center">
          About
        </Link>
      </nav>

      {/* 언어 선택 버튼 */}
      <div className="relative">
        <button
          onClick={toggleLang}
          className="flex items-center text-lg font-medium cursor-pointer select-none"
        >
          {lang}
          <img
            src={arrowDown}
            alt="arrow"
            className={`ml-6 w-4 h-4 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* 언어 드롭다운 */}
        {langOpen && (
          <div className="absolute right-0 z-50 w-24 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
            <button
              onClick={() => selectLang('EN')}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              EN
            </button>
            <button
              onClick={() => selectLang('KO')}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              KO
            </button>
          </div>
        )}
      </div>

      {/* 드롭다운 */}
      <div className="absolute left-0 z-40 w-screen transition-all duration-150 bg-white border-t border-gray-200 shadow-lg opacity-0 pointer-events-none top-full group-hover:opacity-100 group-hover:pointer-events-auto">
        <div className="grid max-w-5xl grid-cols-4 px-6 py-6 mx-auto text-base font-semibold w-[730px]">
          {/* 1열 */}
          <div className="space-y-2 text-center">
            <Link
              to="/insights/brief"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Brief
            </Link>
            <Link
              to="/insights/quarterly"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Quarterly Trends
            </Link>
            <Link
              to="/insights/report"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Research Report
            </Link>
            <Link
              to="/insights/subscription"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Subscription
            </Link>
          </div>

          {/* 2열 */}
          <div className="space-y-2 text-center">
            <Link
              to="/indexes/lodging"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Lodging Industry Performance
            </Link>
            <Link
              to="/indexes/tourism"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Tourism Indicators
            </Link>
            <Link
              to="/indexes/data-download"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Data Download
            </Link>
          </div>

          {/* 3열 */}
          <div className="space-y-2 text-center">
            <Link
              to="/indexes/attractiveness"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Yanolja AttractivenesIndex
            </Link>
            <Link
              to="/indexes/brand-equity"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Yanolja Brand Equity Index
            </Link>
          </div>

          {/* 4열 */}
          <div className="space-y-2 text-center">
            <Link
              to="/about/message"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              to="/about/message"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Message
            </Link>
            <Link
              to="/about/summary"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Summary
            </Link>
            <Link
              to="/about/yr-media"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              YR In Media
            </Link>
            <Link
              to="/about/notice"
              className="block px-3 py-2 transition-all hover:font-bold hover:text-gray-900"
            >
              Notice
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
