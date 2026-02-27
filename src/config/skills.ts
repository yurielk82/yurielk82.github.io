import type { Capability, SkillGroup } from "@/types";

export const capabilities: Capability[] = [
  {
    title: "빠르기만 한 게 아닙니다",
    description:
      "2주 만에 기업용 시스템을 완성합니다. 그러면서도 자동화 테스트 171건, DDD 아키텍처, 듀얼 이메일 프로바이더 — 속도와 품질, 둘 다 놓치지 않습니다.",
    projectRef: "csoweb",
    icon: "Rocket",
  },
  {
    title: "한 번 만들면 세 곳에서 씁니다",
    description:
      "웹, PC 프로그램, 모바일. 같은 TypeScript 코드로 세 플랫폼에 동시 배포합니다. 따로 만드는 비용과 시간이 사라집니다.",
    projectRef: "kpis-dsr-api",
    icon: "Layers",
  },
  {
    title: "서버 비용이 0원입니다",
    description:
      "Google Sheets를 DB 대신 쓰는 서버리스 PWA. 인터넷 없어도 되고, 매달 나가는 서버비도 없습니다. 똑똑한 설계가 비용을 줄입니다.",
    projectRef: "myaccweb",
    icon: "Zap",
  },
  {
    title: "AI가 다 하는 게 아닙니다",
    description:
      "AI는 도구이고, 설계와 판단은 엔지니어의 몫입니다. 요구사항 분석부터 아키텍처 설계, 테스트, CI/CD 배포까지 — Claude Code와 전 과정을 협업합니다.",
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
