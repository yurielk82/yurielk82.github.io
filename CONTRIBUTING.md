# Contributing

## 브랜치 전략

```
main          ← 프로덕션 (직접 push 금지)
  └── feat/*  ← 기능 개발
  └── fix/*   ← 버그 수정
  └── docs/*  ← 문서 수정
```

## 커밋 컨벤션

```
<type>: <설명> (v<버전>)

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

| Type | 설명 |
|------|------|
| `feat` | 새 기능 |
| `fix` | 버그 수정 |
| `refactor` | 리팩토링 |
| `docs` | 문서 |
| `chore` | 빌드, 설정 |

## 코드 스타일

- TypeScript `any` 금지
- 함수형 컴포넌트 + hooks
- UI와 비즈니스 로직 분리
- 에러 묵음 처리 금지

## 문서 동기화

코드 변경 시 해당 docs/ 문서도 함께 업데이트.

| 변경 대상 | 업데이트 문서 |
|-----------|-------------|
| 컴포넌트/Store/Service | `docs/ARCHITECTURE.md` |
| API 엔드포인트 | `docs/API_REFERENCE.md` |
| DB 스키마 | `docs/DATABASE.md` |
| 배포/환경변수 | `docs/DEPLOYMENT.md` |
| UI/스타일 | `docs/DESIGN_SYSTEM.md` |
