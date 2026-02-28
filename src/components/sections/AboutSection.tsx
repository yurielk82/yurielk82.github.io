/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Shield } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BentoCard } from "@/components/shared/BentoCard";
import {
  fadeInScale,
  fadeInLeft,
  fadeInRight,
  staggerBento,
  defaultTransition,
} from "@/lib/animations";

const PILLARS = [
  {
    icon: Layers,
    title: "처음부터 끝까지, 한 사람이",
    description:
      "여러 사람에게 전달하다 흐려지는 의도, 경험해 보셨나요? 기획부터 배포까지 한 사람이 관통하면, 당신의 아이디어가 그대로 살아 숨 쉽니다.",
    accent: "from-accent-lg to-secondary-lg",
  },
  {
    icon: Cpu,
    title: "당신의 아이디어가 먼저입니다",
    description:
      '"이 기술로는 안 돼요"라는 말, 저에게는 없습니다. 아이디어를 먼저 듣고, 거기에 딱 맞는 기술을 골라 씁니다. 기술이 아이디어를 가두지 않도록.',
    accent: "from-secondary-lg to-tertiary-lg",
  },
  {
    icon: Shield,
    title: "오래 쓸 수 있도록, 꼼꼼하게",
    description:
      "예쁜 화면은 기본이에요. 하지만 진짜 중요한 건, 그 뒤에 있습니다. 데이터가 안전한지, 사용자가 늘어도 버티는지, 나중에 기능을 추가할 수 있는지 — 보이지 않는 곳까지 마음을 씁니다.",
    accent: "from-tertiary-lg to-accent-lg",
  },
];

export function AboutSection() {
  const pillar1 = PILLARS[0];
  const pillar2 = PILLARS[1];
  const pillar3 = PILLARS[2];
  const Pillar1Icon = pillar1.icon;
  const Pillar2Icon = pillar2.icon;
  const Pillar3Icon = pillar3.icon;

  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="ABOUT"
          title="당신 옆의 빌더"
          description="외주 맡기는 게 아닙니다. 문제를 함께 정의하고, 함께 풀고, 함께 책임집니다. 기획부터 배포까지, 한 사람이 처음부터 끝까지."
        />

        {/* 비대칭 Bento Grid: 4열 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerBento}
        >
          {/* Pillar 1 — 핵심 대형 카드 (col-span-3, row-span-2) */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <BentoCard className="h-full p-8 lg:p-10">
              <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40">
                01
              </div>

              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${pillar1.accent} mb-6`}
              >
                <Pillar1Icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold mb-4 tracking-tight">
                {pillar1.title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {pillar1.description}
              </p>
            </BentoCard>
          </motion.div>

          {/* Pillar 2 — 사이드 카드 (1x2) */}
          <motion.div
            className="col-span-1 md:row-span-2"
            variants={fadeInRight}
            transition={defaultTransition}
          >
            <BentoCard className="h-full p-6">
              <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40">
                02
              </div>

              <div
                className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${pillar2.accent} mb-5`}
              >
                <Pillar2Icon className="h-5 w-5 text-white" />
              </div>

              <h3 className="text-lg font-semibold mb-3 tracking-tight">
                {pillar2.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar2.description}
              </p>
            </BentoCard>
          </motion.div>

          {/* Pillar 3 — 와이드 카드 (col-span-4) */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-4"
            variants={fadeInScale}
            transition={defaultTransition}
          >
            <BentoCard className="p-6 sm:p-8">
              <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40">
                03
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div
                  className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${pillar3.accent} shrink-0`}
                >
                  <Pillar3Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 tracking-tight">
                    {pillar3.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar3.description}
                  </p>
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
