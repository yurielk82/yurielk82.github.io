/**
 * Copyright (c) 2026 yurielk82. All rights reserved.
 */
"use client";

import { useEffect, useRef, useState } from "react";
import {
  useSpring,
  useInView,
  useReducedMotion,
  motion,
} from "framer-motion";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

/**
 * "5+", "171", "2주", "15+" 같은 문자열에서
 * 숫자 부분만 카운트업 애니메이션을 적용합니다.
 */
export function CountUp({ value, className, duration = 1.2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  const numericMatch = value.match(/^(\d+)/);
  const numericPart = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? value.slice(numericMatch[1].length) : value;
  const hasNumeric = numericMatch !== null;

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration,
  });

  const [display, setDisplay] = useState(shouldReduceMotion ? numericPart : 0);

  useEffect(() => {
    if (!hasNumeric || shouldReduceMotion) {
      setDisplay(numericPart);
      return;
    }

    if (isInView) {
      spring.set(numericPart);
    }
  }, [isInView, numericPart, spring, hasNumeric, shouldReduceMotion]);

  useEffect(() => {
    if (!hasNumeric || shouldReduceMotion) return;

    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    return unsubscribe;
  }, [spring, hasNumeric, shouldReduceMotion]);

  if (!hasNumeric) {
    return (
      <motion.span ref={ref} className={className}>
        {value}
      </motion.span>
    );
  }

  return (
    <motion.span ref={ref} className={className}>
      {display}
      {suffix}
    </motion.span>
  );
}
