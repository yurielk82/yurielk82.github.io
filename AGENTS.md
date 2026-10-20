# yurielk82.github.io

개발자 포트폴리오. 단일 페이지(섹션 스크롤) 정적 사이트로 GitHub Pages에 배포한다.

- `output: 'export'` 정적 내보내기라 API Routes·middleware·Server Actions를 쓸 수 없다. 모든 데이터는 `src/config/` 파일에서 빌드 시점에 정한다.
- 이미지는 `unoptimized: true`다(GitHub Pages는 `next/image` optimizer를 지원하지 않는다).
- 다크 모드가 기본이고 Tailwind `dark:` class 전략을 쓴다.
- 모든 소스 파일 상단에 `Copyright (c) 2026 yurielk82. All rights reserved.` 헤더를 둔다.

## Agent skills

### Issue tracker

GitHub 이슈(`gh`). See `docs/agents/issue-tracker.md`.

### Triage labels

기본 다섯 라벨(`needs-triage`·`needs-info`·`ready-for-agent`·`ready-for-human`·`wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

단일 맥락(`GLOSSARY.md` + `docs/adr/`). See `docs/agents/domain.md`.
