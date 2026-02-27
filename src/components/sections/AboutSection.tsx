"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Shield } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const PILLARS = [
  {
    icon: Layers,
    title: "처음부터 끝까지 혼자",
    description:
      "기획, 디자인, 개발, 테스트, 배포. 각각 다른 사람에게 맡길 필요 없이 한 사람이 전부 해냅니다. AI가 팀원이 되어주기 때문에 가능합니다.",
    accent: "from-cyan to-teal",
  },
  {
    icon: Cpu,
    title: "기술에 갇히지 않습니다",
    description:
      "보통 개발자는 자기가 아는 기술로만 만듭니다. 풀스택 빌더는 아이디어를 먼저 듣고, 거기에 맞는 최적의 기술을 선택합니다. React든 Python이든 Electron이든.",
    accent: "from-teal to-emerald",
  },
  {
    icon: Shield,
    title: "보이지 않는 곳까지 제대로",
    description:
      "화면은 당연히 깔끔하게. 하지만 데이터 구조, 보안, 테스트, 확장성 — 눈에 안 보이는 이 부분까지 제대로 만드는 게 서비스의 수명을 결정합니다.",
    accent: "from-emerald to-cyan",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="소개"
          title="AI 풀스택 빌더란?"
          description="화면, 서버, 데이터베이스, 배포까지 — AI와 함께 처음부터 끝까지 혼자 만드는 새로운 방식의 개발자입니다."
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
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
