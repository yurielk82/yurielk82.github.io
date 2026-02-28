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

### StoryCard (통합 컴포넌트)

3단계 계층으로 분기하는 통합 프로젝트 카드. 모두 `glass-card` 기반.

#### Primary Featured (가로, col-span-2)

```
레이아웃: grid grid-cols-1 sm:grid-cols-5 (이미지 2col, 텍스트 3col)
```

| 요소 | 스타일 |
|------|--------|
| Tagline | `text-base sm:text-lg font-semibold gradient-text` |
| Narrative | `border-l-2 border-cyan/30 pl-4 text-sm text-muted-foreground` |
| Impact 수치 | `text-2xl sm:text-3xl font-bold font-mono gradient-text` |
| Impact 라벨 | `text-xs text-muted-foreground` |
| Impact Before | `text-[10px] font-mono text-amber-400/50 line-through` |
| 항목 구분 | `w-px bg-border/30 self-stretch` (세로선) |

#### Secondary Featured (세로, col-span-1)

| 요소 | 스타일 |
|------|--------|
| Tagline | `text-sm text-muted-foreground` |
| Narrative | `border-l-2 border-cyan/30 pl-4 text-sm text-muted-foreground` |
| Impact 수치 | `text-xl font-bold font-mono gradient-text` |

#### 일반 카드 (세로, col-span-1)

| 요소 | 스타일 |
|------|--------|
| Tagline | `text-sm text-muted-foreground` |
| Impact 수치 | `text-lg font-bold font-mono gradient-text` |
| Impact 라벨 | `text-xs text-muted-foreground` |
| Impact Before | `text-[10px] font-mono text-amber-400/50 line-through` |

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
| Projects 그리드 | 1열 (전체 세로) | 2열 (Primary 2칸) | 3열 (Primary 2칸+1) |
| Skills (역량) | 1열 | 2열 | 2열 |
| Skills (기술) | 1열 | 2열 | 4열 |
| 프로젝트 모달 | 풀스크린 | 중앙 Dialog | 중앙 (max-w-2xl) |

## 접근성

- `useReducedMotion`: Canvas 애니메이션 정적 렌더링 전환
- 모든 인터랙티브 요소에 `aria-label`
- Canvas에 `aria-hidden="true"`
- 키보드 네비게이션 지원
