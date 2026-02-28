// Copyright (c) 2026 yurielk82. All rights reserved.

"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { TechBadge } from "@/components/shared/TechBadge";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import type { ProjectConfig } from "@/types";

const FALLBACK_GRADIENTS: Record<string, { gradient: string; pattern: string }> = {
  csoweb: {
    gradient: "from-cyan-500/30 via-blue-600/20 to-indigo-700/30",
    pattern: "radial-gradient(circle at 70% 30%, rgba(6,182,212,0.3) 0%, transparent 50%)",
  },
  "kpis-dsr-api": {
    gradient: "from-emerald-500/30 via-teal-600/20 to-cyan-700/30",
    pattern: "radial-gradient(circle at 30% 70%, rgba(16,185,129,0.3) 0%, transparent 50%)",
  },
};

export function FeaturedStoryCard({ project }: { project: ProjectConfig }) {
  const story = project.story;
  if (!story) return null;

  const fallback = FALLBACK_GRADIENTS[project.id] ?? FALLBACK_GRADIENTS.csoweb;
  const hasImage = !!project.image;

  return (
    <motion.div
      variants={fadeInUp}
      transition={defaultTransition}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="glass-card overflow-hidden group">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* 이미지 영역 (2/5) */}
          <div className="relative md:col-span-2 aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
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

            {/* 호버 오버레이 */}
            {(project.links.github || project.links.live) && (
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
            )}
          </div>

          {/* 텍스트 영역 (3/5) */}
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center gap-5">
            {/* 헤더 */}
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <span className="text-xs font-mono text-muted-foreground">
                v{project.version}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono tracking-wider border border-white/20 text-cyan">
                FEATURED
              </span>
            </div>

            {/* tagline */}
            <p className="text-muted-foreground leading-relaxed">
              {project.tagline}
            </p>

            {/* Before → After */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="px-4 py-2.5 rounded-lg bg-amber-500/5 border border-amber-500/10">
                <p className="text-sm text-amber-400/80 leading-relaxed">
                  {story.pain}
                </p>
              </div>
              <span className="gradient-text text-xl font-bold shrink-0 self-center">
                →
              </span>
              <div className="px-4 py-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                <p className="text-sm text-emerald-400/80 leading-relaxed">
                  {story.outcome}
                </p>
              </div>
            </div>

            {/* Impact 지표 */}
            <div className="grid grid-cols-2 gap-3">
              {story.impact.map((item) => (
                <div
                  key={item.label}
                  className="px-4 py-3 rounded-lg bg-secondary/30 border border-border/50"
                >
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground line-through">
                      {item.before}
                    </span>
                    <span className="gradient-text mx-2">→</span>
                    <span className="text-emerald-400 font-bold">
                      {item.after}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
              {project.techStack.length > 4 && (
                <TechBadge>+{project.techStack.length - 4}</TechBadge>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
