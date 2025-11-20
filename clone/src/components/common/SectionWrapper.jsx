// 공통 섹션 포맷

import FadeInSection from './FadeInSection';

export default function SectionWrapper({
  children,
  height = 550,
  paddingX = 0,
  paddingY = 14,
  gap = 16,
  fade = false,
}) {
  const section = (
    <div
      className={`flex w-full px-${paddingX} py-${paddingY} gap-${gap}`}
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );

  return fade ? <FadeInSection>{section}</FadeInSection> : section;
}
