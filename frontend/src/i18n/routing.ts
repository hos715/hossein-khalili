import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fa"],
  defaultLocale: "en",
  localePrefix: "always",
  // Keep `/` → `/en` even when the browser prefers Persian.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
