import { THEME_AND_MOOD_INLINE_SCRIPT } from "@/lib/mood";

/**
 * Server-rendered blocking script so theme and mood apply before first paint.
 * Must stay a Server Component — a client wrapper would re-execute or no-op the script.
 */
export function ThemeMoodScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: THEME_AND_MOOD_INLINE_SCRIPT }}
    />
  );
}
