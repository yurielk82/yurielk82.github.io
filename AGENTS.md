<!-- agent-governance:managed:start source=yurielk82-github-io-codex hash=7e13990fb26d6bd328afae1fb532ecb3bbd98bb3ddf5fc6302a3d1540ab6a5d2 -->
# GitHub 워크스페이스 공통 규칙

## 범위

- `/home/ubuntu/GitHub`는 여러 독립 Git 저장소와 공통 운영 도구를 포함한 워크스페이스다.
  실제 대상 저장소 경로를 확인한 뒤 그 저장소 안에서만 수정한다.
- 기존 프로젝트는 등록된 `/home/ubuntu/GitHub/<repo>`를 우선하고, 격리 실험·worktree·빌드
  검증은 `/home/ubuntu/codex/repos`를 쓴다.
- 하위 Git 저장소에서 Claude Code와 Codex의 상위 규칙 로딩 방식이 다르므로 상속을 가정하지
  않는다. 공통 원본 렌더러가 승인된 프로젝트에 필요한 워크스페이스 핵심을 투영해야 한다.

## 작업 시작

- 저장소 status와 적용되는 네이티브 규칙, `README.md`, package manifest, 관련 설계·도메인
  문서를 먼저 확인한다.
- UI 변경은 가장 가까운 `DESIGN.md`를 확인하고 기존 디자인 시스템, 접근성, responsive
  동작을 보존한다.
- 병렬 작업은 저장소별 feature branch와 격리 worktree를 기본으로 한다. 공용 live checkout의
  다른 세션 변경을 stage하거나 되돌리지 않는다.
- 생성·표시·집계와 날짜가 필요한 자동 메시지는 `Asia/Seoul`을 사용하고, DB 저장 시각은 UTC와
  구분한다.
- KUP 등 ERP 원천은 read-only다. 명시적 별도 권한 없이 SELECT 밖의 쓰기·수정·삭제를 하지 않는다.

## 검증과 완료

- 먼저 프로젝트 자체의 focused test를 실행하고, 필요할 때 workspace 표준 검증
  `bin/verify.sh --changed`를 더한다. 검증을 repo cleanup으로 확대하지 않는다.
- 복잡한 다단계 작업은 `[topic:workspace/kdh]`의 증거 게이트를 적용한다. 런타임별 시작·종료
  연결은 각 어댑터가 책임진다.
- 완료 보고 전 실행한 명령과 결과를 다시 확인한다. 핵심 검사가 실패했거나 실행 불가하면
  완료라고 부르지 않는다.
- 운영 상태 점검은 `bin/verify-ops.sh`, 거버넌스 결정 일관성 점검은
  `bin/decision_audit.py`의 현재 help와 안전 모드를 확인해 사용한다.

## 배포와 live checkout

- 등록 서비스 배포의 단일 진입점은 `/home/ubuntu/GitHub/bin/deploy.sh <project>`이고 등록부는
  `bin/projects.tsv`다. 직접 서비스 재시작으로 build, artifact 검증, health probe, rollback을
  우회하지 않는다.
- live `/home/ubuntu/GitHub/*` checkout에서 `.next` 같은 runtime artifact를 쓰는 build는 승인된
  배포 흐름이 즉시 reload와 health check까지 수행할 때만 실행한다. build-only 검증은 격리
  worktree/clone에서 한다.
- PM2, Docker, Nginx, Cloudflare, systemd, Supabase, ports, domains, health check, 배포 자격증명을
  새로 만들거나 바꾸는 일은 자동 배포 범위가 아니며 별도 승인이 필요하다.
- 배포·infra 전에 `[topic:workspace/deploy]`와 `[topic:workspace/infra]`를 로드한다. DB/schema
  작업은 별도 승인을 받은 뒤에도 `[topic:workspace/database]`를 먼저 로드하고 적용 직전
  pre-migration backup 성공을 확인한다.
- 필수 topic을 발견·로드할 수 없으면 관련 작업을 진행하지 않고 미연결 상태를 보고한다.

## Git 안전

- `main`/`master` 직접 push는 워크스페이스 guard의 보호 대상이다. 자동 완료에서 direct-main과
  feature branch 중 무엇을 기본으로 할지는 C-009 승인 전까지 공통 원본이 바꾸지 않고 각
  런타임의 현재 정책을 유지한다.
- 공유·병렬 저장소에서는 파일을 선별 staging한다. 삭제/rename이나 force push는 별도 검토한다.
- 자세한 방식은 `[topic:workspace/git]`을 따른다.

## 규칙과 자동 작성자

- 공통 규칙의 편집 원본은 `agent-governance/`다. 생성된 `CLAUDE.md`/`AGENTS.md` 관리 구역을
  사람이 직접 고치지 않는다.
- `harness`와 규칙 개선 도구는 네이티브 파일에 직접 쓰지 않고 공통 원본 변경안을 만든다.
  렌더러가 양쪽 파일을 다시 생성해야 변경이 두 런타임에 반영된다.
- `AUTO-HISTORY`, Ouroboros, Next.js, fixer처럼 등록된 외부 마커 작성자는 자기 구역만 소유한다.
  관리 구역을 건드리거나 모르는 작성자가 나타나면 drift로 중단한다.
- 같은 이름의 skill/plugin이 양쪽에 있어도 해시와 동작을 확인하기 전에는 동일하다고 보지 않는다.
- 빠르게 변하는 library API는 workspace `bin/ctx7`을 양쪽 런타임에서 사용할 수 있다. 결과와
  공식 1차 문서를 대조하고 특정 런타임 플러그인으로 오인하지 않는다.
- 고위험 결과나 한 모델이 만든 결과의 적대 검토에는 가능한 경우 다른 vendor의 read-only
  reviewer를 사용한다. model version보다 독립된 검토 메커니즘을 보존한다.

## 주제 규칙 로딩

- 외부 마이크로서비스 API 작업 전: `[topic:workspace/api]`
- 배포·운영 작업 전: `[topic:workspace/deploy]`, `[topic:workspace/infra]`
- Supabase·schema·migration 작업 전: `[topic:workspace/database]`
- 보안·의존성 작업 전: `[topic:workspace/security]`
- Git·병렬 worktree 작업 전: `[topic:workspace/git]`
- 테스트·자동 fixer 작업 전: `[topic:workspace/testing]`
- 복잡 작업 완료 증거: `[topic:workspace/kdh]`
- Review·Implementation·Incident 보고: `[topic:workspace/reporting]`

이 ID는 원본 위치를 가리키는 상대경로가 아니다. renderer가 각 런타임에서 실제 발견 가능한
skill로 투영하고 canary가 통과한 경우에만 활성 상태로 표시한다. 차단 의무는 topic에만 두지
않고 항상 로드되는 글로벌·워크스페이스 핵심에도 남긴다.

각 런타임의 탐색·기억·확장·종료 연결 명령은 공통 규칙이 아니다. 같은 목적을 수행하는
방법을 `adapters/`에서 연결한다.

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

# yurielk82-github-io Codex adapter

- Apply the shared project layer from this repository's `AGENTS.md`.
<!-- agent-governance:managed:end -->
