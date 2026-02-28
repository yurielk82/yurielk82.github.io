"use client";

import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "warning";
  className?: string;
}

export function TechBadge({ children, variant = "default", className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono tracking-wide border transition-colors",
        variant === "default" &&
          "bg-secondary/50 text-muted-foreground border-border hover:border-accent-lg/30 hover:text-foreground",
        variant === "accent" &&
          "bg-accent-lg-subtle text-accent-lg border-accent-lg/20 hover:bg-accent-lg/20",
        variant === "warning" &&
          "bg-warning-lg/10 text-warning-lg border-warning-lg/20 hover:bg-warning-lg/20",
        className
      )}
    >
      {children}
    </span>
  );
}
