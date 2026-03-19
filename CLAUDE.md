# yurielk82.github.io

AI Full-Stack Builder 포트폴리오 — AI를 활용해 설계부터 배포까지 풀스택 앱을 구축하는 개발자 포트폴리오

| 항목 | 값 |
|------|-----|
| **유형** | 정적 |
| **역할** | AI Full-Stack Builder 포트폴리오 |
| **MCP** | 공통만 |

## Tech Stack

- **프레임워크**: Next.js 15 + React 19 + TypeScript 5
- **UI**: Tailwind CSS 4 + shadcn/ui (Radix UI) + Lucide Icons
- **애니메이션**: Framer Motion 12
- **빌드**: 정적 내보내기 (`output: 'export'`, `unoptimized: true`)

## 주요 명령어

```bash
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # 정적 내보내기 (out/)
npx serve out        # 빌드 결과 로컬 확인
```

## Design 규칙

- Tailwind arbitrary values 금지 (`p-[13px]` 등) — 테마 토큰 사용
- 하드코딩 색상 금지 (`text-blue-500`) — 시맨틱 변수만 (`text-primary`, `bg-muted`)
- 인라인 스타일, hex/rgb 직접 사용 금지 (동적 계산값 제외)
- 새 UI 전 `@/components/ui/` 기존 컴포넌트 탐색 → 없으면 확인 후 추가

## 도메인 특화 규칙

- `output: 'export'` 정적 사이트 — API Routes, middleware, Server Actions 사용 불가
- 모든 데이터는 `src/config/` 파일에서 빌드 타임에 결정
- 단일 페이지 SPA — 섹션 스크롤 방식 (클라이언트 라우팅 없음)
- 다크 모드 기본, `class` 전략 (Tailwind `dark:` variant)
- 이미지는 `unoptimized: true` (GitHub Pages 제약)

## Copyright

```
Copyright (c) 2026 yurielk82. All rights reserved.
```

모든 소스 파일 상단에 저작권 헤더 포함.
