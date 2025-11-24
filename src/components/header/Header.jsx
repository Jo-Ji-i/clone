import { useState } from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import DesktopDropdown from './DesktopDropdown';
import MobileMenu from './MobileMenu';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  return (
    <header className="relative grid items-center w-full h-20 grid-cols-2 px-4 border-b border-gray-300 lg:grid-cols-[auto_1fr_auto] group md:px-10 lg:px-20">
      {/* 왼쪽 (로고) */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* 가운데 (네비게이션) - 가운데 정렬 */}
      <div className="justify-center hidden lg:flex">
        <DesktopNav />
        <DesktopDropdown />
      </div>

      {/* 오른쪽 (언어 선택) */}
      <div className="items-center justify-end hidden gap-10 lg:flex">
        <LanguageSelector lang={lang} onSelect={v => setLang(v)} />
      </div>

      {/* 모바일 햄버거 버튼 */}
      <button
        className="text-3xl font-bold lg:hidden justify-self-end"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      <MobileMenu menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
