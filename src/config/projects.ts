import type { ProjectConfig } from "@/types";

export const projects: ProjectConfig[] = [
  {
    id: "csoweb",
    name: "CSO 정산 포털",
    version: "0.18.7",
    tagline: "매달 반복되던 야근, 이제 엑셀 하나로 끝나요",
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
    story: {
      pain: "매달 반복되는 정산 수작업. 엑셀 수십 개를 업체별로 분류하고, 밤늦게까지 야근.",
      solution:
        "엑셀 하나 올리면 자동 분류. 국세청 API로 사업자 인증. 정산서 이메일까지 자동 발송.",
      outcome:
        "API 연결 후 새 업체 회원 승인만 해주면 끝. 정산 업무가 사라졌습니다.",
      impact: [
        { label: "야근", before: "매달 반복", after: "0" },
        { label: "무결성", before: "수작업 검증", after: "171건 자동 테스트" },
      ],
    },
    featured: true,
    order: 1,
  },
  {
    id: "kpis-dsr-api",
    name: "KPIS 의약품 보고",
    version: "0.10.0",
    tagline: "어디서 일하든 걱정 없이, 늘 곁에 있는 보고 시스템",
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
    story: {
      pain: "단순하지만 리스크가 큰 의약품 보고. 엑셀 수작업 오류가 반복되고, 한 번의 실수가 규제 위반.",
      solution:
        "ERP 데이터를 읽어 자동 수정. 지정 시간에 API 자동 보고. 반복 오류 자동 처리.",
      outcome: "특이건만 알림이 옵니다. 실수할 수 없는 환경.",
      impact: [
        { label: "보고 업무", before: "매달 야근", after: "시스템 자동" },
        { label: "리스크", before: "수작업 오류", after: "제거" },
      ],
    },
    featured: true,
    order: 2,
  },
  {
    id: "myaccweb",
    name: "내 수수료 장부",
    version: "1.0.0",
    tagline: "부담 없이 시작하세요. 서버 비용, 영원히 0원",
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
    story: {
      pain: "서버 비용이 부담. 매달 호스팅 비용 없이 수수료를 관리할 방법이 필요.",
      solution:
        "Google Sheets를 DB로 활용. 서버리스 + PWA 구조로 인프라 비용 0원.",
      outcome: "서버 비용, 영원히 0원.",
      impact: [
        { label: "서버 비용", before: "매달 발생", after: "영원히 ₩0" },
      ],
    },
    featured: false,
    order: 3,
  },
  {
    id: "codegear2",
    name: "Code Gear 웹사이트",
    version: "0.8.0",
    tagline: "처음 방문한 사람의 마음을 사로잡는 웹사이트",
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
    story: {
      pain: "AI 반도체 스타트업에 첫인상을 전할 웹사이트가 없었습니다.",
      solution:
        "사이트 아이덴티티만 전달받고, 기업 특성에 맞춘 인터랙티브 웹사이트 맞춤 제작.",
      outcome: "처음 방문한 사람의 마음을 사로잡는 웹사이트가 완성.",
      impact: [
        { label: "웹 존재감", before: "없음", after: "브랜드 맞춤 사이트" },
      ],
    },
    featured: false,
    order: 4,
  },
  {
    id: "mm-project",
    name: "정산서 자동 발송",
    version: "3.1.0",
    tagline: "수백 장의 정산서, 이제 클릭 한 번이면 충분합니다",
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
    story: {
      pain: "수백 개 업체에 정산서를 하나하나 만들어서 개별 발송.",
      solution:
        "엑셀 업로드로 업체별 분류, PDF 자동 생성, 이메일 일괄 발송.",
      outcome: "클릭 한 번이면 수백 장의 정산서가 각 업체에 도착합니다.",
      impact: [
        { label: "발송", before: "수작업 개별", after: "클릭 한 번" },
      ],
    },
    featured: false,
    order: 5,
  },
];

export const projectCategories: Record<string, string> = {
  all: "전체",
  fullstack: "웹 서비스",
  desktop: "PC 프로그램",
  automation: "자동화",
};
