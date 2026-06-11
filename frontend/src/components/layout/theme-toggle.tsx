"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

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
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("theme");
  const mounted = useClientMounted();

  // Defer theme-dependent aria-label until after hydration (defaultTheme="light").
  // The inline theme script may apply .dark from localStorage before React hydrates.
  const isDark =
    mounted && (theme === "system" ? resolvedTheme : theme) === "dark";

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
