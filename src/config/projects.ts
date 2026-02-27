import type { ProjectConfig } from "@/types";

export const projects: ProjectConfig[] = [
  {
    id: "csoweb",
    name: "CSO 정산 포털",
    version: "0.18.7",
    tagline: "B2B 위탁영업 정산 수수료 조회 시스템",
    description:
      "제약사 CSO 업체가 정산 수수료를 조회하는 B2B 포털. 엑셀 업로드 → CSO 매칭 → 업체별 데이터 분류 → 조회/다운로드. DDD 아키텍처와 4개 레이어 분리, 자체 JWT 인증, 필드 단위 자동 저장, 메일머지 SSE 실시간 발송을 구현.",
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
      "DDD 4개 레이어 + Repository 패턴",
      "171개 테스트 케이스 (Unit/Integration/E2E)",
      "듀얼 이메일 프로바이더 (Resend + SMTP)",
      "SSE 기반 메일머지 실시간 진행률",
      "국세청 API 사업자 실시간 인증",
      "필드 단위 PATCH 자동 저장",
    ],
    metrics: [
      { label: "테스트", value: "171개" },
      { label: "아키텍처", value: "DDD" },
      { label: "개발 기간", value: "2주" },
    ],
    links: {
      github: "https://github.com/yurielk82/csoweb",
    },
    featured: true,
    order: 1,
  },
  {
    id: "kpis-dsr-api",
    name: "KPIS DSR API",
    version: "0.10.0",
    tagline: "의약품 공급내역 보고 자동화 시스템",
    description:
      "의약품 공급내역(DSR) 보고를 자동화하는 크로스 플랫폼 시스템. 하나의 코드베이스로 Web, Desktop(Electron), 모바일 대응. Express API 서버와 React 19 프론트엔드, KPIS 정부 API 연동.",
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
      "1소스 3플랫폼 (Web/Desktop/Mobile)",
      "KPIS 정부 API 자동 보고",
      "Electron 데스크탑 앱 패키징",
      "오프라인 SQLite 로컬 DB",
    ],
    metrics: [
      { label: "플랫폼", value: "3개" },
      { label: "API 연동", value: "KPIS" },
    ],
    links: {
      github: "https://github.com/yurielk82/KPIS-DSR-API",
    },
    featured: true,
    order: 2,
  },
  {
    id: "myaccweb",
    name: "MyAccWeb",
    version: "1.0.0",
    tagline: "수수료 정산 장부 관리 PWA",
    description:
      "영업사원 개인의 수수료 정산을 관리하는 PWA. Google Sheets API를 DB로 활용하여 별도 서버 비용 없이 운영. 오프라인 지원, 모바일 최적화.",
    category: ["fullstack"],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Google Sheets API",
      "PWA",
      "Tailwind CSS",
    ],
    highlights: [
      "Google Sheets를 DB로 활용 (서버리스)",
      "PWA 오프라인 지원",
      "모바일 퍼스트 반응형",
    ],
    metrics: [
      { label: "서버 비용", value: "₩0" },
      { label: "PWA", value: "오프라인" },
    ],
    links: {
      github: "https://github.com/yurielk82/MyAccWeb",
    },
    featured: false,
    order: 3,
  },
  {
    id: "codegear2",
    name: "Code Gear 웹사이트",
    version: "0.8.0",
    tagline: "하이테크 스타트업 기업 웹사이트 v2",
    description:
      "NPU, 로봇 제어, 시스템 반도체 IP를 개발하는 코드기어의 공식 웹사이트. Prisma + Neon PostgreSQL, NextAuth v5 인증, Canvas 기반 인터랙티브 Hero.",
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
      "NextAuth v5 베타 관리자 인증",
      "Canvas 기반 인터랙티브 Hero",
      "공지사항 CMS",
    ],
    metrics: [
      { label: "DB", value: "Neon" },
      { label: "인증", value: "NextAuth" },
    ],
    links: {
      github: "https://github.com/yurielk82/codegear2",
    },
    featured: false,
    order: 4,
  },
  {
    id: "mm-project",
    name: "정산서 메일머지",
    version: "3.1.0",
    tagline: "정산서 자동 생성 + 이메일 일괄 발송",
    description:
      "제약사 정산 데이터를 업체별로 분류 후, 정산서 PDF를 자동 생성하고 이메일 일괄 발송. Python 백엔드와 React 프론트엔드, Streamlit 관리자 대시보드.",
    category: ["fullstack", "automation"],
    techStack: [
      "Python",
      "Streamlit",
      "Pandas",
      "React",
      "SMTP",
    ],
    highlights: [
      "Pandas 기반 대용량 엑셀 처리",
      "PDF 자동 생성 + 이메일 발송",
      "Streamlit 관리자 대시보드",
      "v1→v3 아키텍처 진화",
    ],
    metrics: [
      { label: "버전", value: "v3.1" },
      { label: "자동화", value: "PDF+메일" },
    ],
    links: {
      github: "https://github.com/yurielk82/mm-project",
    },
    featured: false,
    order: 5,
  },
];

export const projectCategories: Record<string, string> = {
  all: "All",
  fullstack: "Full-Stack",
  frontend: "Frontend",
  backend: "Backend",
  desktop: "Desktop",
  automation: "Automation",
};
