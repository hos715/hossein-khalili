import { Inter } from "next/font/google";

/** English-only: imported from the EN locale layout so Vazirmatn is not preloaded. */
export const localeFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-active",
  weight: ["400", "600"],
});
