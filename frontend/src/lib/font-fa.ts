import { Vazirmatn } from "next/font/google";

/** Persian-only: imported from the FA locale layout so Inter is not preloaded. */
export const localeFont = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-sans-active",
  weight: ["400", "600"],
  // Shared [locale] layout traces both fonts; skip FA preload so /en does not fetch it.
  preload: false,
});
