
<!-- agent-governance:managed:start source=yurielk82-github-io-claude hash=9dad133508dbee9ad4f27ef1fa5c00f60b6861a611089c1b240f4fbeebc5fd8d -->
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
- 명확한 단건 작업은 직접 처리하고 관련 검사만 실행한다. 복잡하거나 모호하거나 여러 파일을
  가로지르는 작업은 양쪽 런타임이 같은 로컬 Ouroboros CLI를 사용한다. 런타임별 실행 인자와
  종료 확인은 각 어댑터가 책임진다.
- KDH를 자동 적용하지 않는다. 사용자가 명시하거나, 정상 검증을 거쳤는데도 같은 종류의 완료
  누락이 반복되어 더 엄격한 증거 검사가 필요할 때만 `[topic:workspace/kdh]`를 수동으로 적용한다.
- 완료 보고 전 실행한 명령과 결과를 다시 확인한다. 핵심 검사가 실패했거나 실행 불가하면
  완료라고 부르지 않는다.
- 사용자 질문이 데이터 값·시스템 상태·동작 여부에 관한 것이면 추측으로 답하지 않는다.
  조회 가능한 원천(서비스 로그, DB, 생성 산출물, 접속 기록)을 먼저 실측하고 그 결과로 답한다.
  실측 불가한 미래 동작은 예측임을 명시하고 검증 시점과 방법을 함께 제시한다. 관측 시점이
  다른 두 값의 차이는 원인을 추측하기 전에 시점 차이부터 확인한다. (오너 지시 2026-07-29)
- 운영 상태 점검은 `bin/verify-ops.sh`, 거버넌스 결정 일관성 점검은
  `bin/decision_audit.py`의 현재 help와 안전 모드를 확인해 사용한다.
- 빌드·전수 테스트·스캔처럼 무거운 작업은 `/home/ubuntu/GitHub/bin/batch <명령>`으로 실행한다. 직접
  실행하면 자원 상한이 없어 디스크가 포화되고 다른 세션의 터미널이 멈춘다.

## 배포와 live checkout

- 등록 서비스 배포의 단일 진입점은 `/home/ubuntu/GitHub/bin/deploy.sh <project>`이고 등록부는
  `bin/projects.tsv`다. 직접 서비스 재시작으로 build, artifact 검증, health probe, rollback을
  우회하지 않는다.
- live `/home/ubuntu/GitHub/*` checkout에서 `.next` 같은 runtime artifact를 쓰는 build는 승인된
  배포 흐름이 즉시 reload와 health check까지 수행할 때만 실행한다. build-only 검증은 격리
  worktree/clone에서 한다.
- Docker, Nginx, Cloudflare, systemd, Supabase, ports, domains, health check, 배포 자격증명을
  새로 만들거나 바꾸는 일은 자동 배포 범위가 아니며 별도 승인이 필요하다.
- 배포·infra 전에 `[topic:workspace/deploy]`와 `[topic:workspace/infra]`를 로드한다. DB/schema
  작업은 별도 승인을 받은 뒤에도 `[topic:workspace/database]`를 먼저 로드하고 적용 직전
  pre-migration backup 성공을 확인한다.
- 필수 topic을 발견·로드할 수 없으면 관련 작업을 진행하지 않고 미연결 상태를 보고한다.

## Git 안전

- 승인된 구현은 검증 → 자기 변경만 commit → feature branch push → PR 생성 또는 기존 PR 확인
  → 필수 검사·승인 충족 확인 → PR 머지 → 원격 merged 상태 확인까지 에이전트가 직접 실행한다.
  사용자에게 머지 명령어 복붙을 넘기거나 branch push만으로 완료하지 않는다. 사용자가 PR까지만
  요청했거나 저장소에 별도 머지 승인 경계가 있으면 그 제한을 따른다.
- `main`/`master` 직접 push는 계속 guard의 보호 대상이다. worktree 존재는 PR 머지 차단
  사유가 아니다. 직접 push와 PR 머지를 구분하고 정상 PR 경로에서 guard override를 쓰지 않는다.
  충돌, 실패한 필수 검사, 부족한 권한·필수 승인, 대상 불명확은 구체적 증거와 함께 보고한다.
  대기 중인 검사는 계속 조회하고, 통과 후 head SHA를 다시 확인해 머지한다. merge queue에
  들어가면 예약을 완료로 보고하지 않고 원격 merged 상태까지 확인한다.
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
- KDH 수동 재검증: 사용자 명시 또는 반복된 완료 누락이 확인된 경우 `[topic:workspace/kdh]`
- Review·Implementation·Incident 보고: `[topic:workspace/reporting]`
- 새 helper·여러 화면 공통 동작 전: `[topic:workspace/reuse]`
- 진입·위임·대기·마무리 절차: `[topic:workspace/workflow]`

ID는 경로가 아니라 각 런타임의 rule·skill로 투영된다. 차단 의무는 항상 로드되는 핵심에도 남긴다.

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

배포: GitHub Pages (정적). 별도 서버 프로세스·Docker 없음.

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

# yurielk82-github-io Claude adapter

- Apply the shared project layer using Claude Code native project discovery.
<!-- agent-governance:managed:end -->

<!-- AUTO-HISTORY:START -->
_자동 생성 — `.claude/scripts/sync-claude-md.sh`. 수동 편집 금지 (append-only 로 .claude/SESSION_LOG.md 가 원본)._

## 최근 세션 히스토리

- `2026-05-03` `172cdaf` — chore(quality): remove tsc from pre-commit (CI-only) — Boy Scout _(files: 1)_
- `2026-05-31` `43a3cfd` — chore: update next patch and build guard _(files: 3)_
- `2026-07-19` `6adba74` — chore(agent-governance): activate shared runtime rules _(files: 4)_
- `2026-07-31` `728fcf5` — chore(rules): render measured-answers rule via agent-governance promotion _(files: 2)_
- `2026-09-08` `eb576b4` — chore(gitignore): ignore generated tool output _(files: 1)_
- `2026-09-08` `beb63fd` — chore(rules): commit the rendered governance managed regions _(files: 2)_
- `2026-09-09` `dd9c6a1` — chore(paseo): run the shared worktree setup script _(files: 1)_

원본: `.claude/SESSION_LOG.md` (append-only)
<!-- AUTO-HISTORY:END -->
