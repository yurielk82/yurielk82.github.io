# Architecture

## 데이터 흐름

```
src/config/ (정적 데이터)
  → page.tsx (섹션 조합)
  → components/sections/ (UI 렌더링)
  → Framer Motion (애니메이션)
  → 정적 내보내기 (out/)
```

정적 사이트이므로 서버 사이드 로직이 없습니다. 모든 데이터는 `src/config/`에서 빌드 타임에 결정됩니다.

## 폴더 구조

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # 루트 레이아웃 (폰트, 메타데이터, 다크 모드)
│   ├── page.tsx         # 메인 페이지 (섹션 조합, 'use client')
│   └── globals.css      # Tailwind v4 + Terminal Futurism 디자인 토큰
├── config/              # 모든 콘텐츠 데이터 (설정 기반)
│   ├── site.ts          # 프로필, 메타데이터, 네비게이션 항목
│   ├── projects.ts      # 프로젝트 목록 + 카테고리 매핑
│   └── skills.ts        # 역량 (성과 기반) + 기술 스택 그룹
├── types/index.ts       # 공유 타입 (ProjectConfig, Capability, SkillGroup)
├── components/
│   ├── layout/          # Navigation (고정 바 + 모바일), Footer
│   ├── sections/        # Hero, About, Projects, Skills, Contact
│   ├── shared/          # GlassCard, SectionHeading, AnimatedBackground, TechBadge
│   └── ui/              # shadcn/ui 컴포넌트
├── hooks/
│   ├── useActiveSection # IntersectionObserver 기반 스크롤 위치 감지
│   ├── useTheme         # 다크/라이트 모드 토글 (localStorage 영속)
│   └── useReducedMotion # prefers-reduced-motion 접근성 대응
└── lib/
    ├── utils.ts         # cn() 유틸리티
    └── animations.ts    # Framer Motion 공통 variants
```

## Design Decisions

### 왜 정적 내보내기(output: 'export')인가

GitHub Pages는 서버 사이드 렌더링을 지원하지 않습니다. `output: 'export'`로 정적 HTML/CSS/JS를 생성하여 별도 서버 비용 없이 배포합니다.

**제약**: API Routes, middleware, Server Actions 사용 불가. 이미지 최적화 비활성 (`unoptimized: true`).

### 왜 단일 페이지 SPA인가

GitHub Pages에서 클라이언트 라우팅은 404 처리 문제가 발생합니다 (`/about` → 404). 단일 페이지에서 `#section` 앵커로 네비게이션하면 이 문제를 회피하면서 부드러운 스크롤 UX를 제공합니다.

### 왜 설정 기반 데이터인가

`src/config/`에 모든 콘텐츠를 분리하면:
- 프로젝트 추가/삭제 시 컴포넌트 코드 변경 불필요
- 비개발자도 데이터 수정 가능
- 타입 안전성 유지 (`ProjectConfig` 등 인터페이스 강제)

## Core Types

```typescript
// src/types/index.ts
interface ProjectImpact {
  label: string;    // "야근"
  before: string;   // "매달 반복"
  after: string;    // "0"
}

interface ProjectStory {
  pain: string;       // Before — 어떤 고통이 있었는지
  solution: string;   // Process — 어떻게 해결했는지
  outcome: string;    // After — 최종 상태
  impact: ProjectImpact[];
}

interface ProjectConfig {
  id: string;
  name: string;
  version: string;
  tagline: string;
  description: string;
  category: ProjectCategory[];
  techStack: string[];
  highlights: string[];
  metrics?: ProjectMetric[];
  links: { github?: string; live?: string };
  story?: ProjectStory;  // 스토리텔링 데이터
  featured: boolean;
  order: number;
}

interface Capability {
  title: string;
  description: string;
  projectRef?: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}
```

## Component Dependency Map

| 컴포넌트 | Config | Hooks |
|----------|--------|-------|
| Navigation | site.ts (nav) | useActiveSection, useTheme |
| HeroSection | site.ts (author) | — |
| AboutSection | — | — |
| ProjectsSection | projects.ts | — |
| FeaturedStoryCard | projects.ts (story) | — |
| SkillsSection | skills.ts | — |
| ContactSection | site.ts (author) | — |
| AnimatedBackground | — | useReducedMotion |
