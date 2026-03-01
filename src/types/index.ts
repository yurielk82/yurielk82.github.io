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
  image?: string;
  links: {
    github?: string;
    live?: string;
  };
  story?: ProjectStory;
  highlightTech?: string[];
  featured: boolean;
  order: number;
}

export type ProjectCategory =
  | "fullstack"
  | "desktop"
  | "automation";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectImpact {
  label: string;
  before: string;
  after: string;
}

export interface ProjectStory {
  narrative: string;
  pain: string;
  solution: string;
  outcome: string;
  impact: ProjectImpact[];
}

export interface Capability {
  title: string;
  description: string;
  projectRef?: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface SolutionCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  capabilities: string[];
  evidence: SolutionEvidence[];
  status: "proven" | "capable";
}

export interface SolutionEvidence {
  projectId: string;
  role: string;
  keyMetric: string;
}
