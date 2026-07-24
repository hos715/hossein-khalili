"use client";

import { Palette } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useMood } from "@/components/layout/mood-provider";

export function MoodSwitcher() {
  const t = useTranslations("mood");
  const { openPicker } = useMood();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={t("changeMood")}
      onClick={openPicker}
    >
      <Palette className="h-4 w-4" />
    </Button>
  );
}
