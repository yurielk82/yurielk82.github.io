import type { ProjectConfig } from "@/types";

export const projects: ProjectConfig[] = [
  {
    id: "csoweb",
    name: "CSO 정산 포털",
    version: "0.18.7",
    tagline: "엑셀만 올리면, 업체별 수수료가 자동으로 정리됩니다",
    description:
      "제약사 CSO(위탁영업) 업체들의 수수료를 조회하는 B2B 포털입니다. 관리자가 엑셀을 업로드하면 업체별 자동 분류 후, 각 업체가 로그인하여 자기 정산 내역만 조회·다운로드할 수 있습니다. DDD 4레이어 아키텍처 기반으로 설계하여 기능 확장과 유지보수가 용이합니다.",
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
      "국세청 API 연동 사업자 실시간 인증",
      "필드 단위 PATCH 자동 저장 (저장 버튼 없음)",
      "DDD 4레이어 + Repository 패턴 아키텍처",
      "171건 자동화 테스트 (Unit / Integration / E2E)",
    ],
    metrics: [
      { label: "완성 기간", value: "2주" },
      { label: "테스트", value: "171건" },
      { label: "아키텍처", value: "DDD" },
    ],
    links: {
      github: "https://github.com/yurielk82/csoweb",
    },
    featured: true,
    order: 1,
  },
  {
    id: "kpis-dsr-api",
    name: "KPIS 의약품 보고",
    version: "0.10.0",
    tagline: "의약품 공급 보고, 웹·PC·모바일 어디서든 처리",
    description:
      "의약품 공급내역(DSR)을 정부 시스템(KPIS)에 보고하는 작업을 자동화합니다. 하나의 TypeScript 코드베이스로 웹, PC 프로그램(Electron), 모바일 세 가지 환경에서 모두 사용할 수 있는 크로스 플랫폼 시스템입니다.",
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
      "Electron 데스크탑 앱 패키징 및 배포",
    ],
    metrics: [
      { label: "플랫폼", value: "3개" },
      { label: "정부 API", value: "KPIS" },
    ],
    links: {
      github: "https://github.com/yurielk82/KPIS-DSR-API",
    },
    featured: true,
    order: 2,
  },
  {
    id: "myaccweb",
    name: "내 수수료 장부",
    version: "1.0.0",
    tagline: "서버 비용 0원으로 운영되는 수수료 관리 앱",
    description:
      "영업사원 개인의 수수료를 기록·관리하는 PWA입니다. Google Sheets API를 DB 대용으로 활용해 별도 서버 비용 없이 운영하며, 오프라인 환경에서도 사용 가능합니다.",
    category: ["fullstack"],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Google Sheets API",
      "PWA",
      "Tailwind CSS",
    ],
    highlights: [
      "Google Sheets를 DB로 활용한 서버리스 구조",
      "PWA — 오프라인 사용 + 홈 화면 설치 가능",
      "모바일 퍼스트 반응형 UI",
    ],
    metrics: [
      { label: "서버 비용", value: "₩0" },
      { label: "오프라인", value: "지원" },
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
    tagline: "AI 반도체 스타트업의 공식 기업 웹사이트",
    description:
      "NPU, 로봇 제어, 시스템 반도체 IP를 개발하는 코드기어의 공식 웹사이트입니다. Prisma + Neon PostgreSQL 서버리스 DB, NextAuth v5 관리자 인증, CMS 기반 공지사항 관리 기능을 갖추고 있습니다.",
    category: ["fullstack"],
    techStack: [
      "Next.js 16",
      "Prisma",
      "Neon PostgreSQL",
      "NextAuth v5",
      "Framer Motion",
    ],
    highlights: [
      "Prisma + Neon 서버리스 PostgreSQL DB",
      "NextAuth v5 기반 관리자 인증",
      "Canvas 기반 인터랙티브 Hero 화면",
      "공지사항 CMS (등록·수정·삭제)",
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
    name: "정산서 자동 발송",
    version: "3.1.0",
    tagline: "엑셀 → 정산서 PDF 생성 → 이메일 발송, 한 번에 끝",
    description:
      "제약사 정산 데이터가 담긴 엑셀을 업로드하면, 업체별 자동 분류 후 정산서 PDF를 생성하고 이메일 일괄 발송합니다. Python + Pandas 기반 대용량 데이터 처리, Streamlit 관리자 대시보드를 갖추고 있습니다.",
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
      "v1 → v3 아키텍처 3회 개선 이력",
    ],
    metrics: [
      { label: "버전", value: "v3.1" },
      { label: "자동화", value: "PDF+이메일" },
    ],
    links: {
      github: "https://github.com/yurielk82/mm-project",
    },
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
