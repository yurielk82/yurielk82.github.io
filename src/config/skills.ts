import type { Capability, SkillGroup, TechItem } from "@/types";

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
    title: "기술에 구애받지 않습니다",
    description:
      "보통 개발자는 자기가 아는 기술로만 만듭니다. 저는 아이디어를 먼저 듣고, 거기에 최적화된 기술 스택을 적용합니다. React가 맞으면 React, Python이 맞으면 Python. 기술이 아이디어를 제한하지 않습니다.",
    icon: "Zap",
  },
  {
    title: "AI가 다 하는 게 아닙니다",
    description:
      "AI는 도구이고, 설계와 판단은 엔지니어의 몫입니다. 요구사항 분석부터 아키텍처 설계, 테스트, CI/CD 배포까지 — Claude Code와 전 과정을 협업합니다.",
    icon: "Brain",
  },
];

export const techItems: TechItem[] = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Electron", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
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
