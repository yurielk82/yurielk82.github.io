/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  hover?: boolean;
}

const COL_SPAN_MAP: Record<number, string> = {
  1: "",
  2: "md:col-span-2",
  3: "lg:col-span-3 md:col-span-2",
  4: "lg:col-span-4 md:col-span-2",
};

const ROW_SPAN_MAP: Record<number, string> = {
  1: "",
  2: "md:row-span-2",
};

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  hover = true,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "liquid-glass p-6 relative overflow-hidden group",
        hover && "transition-all duration-300",
        COL_SPAN_MAP[colSpan],
        ROW_SPAN_MAP[rowSpan],
        className
      )}
    >
      {children}
      {/* 하단 악센트 라인 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-lg/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
