# yurielk82.github.io

**AI Full-Stack Builder 포트폴리오** v1.5.0

AI를 활용해 설계부터 배포까지 풀스택 앱을 구축하는 개발자 포트폴리오.

## About

AI(Claude Code)와 협업하여 프로덕션 레벨의 풀스택 애플리케이션을 구축하는 과정과 결과물을 소개하는 포트폴리오 사이트입니다.

### 주요 특징

| 특징 | 설명 |
|------|------|
| Liquid Glass 디자인 | Apple WWDC 2025 영감 — 반투명 머티리얼 + 스펙큘러 하이라이트 |
| CSS 블롭 그래디언트 배경 | 인디고/바이올렛/퓨샤 3개 블롭 느린 드리프트 |
| 핵심 역량 히어로 | Liquid Glass 카드 안에 아이콘+라벨 가로 배치 |
| 솔루션 카테고리 | 5개 카테고리 세로 스택 — "만들 수 있는 것" 중심 |
| 실증 Evidence | proven 카테고리에 실제 프로젝트 미니카드 표시 |
| devicon 기술 스택 그리드 | 13개 기술 아이콘 카드 (7열 반응형) |
| 고급 역량 카드 | 아키텍처 설계, 크로스 플랫폼, 제로 인프라, AI 파트너 |
| OS 테마 연동 | `prefers-color-scheme` 기반 초기 테마 + FOUC 방지 |
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
│   └── globals.css     # Tailwind v4 + Liquid Glass 디자인 토큰
├── config/             # 모든 콘텐츠 데이터 (설정 기반)
│   ├── site.ts         # 프로필, 메타데이터, 네비게이션
│   ├── solutions.ts    # 솔루션 카테고리 5개
│   ├── projects.ts     # 프로젝트 원본 데이터 (솔루션에서 참조)
│   └── skills.ts       # 역량, 기술 스택
├── types/index.ts      # 공유 타입 정의
├── components/
│   ├── layout/         # Navigation, Footer
│   ├── sections/       # Hero, About, Solutions, Skills, Contact
│   ├── shared/         # GlassCard, SectionHeading, AnimatedBackground, TechBadge, LiquidGlassSVGFilters
│   └── ui/             # shadcn/ui
├── hooks/              # useActiveSection, useTheme, useReducedMotion
└── lib/                # utils.ts, animations.ts
```

## Documentation

| 문서 | 설명 |
|------|------|
| [Architecture](docs/ARCHITECTURE.md) | 구조, 설계 의도 |
| [Design System](docs/DESIGN_SYSTEM.md) | Liquid Glass 디자인 토큰, 컴포넌트 규격 |
| [Deployment](docs/DEPLOYMENT.md) | 배포, GitHub Pages |
| [Contributing](CONTRIBUTING.md) | 기여 규칙 |
| [Changelog](CHANGELOG.md) | 변경 이력 |

## License

Copyright (c) 2026 yurielk82. All rights reserved.
