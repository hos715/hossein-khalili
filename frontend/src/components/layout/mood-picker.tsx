"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { MOODS, type Mood } from "@/lib/mood";
import { Button } from "@/components/ui/button";

type MoodPickerProps = {
  open: boolean;
  currentMood: Mood;
  onSelect: (mood: Mood) => void;
  onDismiss: () => void;
};

const moodPreviewClass: Record<Mood, string> = {
  professional: "bg-[#2563eb]",
  classic: "bg-[#8b4513]",
  energy: "bg-[#ff3366]",
  fantasy: "bg-gradient-to-br from-[#fbbf24] to-[#a855f7]",
};

export function MoodPicker({
  open,
  currentMood,
  onSelect,
  onDismiss,
}: MoodPickerProps) {
  const t = useTranslations("mood");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onDismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-pointer bg-background/80 backdrop-blur-sm"
        aria-label={t("close")}
        onClick={onDismiss}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mood-picker-title"
        aria-describedby="mood-picker-desc"
        className="relative z-10 w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-lg"
      >
        <h2 id="mood-picker-title" className="text-lg font-semibold">
          {t("title")}
        </h2>
        <p id="mood-picker-desc" className="mt-1 text-sm text-muted-foreground">
          {t("subtitle")}
        </p>

        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {MOODS.map((mood) => (
            <button
              key={mood}
              type="button"
              onClick={() => onSelect(mood)}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 text-start transition-colors hover:bg-foreground/5",
                currentMood === mood && "ring-2 ring-accent",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 h-8 w-8 shrink-0 rounded-md",
                  moodPreviewClass[mood],
                )}
                aria-hidden
              />
              <span>
                <span className="block text-sm font-medium">
                  {t(`options.${mood}.label`)}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {t(`options.${mood}.description`)}
                </span>
              </span>
            </button>
          ))}
        </div>

        <Button
          type="button"
          variant="ghost"
          className="mt-4 w-full"
          onClick={() => onSelect("professional")}
        >
          {t("skip")}
        </Button>
      </div>
    </div>
  );
}
