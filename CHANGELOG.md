# Changelog

[Semantic Versioning](https://semver.org/) 준수.

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
