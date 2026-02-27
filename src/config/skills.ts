import type { Capability, SkillGroup } from "@/types";

export const capabilities: Capability[] = [
  {
    title: "2주 만에 완성되는 기업용 시스템",
    description:
      "DDD 아키텍처, 자동화 테스트 171건, 듀얼 이메일 프로바이더 — 보통 몇 달 걸리는 기업용 정산 시스템을 AI 협업으로 2주 만에 프로덕션 레벨로 완성합니다.",
    projectRef: "csoweb",
    icon: "Rocket",
  },
  {
    title: "한 번 만들면 어디서든 사용",
    description:
      "하나의 TypeScript 코드베이스로 웹, PC(Electron), 모바일 세 플랫폼에 동시 배포합니다. 크로스 플랫폼 아키텍처로 개발·유지보수 비용을 1/3로 줄입니다.",
    projectRef: "kpis-dsr-api",
    icon: "Layers",
  },
  {
    title: "서버 비용 0원으로 앱 운영",
    description:
      "Google Sheets API를 DB로 활용하는 서버리스 PWA. 별도 인프라 없이 오프라인까지 지원하며, 월 운영 비용 0원으로 서비스를 운영합니다.",
    projectRef: "myaccweb",
    icon: "Zap",
  },
  {
    title: "기획부터 배포까지 AI 협업",
    description:
      "요구사항 분석 → 아키텍처 설계 → 코드 구현 → 테스트 → CI/CD 배포. 전 과정을 Claude Code와 협업하여 엔지니어링 품질을 유지하면서 개발 속도를 극대화합니다.",
    icon: "Brain",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "REST API",
    ],
  },
  {
    category: "DevOps & Testing",
    items: [
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "Netlify",
      "Vercel",
      "Docker",
    ],
  },
  {
    category: "AI & Tools",
    items: [
      "Claude Code",
      "Cursor",
      "Electron",
      "Python",
      "Streamlit",
      "PWA",
    ],
  },
];
