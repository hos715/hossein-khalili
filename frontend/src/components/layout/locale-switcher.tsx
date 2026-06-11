"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("locale");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: Locale) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className={cn("inline-flex items-center gap-1 rounded-md border border-border p-1 text-sm", className)}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded px-2 py-1 transition-colors",
            loc === locale
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
          aria-current={loc === locale ? "true" : undefined}
        >
          {loc === "en" ? t("switchToEn") : t("switchToFa")}
        </button>
      ))}
    </div>
  );
}
