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
- 타이틀: `liquid-gradient-text`
- 핵심 역량 카드: `.liquid-glass` 안에 아이콘 + 라벨 가로 배치
- Stats: `liquid-gradient-text` 수치
- 배경: `.hero-mesh-gradient` 4-point mesh + `.hero-fadeout` 하단 전환

### Featured Projects Section

`featured: true`인 프로젝트 2개를 Before/After 스토리 카드로 표시. 좌우 교차 레이아웃(`lg:grid-cols-2`).

- 이미지: `.liquid-glass` 래퍼 안에 프로젝트 스크린샷
- 콘텐츠: `GlassCard` 안에 tagline, Before/After impact, techStack 태그, metrics, links
- Before 태그: `bg-destructive/10 text-destructive line-through`
- After 태그: `bg-success-lg/10 text-success-lg`
- 기술 스택 태그: `bg-secondary/50 border-border/50 font-mono`
- 애니메이션: 짝수 인덱스 `slideInLeft`+`slideInRight`, 홀수 인덱스 역순
- 라이브 데모 버튼: `bg-gradient-to-r from-accent-lg to-secondary-lg text-white`
- GitHub 버튼: `.liquid-glass hover:text-accent-lg`

### Solutions Section

솔루션 카테고리 세로 스택. 컴팩트 `SolutionCard` 단일 컴포넌트.

- 카드: `GlassCard` 래퍼, `p-5 sm:p-6`, `relative group` + 하단 악센트 라인
- 갭: `gap-4` (카드 간 간격)
- 헤더: 아이콘(`p-2 rounded-lg` gradient bg, `h-4 w-4`) + 카테고리명/tagline + 상태 배지(`proven`: success-lg)
- Evidence: `border-t border-border/50 pt-4 mt-4`, 인라인 텍스트 (`project.name · keyMetric`), 링크 있으면 `<a>` + hover `text-accent-lg`, 없으면 `<span>`
- description / capabilities / CTA 제거 — F-pattern 스캔 최적화
- 카드 1장 높이: ~140-160px (기존 ~440-480px 대비 -65%)

### 하단 악센트 라인 (공통 패턴)

`group` + `relative overflow-hidden` GlassCard 안에 배치. About, Solutions, Skills 역량 카드에 공통 적용.

```html
<div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-lg/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
```

### SVG 필터 (`LiquidGlassSVGFilters`)

전역 SVG 필터 (`feTurbulence` + `feDisplacementMap`) 정의. 특정 요소에 선택적 적용.

## 배경

### Hero Mesh Gradient

4-point radial-gradient를 조합한 Mesh Gradient. Hero 섹션 첫 화면의 시각적 존재감을 부여한다.

#### Mesh 색상 변수

| 변수 | 라이트 (`:root`) | 다크 (`.dark`) | 역할 |
|------|-----------------|----------------|------|
| `--mesh-point-1` | `rgba(91, 106, 191, 0.18)` | `rgba(124, 138, 255, 0.25)` | 좌상단 인디고 |
| `--mesh-point-2` | `rgba(124, 106, 173, 0.14)` | `rgba(167, 139, 250, 0.20)` | 우상단 바이올렛 |
| `--mesh-point-3` | `rgba(192, 126, 200, 0.12)` | `rgba(240, 171, 252, 0.15)` | 하단 퓨샤 |
| `--mesh-point-4` | `rgba(91, 106, 191, 0.08)` | `rgba(124, 138, 255, 0.10)` | 중앙 좌측 인디고 |

#### Mesh CSS 클래스

| 클래스 | 역할 |
|--------|------|
| `.hero-mesh-gradient` | 4개 `radial-gradient` 합성 — ellipse 형태, 각기 다른 위치·크기 |
| `.hero-fadeout` | `linear-gradient(to bottom, transparent 60%, var(--background) 100%)` — 하단 40%에서 배경색으로 페이드아웃 |

#### Hero z-index 레이어

| z-index | 레이어 |
|---------|--------|
| 0 | 블롭 배경 |
| 1 | `.hero-mesh-gradient` |
| 2 | `.hero-fadeout` |
| 10 | 콘텐츠 |

### CSS 블롭 그래디언트

Canvas 뉴럴 네트워크를 대체하는 3개 블롭 그래디언트. CSS 변수로 라이트/다크 모드 색상을 분리 관리한다.

#### 블롭 색상 변수

| 변수 | 라이트 (`:root`) | 다크 (`.dark`) |
|------|-----------------|----------------|
| `--blob-indigo` | `rgba(91, 106, 191, 0.5)` | `rgba(124, 138, 255, 0.4)` |
| `--blob-fuchsia` | `rgba(192, 126, 200, 0.5)` | `rgba(240, 171, 252, 0.4)` |
| `--blob-violet` | `rgba(124, 106, 173, 0.5)` | `rgba(167, 139, 250, 0.4)` |
| `--blob-opacity-1` | `0.45` | `0.3` |
| `--blob-opacity-2` | `0.38` | `0.25` |
| `--blob-opacity-3` | `0.32` | `0.2` |

라이트 모드 색상은 `--lg-accent: #5b6abf`, `--lg-tertiary: #c07ec8`, `--lg-secondary: #7c6aad`에서 파생. 흰색 배경에서 시각적으로 구분 가능하도록 채도와 불투명도를 높임.

#### 블롭 CSS 클래스

| 클래스 | 배경 | 불투명도 | 주기 |
|--------|------|---------|------|
| `.blob-indigo` | `radial-gradient(circle, var(--blob-indigo), transparent)` | `var(--blob-opacity-1)` | 20s |
| `.blob-fuchsia` | `radial-gradient(circle, var(--blob-fuchsia), transparent)` | `var(--blob-opacity-2)` | 30s |
| `.blob-violet` | `radial-gradient(circle, var(--blob-violet), transparent)` | `var(--blob-opacity-3)` | 25s |

- `blur-3xl`로 경계가 부드러운 대형 원
- CSS `@keyframes blob-drift-*`로 느린 드리프트
- `prefers-reduced-motion` 시 정적 고정
- 인라인 하드코드 색상 사용 금지 — 반드시 CSS 클래스(`.blob-*`) 사용

## 애니메이션

### Framer Motion

| Variant | 효과 |
|---------|------|
| `fadeInUp` | opacity 0→1, y 20→0 |
| `slideInLeft` | opacity 0→1, x -40→0 |
| `slideInRight` | opacity 0→1, x 40→0 |
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
| Navigation | 햄버거 + CTA | 가로 메뉴 + CTA | 가로 메뉴 + CTA |
| Hero 역량 카드 | 2×2 그리드 | 4열 | 4열 |
| Featured Projects | 1열 스택 | 1열 스택 | 2열 교차 레이아웃 |
| Solutions | 1열 스택 | 1열 스택 | 1열 스택 (max-w-4xl) |
| About (기술) | 3열 (`liquid-glass`) | 4열 (`liquid-glass`) | 7열 (`liquid-glass`) |
| Contact (프로세스) | 1열 | 3열 | 3열 |

## 테마 전환 메커니즘 (FOUC 방지)

3계층 구조로 다크/라이트 모드 FOUC(Flash of Unstyled Content)를 제거한다.

### 1계층: CSS 미디어 쿼리 폴백 (즉시)

```css
@media (prefers-color-scheme: dark) {
  :root:not(.light) { /* 다크 모드 변수 전체 */ }
}
```

CSS 파싱 단계에서 JS 없이 OS 다크 모드를 즉시 반영. `.light` 클래스가 있으면 무효화.

### 2계층: 인라인 블로킹 스크립트 (`<head>`)

```javascript
(function(){
  var s = localStorage.getItem('portfolio-theme');
  if (s === 'light') d.classList.add('light');
  else if (s === 'dark') d.classList.add('dark');
  else if (matchMedia('(prefers-color-scheme: dark)').matches) d.classList.add('dark');
})()
```

CSS 파싱 직후, `<body>` 파싱 전 실행. localStorage 사용자 선택을 `.dark`/`.light` 클래스로 반영.

### 3계층: React 훅 (`useTheme`)

클라이언트 하이드레이션 후 React 상태와 DOM 클래스를 동기화. 테마 토글 인터랙션 처리.

### 클래스 규칙

| 클래스 | 의미 | 설정 주체 |
|--------|------|----------|
| `.dark` | 다크 모드 활성 | 인라인 스크립트 / useTheme |
| `.light` | 라이트 모드 명시 (미디어 쿼리 무효화) | 인라인 스크립트 / useTheme |
| (없음) | OS 기본값 따름 | 초기 상태 |

### 시나리오별 동작

| localStorage | OS 테마 | 결과 | 메커니즘 |
|-------------|---------|------|----------|
| 없음 | light | 라이트 | `:root` 기본값 |
| 없음 | dark | 다크 | `@media` CSS 폴백 → `.dark` 클래스 |
| "dark" | light | 다크 | `.dark` 클래스 |
| "light" | dark | 라이트 | `.light` → `:not(.light)` 무효화 |

## 접근성

- `useReducedMotion`: 블롭 애니메이션 정적 전환, 카드 호버 transform 비활성화
- 모든 인터랙티브 요소에 `aria-label`
- 배경·SVG 필터에 `aria-hidden="true"`
- 키보드 네비게이션 지원
- 다크/라이트 양쪽 모드에서 충분한 대비 확보

## 적용 규칙 (필수 준수)

### 절대 금지

1. **인라인 글래스 스타일 금지** — `backdrop-filter`, `backdrop-blur`, `bg-white/N` 등을 개별 요소에 직접 작성 금지. 반드시 `.liquid-glass` 또는 그 변형(`.liquid-glass-on-color`) 클래스를 사용한다.
2. **인라인 그래디언트 금지** — `style={{ background: "linear-gradient(...)" }}` 금지. CSS 클래스(`.cta-gradient`, `.liquid-gradient-text` 등)를 사용한다.
3. **색상 해시코드 인라인 금지** — `#7c8aff`, `#a78bfa` 등을 JSX `style` 속성에 직접 사용 금지. CSS 변수(`var(--lg-accent)`)를 참조한다.

### 컴포넌트별 필수 적용

| 요소 유형 | 필수 클래스 | 비고 |
|-----------|------------|------|
| 정보 카드 (About, Skills, Solutions) | `liquid-glass` 또는 `GlassCard` | 스펙큘러 + 호버 포함 |
| Evidence/하위 카드 | `liquid-glass` | 소형 적용 |
| CTA 배너 | `.cta-gradient` | CSS 변수 기반 그래디언트 |
| CTA 버튼 (색상 배경 위) | `.liquid-glass-on-color` | 밝은 글래스 변형 |
| Navigation | `liquid-glass` | 이미 적용됨 |
| Footer | `liquid-glass` | Navigation과 동일 패턴 |
| 도트 패턴 | `.dot-pattern` | CSS 클래스 사용 |

### Liquid Glass 변형 목록

| 클래스 | 용도 | 배경 |
|--------|------|------|
| `.liquid-glass` | 기본 — 다크/라이트 적응형 | 다크 `rgba(255,255,255,0.05)` / 라이트 `rgba(255,255,255,0.6)` |
| `.liquid-glass-on-color` | 색상 배경 위의 버튼/요소 | `rgba(255,255,255,0.15)` |
| `.cta-gradient` | CTA 배너 그래디언트 | `var(--lg-accent)` → `var(--lg-secondary)` → `var(--lg-tertiary)` |
| `.dot-pattern` | 도트 패턴 오버레이 | 24px 간격 흰색 도트 |
| `.hero-mesh-gradient` | Hero 배경 mesh | 4-point radial-gradient 합성 |
| `.hero-fadeout` | Hero 하단 페이드아웃 | `transparent` → `var(--background)` |
