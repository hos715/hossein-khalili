"use client";

import { THEME_AND_MOOD_INLINE_SCRIPT } from "@/lib/mood";

/**
 * Blocking theme/mood init for SSR HTML only.
 * On the client, type="application/json" avoids React 19 script-in-component warnings
 * while the server-emitted script has already run before hydration.
 */
export function ThemeMoodScript() {
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : ({ type: "application/json" } as const);

  return (
    <script
      {...scriptProps}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: THEME_AND_MOOD_INLINE_SCRIPT }}
    />
  );
}
