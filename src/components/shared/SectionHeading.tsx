"use client";

import { motion } from "framer-motion";
import { fadeInUp, defaultTransition } from "@/lib/animations";

interface SectionHeadingProps {
  tag: string;
  title: string;
  description?: string;
}

export function SectionHeading({ tag, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      transition={defaultTransition}
    >
      <span className="inline-block font-mono text-sm tracking-widest uppercase text-accent-lg mb-4">
        {tag}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
