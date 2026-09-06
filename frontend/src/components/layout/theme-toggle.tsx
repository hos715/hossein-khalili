"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const t = useTranslations("theme");
  // Inline theme script may apply .dark before hydration; read the DOM after mount.
  const isDark = useSyncExternalStore(subscribeTheme, getIsDark, () => false);

  function toggle() {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      /* private browsing */
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="relative"
      aria-label={isDark ? t("light") : t("dark")}
      onClick={toggle}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-none dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-none dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
