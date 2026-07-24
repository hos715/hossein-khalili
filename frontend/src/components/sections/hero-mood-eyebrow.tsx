"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { useMood } from "@/components/layout/mood-provider";

let clientMounted = false;

function subscribeToClientMounted(onStoreChange: () => void) {
  queueMicrotask(() => {
    clientMounted = true;
    onStoreChange();
  });
  return () => {};
}

function useClientMounted() {
  return useSyncExternalStore(
    subscribeToClientMounted,
    () => clientMounted,
    () => false,
  );
}

export function HeroMoodEyebrow() {
  const mounted = useClientMounted();
  const { mood } = useMood();
  const t = useTranslations("mood.hero");
  const activeMood = mounted ? mood : "professional";

  return (
    <p className="hero-eyebrow mb-3 text-sm font-medium text-accent">
      {t(`${activeMood}.eyebrow`)}
    </p>
  );
}
