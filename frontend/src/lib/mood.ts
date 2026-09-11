export const MOODS = ["professional", "classic", "energy", "fantasy"] as const;

export type Mood = (typeof MOODS)[number];

export const DEFAULT_MOOD: Mood = "fantasy";

export const MOOD_STORAGE_KEY = "mood";

export const THEME_STORAGE_KEY = "theme";

export function isMood(value: string | undefined | null): value is Mood {
  return MOODS.includes(value as Mood);
}

/** Fantasy is a single night scheme — no light/dark toggle. */
export function isFantasyMood(mood: Mood): boolean {
  return mood === "fantasy";
}

/**
 * Force .dark in Fantasy. Elsewhere restore localStorage.theme (default light).
 * Does not write theme storage — Fantasy must not overwrite the user's preference.
 */
export function applyThemeForMood(mood: Mood) {
  if (isFantasyMood(mood)) {
    document.documentElement.classList.add("dark");
    return;
  }
  let theme: string | null = null;
  try {
    theme = localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    /* private browsing */
  }
  document.documentElement.classList.toggle("dark", theme === "dark");
}

/**
 * Inline script — runs before paint to avoid theme/mood flash.
 * First visit defaults to Fantasy, which is night-only, so .dark must apply
 * even when localStorage.theme is missing.
 */
export const THEME_AND_MOOD_INLINE_SCRIPT = `(function(){try{var m=localStorage.getItem('${MOOD_STORAGE_KEY}');var v=['professional','classic','energy','fantasy'];var mood=v.indexOf(m)!==-1?m:'${DEFAULT_MOOD}';document.documentElement.dataset.mood=mood;var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(mood==='fantasy'||t==='dark')document.documentElement.classList.add('dark')}catch(e){document.documentElement.dataset.mood='${DEFAULT_MOOD}';document.documentElement.classList.add('dark')}})();`;
