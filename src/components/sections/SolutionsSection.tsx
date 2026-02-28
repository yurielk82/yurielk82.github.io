"use client";

import { motion } from "framer-motion";
import {
  Settings,
  ShieldCheck,
  Globe,
  Store,
  Wrench,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { solutions } from "@/config/solutions";
import { projects } from "@/config/projects";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";
import type { SolutionCategory, SolutionEvidence, ProjectConfig } from "@/types";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Settings,
  ShieldCheck,
  Globe,
  Store,
  Wrench,
};

function getProjectLink(project: ProjectConfig): string | undefined {
  return project.links.live || project.links.github;
}

function EvidenceCard({ evidence }: { evidence: SolutionEvidence }) {
  const project = projects.find((p) => p.id === evidence.projectId);
  if (!project) return null;

  const href = getProjectLink(project);
  const Wrapper = href ? "a" : "div";
  const linkProps = href
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="flex-1 min-w-0 p-4 liquid-glass hover:border-accent-lg/30"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-mono text-accent-lg tracking-wider truncate">
          {project.name}
        </span>
      </div>
      <p className="text-sm text-foreground font-medium truncate">
        {evidence.role}
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        {evidence.keyMetric}
      </p>
    </Wrapper>
  );
}

function SolutionCard({ solution }: { solution: SolutionCategory }) {
  const Icon = ICON_MAP[solution.icon] ?? Settings;
  const isProven = solution.status === "proven";

  return (
    <GlassCard className="p-0 overflow-hidden relative group">
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-lg to-secondary-lg shrink-0">
              <Icon className="h-5 w-5 text-white" />
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
          <span
            className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
              isProven
                ? "bg-success-lg/10 text-success-lg"
                : "bg-accent-lg-subtle text-accent-lg"
            }`}
          >
            {isProven ? (
              <CheckCircle2 className="h-3 w-3" />
            ) : (
              <Sparkles className="h-3 w-3" />
            )}
            {isProven ? "실증 완료" : "구현 가능"}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {solution.description}
        </p>

        {/* Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
          {solution.capabilities.map((cap) => (
            <div key={cap} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-lg shrink-0" />
              <span className="text-sm text-foreground/80">{cap}</span>
            </div>
          ))}
        </div>

        {/* Evidence or CTA */}
        {isProven && solution.evidence.length > 0 ? (
          <div className="border-t border-border/50 pt-5">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-3 block">
              실제로 만든 것
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              {solution.evidence.map((ev) => (
                <EvidenceCard key={ev.projectId} evidence={ev} />
              ))}
            </div>
          </div>
        ) : (
          <div className="border-t border-border/50 pt-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-lg hover:text-secondary-lg transition-colors"
            >
              이 분야의 첫 프로젝트를 함께 시작해 보세요
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
        {/* 하단 악센트 라인 */}
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
          className="flex flex-col gap-8"
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
