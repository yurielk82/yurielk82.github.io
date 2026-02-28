/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "h-px bg-gradient-to-r from-transparent via-accent-lg/10 to-transparent",
        className
      )}
      aria-hidden="true"
    />
  );
}
