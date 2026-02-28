/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { projects } from "@/config/projects";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
  defaultTransition,
} from "@/lib/animations";
import type { ProjectConfig } from "@/types";

const featuredProjects = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

function ProjectCard({
  project,
  index,
}: {
  project: ProjectConfig;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-center"
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {/* 이미지 */}
      <motion.div
        className={`relative ${isEven ? "" : "lg:order-2"}`}
        initial={false}
        variants={isEven ? slideInLeft : slideInRight}
        transition={defaultTransition}
      >
        <div className="liquid-glass overflow-hidden p-2">
          {project.image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={project.image}
              alt={`${project.name} 스크린샷`}
              width={720}
              height={450}
              className="w-full rounded-xl object-cover"
              loading="lazy"
            />
          ) : (
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-accent-lg/20 to-secondary-lg/20 flex items-center justify-center">
              <span className="text-muted-foreground font-mono text-sm">
                {project.name}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* 콘텐츠 */}
      <motion.div
        className={isEven ? "" : "lg:order-1"}
        initial={false}
        variants={isEven ? slideInRight : slideInLeft}
        transition={defaultTransition}
      >
        <GlassCard className="h-full">
          {/* 태그라인 */}
          <p className="text-accent-lg font-mono text-xs tracking-widest uppercase mb-3">
            {project.name}
          </p>
          <h3 className="text-2xl font-bold tracking-tight mb-2 sm:text-3xl">
            {project.tagline}
          </h3>

          {/* Before → After */}
          {project.story && project.story.impact.length > 0 && (
            <div className="mt-6 space-y-3">
              {project.story.impact.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="shrink-0 font-medium text-muted-foreground w-20 text-right">
                    {item.label}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive dark:bg-red-500/10 dark:text-red-400 font-medium line-through decoration-1">
                    {item.before}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-accent-lg shrink-0" />
                  <span className="px-3 py-1.5 rounded-lg bg-success-lg/10 text-success-lg font-medium">
                    {item.after}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 기술 스택 태그 */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary/50 text-muted-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 메트릭 */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-5 flex gap-6">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-lg font-bold font-mono liquid-gradient-text">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground font-mono tracking-wide uppercase">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 링크 */}
          <div className="mt-6 flex gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-accent-lg to-secondary-lg text-white hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                라이브 데모
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium liquid-glass hover:text-accent-lg transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="PROJECTS"
          title="직접 만들고, 직접 증명했습니다"
          description="데이터가 말하는 결과. Before & After로 확인하세요."
        />

        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
