"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, projectCategories } from "@/config/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { TechBadge } from "@/components/shared/TechBadge";
import { fadeInUp, staggerContainer, scaleIn, defaultTransition } from "@/lib/animations";
import type { ProjectConfig } from "@/types";

function ProjectCard({
  project,
  onOpen,
}: {
  project: ProjectConfig;
  onOpen: () => void;
}) {
  return (
    <motion.div variants={fadeInUp} transition={defaultTransition}>
      <GlassCard className="h-full flex flex-col cursor-pointer group" hover>
        <button onClick={onOpen} className="text-left flex flex-col h-full w-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-cyan transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-mono text-muted-foreground mt-0.5">
                v{project.version}
              </p>
            </div>
            {project.featured && (
              <span className="px-2 py-0.5 rounded-md bg-cyan/10 text-cyan text-[10px] font-mono tracking-wider border border-cyan/20">
                FEATURED
              </span>
            )}
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {project.tagline}
          </p>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex gap-4 mb-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <span className="text-sm font-bold font-mono text-cyan">{m.value}</span>
                  <span className="text-[10px] text-muted-foreground ml-1 font-mono">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
            {project.techStack.length > 4 && (
              <TechBadge>+{project.techStack.length - 4}</TechBadge>
            )}
          </div>

          {/* View more hint */}
          <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground group-hover:text-cyan transition-colors font-mono">
            <span>자세히 보기</span>
            <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>
      </GlassCard>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectConfig;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Content */}
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card !p-0"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={defaultTransition}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 pb-4 border-b border-border/50 bg-card/80 backdrop-blur-xl z-10">
          <div>
            <h3 className="text-xl font-bold tracking-tight">{project.name}</h3>
            <p className="text-xs font-mono text-muted-foreground mt-0.5">
              v{project.version}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="닫기"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex flex-wrap gap-6">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-2xl font-bold font-mono gradient-text">
                    {m.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-mono text-cyan mb-3 tracking-wider">
              {"// "}주요 기능
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-cyan mt-1 shrink-0">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-sm font-mono text-cyan mb-3 tracking-wider">
              {"// "}사용 기술
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} variant="cyan">
                  {tech}
                </TechBadge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-sm font-medium transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan/10 hover:bg-cyan/20 text-cyan text-sm font-medium transition-colors border border-cyan/20"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectConfig | null>(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(filter as never));

  // 카테고리 중 실제 프로젝트가 있는 것만 필터 버튼으로 표시
  const activeCategories = Object.entries(projectCategories).filter(
    ([key]) => key === "all" || projects.some((p) => p.category.includes(key as never))
  );

  return (
    <section id="projects" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="프로젝트"
          title="진짜 돌아가는 서비스들"
          description="발표용 데모가 아닙니다. 실제 사용자가 매일 쓰고 있는 서비스들입니다."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {activeCategories.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-mono transition-all",
                filter === key
                  ? "bg-cyan/15 text-cyan border border-cyan/30"
                  : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <AnimatePresence mode="popLayout">
            {filtered
              .sort((a, b) => a.order - b.order)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
