# Design System — Terminal Futurism

## 컨셉

터미널/IDE의 모노스페이스 미학과 SF HUD 인터페이스의 결합. 코드가 곧 디자인이고, AI가 곧 도구인 세계관.

## 색상 토큰

### 다크 모드 (기본)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--background` | `#09090b` | 페이지 배경 |
| `--foreground` | `#e4e4e7` | 기본 텍스트 |
| `--card` | `#0f1117` | 카드/서피스 배경 |
| `--muted-foreground` | `#71717a` | 보조 텍스트 |
| `--border` | `rgba(255,255,255,0.06)` | 테두리 |
| `--tf-cyan` | `#06b6d4` | 프라이머리 액센트 |
| `--tf-teal` | `#14b8a6` | 세컨더리 액센트 |
| `--tf-emerald` | `#10b981` | 성공/완료 시그널 |
| `--tf-amber` | `#f59e0b` | 경고/강조 |
| `--tf-surface` | `#0f1117` | 서피스 |
| `--tf-surface-elevated` | `#161a26` | 부양된 서피스 |

### 그래디언트

```css
.gradient-text     /* 시안→틸→에메랄드 (#06b6d4 → #14b8a6 → #10b981) */
.gradient-text-amber  /* 앰버→시안 (#f59e0b → #06b6d4) */
```

## 타이포그래피

| 용도 | 폰트 | 변수 |
|------|------|------|
| Heading/Body | Outfit | `--font-outfit` |
| Code/Terminal | JetBrains Mono | `--font-jetbrains-mono` |
| 한글 | Pretendard | `--font-pretendard` |

```css
--font-sans: var(--font-outfit), var(--font-pretendard), ui-sans-serif;
--font-mono: var(--font-jetbrains-mono), ui-monospace;
```

## 컴포넌트 패턴

### GlassCard

```css
.glass-card {
  background: rgba(15, 17, 23, 0.6);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(6, 182, 212, 0.08);
  border-radius: 16px;
}
/* hover: border-color → rgba(6,182,212,0.2), glow shadow, translateY(-2px) */
```

### TechBadge

- `default`: `bg-secondary/50` + `border-border` → hover시 시안 테두리
- `cyan`: `bg-cyan/10` + `text-cyan`
- `amber`: `bg-amber/10` + `text-amber`

### FeaturedStoryCard

Featured 프로젝트 풀와이드 스토리 블록. `glass-card` 기반.

```
레이아웃: grid grid-cols-1 md:grid-cols-5 (이미지 2col, 텍스트 3col)
모바일: 이미지 상단, 텍스트 하단 (세로 스택)
```

| 요소 | 스타일 |
|------|--------|
| Before(pain) | `text-amber-400/80` + `bg-amber-500/5 border-amber-500/10` |
| After(outcome) | `text-emerald-400/80` + `bg-emerald-500/5 border-emerald-500/10` |
| 화살표 `→` | `gradient-text` |
| Impact Before | `text-muted-foreground line-through` |
| Impact After | `text-emerald-400 font-bold` |
| Impact 라벨 | `font-mono text-xs text-muted-foreground uppercase tracking-wider` |
| FEATURED 뱃지 | `bg-white/10 backdrop-blur-md text-cyan` |

### 일반 카드 스토리 힌트

일반 ProjectCard 하단에 impact 한 줄 표시.

```
구분선: border-t border-border/50
라벨: text-muted-foreground
Before: text-amber-400
화살표: gradient-text
After: text-emerald-400 font-bold
```

### SectionHeading

```
// TAG            ← font-mono, text-cyan, tracking-widest, uppercase
Section Title     ← text-3xl~5xl, font-bold
Optional desc     ← text-muted-foreground, max-w-2xl, mx-auto
```

### Terminal Window (Hero)

- 타이틀 바: 트래픽 라이트 (red/yellow/green dots) + 텍스트
- 바디: font-mono, 줄별 타이핑 애니메이션
- 프롬프트: `text-cyan` + `$` 기호
- 성공: `text-emerald` + `✓`
- 진행: `text-muted-foreground` + 스피너 (`⠋⠙⠹⠸`)

## 애니메이션

### Framer Motion Variants

| Variant | 효과 |
|---------|------|
| `fadeInUp` | opacity 0→1, y 24→0 |
| `fadeIn` | opacity 0→1 |
| `staggerContainer` | children 0.1s 간격 |
| `scaleIn` | opacity 0→1, scale 0.92→1 |
| `slideInLeft/Right` | opacity + x ±32 |

### CSS 애니메이션

- `scan-line`: 수평 스캔 라인 (4s 주기)
- `pulse-glow`: 시안 글로우 펄스 (box-shadow)
- `cursor-blink`: 터미널 커서 깜빡임 (1s step-end)
- `terminal-glow`: 시안 text-shadow

## 반응형

| 요소 | Mobile (<768) | Tablet (768+) | Desktop (1024+) |
|------|--------------|---------------|-----------------|
| Navigation | 햄버거 | 가로 메뉴 | 가로 메뉴 |
| Projects Featured | 1열 세로 스택 | 풀와이드 (2+3col) | 풀와이드 (2+3col) |
| Projects 일반 | 1열 | 2열 | 3열 |
| Skills (역량) | 1열 | 2열 | 2열 |
| Skills (기술) | 1열 | 2열 | 4열 |
| 프로젝트 모달 | 풀스크린 | 중앙 Dialog | 중앙 (max-w-2xl) |

## 접근성

- `useReducedMotion`: Canvas 애니메이션 정적 렌더링 전환
- 모든 인터랙티브 요소에 `aria-label`
- Canvas에 `aria-hidden="true"`
- 키보드 네비게이션 지원
