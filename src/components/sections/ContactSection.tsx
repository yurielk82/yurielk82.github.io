/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowRight, Send, MessageSquare, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const LINKS = [
  {
    label: "GitHub",
    href: `https://github.com/${siteConfig.author.github}`,
    icon: Github,
    description: "지금까지의 작업물 보기",
  },
  {
    label: "이메일",
    href: `mailto:${siteConfig.author.email}`,
    icon: Mail,
    description: siteConfig.author.email,
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    icon: Send,
    title: "아이디어 공유",
    description: "막연해도 괜찮아요. 그 막연함에서 시작하는 게 가장 좋습니다.",
  },
  {
    step: 2,
    icon: MessageSquare,
    title: "30분 무료 상담",
    description: "30분이면 '이거 되겠다'는 감이 옵니다.",
  },
  {
    step: 3,
    icon: FileText,
    title: "제안서 전달",
    description: "놀라는 포인트는 비용이 아니라, 이렇게까지 해주나? 입니다.",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* 프로세스 안내 */}
        <motion.div
          className="mb-16"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <p className="text-center font-mono text-sm tracking-widest uppercase text-accent-lg mb-8">
            PROCESS
          </p>
          <motion.div
            className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto"
            variants={staggerContainer}
          >
            {PROCESS_STEPS.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                transition={defaultTransition}
                className="relative text-center flex flex-col items-center"
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-accent-lg to-secondary-lg mb-4">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 sm:static sm:mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-mono font-bold bg-accent-lg text-white sm:hidden">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-semibold tracking-tight mb-1">
                  <span className="hidden sm:inline text-accent-lg font-mono mr-1">
                    {item.step}.
                  </span>
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA 배너 */}
        <motion.div
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center cta-gradient"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          {/* 도트 패턴 오버레이 */}
          <div className="absolute inset-0 opacity-10 dot-pattern" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
              함께 만들어 볼까요?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
              아직 막연한 아이디어라도 괜찮아요. 커피 한 잔 하듯 편하게 이야기 나눠보아요.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              {LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group inline-flex items-center gap-3 px-8 py-4 liquid-glass-on-color text-white font-medium"
                  variants={fadeInUp}
                  transition={defaultTransition}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
