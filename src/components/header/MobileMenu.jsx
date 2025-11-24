export default function MobileMenu({ menuOpen, onClose }) {
  if (!menuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col p-6 bg-white lg:hidden">
      {/* 닫기 버튼 */}
      <button className="absolute z-50 text-3xl top-4 right-4" onClick={onClose}>
        ✕
      </button>

      <div className="flex flex-col mt-16 space-y-6 text-xl font-semibold">
        <a href="/research" onClick={onClose}>
          Research
        </a>
        <a href="/datalab" onClick={onClose}>
          DataLab
        </a>
        <a href="/index" onClick={onClose}>
          Indexes
        </a>
        <a href="/about" onClick={onClose}>
          About
        </a>
      </div>
    </div>
  );
}
