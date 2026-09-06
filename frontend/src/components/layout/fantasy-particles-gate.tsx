"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { useMood } from "@/components/layout/mood-provider";

/**
 * Loads the canvas dust layer only for fantasy, after the browser is idle
 * (or ~1.5–2s after load). Skips on reduced motion, Save-Data, and low RAM
 * so CSS orbs/sparkles stay the first-paint layer.
 */
export function FantasyParticlesGate() {
  const { mood } = useMood();
  const [Layer, setLayer] = useState<ComponentType | null>(null);
  const requestedRef = useRef(false);

  useEffect(() => {
    if (mood !== "fantasy" || requestedRef.current) return;
    if (shouldSkipRichParticles()) return;

    let cancelled = false;
    const cancelIdle = scheduleWhenIdle(() => {
      void import("@/components/layout/fantasy-particles").then((mod) => {
        if (cancelled) return;
        requestedRef.current = true;
        setLayer(() => mod.FantasyParticles);
      });
    });

    return () => {
      cancelled = true;
      cancelIdle();
    };
  }, [mood]);

  if (mood !== "fantasy" || !Layer) return null;
  return <Layer />;
}

function shouldSkipRichParticles(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  if (nav.connection?.saveData) return true;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) {
    return true;
  }
  return false;
}

function scheduleWhenIdle(callback: () => void, timeoutMs = 2000): () => void {
  let cancelled = false;
  let done = false;

  const run = () => {
    if (cancelled || done) return;
    done = true;
    callback();
  };

  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(run, { timeout: timeoutMs });
    return () => {
      cancelled = true;
      window.cancelIdleCallback(id);
    };
  }

  let timeoutId = 0;
  const onReady = () => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(run, 1600);
  };

  if (document.readyState === "complete") {
    onReady();
  } else {
    window.addEventListener("load", onReady, { once: true });
    timeoutId = window.setTimeout(run, timeoutMs);
  }

  return () => {
    cancelled = true;
    window.removeEventListener("load", onReady);
    window.clearTimeout(timeoutId);
  };
}
