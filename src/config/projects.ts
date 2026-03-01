import type { ProjectConfig } from "@/types";

export const projects: ProjectConfig[] = [
  {
    id: "csoweb",
    name: "CSO 정산 포털",
    version: "0.18.7",
    tagline: "사람은 승인만. 정산은 시스템이 합니다.",
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
      narrative:
        "수만 줄 정산 데이터를 사람이 분류하면 오류는 필연입니다. 업체 매칭, 사업자 검증, 정산서 발송까지 시스템이 처리하고, 사람은 승인만 누릅니다.",
      pain: "매달 반복되는 정산 수작업. 엑셀 수십 개를 업체별로 분류하고, 밤늦게까지 야근.",
      solution:
        "엑셀 하나 올리면 자동 분류. 국세청 API로 사업자 인증. 정산서 이메일까지 자동 발송.",
      outcome:
        "API 연결 후 새 업체 회원 승인만 해주면 끝. 정산 업무가 사라졌습니다.",
      impact: [
        { label: "정산 오류", before: "매달 손으로 분류하던 그 정산", after: "시스템이 알아서 매칭" },
        { label: "운영 모드", before: "월말마다 야근", after: "버튼 하나면 퇴근" },
      ],
    },
    highlightTech: ["Supabase", "TypeScript"],
    featured: true,
    order: 1,
  },
  {
    id: "kpis-dsr-api",
    name: "KPIS 의약품 보고",
    version: "0.10.0",
    tagline: "실수가 불가능한 보고 시스템",
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
      narrative:
        "의약품 보고는 한 번의 실수가 규제 위반입니다. ERP 데이터 자동 수정, 정해진 시간에 API 자동 보고 — 사람이 실수할 수 있는 지점을 시스템이 모두 대체합니다.",
      pain: "단순하지만 리스크가 큰 의약품 보고. 엑셀 수작업 오류가 반복되고, 한 번의 실수가 규제 위반.",
      solution:
        "ERP 데이터를 읽어 자동 수정. 지정 시간에 API 자동 보고. 반복 오류 자동 처리.",
      outcome: "특이건만 알림이 옵니다. 실수할 수 없는 환경.",
      impact: [
        { label: "보고 오류", before: "매번 손으로 옮기던 보고서", after: "시스템이 알아서 보고" },
        { label: "운영 모드", before: "틀릴까 봐 불안한 야근", after: "문제 있을 때만 알림" },
      ],
    },
    highlightTech: ["Electron", "React 19", "TypeScript"],
    featured: true,
    order: 2,
  },
  {
    id: "memo-todolist",
    name: "메모 & 할 일",
    version: "1.0.0",
    tagline: "서버 없이도 사라지지 않는 기록",
    description:
      "메모와 할 일을 관리하는 PWA 앱입니다. Google Sheets를 DB로 활용해 서버 비용 0원. 오프라인에서도, 스마트폰에서도 사용할 수 있습니다.",
    category: ["fullstack"],
    techStack: [
      "Next.js 15",
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
    links: {},
    story: {
      narrative:
        "메모 하나, 할 일 하나를 기록하는 데 서버 비용이 들어야 할까요? Google Sheets를 DB로 활용해, 인프라 비용 없이 영원히 사용할 수 있는 앱을 만들었습니다.",
      pain: "간단한 기록 앱에도 서버 비용이 매달 발생. 소규모 사용에는 과도한 인프라.",
      solution:
        "Google Sheets를 DB로 활용. 서버리스 + PWA 구조로 인프라 비용 0원.",
      outcome: "서버 비용, 영원히 0원. 오프라인에서도 기록이 사라지지 않습니다.",
      impact: [
        { label: "인프라 비용", before: "매달 발생", after: "영원히 ₩0" },
      ],
    },
    featured: false,
    order: 3,
  },
  {
    id: "codegear2",
    name: "Code Gear 웹사이트",
    version: "0.8.0",
    tagline: "개발자 없이도 운영되는 웹사이트",
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
      narrative:
        "기업 웹사이트 업데이트마다 개발자를 부르면 비용과 시간이 반복됩니다. CMS와 관리자 인증을 설계해, 콘텐츠 관리를 개발자에게 의존하지 않는 구조를 만들었습니다.",
      pain: "AI 반도체 스타트업에 첫인상을 전할 웹사이트가 없었습니다.",
      solution:
        "사이트 아이덴티티만 전달받고, 기업 특성에 맞춘 인터랙티브 웹사이트 맞춤 제작.",
      outcome: "처음 방문한 사람의 마음을 사로잡는 웹사이트가 완성.",
      impact: [
        { label: "콘텐츠 관리", before: "개발자 의존", after: "관리자 직접 운영" },
      ],
    },
    featured: false,
    order: 4,
  },
  {
    id: "mm-project",
    name: "정산서 자동 발송",
    version: "3.1.0",
    tagline: "시스템이 분류하고, 시스템이 보냅니다",
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
      narrative:
        "수백 업체에 정산서를 사람이 분류하면 잘못된 업체에 잘못된 금액이 갑니다. 엑셀 데이터를 시스템이 자동 분류하고, PDF 생성부터 이메일 발송까지 오류 없이 처리합니다.",
      pain: "수백 개 업체에 정산서를 하나하나 만들어서 개별 발송.",
      solution:
        "엑셀 업로드로 업체별 분류, PDF 자동 생성, 이메일 일괄 발송.",
      outcome: "클릭 한 번이면 수백 장의 정산서가 각 업체에 도착합니다.",
      impact: [
        { label: "정산서 오류", before: "수작업 분류", after: "시스템 자동 분류" },
        { label: "발송", before: "개별 수작업", after: "일괄 자동 발송" },
      ],
    },
    featured: false,
    order: 5,
  },
  {
    id: "ev-motor-reliability",
    name: "실험실 원격 제어 시스템",
    version: "1.0.0",
    tagline: "어디서든 실험실을 제어합니다",
    description:
      "전기차 모터·인버터의 신뢰성 시험을 원격으로 제어하는 웹 플랫폼입니다. 시뮬레이터 연동, 장비 통합 제어, 시험 자동화 — 실험실에 가지 않아도 시험이 돌아갑니다.",
    category: ["automation"],
    techStack: ["Python", "Web"],
    highlights: [
      "웹 브라우저 기반 실험실 원격 제어",
      "시뮬레이터·장비 통합 인터페이스",
      "시험 데이터 실시간 수집·분석",
    ],
    metrics: [
      { label: "제어 방식", value: "웹 원격" },
      { label: "자동화", value: "전 과정" },
    ],
    links: {},
    story: {
      narrative:
        "매번 실험실에 출근해서 장비를 세팅하고, 시험이 끝날 때까지 대기하고, 결과를 수동으로 정리합니다. 시뮬레이터 연동과 웹 제어로, 어디서든 시험을 설정하고 결과를 확인합니다.",
      pain: "실험실에 묶여서 시험 운영. 장비 세팅, 시험 대기, 결과 정리까지 수동 반복.",
      solution:
        "웹 기반 원격 제어 플랫폼으로 시뮬레이터 연동, 장비 통합 제어, 시험 자동화.",
      outcome: "실험실 밖에서도 브라우저 하나로 전체 시험을 운영하는 환경.",
      impact: [
        { label: "시험 운영", before: "실험실 상주", after: "원격 제어" },
      ],
    },
    featured: false,
    order: 6,
  },
];

export const projectCategories: Record<string, string> = {
  all: "전체",
  fullstack: "웹 서비스",
  desktop: "PC 프로그램",
  automation: "자동화",
};
