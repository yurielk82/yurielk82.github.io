import type { Capability, SkillGroup } from "@/types";

export const capabilities: Capability[] = [
  {
    title: "2주 만에 B2B SaaS 구축",
    description:
      "DDD 아키텍처, 171개 테스트, 듀얼 이메일 — 프로덕션 레벨의 B2B 정산 시스템을 AI와 함께 2주 만에 구축",
    projectRef: "csoweb",
    icon: "Rocket",
  },
  {
    title: "1소스 3플랫폼 배포",
    description:
      "하나의 TypeScript 코드베이스로 Web, Desktop(Electron), 모바일 세 플랫폼에 동시 배포하는 크로스 플랫폼 아키텍처",
    projectRef: "kpis-dsr-api",
    icon: "Layers",
  },
  {
    title: "서버 비용 ₩0 SaaS",
    description:
      "Google Sheets를 DB로 활용하는 PWA. 별도 서버 없이 오프라인까지 지원하는 서버리스 아키텍처",
    projectRef: "myaccweb",
    icon: "Zap",
  },
  {
    title: "설계부터 배포까지 AI 협업",
    description:
      "요구사항 분석 → 아키텍처 설계 → 코드 구현 → 테스트 → 배포. 전 과정을 Claude Code와 협업하여 엔지니어링 품질을 유지하며 개발 속도를 극대화",
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
