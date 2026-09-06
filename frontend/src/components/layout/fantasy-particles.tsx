"use client";

import { useEffect, useRef } from "react";

const TARGET_FPS = 24;
const FRAME_MS = 1000 / TARGET_FPS;
const MAX_PARTICLES = 32;
const MIN_PARTICLES = 18;

type Particle = {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  color: string;
  alpha: number;
  phase: number;
  twinkle: number;
};

const GOLD = "253, 230, 138";
const VIOLET = "196, 181, 253";

/**
 * Optional fantasy dust. Mount only after idle (see FantasyParticlesGate).
 * Caps FPS and uses solid arcs — not per-particle radial gradients.
 */
export function FantasyParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const surface = canvas;
    const context = ctx;

    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frameId = 0;
    let lastDraw = 0;
    let running = false;
    const particles: Particle[] = [];

    function particleCount() {
      return Math.min(
        MAX_PARTICLES,
        Math.max(MIN_PARTICLES, Math.floor(width / 48)),
      );
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      surface.width = Math.max(1, Math.floor(width * dpr));
      surface.height = Math.max(1, Math.floor(height * dpr));
      surface.style.width = `${width}px`;
      surface.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles.length = 0;
      const count = particleCount();
      for (let i = 0; i < count; i++) {
        const gold = i % 2 === 0;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: gold ? Math.random() * 1.6 + 0.7 : Math.random() * 1.2 + 0.5,
          dx: (Math.random() - 0.5) * 0.28,
          dy: (Math.random() - 0.5) * 0.22 - 0.12,
          color: gold ? GOLD : VIOLET,
          alpha: Math.random() * 0.35 + 0.2,
          phase: Math.random() * Math.PI * 2,
          twinkle: 0.0015 + Math.random() * 0.0025,
        });
      }
    }

    function draw(now: number) {
      const dt = lastDraw ? now - lastDraw : FRAME_MS;
      lastDraw = now;
      context.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.dx * (dt / FRAME_MS);
        p.y += p.dy * (dt / FRAME_MS);
        p.phase += p.twinkle * dt;
        if (p.y < -4) p.y = height + 4;
        else if (p.y > height + 4) p.y = -4;
        if (p.x < -4) p.x = width + 4;
        else if (p.x > width + 4) p.x = -4;

        const a = p.alpha * (0.5 + 0.5 * Math.abs(Math.sin(p.phase)));
        context.beginPath();
        context.fillStyle = `rgba(${p.color}, ${a})`;
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fill();
      }
    }

    function loop(now: number) {
      frameId = requestAnimationFrame(loop);
      if (lastDraw !== 0 && now - lastDraw < FRAME_MS) return;
      draw(now);
    }

    function stop() {
      running = false;
      lastDraw = 0;
      cancelAnimationFrame(frameId);
      frameId = 0;
      context.clearRect(0, 0, width, height);
    }

    function start() {
      if (running || reducedMq.matches || document.hidden) return;
      running = true;
      lastDraw = 0;
      frameId = requestAnimationFrame(loop);
    }

    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    function onMotionChange() {
      if (reducedMq.matches) stop();
      else start();
    }

    let resizeRaf = 0;
    function onResize() {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        resize();
      });
    }

    resize();
    seed();
    start();

    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reducedMq.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMq.removeEventListener("change", onMotionChange);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden
    />
  );
}
