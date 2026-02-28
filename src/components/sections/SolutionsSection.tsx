/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
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
import { BentoCard } from "@/components/shared/BentoCard";
import { solutions } from "@/config/solutions";
import { projects } from "@/config/projects";
import {
  fadeInScale,
  fadeInLeft,
  fadeInRight,
  staggerBento,
  defaultTransition,
} from "@/lib/animations";
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

function EvidenceRow({ solution }: { solution: SolutionCategory }) {
  if (solution.evidence.length === 0) return null;

  return (
    <div className="border-t border-border/50 pt-3 mt-3">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-x-4">
        {solution.evidence.map((ev) => {
          const project = projects.find((p) => p.id === ev.projectId);
          if (!project) return null;
          const href = getProjectLink(project);
          const Tag = href ? "a" : "span";
          const linkProps = href
            ? {
                href,
                target: "_blank" as const,
                rel: "noopener noreferrer" as const,
              }
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
  );
}

function FeaturedSolutionCard({
  solution,
}: {
  solution: SolutionCategory;
}) {
  const Icon = ICON_MAP[solution.icon] ?? Settings;

  return (
    <BentoCard className="h-full p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-lg to-secondary-lg shrink-0">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {solution.name}
            </h3>
            <p className="text-sm text-muted-foreground">{solution.tagline}</p>
          </div>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-success-lg/10 text-success-lg">
          <CheckCircle2 className="h-3 w-3" />
          실증 완료
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {solution.description}
      </p>

      {/* 핵심 역량 3-4개 */}
      <ul className="space-y-1.5 mb-4">
        {solution.capabilities.slice(0, 4).map((cap) => (
          <li
            key={cap}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-lg shrink-0" />
            {cap}
          </li>
        ))}
      </ul>

      <EvidenceRow solution={solution} />
    </BentoCard>
  );
}

function CompactSolutionCard({
  solution,
}: {
  solution: SolutionCategory;
}) {
  const Icon = ICON_MAP[solution.icon] ?? Settings;

  return (
    <BentoCard className="h-full p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3 mb-0">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-accent-lg to-secondary-lg shrink-0">
            <Icon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {solution.name}
            </h3>
            <p className="text-sm text-muted-foreground">{solution.tagline}</p>
          </div>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-success-lg/10 text-success-lg">
          <CheckCircle2 className="h-3 w-3" />
          실증 완료
        </span>
      </div>

      <EvidenceRow solution={solution} />
    </BentoCard>
  );
}

export function SolutionsSection() {
  const featured = solutions[0];
  const secondary = solutions[1];
  const rest = solutions.slice(2);

  return (
    <section id="solutions" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="SOLUTIONS"
          title="이런 것을 만들 수 있습니다"
          description="문제를 들으면 해결법이 보이고, 해결법이 보이면 구조가 잡힙니다."
        />

        {/* Bento Grid: 4열 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerBento}
        >
          {/* Featured — col-span-3, row-span-2 */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <FeaturedSolutionCard solution={featured} />
          </motion.div>

          {/* Secondary — 1x2 (사이드) */}
          <motion.div
            className="col-span-1 md:row-span-2"
            variants={fadeInRight}
            transition={defaultTransition}
          >
            <CompactSolutionCard solution={secondary} />
          </motion.div>

          {/* 나머지 솔루션 — 각 1x1 */}
          {rest.map((solution) => (
            <motion.div
              key={solution.id}
              className="col-span-1"
              variants={fadeInScale}
              transition={defaultTransition}
            >
              <CompactSolutionCard solution={solution} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
