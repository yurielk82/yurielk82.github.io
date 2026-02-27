"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const LINKS = [
  {
    label: "GitHub",
    href: `https://github.com/${siteConfig.author.github}`,
    icon: Github,
    description: "소스 코드 & 프로젝트",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.author.email}`,
    icon: Mail,
    description: siteConfig.author.email,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <span className="inline-block font-mono text-sm tracking-widest uppercase text-cyan mb-4">
            {"// "}Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            함께 만들어 봅시다
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            AI 기반 풀스택 개발에 관심이 있으시다면 연락주세요.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group glass-card !p-5 flex items-center gap-4 min-w-[240px] text-left"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan to-teal shrink-0">
                <link.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm group-hover:text-cyan transition-colors">
                  {link.label}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {link.description}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
