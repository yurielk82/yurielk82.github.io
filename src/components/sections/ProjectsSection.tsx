// Copyright (c) 2026 yurielk82. All rights reserved.

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, projectCategories } from "@/config/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechBadge } from "@/components/shared/TechBadge";
import { FeaturedStoryCard } from "@/components/sections/FeaturedStoryCard";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";
import type { ProjectConfig } from "@/types";

/* 이미지 없는 프로젝트용 폴백 그래디언트 */
const FALLBACK_GRADIENTS: Record<string, { gradient: string; pattern: string }> = {
  csoweb: {
    gradient: "from-cyan-500/30 via-blue-600/20 to-indigo-700/30",
    pattern: "radial-gradient(circle at 70% 30%, rgba(6,182,212,0.3) 0%, transparent 50%)",
  },
  "kpis-dsr-api": {
    gradient: "from-emerald-500/30 via-teal-600/20 to-cyan-700/30",
    pattern: "radial-gradient(circle at 30% 70%, rgba(16,185,129,0.3) 0%, transparent 50%)",
  },
  myaccweb: {
    gradient: "from-amber-500/30 via-orange-600/20 to-rose-700/30",
    pattern: "radial-gradient(circle at 80% 80%, rgba(245,158,11,0.3) 0%, transparent 50%)",
  },
  codegear2: {
    gradient: "from-violet-500/30 via-purple-600/20 to-indigo-700/30",
    pattern: "radial-gradient(circle at 20% 40%, rgba(139,92,246,0.3) 0%, transparent 50%)",
  },
  "mm-project": {
    gradient: "from-rose-500/30 via-pink-600/20 to-fuchsia-700/30",
    pattern: "radial-gradient(circle at 60% 20%, rgba(244,114,182,0.3) 0%, transparent 50%)",
  },
};

function ProjectCard({ project }: { project: ProjectConfig }) {
  const fallback = FALLBACK_GRADIENTS[project.id] ?? FALLBACK_GRADIENTS.csoweb;
  const hasImage = !!project.image;
  const firstImpact = project.story?.impact[0];

  return (
    <motion.div variants={fadeInUp} transition={defaultTransition}>
      <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card transition-all duration-300 hover:border-cyan/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)]">
        {/* 비주얼 영역 */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {hasImage ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={`${project.name} 스크린샷`}
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </>
          ) : (
            <>
              {/* 폴백 그래디언트 배경 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${fallback.gradient}`} />
              <div className="absolute inset-0" style={{ background: fallback.pattern }} />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </>
          )}

          {/* 하단 프로젝트명 (기본 상태) */}
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
            <h3 className="text-lg font-bold text-white drop-shadow-lg">
              {project.name}
            </h3>
            <p className="text-xs text-white/60 font-mono mt-0.5">
              v{project.version}
            </p>
          </div>

          {/* 호버 오버레이 */}
          {(project.links.github || project.links.live) ? (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan/20 hover:bg-cyan/30 text-white text-sm font-medium transition-colors border border-cyan/30 backdrop-blur"
                >
                  <ExternalLink className="h-4 w-4" />
                  사이트 보기
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/20 backdrop-blur"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          ) : (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <span className="text-white/60 text-sm font-medium">로컬 전용 프로젝트</span>
            </div>
          )}
        </div>

        {/* 텍스트 영역 */}
        <div className="p-5">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
            {project.techStack.length > 4 && (
              <TechBadge>+{project.techStack.length - 4}</TechBadge>
            )}
          </div>

          {/* 스토리 힌트: impact 한 줄 */}
          {firstImpact && (
            <>
              <div className="my-3 border-t border-border/50" />
              <p className="text-xs font-mono">
                <span className="text-muted-foreground">{firstImpact.label}:</span>{" "}
                <span className="text-amber-400">{firstImpact.before}</span>
                <span className="gradient-text mx-1.5">→</span>
                <span className="text-emerald-400 font-bold">{firstImpact.after}</span>
              </p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(filter as never));

  const sorted = [...filtered].sort((a, b) => a.order - b.order);
  const featuredProjects = sorted.filter((p) => p.featured);
  const regularProjects = sorted.filter((p) => !p.featured);

  const activeCategories = Object.entries(projectCategories).filter(
    ([key]) =>
      key === "all" || projects.some((p) => p.category.includes(key as never))
  );

  return (
    <section id="projects" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="WORK"
          title="이렇게 만들어왔습니다"
          description="사람은 편하고, 시스템은 견고하게. 각 프로젝트에 담긴 이야기입니다."
        />

        {/* 필터 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {activeCategories.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                filter === key
                  ? "bg-cyan text-white shadow-lg shadow-cyan/25"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Featured 풀와이드 스토리 블록 */}
        {featuredProjects.length > 0 && (
          <div className="flex flex-col gap-6 mb-8">
            {featuredProjects.map((project) => (
              <FeaturedStoryCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* 일반 카드 3컬럼 그리드 */}
        {regularProjects.length > 0 && (
          <motion.div
            key={`regular-${filter}`}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
