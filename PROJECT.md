<!-- HISTORY:TEMPLATE:START -->

## 최초 목적

AI Full-Stack Builder 포트폴리오 — AI(Claude, Codex 등)를 활용해 설계부터 배포까지 풀스택 앱을 구축하는 개발자 정체성을 채용 담당자·협업 파트너에게 전달하는 단일 페이지 SPA. GitHub Pages 정적 배포로 운영 비용 없이 유지.

## 초기 기능

- Next.js 15 + React 19 + Tailwind CSS 4 + shadcn/ui(Radix) + Framer Motion 12 스캐폴드(v0.1.0)
- `output: 'export'` 정적 내보내기 + GitHub Actions → GitHub Pages 자동 배포
- OG 이미지 + OpenGraph/Twitter 메타데이터
- 다크/라이트 모드 글래스 카드 레이아웃
- 브랜딩 카피 — "보이지 않는 곳까지 제대로" + "기술에 구애받지 않는 빌더"(v0.2.0)
- 프로젝트 섹션 비주얼 카드 + 필터 + 스크린샷 + 라이브 URL 연결(v0.2.0~v0.3.0)

## 추가된 기능

- 2026-02-28: Hero 터미널 3자 협업 대화(고객·빌더·AI) + F톤 리브랜딩(v0.4.0~v0.4.1)  # WHY: 풀스택 빌더의 "AI 협업" 정체성 시각화
- 2026-02-28: WORK 섹션 드래그 스크롤·관성·좌우 화살표 + 전역 smooth scroll(v0.6.3~v0.6.5)  # WHY: 포트폴리오 열람 UX 개선
- 2026-02-28: Liquid Glass 디자인 시스템 전면 전환(v1.0.0 breaking) + OS 테마 연동(v1.1.0)  # WHY: 일관된 고급 시각 언어 확보
- 2026-02-28: Solutions 카테고리 전환(R&D·EV 모터 시험 추가) + Hero Mesh Gradient(v1.2.0~v1.4.0)  # WHY: WORK 중심에서 Solutions 중심 설득 구조로 재편
- 2026-02-28: Apple Bento Grid 비대칭 리디자인 → 롤백(v2.0.0 revert)  # WHY: 실제 콘텐츠 밀도에 Bento 레이아웃이 과해 가독성 저하
- 2026-03-01: Framer Motion SSG opacity 고정 버그 수정 + Featured Projects 재구성(v1.5.1~v1.7.1)  # WHY: 정적 내보내기에서 초기 렌더 미표시 결함 해결 + 설득 구조 재설계
- 2026-03-01: 프로젝트 스크린샷 1280×720 표준화 + 카드 균등화  # WHY: 이미지 비율 일관성으로 카드 그리드 정렬 깨짐 방지
- 2026-03-20: CLAUDE.md Design/DB 규칙 전역→프로젝트 분리  # WHY: 정적 사이트라 DB 규칙 불필요 — 프로젝트별 스코핑
- 2026-04-18~19: graphify-out/ gitignore + CLAUDE.md 6-section 표준 구조  # WHY: 워크스페이스 공용 규칙 정합

## 현재 수행

개인 브랜드 포트폴리오 사이트로 안정 운영 중. 2026-03 초부터 콘텐츠·디자인 변경 빈도가 낮아졌고 주로 메타 정보(규칙, 스크린샷) 유지보수만 발생. Liquid Glass 디자인 시스템 + Solutions 중심 네비게이션 구조가 현 프로덕션 기준선.

<!-- HISTORY:TEMPLATE:END -->

<!-- 자유 영역: 팀/외부 의존/부채/마이그레이션 이력 -->

## 팀·스테이크홀더

- 운영·편집: 단독 개발자(yurielk82)
- 독자: 채용 담당자, 협업 잠재 파트너, 포트폴리오 방문자

## 외부 의존

- GitHub Pages — 정적 호스팅(yurielk82.github.io)
- GitHub Actions — main push → 빌드·배포 자동화
- 외부 데이터 소스 없음(모든 콘텐츠는 `src/config/` 빌드 타임 결정)

## 알려진 부채

- 일부 프로젝트 섹션 카피가 "듀얼 톤" 과도기 상태로 혼재 — 통일 필요
- `next/image` optimizer 미지원(GitHub Pages 제약)으로 이미지 크기 수동 관리
- Framer Motion + SSG 초기 렌더 이슈 재발 가능성 — 새 섹션 추가 시 `initial={false}` 체크 필요
