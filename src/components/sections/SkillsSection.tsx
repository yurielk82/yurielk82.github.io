"use client";

import { motion } from "framer-motion";
import { Rocket, Layers, Zap, Brain } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { TechBadge } from "@/components/shared/TechBadge";
import { capabilities, skillGroups } from "@/config/skills";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const ICON_MAP: Record<string, typeof Rocket> = {
  Rocket,
  Layers,
  Zap,
  Brain,
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="역량"
          title="이런 것들을 만들 수 있습니다"
          description="기술 나열이 아닌, 프로젝트에서 달성한 실제 성과로 역량을 보여드립니다."
        />

        {/* Capabilities */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {capabilities.map((cap) => {
            const Icon = ICON_MAP[cap.icon] ?? Rocket;
            return (
              <motion.div
                key={cap.title}
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan to-teal shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-tight mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                      {cap.projectRef && (
                        <span className="inline-block mt-3 text-[10px] font-mono text-cyan tracking-wider">
                          → {cap.projectRef}
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-cyan tracking-[0.2em] uppercase">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechBadge key={item}>{item}</TechBadge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
