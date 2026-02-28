import type { SolutionCategory } from "@/types";

export const solutions: SolutionCategory[] = [
  {
    id: "enterprise-automation",
    name: "기업 업무 자동화",
    tagline: "반복 업무를 시스템으로 대체합니다",
    description:
      "매달 반복되는 정산, 분류, 발송 같은 업무를 시스템이 대신 처리합니다. 사람은 승인만 누르면 됩니다. 엑셀 자동 분류, PDF 생성, 이메일 일괄 발송까지 — 클릭 몇 번이면 끝.",
    icon: "Settings",
    capabilities: [
      "엑셀 업로드 → 업체별 자동 분류·매칭",
      "정산서 PDF 자동 생성 + 이메일 일괄 발송",
      "사업자번호 실시간 인증 (국세청 API)",
      "SSE 실시간 진행률 모니터링",
      "DDD 아키텍처 + 자동화 테스트 171건",
      "v1→v3 아키텍처 3회 개선 (검증된 시스템)",
    ],
    evidence: [
      {
        projectId: "csoweb",
        role: "정산 자동 포털",
        keyMetric: "2주 만에 완성",
      },
      {
        projectId: "mm-project",
        role: "PDF 자동 발송",
        keyMetric: "v3.1 — 3회 개선",
      },
    ],
    status: "proven",
  },
  {
    id: "regulatory-compliance",
    name: "규제 보고 자동화",
    tagline: "실수가 불가능한 보고 시스템",
    description:
      "한 번의 실수가 규제 위반인 영역. ERP 데이터를 자동으로 읽고, 정해진 시간에 정부 API로 보고합니다. 사람이 실수할 수 있는 지점을 시스템이 모두 대체합니다.",
    icon: "ShieldCheck",
    capabilities: [
      "정부 시스템(KPIS) API 자동 연동",
      "ERP 데이터 자동 수정 + 검증",
      "지정 시간 자동 보고 스케줄링",
      "1소스 3플랫폼 — 웹·PC(Electron)·모바일",
      "SQLite 로컬 DB로 오프라인 사용 가능",
      "특이건만 알림 — 정상 건은 자동 처리",
    ],
    evidence: [
      {
        projectId: "kpis-dsr-api",
        role: "의약품 자동 보고",
        keyMetric: "3플랫폼 동시 배포",
      },
    ],
    status: "proven",
  },
  {
    id: "business-website",
    name: "기업/브랜드 웹사이트",
    tagline: "개발자 없이도 운영되는 웹사이트",
    description:
      "공지사항, 소식, 포트폴리오 — 관리자가 직접 올리고 수정할 수 있는 CMS 기반 웹사이트. 개발자를 부르지 않아도 콘텐츠를 관리할 수 있습니다.",
    icon: "Globe",
    capabilities: [
      "CMS 기반 공지사항·콘텐츠 관리",
      "NextAuth v5 관리자 인증 시스템",
      "Prisma + Neon 서버리스 PostgreSQL",
      "Canvas 기반 인터랙티브 Hero",
      "SEO 최적화 + OpenGraph 메타데이터",
      "반응형 디자인 (모바일/태블릿/데스크톱)",
    ],
    evidence: [
      {
        projectId: "codegear2",
        role: "AI 스타트업 웹사이트",
        keyMetric: "관리자 직접 운영",
      },
    ],
    status: "proven",
  },
  {
    id: "smb-tools",
    name: "소상공인 맞춤 도구",
    tagline: "서버 비용 0원, 영원히",
    description:
      "서버 비용이 부담되는 소규모 사업자를 위한 도구. Google Sheets를 DB로, PWA로 모바일 대응 — 매달 나가는 비용 없이 영원히 사용할 수 있습니다.",
    icon: "Store",
    capabilities: [
      "Google Sheets를 DB로 활용 — 서버리스 구조",
      "PWA 오프라인 지원 + 홈 화면 설치",
      "모바일 퍼스트 반응형 UI",
      "서버 비용 ₩0 — 영구 무료 운영",
      "데이터 영속성 — Google 클라우드 보장",
    ],
    evidence: [
      {
        projectId: "myaccweb",
        role: "수수료 장부 앱",
        keyMetric: "서버 비용 ₩0",
      },
    ],
    status: "proven",
  },
  {
    id: "rd-engineering",
    name: "연구 개발",
    tagline: "시험과 제어를 자동화합니다",
    description:
      "하드웨어 제어, 신뢰성 시험, 데이터 수집 — 연구·개발 현장의 반복 작업을 소프트웨어로 자동화합니다. Python 기반 제어 시스템부터 시험 데이터 분석까지, 엔지니어가 연구에 집중할 수 있는 환경을 만듭니다.",
    icon: "FlaskConical",
    capabilities: [
      "하드웨어 연동 제어 시스템 (모터·인버터)",
      "신뢰성 시험 자동화 플랫폼",
      "시험 데이터 수집·분석 파이프라인",
      "데스크탑 앱 패키징 (Electron)",
      "비공개 API 연동",
    ],
    evidence: [
      {
        projectId: "ev-motor-reliability",
        role: "EV 모터 시험 자동화",
        keyMetric: "시험 전 과정 자동화",
      },
    ],
    status: "proven",
  },
];
