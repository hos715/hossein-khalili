"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("theme");
  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="relative"
      aria-label={isDark ? t("light") : t("dark")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-none dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-none dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
