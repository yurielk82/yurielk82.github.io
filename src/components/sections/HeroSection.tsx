/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Layers, Cpu, Shield, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BentoCard } from "@/components/shared/BentoCard";
import { TypeWriter } from "@/components/shared/TypeWriter";
import { CountUp } from "@/components/shared/CountUp";
import {
  fadeInUp,
  fadeInScale,
  fadeInLeft,
  fadeInRight,
  staggerBento,
  defaultTransition,
} from "@/lib/animations";

const STATS = [
  { value: "5+", label: "함께 만든 서비스" },
  { value: "171", label: "자동화 테스트" },
  { value: "2주", label: "아이디어에서 런칭까지" },
  { value: "15+", label: "활용 가능한 기술" },
];

const CORE_CAPABILITIES = [
  { icon: Layers, label: "풀스택" },
  { icon: Cpu, label: "AI 활용" },
  { icon: Shield, label: "견고한 설계" },
  { icon: Zap, label: "빠른 런칭" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mesh gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 hero-mesh-gradient"
      />
      {/* Bottom fadeout */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-2 hero-fadeout"
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 pb-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* ── Bento Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={staggerBento}
        >
          {/* Main Title — col-span-3, row-span-2 (desktop) */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <BentoCard className="h-full flex flex-col justify-center p-8 lg:p-12" hover={false}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-lg/20 bg-accent-lg-subtle text-accent-lg text-xs font-mono tracking-wider w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lg animate-pulse" />
                YOUR IDEA, MY CODE
              </span>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
                <span className="text-foreground">상상만 했던 것,</span>
                <br />
                <TypeWriter
                  text="이제 만들어 볼까요?"
                  className="liquid-gradient-text"
                  speed={80}
                  delay={800}
                />
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                {siteConfig.author.bio}
              </p>
            </BentoCard>
          </motion.div>

          {/* Badge Card — 1x1 */}
          <motion.div
            className="col-span-1"
            variants={fadeInRight}
            transition={defaultTransition}
          >
            <BentoCard className="h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-accent-lg to-secondary-lg">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">AI Full-Stack</p>
                <p className="text-xs text-muted-foreground mt-1">Builder</p>
              </div>
            </BentoCard>
          </motion.div>

          {/* Profile Card — 1x1 */}
          <motion.div
            className="col-span-1"
            variants={fadeInRight}
            transition={defaultTransition}
          >
            <BentoCard className="h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.author.avatar}
                alt={siteConfig.author.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full ring-2 ring-accent-lg/20"
                loading="eager"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {siteConfig.author.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {siteConfig.author.title}
                </p>
              </div>
            </BentoCard>
          </motion.div>

          {/* Stat Cards — 4 x 1x1, 모바일은 2열 */}
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              className="col-span-1"
              variants={fadeInScale}
              transition={defaultTransition}
            >
              <BentoCard className="flex flex-col items-center justify-center gap-1 p-5 text-center">
                <CountUp
                  value={stat.value}
                  className="text-2xl font-bold font-mono liquid-gradient-text"
                />
                <span className="text-xs text-muted-foreground font-mono tracking-wide">
                  {stat.label}
                </span>
              </BentoCard>
            </motion.div>
          ))}

          {/* Capability Strip — col-span-4 */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-4"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <BentoCard className="p-5" hover={false}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {CORE_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex flex-col items-center gap-2 py-2"
                  >
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-lg to-secondary-lg">
                      <cap.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {cap.label}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* CTA Card — col-span-3 */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <a href="#contact" className="block">
              <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 cta-gradient group transition-all duration-300 hover:scale-[1.01]">
                <div className="absolute inset-0 opacity-10 dot-pattern" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-white sm:text-xl">
                      함께 만들어 볼까요?
                    </p>
                    <p className="text-sm text-white/70 mt-1">
                      아이디어를 현실로 만드는 여정을 시작해보세요
                    </p>
                  </div>
                  <ChevronDown className="h-6 w-6 text-white/60 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Stat 4 highlight — 1x1 */}
          <motion.div
            className="col-span-1"
            variants={fadeInRight}
            transition={defaultTransition}
          >
            <BentoCard className="flex flex-col items-center justify-center gap-2 p-5 text-center h-full">
              <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                Total Stack
              </span>
              <CountUp
                value="15+"
                className="text-3xl font-bold font-mono liquid-gradient-text"
              />
              <span className="text-xs text-muted-foreground">
                활용 가능한 기술
              </span>
            </BentoCard>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent-lg transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="아래로 스크롤"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
