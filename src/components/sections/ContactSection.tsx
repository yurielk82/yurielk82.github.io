"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowRight } from "lucide-react";
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

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* CTA 배너 */}
        <motion.div
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #7c8aff 0%, #a78bfa 50%, #f0abfc 100%)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          {/* 도트 패턴 오버레이 */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

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
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-medium transition-all duration-200 border border-white/20"
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
