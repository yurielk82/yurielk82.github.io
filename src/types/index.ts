export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    github: string;
    avatar: string;
    title: string;
    bio: string;
  };
  nav: NavItem[];
}

export interface ProjectConfig {
  id: string;
  name: string;
  version: string;
  tagline: string;
  description: string;
  category: ProjectCategory[];
  techStack: string[];
  highlights: string[];
  metrics?: ProjectMetric[];
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
  order: number;
}

export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "desktop"
  | "automation";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Capability {
  title: string;
  description: string;
  projectRef?: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
