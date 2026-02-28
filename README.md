# yurielk82.github.io

**AI Full-Stack Builder 포트폴리오** v0.6.0

AI를 활용해 설계부터 배포까지 풀스택 앱을 구축하는 개발자 포트폴리오.

## About

AI(Claude Code)와 협업하여 프로덕션 레벨의 풀스택 애플리케이션을 구축하는 과정과 결과물을 소개하는 포트폴리오 사이트입니다.

### 주요 특징

| 특징 | 설명 |
|------|------|
| Terminal Futurism 디자인 | 터미널/IDE 미학 + SF HUD 인터페이스 결합 |
| Canvas 뉴럴 네트워크 | Hero 배경에 인터랙티브 노드 애니메이션 |
| 터미널 타이핑 | 고객-빌더-AI 3자 협업 대화 시뮬레이션 |
| 프로젝트 스토리텔링 | 통합 StoryCard — 감성 내러티브 + 대형 Impact 숫자 |
| 프로젝트 스크린샷 카드 | 실제 서비스 스크린샷 + 라이브 URL 연결 |
| devicon 기술 스택 그리드 | 14개 기술 아이콘 카드 (7열 반응형) |
| 마케팅/브랜딩 카피 | 듀얼 톤 — 고객 친화 + 전문가 면모 |
| 다크 모드 기본 | 시안/틸 액센트 + 라이트 모드 토글 |
| 설정 기반 데이터 | `src/config/`에서 모든 콘텐츠 관리 |
| 정적 배포 | GitHub Pages + GitHub Actions 자동 배포 |

## Built With

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router, `output: 'export'`) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Font | Outfit + JetBrains Mono + Pretendard |
| Deploy | GitHub Pages (GitHub Actions) |

## Getting Started

```bash
git clone https://github.com/yurielk82/yurielk82.github.io.git
cd yurielk82.github.io
npm install
npm run dev
```

http://localhost:3000 에서 확인.

## Build & Deploy

```bash
npm run build        # 정적 내보내기 (out/)
npx serve out        # 빌드 결과 로컬 확인
```

`main` 브랜치에 push하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

## Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── layout.tsx      # 루트 레이아웃 (폰트, 메타데이터)
│   ├── page.tsx        # 메인 페이지 (섹션 조합)
│   └── globals.css     # Tailwind v4 + 디자인 토큰
├── config/             # 모든 콘텐츠 데이터 (설정 기반)
│   ├── site.ts         # 프로필, 메타데이터, 네비게이션
│   ├── projects.ts     # 프로젝트 목록
│   └── skills.ts       # 역량, 기술 스택
├── types/index.ts      # 공유 타입 정의
├── components/
│   ├── layout/         # Navigation, Footer
│   ├── sections/       # Hero, About, Projects, Skills, Contact
│   ├── shared/         # GlassCard, SectionHeading, AnimatedBackground, TechBadge
│   └── ui/             # shadcn/ui
├── hooks/              # useActiveSection, useTheme, useReducedMotion
└── lib/                # utils.ts, animations.ts
```

## Documentation

| 문서 | 설명 |
|------|------|
| [Architecture](docs/ARCHITECTURE.md) | 구조, 설계 의도 |
| [Design System](docs/DESIGN_SYSTEM.md) | 디자인 토큰, 컴포넌트 규격 |
| [Deployment](docs/DEPLOYMENT.md) | 배포, GitHub Pages |
| [Contributing](CONTRIBUTING.md) | 기여 규칙 |
| [Changelog](CHANGELOG.md) | 변경 이력 |

## License

Copyright (c) 2026 yurielk82. All rights reserved.
