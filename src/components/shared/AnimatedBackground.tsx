"use client";

import { useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

const NODE_COUNT = 60;
const CONNECTION_DISTANCE = 160;
const MOUSE_RADIUS = 200;

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const reducedMotion = useReducedMotion();

  const initNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }
    nodesRef.current = nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      if (nodesRef.current.length === 0) {
        initNodes(window.innerWidth, window.innerHeight);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    if (reducedMotion) {
      // 정적 렌더링 — 한 번만 그림
      drawFrame(ctx, window.innerWidth, window.innerHeight);
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", handleMouse);
      };
    }

    function drawFrame(c: CanvasRenderingContext2D, w: number, h: number) {
      c.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += node.pulseSpeed;

        // Bounce
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;

        // Mouse repulsion
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Dampen velocity
        node.vx *= 0.999;
        node.vy *= 0.999;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15;
            c.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            c.lineWidth = 0.5;
            c.beginPath();
            c.moveTo(nodes[i].x, nodes[i].y);
            c.lineTo(nodes[j].x, nodes[j].y);
            c.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const r = node.radius * pulse;

        // Glow
        c.beginPath();
        c.arc(node.x, node.y, r + 3, 0, Math.PI * 2);
        c.fillStyle = `rgba(6, 182, 212, ${0.04 * pulse})`;
        c.fill();

        // Core
        c.beginPath();
        c.arc(node.x, node.y, r, 0, Math.PI * 2);
        c.fillStyle = `rgba(6, 182, 212, ${0.4 * pulse})`;
        c.fill();
      }

      // Mouse proximity glow
      if (mouse.x > 0) {
        const gradient = c.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS);
        gradient.addColorStop(0, "rgba(6, 182, 212, 0.04)");
        gradient.addColorStop(1, "transparent");
        c.fillStyle = gradient;
        c.fillRect(0, 0, w, h);
      }
    }

    function animate() {
      if (!ctx) return;
      drawFrame(ctx, window.innerWidth, window.innerHeight);
      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [initNodes, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
