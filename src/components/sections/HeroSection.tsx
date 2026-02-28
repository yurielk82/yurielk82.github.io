"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Layers, Cpu, Shield, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeInUp, defaultTransition } from "@/lib/animations";

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
      {/* Bottom fadeout — About 섹션 전환 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-2 hero-fadeout"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={false}
          animate="visible"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-lg/20 bg-accent-lg-subtle text-accent-lg text-xs font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-lg animate-pulse" />
            YOUR IDEA, MY CODE
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={false}
          animate="visible"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
            <span className="text-foreground">상상만 했던 것,</span>
            <br />
            <span className="liquid-gradient-text">이제 만들어 볼까요?</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {siteConfig.author.bio}
          </p>
        </motion.div>

        {/* Core capabilities — Liquid Glass 카드 */}
        <motion.div
          className="mx-auto max-w-2xl mb-12"
          initial={false}
          animate="visible"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.4 }}
        >
          <div className="liquid-glass p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {CORE_CAPABILITIES.map((cap) => (
                <div
                  key={cap.label}
                  className="flex flex-col items-center gap-2 py-3"
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
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          initial={false}
          animate="visible"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.6 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold font-mono liquid-gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-mono tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={false}
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
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
