import FadeInSection from './FadeInSection';

export default function SectionWrapper({
  children,
  height = 550,
  paddingX = 0,
  paddingY = 14,
  gap = 16,
  fade = false,
}) {
  // 모바일: height auto, 데스크탑: 고정
  const sectionStyle = {
    height: 'auto',
    gap: `${gap}px`,
    paddingLeft: `${paddingX}px`,
    paddingRight: `${paddingX}px`,
    paddingTop: `${paddingY}px`,
    paddingBottom: `${paddingY}px`,
  };

  return fade ? (
    <FadeInSection>
      <div className="flex flex-col w-full lg:flex-row" style={{ ...sectionStyle, height: height }}>
        {children}
      </div>
    </FadeInSection>
  ) : (
    <div className="flex flex-col w-full lg:flex-row" style={{ ...sectionStyle, height: height }}>
      {children}
    </div>
  );
}
