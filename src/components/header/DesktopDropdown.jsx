import { Link } from 'react-router-dom';

const MENU = [
  ['Brief', 'Quarterly Trends', 'Research Report', 'Subscription'],
  ['Lodging Industry Performance', 'Tourism Indicators', 'Data Download'],
  ['Attractiveness Index', 'Brand Equity Index'],
  ['About Us', 'Message', 'Summary', 'YR In Media', 'Notice'],
];

const PATHS = [
  ['/insights/brief', '/insights/quarterly', '/insights/report', '/insights/subscription'],
  ['/indexes/lodging', '/indexes/tourism', '/indexes/data-download'],
  ['/indexes/attractiveness', '/indexes/brand-equity'],
  ['/about/message', '/about/message', '/about/summary', '/about/yr-media', '/about/notice'],
];

export default function DesktopDropdown() {
  return (
    <div
      className="
        absolute left-0 top-full z-40
        hidden md:grid
        w-full bg-white border-t shadow-lg
        opacity-0 pointer-events-none transition-all
        group-hover:opacity-100 group-hover:pointer-events-auto

        grid-cols-[auto_1fr_auto]
        px-4 md:px-10 lg:px-20
      "
    >
      {/* 왼쪽(로고 아래 공간) 비워두기 */}
      <div className="w-60"></div>

      {/* 가운데: 드롭다운 4컬럼 메뉴 */}
      <div className="grid grid-cols-4 gap-8 py-6">
        {MENU.map((col, i) => (
          <div key={i} className="space-y-2 text-center">
            {col.map((label, j) => (
              <Link key={j} to={PATHS[i][j]} className="block px-3 py-2 hover:font-bold">
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* 오른쪽(언어 선택 아래 공간) */}
      <div className="w-24"></div>
    </div>
  );
}
