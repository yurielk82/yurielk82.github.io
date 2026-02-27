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
    title: "대화로 설계합니다",
    description:
      "필요한 서비스를 말하면, AI가 아키텍처를 제안하고 도메인 모델을 함께 설계합니다. 화면 구성, 데이터 구조, API 설계까지 — 대화만으로 큰 그림을 완성합니다.",
    accent: "from-cyan to-teal",
  },
  {
    icon: Code2,
    phase: "02",
    title: "빠르게, 그리고 제대로",
    description:
      "AI가 생성한 코드를 그대로 쓰지 않습니다. Repository 패턴, 테스트 자동화, 확장 가능한 구조 — 나중에 기능을 추가하거나 수정하기 쉬운 코드를 엔지니어링합니다.",
    accent: "from-teal to-emerald",
  },
  {
    icon: Rocket,
    phase: "03",
    title: "바로 쓸 수 있는 완성품",
    description:
      "시연용 데모가 아닙니다. 이메일 자동 발송, 사업자 인증, 실시간 진행률 표시, CI/CD 파이프라인까지 — 운영 환경에 바로 투입 가능한 서비스를 만듭니다.",
    accent: "from-emerald to-cyan",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="소개"
          title="이런 방식으로 만듭니다"
          description="AI는 단순한 코드 생성기가 아닙니다. 기획부터 완성까지 모든 과정에서 AI와 대화하며 서비스를 만듭니다."
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
                  STEP {card.phase}
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
