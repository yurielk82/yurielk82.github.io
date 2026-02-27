import type { ProjectConfig } from "@/types";

export const projects: ProjectConfig[] = [
  {
    id: "csoweb",
    name: "CSO 정산 포털",
    version: "0.18.7",
    tagline: "매달 반복되는 정산, 이제 엑셀만 올리면 끝",
    description:
      "제약사 CSO 업체들의 수수료 정산을 자동화하는 B2B 포털입니다. 엑셀 하나 올리면 업체별로 알아서 분류되고, 각 업체는 로그인해서 자기 정산 내역만 확인·다운로드합니다. 정산서 이메일 자동 발송, 사업자번호 실시간 인증까지. DDD 4레이어 아키텍처 위에 자동화 테스트 171건으로 안정성까지 잡았습니다.",
    category: ["fullstack"],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Vitest",
      "Playwright",
    ],
    highlights: [
      "엑셀 업로드 → 업체별 자동 분류·매칭",
      "정산서 이메일 자동 발송 (SSE 실시간 진행률)",
      "국세청 API 사업자 실시간 인증",
      "필드 단위 PATCH 자동 저장",
      "DDD 4레이어 + Repository 패턴",
      "171건 자동화 테스트 (Unit / Integration / E2E)",
    ],
    metrics: [
      { label: "완성 기간", value: "2주" },
      { label: "테스트", value: "171건" },
      { label: "아키텍처", value: "DDD" },
    ],
    image: "/images/projects/csoweb.png",
    links: {
      github: "https://github.com/yurielk82/csoweb",
      live: "https://csoweb-iota.vercel.app",
    },
    featured: true,
    order: 1,
  },
  {
    id: "kpis-dsr-api",
    name: "KPIS 의약품 보고",
    version: "0.10.0",
    tagline: "PC에서도 폰에서도, 한 번 만들어 어디서든",
    description:
      "의약품 공급내역을 정부 시스템(KPIS)에 보고하는 작업을 자동화합니다. 한 번 만들어서 웹, PC 프로그램, 모바일 세 곳에서 전부 돌아갑니다. 인터넷이 끊겨도 로컬에 저장해두고, 연결되면 알아서 처리합니다.",
    category: ["fullstack", "desktop"],
    techStack: [
      "React 19",
      "Electron",
      "Express",
      "TypeScript",
      "Zustand",
      "SQLite",
    ],
    highlights: [
      "1소스 3플랫폼 — 웹·PC(Electron)·모바일 동시 배포",
      "KPIS 정부 API 연동 자동 보고",
      "SQLite 로컬 DB로 오프라인 사용 가능",
      "Electron 데스크탑 앱 패키징",
    ],
    metrics: [
      { label: "플랫폼", value: "3개" },
      { label: "오프라인", value: "지원" },
    ],
    image: "/images/projects/kpis-dsr-api.png",
    links: {
      github: "https://github.com/yurielk82/KPIS-DSR-API",
      live: "https://kpis-dsr-api.vercel.app",
    },
    featured: true,
    order: 2,
  },
  {
    id: "myaccweb",
    name: "내 수수료 장부",
    version: "1.0.0",
    tagline: "서버 비용 0원. 진짜입니다.",
    description:
      "영업사원이 수수료를 기록·관리하는 앱입니다. 서버 대신 Google Sheets를 활용해서 매달 나가는 비용이 0원. 인터넷 없는 곳에서도 쓸 수 있고, 스마트폰에서 바로 접속 가능합니다.",
    category: ["fullstack"],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Google Sheets API",
      "PWA",
      "Tailwind CSS",
    ],
    highlights: [
      "Google Sheets를 DB로 활용 — 서버리스 구조",
      "PWA 오프라인 지원 + 홈 화면 설치",
      "모바일 퍼스트 반응형 UI",
    ],
    metrics: [
      { label: "서버 비용", value: "₩0" },
      { label: "오프라인", value: "지원" },
    ],
    image: "/images/projects/myaccweb.png",
    links: {
      github: "https://github.com/yurielk82/MyAccWeb",
      live: "https://my-acc-web.vercel.app",
    },
    featured: false,
    order: 3,
  },
  {
    id: "codegear2",
    name: "Code Gear 웹사이트",
    version: "0.8.0",
    tagline: "기업의 첫인상을 만드는 웹사이트",
    description:
      "AI 반도체 스타트업 코드기어의 공식 웹사이트입니다. 관리자가 직접 공지사항을 올리고 수정할 수 있는 CMS, 로그인 권한 관리, 인터랙티브 메인 화면까지. Prisma + Neon 서버리스 DB 기반으로 빠르고 안정적으로 운영됩니다.",
    category: ["fullstack"],
    techStack: [
      "Next.js 16",
      "Prisma",
      "Neon PostgreSQL",
      "NextAuth v5",
      "Framer Motion",
    ],
    highlights: [
      "Prisma + Neon 서버리스 PostgreSQL",
      "NextAuth v5 관리자 인증",
      "Canvas 기반 인터랙티브 Hero",
      "공지사항 CMS",
    ],
    metrics: [
      { label: "DB", value: "Neon" },
      { label: "인증", value: "NextAuth" },
    ],
    image: "/images/projects/codegear2.png",
    links: {
      github: "https://github.com/yurielk82/codegear2",
      live: "https://codegear2.vercel.app",
    },
    featured: false,
    order: 4,
  },
  {
    id: "mm-project",
    name: "정산서 자동 발송",
    version: "3.1.0",
    tagline: "수백 장 정산서, 클릭 한 번에 발송",
    description:
      "엑셀 파일 하나 올리면 업체별로 분류하고, 정산서 PDF 만들어서, 이메일까지 한 번에 보냅니다. 수백 개 업체에 개별 정산서를 보내는 일이 클릭 몇 번이면 끝납니다. 3번의 버전 업을 거치며 검증된 시스템입니다.",
    category: ["fullstack", "automation"],
    techStack: [
      "Python",
      "Streamlit",
      "Pandas",
      "React",
      "SMTP",
    ],
    highlights: [
      "Pandas 기반 대용량 엑셀 처리 + PDF 자동 생성",
      "SMTP 이메일 일괄 발송",
      "Streamlit 관리자 대시보드",
      "v1 → v3 아키텍처 3회 개선",
    ],
    metrics: [
      { label: "버전", value: "v3.1" },
      { label: "자동화", value: "PDF+이메일" },
    ],
    links: {},
    featured: false,
    order: 5,
  },
];

export const projectCategories: Record<string, string> = {
  all: "전체",
  fullstack: "웹 서비스",
  frontend: "화면",
  backend: "서버",
  desktop: "PC 프로그램",
  automation: "자동화",
};
