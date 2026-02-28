"use client";

import { motion } from "framer-motion";
import {
  Settings,
  ShieldCheck,
  Globe,
  Store,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { solutions } from "@/config/solutions";
import { projects } from "@/config/projects";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";
import type { SolutionCategory, ProjectConfig } from "@/types";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Settings,
  ShieldCheck,
  Globe,
  Store,
  FlaskConical,
};

function getProjectLink(project: ProjectConfig): string | undefined {
  return project.links.live || project.links.github;
}

function SolutionCard({ solution }: { solution: SolutionCategory }) {
  const Icon = ICON_MAP[solution.icon] ?? Settings;

  return (
    <GlassCard className="p-0 overflow-hidden relative group">
      <div className="p-5 sm:p-6">
        {/* Header: Icon + Name/Tagline + Badge */}
        <div className="flex items-start justify-between gap-4 mb-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-accent-lg to-secondary-lg shrink-0">
              <Icon className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                {solution.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {solution.tagline}
              </p>
            </div>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-success-lg/10 text-success-lg">
            <CheckCircle2 className="h-3 w-3" />
            실증 완료
          </span>
        </div>

        {/* Evidence inline */}
        {solution.evidence.length > 0 && (
          <div className="border-t border-border/50 pt-4 mt-4">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-x-4">
              {solution.evidence.map((ev) => {
                const project = projects.find((p) => p.id === ev.projectId);
                if (!project) return null;
                const href = getProjectLink(project);
                const Tag = href ? "a" : "span";
                const linkProps = href
                  ? { href, target: "_blank" as const, rel: "noopener noreferrer" as const }
                  : {};
                return (
                  <Tag
                    key={ev.projectId}
                    className={`text-sm ${href ? "hover:text-accent-lg transition-colors" : ""}`}
                    {...linkProps}
                  >
                    <span className="font-medium">{project.name}</span>
                    <span className="text-muted-foreground"> · {ev.keyMetric}</span>
                  </Tag>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-lg/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </GlassCard>
  );
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          tag="SOLUTIONS"
          title="이런 것을 만들 수 있습니다"
          description="문제를 들으면 해결법이 보이고, 해결법이 보이면 구조가 잡힙니다."
        />

        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <SolutionCard solution={solution} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
