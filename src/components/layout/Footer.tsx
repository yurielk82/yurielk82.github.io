"use client";

import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 text-cyan" />
          <span className="font-mono">
            AI와 함께 만든 사이트 —{" "}
            <a
              href="https://claude.ai/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              Claude Code
            </a>
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} yurielk82
        </p>
      </div>
    </footer>
  );
}
