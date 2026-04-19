# Role

AI Full-Stack Builder 포트폴리오. AI를 활용해 설계부터 배포까지 풀스택 앱을 구축하는 개발자 포트폴리오 — 단일 페이지 SPA, GitHub Pages 정적 배포.

유형: 정적. MCP: 공통만.

# Stack

- 언어: TypeScript 5
- 프레임워크: Next.js 15 + React 19
- UI: Tailwind CSS 4 + shadcn/ui (Radix UI) + Lucide Icons
- 애니메이션: Framer Motion 12
- 빌드: 정적 내보내기 (`output: 'export'`, `unoptimized: true`)

# Entry Points

| 명령 | 용도 |
|---|---|
| `npm run dev` | 개발 서버 (localhost:3000) |
| `npm run build` | 정적 내보내기 (out/) |
| `npx serve out` | 빌드 결과 로컬 확인 |

배포: GitHub Pages (정적). 별도 PM2/Docker 없음.

# Conventions

- `output: 'export'` 정적 사이트 — API Routes, middleware, Server Actions 사용 불가
- 모든 데이터는 `src/config/` 파일에서 빌드 타임에 결정
- 단일 페이지 SPA — 섹션 스크롤 방식 (클라이언트 라우팅 없음)
- 다크 모드 기본, `class` 전략 (Tailwind `dark:` variant)
- 이미지는 `unoptimized: true` (GitHub Pages 제약 — `next/image` optimizer 미지원)
- 모든 소스 파일 상단에 저작권 헤더 포함: `Copyright (c) 2026 yurielk82. All rights reserved.`

# Domain

- **사용자**: 채용 담당자·협업 잠재 파트너
- **핵심 컨텐츠**: 프로젝트 쇼케이스·스택·연락처 — 정적 config로 관리
- **페이지 모델**: 단일 SPA 섹션 스크롤, 클라이언트 라우팅 없음
