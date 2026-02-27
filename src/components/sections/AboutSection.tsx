"use client";

import { motion } from "framer-motion";
import { MessageSquare, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const PARADIGM_CARDS = [
  {
    icon: MessageSquare,
    phase: "01",
    title: "AI와 대화로 설계",
    description:
      "요구사항을 자연어로 전달하면, AI가 아키텍처를 제안하고 도메인 모델을 함께 설계합니다. DDD 레이어, 테이블 스키마, API 엔드포인트까지.",
    accent: "from-cyan to-teal",
  },
  {
    icon: Code2,
    phase: "02",
    title: "코드 = 엔지니어링",
    description:
      "AI가 생성한 코드를 복사-붙여넣기하지 않습니다. Repository 패턴, 의존성 역전, 테스트 가능한 구조 — 운영 환경 수준의 코드를 AI와 함께 엔지니어링합니다.",
    accent: "from-teal to-emerald",
  },
  {
    icon: Rocket,
    phase: "03",
    title: "배포까지 완결",
    description:
      "171개 테스트, CI/CD 파이프라인, 듀얼 이메일 프로바이더, SSE 실시간 처리 — '작동하는 데모'가 아닌, 프로덕션에 투입 가능한 완제품을 만듭니다.",
    accent: "from-emerald to-cyan",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="About"
          title="AI 개발의 새로운 패러다임"
          description="AI는 도구가 아닌 팀원입니다. 설계부터 배포까지 모든 과정에서 AI와 협업하여 엔지니어링 품질을 유지하면서 개발 속도를 극대화합니다."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {PARADIGM_CARDS.map((card) => (
            <motion.div
              key={card.phase}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <GlassCard className="h-full relative overflow-hidden group">
                {/* Phase number */}
                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40">
                  PHASE {card.phase}
                </div>

                {/* Icon */}
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${card.accent} mb-5`}>
                  <card.icon className="h-5 w-5 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
