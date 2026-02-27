"use client";

import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "amber";
  className?: string;
}

export function TechBadge({ children, variant = "default", className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono tracking-wide border transition-colors",
        variant === "default" &&
          "bg-secondary/50 text-muted-foreground border-border hover:border-cyan/30 hover:text-foreground",
        variant === "cyan" &&
          "bg-cyan/10 text-cyan border-cyan/20 hover:bg-cyan/20",
        variant === "amber" &&
          "bg-amber/10 text-amber border-amber/20 hover:bg-amber/20",
        className
      )}
    >
      {children}
    </span>
  );
}
