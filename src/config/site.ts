import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  title: "유리엘 | 당신의 아이디어를 현실로",
  description:
    "문제를 들으면 해결법이 보이고, 해결법이 보이면 구조가 잡힙니다. 거기에 최적의 기술을 얹어 진짜 서비스로 만들어요.",
  url: "https://yurielk82.github.io",
  author: {
    name: "유리엘",
    email: "yurielk82@gmail.com",
    github: "yurielk82",
    avatar: "https://avatars.githubusercontent.com/u/115215256?v=4",
    title: "아이디어를 현실로 만드는 빌더",
    bio: "문제를 들으면 해결법이 보이고, 해결법이 보이면 구조가 잡힙니다. 거기에 최적의 기술을 얹어 진짜 서비스로 만들어요.",
  },
  nav: [
    { label: "소개", href: "#about" },
    { label: "프로젝트", href: "#projects" },
    { label: "역량", href: "#skills" },
    { label: "연락", href: "#contact" },
  ],
};
