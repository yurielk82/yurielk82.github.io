/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { LiquidGlassSVGFilters } from "@/components/shared/LiquidGlassSVGFilters";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen noise-bg">
      <LiquidGlassSVGFilters />
      <AnimatedBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SectionDivider className="mx-auto max-w-6xl" />
        <SolutionsSection />
        <SectionDivider className="mx-auto max-w-6xl" />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
