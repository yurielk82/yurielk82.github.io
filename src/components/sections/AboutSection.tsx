"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Shield } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

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
      "\"이 기술로는 안 돼요\"라는 말, 저에게는 없습니다. 아이디어를 먼저 듣고, 거기에 딱 맞는 기술을 골라 씁니다. 기술이 아이디어를 가두지 않도록.",
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
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="ABOUT"
          title="당신 옆의 빌더"
          description="외주 맡기는 게 아닙니다. 문제를 함께 정의하고, 함께 풀고, 함께 책임집니다. 기획부터 배포까지, 한 사람이 처음부터 끝까지."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {PILLARS.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <GlassCard className="h-full relative overflow-hidden group">
                {/* 번호 */}
                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40">
                  0{i + 1}
                </div>

                {/* 아이콘 */}
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${card.accent} mb-5`}>
                  <card.icon className="h-5 w-5 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* 하단 악센트 라인 */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-lg/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
