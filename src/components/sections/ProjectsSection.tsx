// Copyright (c) 2026 yurielk82. All rights reserved.

"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, projectCategories } from "@/config/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechBadge } from "@/components/shared/TechBadge";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";
import type { ProjectConfig, ProjectImpact } from "@/types";

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

/* ---------- 이미지 영역 (공통) ---------- */
function ProjectImage({
  project,
  className,
}: {
  project: ProjectConfig;
  className?: string;
}) {
  const fallback = FALLBACK_GRADIENTS[project.id] ?? FALLBACK_GRADIENTS.csoweb;
  const hasImage = !!project.image;

  return (
    <div className={cn("relative overflow-hidden", className)}>
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

      {/* 호버 오버레이 — 링크 */}
      {project.links.github || project.links.live ? (
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
  );
}

/* ---------- Impact 블록 (통일) ---------- */
function ImpactBlock({ impacts }: { impacts: ProjectImpact[] }) {
  return (
    <div className="flex gap-6 items-start">
      {impacts.map((item, i) => (
        <div key={item.label} className="flex items-start gap-6">
          {i > 0 && <div className="w-px bg-border/30 self-stretch" />}
          <div>
            <p className="text-xl font-bold font-mono gradient-text leading-tight">
              {item.after}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.label}</p>
            <p className="text-[10px] font-mono text-amber-400/50 line-through mt-0.5">
              {item.before}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- StoryCard (단일 카드) ---------- */
function StoryCard({ project }: { project: ProjectConfig }) {
  const story = project.story;

  return (
    <motion.div
      variants={fadeInUp}
      transition={defaultTransition}
      className="min-w-70 max-w-80 snap-center flex-shrink-0"
    >
      <div className="glass-card overflow-hidden group h-full flex flex-col">
        {/* 이미지 16:10 */}
        <ProjectImage project={project} className="aspect-[16/10]" />

        {/* 텍스트 */}
        <div className="p-5 flex flex-col flex-1 gap-3">
          {/* 이름 + 버전 */}
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-lg font-bold">{project.name}</h3>
            <span className="text-xs font-mono text-muted-foreground">
              v{project.version}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm font-semibold gradient-text">
            {project.tagline}
          </p>

          {/* Impact */}
          {story && (
            <>
              <div className="border-t border-border/50" />
              <ImpactBlock impacts={story.impact} />
            </>
          )}

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
            {project.techStack.length > 4 && (
              <TechBadge>+{project.techStack.length - 4}</TechBadge>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- 드래그 스크롤 훅 (관성 포함) ---------- */
function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    animId: 0,
  });

  const stopMomentum = useCallback(() => {
    cancelAnimationFrame(drag.current.animId);
  }, []);

  const startMomentum = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    let v = drag.current.velocity;
    const friction = 0.95;
    const step = () => {
      if (Math.abs(v) < 0.5) return;
      el.scrollLeft -= v;
      v *= friction;
      drag.current.animId = requestAnimationFrame(step);
    };
    drag.current.animId = requestAnimationFrame(step);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    stopMomentum();
    const now = Date.now();
    drag.current = {
      active: true,
      startX: e.pageX,
      scrollLeft: el.scrollLeft,
      lastX: e.pageX,
      lastTime: now,
      velocity: 0,
      animId: 0,
    };
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }, [stopMomentum]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!drag.current.active) return;
    const el = ref.current;
    if (!el) return;
    e.preventDefault();
    const now = Date.now();
    const dt = now - drag.current.lastTime;
    const dx = e.pageX - drag.current.lastX;
    if (dt > 0) {
      drag.current.velocity = dx / dt * 16;
    }
    drag.current.lastX = e.pageX;
    drag.current.lastTime = now;
    el.scrollLeft = drag.current.scrollLeft - (e.pageX - drag.current.startX);
  }, []);

  const onMouseUp = useCallback(() => {
    if (!drag.current.active) return;
    drag.current.active = false;
    const el = ref.current;
    if (!el) return;
    el.style.cursor = "grab";
    el.style.removeProperty("user-select");
    startMomentum();
  }, [startMomentum]);

  return { ref, onMouseDown, onMouseMove, onMouseUp, onMouseLeave: onMouseUp };
}

/* ---------- ProjectsSection ---------- */
export function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const scroll = useDragScroll();

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(filter as never));

  const sorted = [...filtered].sort((a, b) => a.order - b.order);

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

        {/* 가로 스크롤 (드래그) */}
        <motion.div
          key={`scroll-${filter}`}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 cursor-grab scrollbar-hide"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          ref={scroll.ref}
          onMouseDown={scroll.onMouseDown}
          onMouseMove={scroll.onMouseMove}
          onMouseUp={scroll.onMouseUp}
          onMouseLeave={scroll.onMouseLeave}
        >
          {sorted.map((project) => (
            <StoryCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
