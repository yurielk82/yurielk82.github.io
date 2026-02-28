# Design System — Liquid Glass

## 컨셉

Apple WWDC 2025 "Liquid Glass" 스타일에서 영감받은 디자인 시스템. 반투명 글래스 머티리얼, 스펙큘러 하이라이트, 부드러운 블롭 그래디언트 배경으로 콘텐츠에 깊이와 공간감을 부여한다.

## 색상 토큰

### 다크 모드 (기본)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--background` | `#0a0a0f` | 딥 네이비 블랙 |
| `--foreground` | `#f0f0f5` | 소프트 오프화이트 |
| `--lg-accent` | `#7c8aff` | 프라이머리 — 인디고 블루 |
| `--lg-secondary` | `#a78bfa` | 소프트 바이올렛 |
| `--lg-tertiary` | `#f0abfc` | 라이트 퓨샤 |
| `--lg-success` | `#34d399` | 에메랄드 (성공) |
| `--lg-warning` | `#fbbf24` | 앰버 (경고) |
| `--lg-accent-subtle` | `rgba(124,138,255,0.08)` | 액센트 서브틀 배경 |
| `--lg-surface` | `#10101a` | 서피스 |
| `--lg-surface-elevated` | `#18182a` | 부양된 서피스 |

### 라이트 모드

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--background` | `#f8f9fc` | 블루 틴트 화이트 |
| `--foreground` | `#1a1a2e` | 딥 네이비 |
| `--lg-accent` | `#5b6abf` | 다크 인디고 (가독성 확보) |
| `--lg-secondary` | `#7c6aad` | 라이트 바이올렛 |
| `--lg-tertiary` | `#c07ec8` | 라이트 퓨샤 |

### Tailwind 시맨틱 클래스

| CSS 변수 | Tailwind 클래스 |
|----------|----------------|
| `--lg-accent` | `text-accent-lg`, `bg-accent-lg`, `border-accent-lg` |
| `--lg-secondary` | `text-secondary-lg`, `bg-secondary-lg` |
| `--lg-tertiary` | `text-tertiary-lg`, `bg-tertiary-lg` |
| `--lg-success` | `text-success-lg`, `bg-success-lg` |
| `--lg-warning` | `text-warning-lg`, `bg-warning-lg` |
| `--lg-accent-subtle` | `bg-accent-lg-subtle` |

### 그래디언트

```css
.liquid-gradient-text      /* 인디고→바이올렛→퓨샤 (#7c8aff → #a78bfa → #f0abfc) */
.liquid-gradient-text-warm /* 앰버→인디고 (#fbbf24 → #7c8aff) */
```

## 타이포그래피

| 용도 | 폰트 | 변수 |
|------|------|------|
| Heading/Body | Outfit | `--font-outfit` |
| Code/Mono | JetBrains Mono | `--font-jetbrains-mono` |
| 한글 | Pretendard | `--font-pretendard` |

```css
--font-sans: var(--font-outfit), var(--font-pretendard), ui-sans-serif;
--font-mono: var(--font-jetbrains-mono), ui-monospace;
```

## 머티리얼: `.liquid-glass`

기존 `.glass-card`를 대체하는 핵심 머티리얼.

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px) saturate(1.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

### 스펙큘러 하이라이트

`.liquid-glass::before`로 상단 가장자리에 밝은 빛 반사 라인 추가. 기존 glassmorphism과 Liquid Glass의 핵심 차이.

```css
.liquid-glass::before {
  content: "";
  position: absolute;
  top: 0; left: 8px; right: 8px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
}
```

### 호버 상태

```css
.liquid-glass:hover {
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(124, 138, 255, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transform: translateY(-3px);
}
```

### 라이트 모드

```css
:root:not(.dark) .liquid-glass {
  background: rgba(255, 255, 255, 0.6);
  border-color: rgba(91, 106, 191, 0.12);
}
```

## 컴포넌트 패턴

### GlassCard

`liquid-glass` 머티리얼 래퍼. `hover` prop으로 호버 효과 토글.

### TechBadge

- `default`: `bg-secondary/50` + `border-border` → hover 시 accent-lg 테두리
- `accent`: `bg-accent-lg-subtle` + `text-accent-lg`
- `warning`: `bg-warning-lg/10` + `text-warning-lg`

### SectionHeading

```
// TAG            ← font-mono, text-accent-lg, tracking-widest, uppercase
Section Title     ← text-3xl~5xl, font-bold
Optional desc     ← text-muted-foreground, max-w-2xl, mx-auto
```

### Hero (Liquid Glass)

- 배지: `border-accent-lg/20 bg-accent-lg-subtle text-accent-lg`
- 아바타: `w-24 h-24 rounded-full object-cover`, Liquid Glass 그래디언트 링(`p-1 bg-gradient-to-br from-accent-lg via-secondary-lg to-tertiary-lg`)으로 감싸기. 아래에 이름 + 타이틀 소형 텍스트
- 타이틀: `liquid-gradient-text`
- 핵심 역량 카드: `.liquid-glass` 안에 아이콘 + 라벨 가로 배치
- Stats: `liquid-gradient-text` 수치
- 배경: radial glow indigo 톤

### SVG 필터 (`LiquidGlassSVGFilters`)

전역 SVG 필터 (`feTurbulence` + `feDisplacementMap`) 정의. 특정 요소에 선택적 적용.

## 배경

### CSS 블롭 그래디언트

Canvas 뉴럴 네트워크를 대체하는 3개 블롭 그래디언트.

| 블롭 | 색상 | 주기 |
|------|------|------|
| Indigo | `rgba(124,138,255,0.4)` | 20s |
| Fuchsia | `rgba(240,171,252,0.4)` | 30s |
| Violet | `rgba(167,139,250,0.4)` | 25s |

- `blur-3xl`로 경계가 부드러운 대형 원
- CSS `@keyframes blob-drift-*`로 느린 드리프트
- `prefers-reduced-motion` 시 정적 고정

## 애니메이션

### Framer Motion

| Variant | 효과 |
|---------|------|
| `fadeInUp` | opacity 0→1, y 20→0 |
| `staggerContainer` | children 0.1s 간격 |

```ts
defaultTransition = { type: "spring", stiffness: 300, damping: 30 }
```

### CSS 애니메이션

| 이름 | 용도 |
|------|------|
| `blob-drift-1` | 인디고 블롭 드리프트 (20s) |
| `blob-drift-2` | 퓨샤 블롭 드리프트 (30s) |
| `blob-drift-3` | 바이올렛 블롭 드리프트 (25s) |

## 반응형

| 요소 | Mobile (<768) | Tablet (768+) | Desktop (1024+) |
|------|--------------|---------------|-----------------|
| Navigation | 햄버거 | 가로 메뉴 | 가로 메뉴 |
| Hero 역량 카드 | 2×2 그리드 | 4열 | 4열 |
| Projects | 가로 스크롤 | 가로 스크롤 | 가로 스크롤 |
| Skills (역량) | 1열 | 2열 | 2열 |
| Skills (기술) | 3열 | 4열 | 7열 |

## 접근성

- `useReducedMotion`: 블롭 애니메이션 정적 전환, 카드 호버 transform 비활성화
- 모든 인터랙티브 요소에 `aria-label`
- 배경·SVG 필터에 `aria-hidden="true"`
- 키보드 네비게이션 지원
- 다크/라이트 양쪽 모드에서 충분한 대비 확보
