"use client";

import { motion } from "framer-motion";
import { Shield, Layers, Zap, Brain } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { capabilities, techItems } from "@/config/skills";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const ICON_MAP: Record<string, typeof Shield> = {
  Shield,
  Layers,
  Zap,
  Brain,
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* 역량 카드 */}
        <SectionHeading
          tag="SKILLS"
          title="이런 점이 다릅니다"
          description="기술은 도구일 뿐. 중요한 건 그 도구로 당신을 위해 무엇을 만들 수 있는가입니다."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {capabilities.map((cap) => {
            const Icon = ICON_MAP[cap.icon] ?? Shield;
            return (
              <motion.div
                key={cap.title}
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <GlassCard className="h-full relative overflow-hidden group">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-lg to-secondary-lg shrink-0">
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
                        <span className="inline-block mt-3 text-[10px] font-mono text-accent-lg tracking-wider">
                          → {cap.projectRef}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 하단 악센트 라인 */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-lg/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 기술 스택 아이콘 그리드 */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            함께하는 <span className="liquid-gradient-text">기술들</span>
          </h3>
          <p className="mt-3 text-muted-foreground">
            당신의 아이디어에 맞는 기술을 골라, 최선의 결과를 만듭니다.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          {techItems.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              transition={defaultTransition}
              className="group flex flex-col items-center gap-3 p-4 liquid-glass transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt={tech.name}
                width={40}
                height={40}
                className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <span className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
