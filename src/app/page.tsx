"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { LiquidGlassSVGFilters } from "@/components/shared/LiquidGlassSVGFilters";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen noise-bg">
      <LiquidGlassSVGFilters />
      <AnimatedBackground />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProjectsSection />
        <SolutionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
