"use client";

import { motion } from "framer-motion";
import { MessageSquare, Shield, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const PARADIGM_CARDS = [
  {
    icon: MessageSquare,
    phase: "01",
    title: "말로 시작합니다",
    description:
      "\"이런 게 필요해요\" 한마디면 됩니다. 어떤 화면이 필요하고 데이터는 어떻게 흘러야 하는지, AI와 대화하면서 전체 그림을 그립니다.",
    accent: "from-cyan to-teal",
  },
  {
    icon: Shield,
    phase: "02",
    title: "안 보이는 곳이 진짜입니다",
    description:
      "로그인하면 내 데이터만 보이는지. 동시에 접속해도 버티는지. 기능 하나 추가할 때 다른 게 안 깨지는지. 사용자는 모르지만, 서비스 품질을 결정하는 건 이런 부분입니다.",
    accent: "from-teal to-emerald",
  },
  {
    icon: Rocket,
    phase: "03",
    title: "데모가 아닌 실서비스",
    description:
      "발표용 프로토타입이 아닙니다. 실제 사용자가 매일 접속하고, 데이터가 쌓이고, 이메일이 발송되는 — 진짜 돌아가는 서비스를 만듭니다.",
    accent: "from-emerald to-cyan",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="소개"
          title="겉만 만들지 않습니다"
          description="예쁜 화면 뒤에 탄탄한 구조가 없으면, 서비스는 오래 못 갑니다. 보이지 않는 곳까지 신경 쓰는 게 제가 일하는 방식입니다."
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
                  {card.phase}
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
