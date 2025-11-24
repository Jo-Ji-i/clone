import arrowDown from '../../assets/etc/lang_arrow_black.svg';

export default function LanguageSelector({ lang, langOpen, toggle, setLang }) {
  return (
    <div className="relative hidden md:block">
      <button onClick={toggle} className="flex items-center text-lg font-medium">
        {lang}
        <img
          src={arrowDown}
          className={`ml-2 w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {langOpen && (
        <div className="absolute right-0 w-24 mt-2 bg-white border rounded-md shadow-lg">
          {['EN', 'KO'].map(opt => (
            <button
              key={opt}
              onClick={() => setLang(opt)}
              className="w-full px-4 py-2 hover:bg-gray-100"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
