/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { motion } from "framer-motion";
import { Shield, Layers, Zap, Brain } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BentoCard } from "@/components/shared/BentoCard";
import { capabilities, techItems } from "@/config/skills";
import {
  fadeInUp,
  fadeInScale,
  fadeInLeft,
  fadeInRight,
  staggerBento,
  defaultTransition,
} from "@/lib/animations";

const ICON_MAP: Record<string, typeof Shield> = {
  Shield,
  Layers,
  Zap,
  Brain,
};

export function SkillsSection() {
  const mainCap = capabilities[0];
  const sideCap = capabilities[1];
  const bottomCaps = capabilities.slice(2);
  const MainIcon = ICON_MAP[mainCap.icon] ?? Shield;
  const SideIcon = ICON_MAP[sideCap.icon] ?? Shield;

  return (
    <section id="skills" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="SKILLS"
          title="이런 점이 다릅니다"
          description="기술은 도구일 뿐. 중요한 건 그 도구로 당신을 위해 무엇을 만들 수 있는가입니다."
        />

        {/* 통합 Bento Grid: 4열 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerBento}
        >
          {/* 역량 1 — 대형 카드 (col-span-3, row-span-2) */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <BentoCard className="h-full p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent-lg to-secondary-lg shrink-0">
                  <MainIcon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mb-3">
                    {mainCap.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {mainCap.description}
                  </p>
                  {mainCap.projectRef && (
                    <span className="inline-block mt-4 text-[10px] font-mono text-accent-lg tracking-wider">
                      → {mainCap.projectRef}
                    </span>
                  )}
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* 역량 2 — 사이드 카드 (1x2) */}
          <motion.div
            className="col-span-1 md:row-span-2"
            variants={fadeInRight}
            transition={defaultTransition}
          >
            <BentoCard className="h-full p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-lg to-secondary-lg shrink-0">
                  <SideIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight mb-2">
                    {sideCap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sideCap.description}
                  </p>
                  {sideCap.projectRef && (
                    <span className="inline-block mt-3 text-[10px] font-mono text-accent-lg tracking-wider">
                      → {sideCap.projectRef}
                    </span>
                  )}
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* 역량 3, 4 — 각 1x1 */}
          {bottomCaps.map((cap) => {
            const Icon = ICON_MAP[cap.icon] ?? Shield;
            return (
              <motion.div
                key={cap.title}
                className="col-span-1"
                variants={fadeInScale}
                transition={defaultTransition}
              >
                <BentoCard className="h-full p-6">
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
                </BentoCard>
              </motion.div>
            );
          })}

          {/* 기술 스택 타이틀 — col-span-3 */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <BentoCard className="p-6 sm:p-8" hover={false}>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                함께하는{" "}
                <span className="liquid-gradient-text">기술들</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                당신의 아이디어에 맞는 기술을 골라, 최선의 결과를 만듭니다.
              </p>
            </BentoCard>
          </motion.div>

          {/* 기술 아이콘 그리드 — 1x2 (사이드) */}
          <motion.div
            className="col-span-1 md:row-span-2"
            variants={fadeInRight}
            transition={defaultTransition}
          >
            <BentoCard className="h-full p-4">
              <div className="grid grid-cols-3 gap-2 h-full content-center">
                {techItems.slice(0, 12).map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-accent-lg-subtle transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width={28}
                      height={28}
                      className="h-7 w-7"
                      loading="lazy"
                    />
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* 나머지 기술 아이콘 (확장 행) — col-span-3 */}
          {techItems.length > 12 && (
            <motion.div
              className="col-span-1 md:col-span-2 lg:col-span-3"
              variants={fadeInScale}
              transition={defaultTransition}
            >
              <BentoCard className="p-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  {techItems.slice(12).map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-accent-lg-subtle transition-colors"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="h-7 w-7"
                        loading="lazy"
                      />
                      <span className="text-[10px] text-muted-foreground text-center leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
