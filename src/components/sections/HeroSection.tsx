"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeInUp, defaultTransition } from "@/lib/animations";

const TERMINAL_LINES = [
  { prompt: "~", cmd: "claude", delay: 800 },
  { prompt: "claude", cmd: '"정산 수수료 조회 시스템 만들어줘"', delay: 60 },
  { prompt: "", cmd: "⠋ Analyzing requirements...", delay: 400 },
  { prompt: "", cmd: "⠙ Designing DDD 4-layer architecture...", delay: 400 },
  { prompt: "", cmd: "⠹ Writing 47 components, 13 API routes...", delay: 400 },
  { prompt: "", cmd: "⠸ Running 171 tests... all passed ✓", delay: 400 },
  { prompt: "", cmd: "✓ 배포 완료 — 서비스 사용 가능", delay: 600 },
];

function useTypewriter(lines: typeof TERMINAL_LINES) {
  const [displayed, setDisplayed] = useState<{ prompt: string; text: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar === 0) {
      // 새 줄 시작 전 딜레이
      const timer = setTimeout(() => {
        setDisplayed((prev) => [...prev, { prompt: line.prompt, text: "" }]);
        setCurrentChar(1);
      }, line.delay);
      return () => clearTimeout(timer);
    }

    if (currentChar <= line.cmd.length) {
      const speed = line.delay < 100 ? 25 : 8;
      const timer = setTimeout(() => {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = {
            prompt: line.prompt,
            text: line.cmd.slice(0, currentChar),
          };
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    }

    // 줄 완료 → 다음 줄
    const timer = setTimeout(() => {
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }, 200);
    return () => clearTimeout(timer);
  }, [currentLine, currentChar, lines]);

  const isTyping = currentLine < lines.length;

  return { displayed, isTyping };
}

const STATS = [
  { value: "5+", label: "함께 만든 서비스" },
  { value: "171", label: "자동화 테스트" },
  { value: "2주", label: "아이디어에서 런칭까지" },
  { value: "15+", label: "활용 가능한 기술" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const { displayed, isTyping } = useTypewriter(TERMINAL_LINES);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(6,182,212,0.06) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            YOUR IDEA, MY CODE
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
            <span className="text-foreground">상상만 했던 것,</span>
            <br />
            <span className="gradient-text">이제 만들어 볼까요?</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {siteConfig.author.bio}
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          className="mx-auto max-w-2xl mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.5 }}
        >
          <div className="glass-card overflow-hidden !p-0">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[11px] font-mono text-muted-foreground ml-2">
                terminal — claude code
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-4 font-mono text-sm leading-relaxed min-h-[200px]">
              {displayed.map((line, i) => (
                <div key={i} className="flex gap-2">
                  {line.prompt && (
                    <span className="text-cyan shrink-0">{line.prompt} $</span>
                  )}
                  <span
                    className={
                      line.text.startsWith("✓")
                        ? "text-emerald"
                        : line.text.startsWith("⠋") || line.text.startsWith("⠙") || line.text.startsWith("⠹") || line.text.startsWith("⠸")
                          ? "text-muted-foreground"
                          : "text-foreground"
                    }
                  >
                    {line.text}
                  </span>
                </div>
              ))}
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-cyan ml-1 cursor-blink" />
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.7 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold font-mono gradient-text">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan transition-colors"
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
