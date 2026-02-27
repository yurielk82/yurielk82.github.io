# Deployment

## 환경 구성

| 환경 | 설명 |
|------|------|
| Development | `npm run dev` → localhost:3000 |
| Production | GitHub Pages (https://yurielk82.github.io) |

## 환경변수

환경변수 없음. 정적 사이트이므로 모든 설정은 `src/config/`에서 빌드 타임에 결정됩니다.

## 빌드

```bash
npm run build     # out/ 디렉토리에 정적 파일 생성
npx serve out     # 로컬에서 빌드 결과 확인
```

## 배포 절차

### 자동 배포 (권장)

1. `main` 브랜치에 push
2. GitHub Actions (`.github/workflows/deploy.yml`)가 자동 실행
3. `npm ci` → `npm run build` → `out/` 업로드 → GitHub Pages 배포

### GitHub Pages 초기 설정

1. 저장소 Settings → Pages
2. Source: **GitHub Actions** 선택
3. 첫 push 후 자동 배포 확인

### 수동 배포

```bash
npm run build
# out/ 디렉토리를 직접 호스팅
```

## 롤백

GitHub Actions의 이전 성공 배포로 re-run하거나, 이전 커밋으로 revert 후 push.
