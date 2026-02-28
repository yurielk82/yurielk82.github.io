<a id="readme-top"></a>

<div align="center">

[![Next.js][nextjs-shield]][nextjs-url]
[![TypeScript][typescript-shield]][typescript-url]
[![Tailwind CSS][tailwind-shield]][tailwind-url]
[![Framer Motion][framer-shield]][framer-url]
[![GitHub Pages][ghpages-shield]][ghpages-url]

# yurielk82.github.io

<code>v1.7.0</code>

**AI Full-Stack Builder 포트폴리오**

AI를 활용해 설계부터 배포까지 풀스택 앱을 구축하는 개발자 포트폴리오

[사이트 보기](https://yurielk82.github.io) · [이슈 등록](https://github.com/yurielk82/yurielk82.github.io/issues)

</div>

---

<details>
<summary>목차</summary>
<ol>
  <li><a href="#프로젝트-소개">프로젝트 소개</a></li>
  <li><a href="#기술-스택">기술 스택</a></li>
  <li>
    <a href="#시작하기">시작하기</a>
    <ul>
      <li><a href="#설치-및-개발">설치 및 개발</a></li>
      <li><a href="#빌드--배포">빌드 & 배포</a></li>
    </ul>
  </li>
  <li><a href="#프로젝트-구조">프로젝트 구조</a></li>
  <li><a href="#라이선스">라이선스</a></li>
</ol>
</details>

---

## 프로젝트 소개

AI(Claude Code)와 협업하여 프로덕션 레벨의 풀스택 애플리케이션을 구축하는 과정과 결과물을 소개하는 포트폴리오 사이트입니다.

### 주요 특징

| 특징 | 설명 |
|------|------|
| Liquid Glass 디자인 | Apple WWDC 2025 영감 — 반투명 머티리얼 + 스펙큘러 하이라이트 |
| CSS 블롭 그래디언트 배경 | 인디고/바이올렛/퓨샤 3개 블롭 느린 드리프트 |
| Featured Projects | Before/After 스토리 카드 + 프로젝트 스크린샷 + 기술 스택 태그 |
| 설득 구조 흐름 | 훅 → 증거 → 확장 → 신뢰 → CTA (5단계 전환 설계) |
| 멀티 CTA | Hero, Navigation, Contact 3곳에 행동 유도 배치 |
| 솔루션 카테고리 | 5개 카테고리 세로 스택 — "만들 수 있는 것" 중심 |
| 프로세스 안내 | Contact 섹션에 3단계 협업 프로세스 시각화 |
| devicon 기술 스택 그리드 | 13개 기술 아이콘 카드 (7열 반응형) |
| OS 테마 연동 | `prefers-color-scheme` 기반 초기 테마 + FOUC 방지 |
| 설정 기반 데이터 | `src/config/`에서 모든 콘텐츠 관리 |
| 정적 배포 | GitHub Pages + GitHub Actions 자동 배포 |

<p align="right">(<a href="#readme-top">맨 위로</a>)</p>

## 기술 스택

| Category | Technology |
|----------|-----------|
| Framework | [![Next.js][nextjs-shield]][nextjs-url] 15 (App Router, `output: 'export'`) |
| Language | [![TypeScript][typescript-shield]][typescript-url] (strict) |
| Styling | [![Tailwind CSS][tailwind-shield]][tailwind-url] v4 + shadcn/ui |
| Animation | [![Framer Motion][framer-shield]][framer-url] |
| Icons | Lucide React |
| Font | Outfit + JetBrains Mono + Pretendard |
| Deploy | [![GitHub Pages][ghpages-shield]][ghpages-url] (GitHub Actions) |

<p align="right">(<a href="#readme-top">맨 위로</a>)</p>

## 시작하기

### 설치 및 개발

```bash
git clone https://github.com/yurielk82/yurielk82.github.io.git
cd yurielk82.github.io
npm install
npm run dev
```

http://localhost:3000 에서 확인.

### 빌드 & 배포

```bash
npm run build        # 정적 내보내기 (out/)
npx serve out        # 빌드 결과 로컬 확인
```

`main` 브랜치에 push하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

<p align="right">(<a href="#readme-top">맨 위로</a>)</p>

## 프로젝트 구조

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
│   ├── sections/       # Hero, FeaturedProjects, Solutions, About, Contact
│   ├── shared/         # GlassCard, SectionHeading, AnimatedBackground, TechBadge, LiquidGlassSVGFilters
│   └── ui/             # shadcn/ui
├── hooks/              # useActiveSection, useTheme, useReducedMotion
└── lib/                # utils.ts, animations.ts
```

<p align="right">(<a href="#readme-top">맨 위로</a>)</p>

## 라이선스

Copyright (c) 2026 yurielk82. All rights reserved.

<p align="right">(<a href="#readme-top">맨 위로</a>)</p>

<!-- 배지 레퍼런스 링크 -->
[nextjs-shield]: https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[nextjs-url]: https://nextjs.org/
[typescript-shield]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[tailwind-shield]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[framer-shield]: https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white
[framer-url]: https://www.framer.com/motion/
[ghpages-shield]: https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white
[ghpages-url]: https://pages.github.com/
