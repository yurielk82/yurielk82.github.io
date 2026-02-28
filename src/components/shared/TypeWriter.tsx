/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypeWriter({
  text,
  className,
  speed = 80,
  delay = 600,
}: TypeWriterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(text);
  const [isTyping, setIsTyping] = useState(false);

  const startTyping = useCallback(() => {
    if (shouldReduceMotion) return;

    setDisplayText("");
    setIsTyping(true);

    let currentIndex = 0;
    const timer = setInterval(() => {
      currentIndex++;
      setDisplayText(text.slice(0, currentIndex));
      if (currentIndex >= text.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(text);
      return;
    }

    setDisplayText("");
    const delayTimer = setTimeout(() => {
      startTyping();
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [text, delay, shouldReduceMotion, startTyping]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
      {(isTyping || displayText.length < text.length) && !shouldReduceMotion && (
        <span className="typing-cursor inline-block w-0.5 h-[1em] bg-current align-middle ml-0.5" />
      )}
    </motion.span>
  );
}
