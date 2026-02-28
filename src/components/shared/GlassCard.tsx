"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "liquid-glass p-6",
        hover && "transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
