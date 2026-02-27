import type { Capability, TechItem } from "@/types";

export const capabilities: Capability[] = [
  {
    title: "빠르게, 그리고 든든하게",
    description:
      "2주 만에 기업용 시스템이 완성됩니다. 빠르다고 대충이 아니에요. 자동화 테스트 171건, 견고한 아키텍처까지 — 속도와 품질, 둘 다 챙겨드립니다.",
    projectRef: "csoweb",
    icon: "Rocket",
  },
  {
    title: "한 번 만들어, 어디서든",
    description:
      "웹, PC 프로그램, 모바일. 하나의 코드로 세 곳에서 동시에 쓸 수 있습니다. 따로 만드는 비용과 시간, 아껴드릴게요.",
    projectRef: "kpis-dsr-api",
    icon: "Layers",
  },
  {
    title: "아이디어에 맞는 기술을",
    description:
      "당신의 아이디어에 가장 잘 맞는 기술을 골라 씁니다. React가 맞으면 React, Python이 맞으면 Python. 기술이 아이디어를 가두지 않도록, 늘 열린 마음으로 접근합니다.",
    icon: "Zap",
  },
  {
    title: "AI와 함께, 사람의 판단으로",
    description:
      "AI는 든든한 파트너이고, 방향을 잡는 건 사람입니다. 요구사항을 깊이 이해하고, 설계하고, 검증하는 전 과정을 AI와 함께 — 그러나 책임감 있게 완성합니다.",
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
