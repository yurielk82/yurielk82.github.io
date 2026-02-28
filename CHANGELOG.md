# Changelog

[Semantic Versioning](https://semver.org/) 준수.

## [2.0.0] - 2026-02-28

### BREAKING — Apple Bento Grid 전체 레이아웃 전환

모든 섹션의 균일 세로 스택 레이아웃을 Apple WWDC 스타일 비대칭 Bento Grid로 전면 교체. 다양한 카드 크기(Featured 3x2, Side 1x2, Wide 4x1, Standard 1x1)로 정보 위계와 시각적 리듬감 부여.

### Added
- **BentoCard 컴포넌트** — `colSpan`/`rowSpan` prop으로 그리드 크기 제어, 하단 악센트 라인 내장
- **TypeWriter 컴포넌트** — Hero 타이틀 타이핑 애니메이션 (Framer Motion 기반, SSR hydration mismatch 방지)
- **CountUp 컴포넌트** — Stats 숫자 `useSpring` 카운트업 애니메이션 (viewport 진입 시 실행)
- **SectionDivider 컴포넌트** — 섹션 간 그래디언트 구분선
- Framer Motion variants: `staggerBento` (0.08s 간격), `fadeInScale`, `fadeInLeft`, `fadeInRight`
- CSS `blink-cursor` 키프레임 + `.typing-cursor` 클래스

### Changed
- **HeroSection** — 세로 스택 → 4열 Bento Grid (Main Title 3x2, Badge/Profile 1x1, Stats 1x1 x4, Capability Strip 4x1, CTA 3x1)
- **AboutSection** — 균일 3열 → 비대칭 Bento (Pillar 1 대형 3x2 + Pillar 2 사이드 1x2 + Pillar 3 와이드 4x1)
- **SolutionsSection** — flex-col 스택 → Bento Grid (Featured 대형 3x2 + Compact 카드 조합), `max-w-4xl` → `max-w-6xl`
- **SkillsSection** — 역량 2열 + 기술 그리드 분리 → 단일 4열 Bento Grid 통합
- **ContactSection** — `rounded-3xl` → `rounded-2xl` (Liquid Glass 16px 통일)
- **page.tsx** — About↔Solutions, Solutions↔Skills 사이에 SectionDivider 삽입
- DESIGN_SYSTEM.md — Bento Grid 레이아웃 규격, 새 애니메이션 variants, 반응형 매트릭스 업데이트

## [1.0.0] - 2026-02-28

### BREAKING — Liquid Glass 디자인 시스템 전환

Terminal Futurism 디자인 시스템을 Apple WWDC 2025 "Liquid Glass" 스타일로 전면 교체. 콘텐츠·구조·기능은 100% 유지하되, 시각적 아이덴티티를 완전히 교체하는 메이저 리디자인.

### Added
- **Liquid Glass 머티리얼** (`.liquid-glass`) — 반투명 배경 + `backdrop-filter: blur(20px) saturate(1.5)` + 스펙큘러 하이라이트 `::before`
- **CSS 블롭 그래디언트 배경** — 인디고/퓨샤/바이올렛 3개 블롭, 20~30초 주기 느린 드리프트 (`@keyframes blob-drift-*`)
- `LiquidGlassSVGFilters.tsx` — 전역 SVG 굴절 필터 (`feTurbulence` + `feDisplacementMap`) 선택적 적용
- Hero 핵심 역량 카드 — Liquid Glass 카드 안에 아이콘+라벨 가로 4열 배치 (About의 3대 원칙 요약판)
- `liquid-gradient-text` / `liquid-gradient-text-warm` CSS 유틸리티
- `prefers-reduced-motion` 시 블롭 애니메이션·카드 호버 transform 비활성화

### Changed
- **색상 팔레트 전면 교체** — 시안/틸/에메랄드 → 인디고(`#7c8aff`)/바이올렛(`#a78bfa`)/퓨샤(`#f0abfc`)
- **배경 전환** — Canvas 뉴럴 네트워크 (60노드+연결선+마우스반응) → CSS 블롭 그래디언트 (GPU 효율)
- **애니메이션 전환** — `duration: 0.6, ease: cubic-bezier` → `type: "spring", stiffness: 300, damping: 30`
- **`fadeInUp`** y offset 24 → 20 (더 절제된 진입)
- Navigation — `Terminal` 아이콘 → `Sparkles`, `bg-background/60` → `.liquid-glass` 머티리얼
- Footer — `Terminal` 아이콘 → `Sparkles`, `text-cyan` → `text-accent-lg`
- GlassCard — `glass-card` → `liquid-glass` 클래스
- SectionHeading — `text-cyan` → `text-accent-lg`
- TechBadge — variant 이름 `cyan`→`accent`, `amber`→`warning`, 색상 계열 교체
- HeroSection — 터미널 윈도우·타이핑 애니메이션 → Liquid Glass 핵심 역량 카드, 그래디언트 텍스트 교체
- AboutSection — 아이콘 그래디언트 `from-cyan` → `from-accent-lg`, 하단 라인 `via-cyan/20` → `via-accent-lg/15`
- ProjectsSection — `glass-card` → `liquid-glass`, 필터 버튼 `bg-cyan` → `bg-accent-lg`, FALLBACK_GRADIENTS 인디고/바이올렛/퓨샤 계열로 교체
- SkillsSection — 아이콘 배경 `from-cyan` → `from-accent-lg`, 기술 그리드 호버 `border-cyan/20` → `border-accent-lg/20`
- ContactSection — CTA 배너 그래디언트 시안→보라→마젠타 → 인디고→바이올렛→퓨샤
- 스크롤바 색상 시안 → 인디고, 선택영역 색상 교체
- `DESIGN_SYSTEM.md` 전면 재작성 — Liquid Glass 문서

### Removed
- Terminal Futurism 색상 토큰 (`--tf-cyan`, `--tf-teal`, `--tf-emerald`, `--tf-amber`, `--tf-surface`, `--tf-surface-elevated`)
- `.glass-card` CSS 클래스
- `.gradient-text` / `.gradient-text-amber` CSS 유틸리티
- `.terminal-glow` / `.scan-line` / `.cursor-blink` CSS 유틸리티
- `@keyframes scan` / `@keyframes pulse-glow` / `@keyframes typewriter-blink` 애니메이션
- Hero 터미널 관련 코드 — `TERMINAL_LINES`, `useTypewriter` 훅, 터미널 윈도우 JSX 전체
- Canvas 뉴럴 네트워크 (`AnimatedBackground.tsx` 전면 재작성)

## [0.6.5] - 2026-02-28

### Added
- WORK 섹션 좌우 화살표 버튼 — 클릭 시 카드 1장씩 부드러운 스크롤, 시작/끝 도달 시 자동 숨김
- `html { scroll-behavior: smooth }` 전역 적용 — 네비게이션 메뉴 클릭 시 부드러운 스크롤 이동

### Changed
- `useDragScroll` 훅 확장 — 스크롤 위치 감지(`canScrollLeft`/`canScrollRight`) 및 `scrollByAmount` 메서드 추가

## [0.6.4] - 2026-02-28

### Changed
- WORK 섹션 드래그 스크롤에 관성(momentum) 추가 — 놓았을 때 속도 비례 감속으로 부드러운 전환

## [0.6.3] - 2026-02-28

### Changed
- WORK 섹션 스크롤바 제거 → 마우스 드래그 스크롤로 전환 (모바일은 터치 스와이프)
- `scrollbar-hide` 유틸리티 클래스 추가 (`globals.css`)

## [0.6.2] - 2026-02-28

### Changed
- WORK 섹션 카드 간소화 — narrative 인용문(blockquote) 제거, tagline + impact만 표시
- WORK 섹션 레이아웃 — 2컬럼 그리드 → 가로 스크롤 flex (snap-x, 카드 280~320px 고정폭)

## [0.6.1] - 2026-02-28

### Changed
- WORK 섹션 스토리 관점 전환 — 효율화("야근 줄임") → 시스템 설계("오류 원천 차단") 관점으로 5개 프로젝트 tagline, narrative, impact 전면 교체
- 3종 카드(PrimaryFeaturedCard, SecondaryFeaturedCard, RegularCard) → 단일 StoryCard로 통일
- 그리드 레이아웃 3컬럼 → 2컬럼(md:grid-cols-2)으로 변경, 모든 카드 동일 크기
- ImpactBlock 단일 사이즈로 통일 (lg/md/sm 분기 제거)

### Removed
- `PrimaryFeaturedCard`, `SecondaryFeaturedCard`, `RegularCard` 컴포넌트 삭제
- `featured` 기반 primary/secondary 분기 로직 삭제

## [0.6.0] - 2026-02-28

### Added
- `ProjectStory.narrative` 필드 — 프로젝트별 감성 서사 한 문장
- StoryCard 통합 컴포넌트 — Primary Featured(가로 col-span-2) / Secondary Featured(세로+narrative) / 일반(세로) 3단계 계층
- Impact 대형 숫자 표시 — gradient-text, font-mono, 세로 구분선 구분
- Narrative 인용문 — border-l-2 cyan, 좌측선 인용문 스타일

### Changed
- WORK 섹션 레이아웃 — Featured/일반 분리 렌더링 폐지, 단일 3컬럼 그리드로 통합
- csoweb impact 교정 — "무결성: 171건 자동 테스트" → "데이터 처리: 수만 줄 수작업 → 엑셀 1개로 자동화"
- 5개 프로젝트 narrative 데이터 추가

### Removed
- `FeaturedStoryCard` 컴포넌트 삭제 — `StoryCard`로 통합

## [0.5.0] - 2026-02-28

### Added
- WORK 섹션 스토리텔링 도입 — 프로젝트별 Before→After 스토리 + Impact 지표
- `FeaturedStoryCard` 컴포넌트 — Featured 프로젝트 풀와이드 스토리 블록 (이미지+텍스트 그리드)
- `ProjectStory`, `ProjectImpact` 타입 추가 (`ProjectConfig.story?`)
- 5개 프로젝트에 `story` 데이터 입력 (pain, solution, outcome, impact)

### Changed
- WORK 섹션 레이아웃 — Featured 풀와이드 블록 + 일반 3컬럼 카드 분리 렌더링
- 일반 카드 하단에 impact 한 줄 힌트 추가 (Before→After)
- SectionHeading description 변경: "사람은 편하고, 시스템은 견고하게."

## [0.4.4] - 2026-02-28

### Changed
- Hero bio/description 사고 흐름 4단계 카피로 교체 (문제→해결법→구조→최적 기술)
- 터미널 builder 턴 전문성 강화 — "룰엔진" 등 구체적 기술 용어 노출
- 터미널 AI 턴 기술 스택 명시 — "NestJS + DDD 4레이어", "토스페이먼츠"
- 스피너 DDD 용어 반영 — "요구사항 → 유스케이스 도출 중..."
- SEO description을 bio와 동기화

## [0.4.3] - 2026-02-28

### Changed
- About 섹션 title/description 협업 톤으로 교체 ("당신 옆의 빌더")

## [0.4.2] - 2026-02-28

### Changed
- bio/description 카피를 협업·대화 톤으로 교체 ("대화 한 번이면 충분합니다")

## [0.4.1] - 2026-02-28

### Changed
- Hero 터미널 애니메이션을 3자 협업 대화로 전환 (고객→빌더→AI)
  - `client $` 고객이 문제 제기, `builder $` 빌더가 해결 방향 제시, `💬` AI가 최적 기술 제안 후 구현
- 스피너 텍스트 한글화 ("Analyzing requirements..." → "요구사항 정리 중...")
- 역할별 프롬프트 색상 구분 (client: amber, builder: violet, AI: cyan)
- 최종 라인 "배포 완료 — 정산 자동화 플랫폼 오픈"으로 결과물 강조

## [0.3.1] - 2026-02-27

### Removed
- 미사용 애니메이션 variants 제거 (`fadeIn`, `scaleIn`, `slideInLeft`, `slideInRight`, `springTransition`)
- 미사용 `skillGroups` export 및 `SkillGroup` 타입 제거
- 미사용 `TechItem.color` 속성 제거
- 미사용 프로젝트 카테고리 제거 (`frontend`, `backend` — 해당 프로젝트 없음)

## [0.3.0] - 2026-02-27

### Added
- 프로젝트 카드에 실제 서비스 스크린샷 이미지 표시 (4개 프로젝트)
- 프로젝트 라이브 URL 연결 (csoweb, kpis-dsr-api, myaccweb, codegear2)
- `ProjectConfig` 타입에 `image` 필드 추가
- 이미지 없는 프로젝트용 폴백 그래디언트 유지
- 라이브 사이트 없는 프로젝트(mm-project) "로컬 전용 프로젝트" 표시

### Changed
- 호버 오버레이: "Live" → "사이트 보기" 한국어화
- 호버 오버레이: 라이브 URL 버튼을 GitHub보다 앞에 배치
- mm-project에서 GitHub 링크 제거 (라이브 사이트 없음)

## [0.2.0] - 2026-02-27

### Added
- **브랜딩/카피라이팅 전면 재작성** — 마케팅/브랜딩 언어 + 전문 용어 듀얼 톤
- 핵심 메시지: "보이는 것도, 보이지 않는 것도."
- 핵심 차별점: "기술에 구애받지 않는 빌더"
- About 섹션 → "AI 풀스택 빌더란?" 3대 원칙 소개
- devicon CDN 기반 기술 스택 아이콘 그리드 (14개, 7열 반응형)
- Contact CTA 그래디언트 배너 (시안→보라→마젠타)

### Changed
- 프로젝트 섹션 전면 재작성 — 비주얼 그래디언트 카드 + 필 스타일 필터
- Skills 섹션 — 역량 카드 + 기술 스택 아이콘 그리드 분리

### Fixed
- 프로젝트 필터 버튼 첫 클릭 이후 작동 불능 — `AnimatePresence popLayout` 제거, `key={filter}` 적용

## [0.1.0] - 2026-02-27

### Added
- Next.js 15 프로젝트 초기화 (TypeScript, Tailwind CSS v4, App Router)
- `output: 'export'` 정적 사이트 설정
- shadcn/ui 초기화 + Framer Motion + Lucide React 설치
- **Terminal Futurism 디자인 시스템** (시안/틸 액센트, 글래스모피즘, 그래디언트 텍스트)
- 폰트: Outfit (heading) + JetBrains Mono (code) + Pretendard (한글)
- **Canvas 뉴럴 네트워크 배경** (60개 노드, 마우스 반응, 펄스 애니메이션)
- **터미널 타이핑 애니메이션** (Hero — AI 빌드 과정 시뮬레이션)
- Navigation (고정 바, 스크롤 위치 활성 표시, 모바일 햄버거)
- 5개 섹션: Hero, About, Projects, Skills, Contact
- 프로젝트 카드 그리드 + 필터 + 상세 모달
- 역량 카드 (성과 기반) + 기술 스택 그리드
- 다크 모드 기본 + 라이트 모드 토글
- 설정 기반 데이터 구조 (`src/config/` — site, projects, skills)
- GitHub Actions → GitHub Pages 자동 배포 워크플로우
- SEO: robots.txt, sitemap.xml, OpenGraph 메타데이터
- 프로젝트 템플릿 문서 자동 생성 (init-project.mjs)
