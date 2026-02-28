"use client";

/**
 * 전역 SVG 굴절 필터.
 * 특정 요소에 `filter: url(#liquid-refract)` 또는
 * `data-refract` 속성으로 선택적 적용.
 * Safari 에서는 feTurbulence 가 제한적이므로 자동 폴백.
 */
export function LiquidGlassSVGFilters() {
  return (
    <svg
      className="absolute w-0 h-0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0 }}
    >
      <defs>
        {/* 미세 굴절 필터 */}
        <filter id="liquid-refract" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            seed="42"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* 부드러운 글로우 필터 */}
        <filter id="liquid-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
