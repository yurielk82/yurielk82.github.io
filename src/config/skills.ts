import type { Capability, TechItem } from "@/types";

export const capabilities: Capability[] = [
  {
    title: "견고한 아키텍처 설계",
    description:
      "DDD 4레이어 + Repository 패턴으로 관심사를 분리하고, 171건 자동화 테스트로 품질을 보장합니다. 빠르게 만들되, 무너지지 않는 구조.",
    projectRef: "csoweb",
    icon: "Shield",
  },
  {
    title: "크로스 플랫폼, 하나의 코드로",
    description:
      "웹·PC(Electron)·모바일(PWA) 동시 배포. 오프라인 SQLite로 인터넷 없이도 동작합니다. 따로 만드는 비용과 시간, 아껴드립니다.",
    projectRef: "kpis-dsr-api",
    icon: "Layers",
  },
  {
    title: "제로 인프라 비용 설계",
    description:
      "서버리스, Google Sheets DB, Neon 서버리스 PostgreSQL — 매달 나가는 서버 비용 없이 영구 운영 가능한 아키텍처를 설계합니다.",
    icon: "Zap",
  },
  {
    title: "AI 파트너와 함께, 사람의 설계로",
    description:
      "AI를 아키텍처 파트너로 활용하되, 요구사항 분석·설계 판단·품질 검증은 엔지니어가 책임집니다. 도구의 한계를 알고, 최종 판단은 사람이.",
    icon: "Brain",
  },
];

export const techItems: TechItem[] = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Electron", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
];
