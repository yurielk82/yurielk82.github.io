/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between rounded-b-2xl liquid-glass px-4 sm:px-6 !border-t-0 !rounded-t-none">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono text-sm tracking-tight hover:text-accent-lg transition-colors"
          >
            <Sparkles className="h-4 w-4 text-accent-lg" />
            <span className="font-semibold">yurielk82</span>
            <span className="text-muted-foreground hidden sm:inline">.dev</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = active === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive ? "text-accent-lg" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-accent-lg-subtle border border-accent-lg/15"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* CTA 버튼 — 데스크탑 */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-medium bg-gradient-to-r from-accent-lg to-secondary-lg text-white hover:opacity-90 transition-opacity"
            >
              <Mail className="h-3 w-3" />
              프로젝트 문의
            </a>
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors md:hidden"
              aria-label="메뉴 토글"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-1 rounded-2xl liquid-glass p-4"
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  active === item.href.replace("#", "")
                    ? "text-accent-lg bg-accent-lg-subtle"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </a>
            ))}
            {/* 모바일 CTA */}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-accent-lg to-secondary-lg text-white"
            >
              <Mail className="h-4 w-4" />
              프로젝트 문의
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
