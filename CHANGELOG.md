# Changelog

[Semantic Versioning](https://semver.org/) 준수.

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
