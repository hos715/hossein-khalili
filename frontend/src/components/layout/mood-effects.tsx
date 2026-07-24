"use client";

import { useEffect, useRef } from "react";
import type { Mood } from "@/lib/mood";

type MoodEffectsProps = {
  mood: Mood;
};

/**
 * Decorative layers for mood-specific visuals. Loaded only on the client;
 * fantasy particles are skipped when prefers-reduced-motion is set.
 */
export function MoodEffects({ mood }: MoodEffectsProps) {
  if (mood === "fantasy") {
    return <FantasyEffects />;
  }
  if (mood === "energy") {
    return <EnergyGrid />;
  }
  return null;
}

function EnergyGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 mood-energy-grid"
      aria-hidden
    />
  );
}

function FantasyEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    const particles: Array<{
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      hue: number;
      alpha: number;
    }> = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function seed() {
      particles.length = 0;
      const count = Math.min(60, Math.floor(window.innerWidth / 20));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          r: Math.random() * 2 + 0.5,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4 - 0.2,
          hue: Math.random() > 0.5 ? 45 : 270,
          alpha: Math.random() * 0.5 + 0.15,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;

        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${p.alpha})`);
        grad.addColorStop(1, `hsla(${p.hue}, 80%, 50%, 0)`);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }
      frameId = requestAnimationFrame(draw);
    }

    resize();
    seed();
    draw();

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="mood-fantasy-orb mood-fantasy-orb-1" />
        <div className="mood-fantasy-orb mood-fantasy-orb-2" />
        <div className="mood-fantasy-orb mood-fantasy-orb-3" />
      </div>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
      />
    </>
  );
}
