"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Blob 1 — Indigo */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(124,138,255,0.4) 0%, transparent 70%)",
          animation: reducedMotion ? "none" : "blob-drift-1 20s ease-in-out infinite",
        }}
      />

      {/* Blob 2 — Fuchsia */}
      <div
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(240,171,252,0.4) 0%, transparent 70%)",
          animation: reducedMotion ? "none" : "blob-drift-2 30s ease-in-out infinite",
        }}
      />

      {/* Blob 3 — Violet */}
      <div
        className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)",
          animation: reducedMotion ? "none" : "blob-drift-3 25s ease-in-out infinite",
        }}
      />
    </div>
  );
}
