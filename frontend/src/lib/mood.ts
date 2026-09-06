export const MOODS = ["professional", "classic", "energy", "fantasy"] as const;

export type Mood = (typeof MOODS)[number];

export const DEFAULT_MOOD: Mood = "fantasy";

export const MOOD_STORAGE_KEY = "mood";

export function isMood(value: string | undefined | null): value is Mood {
  return MOODS.includes(value as Mood);
}

/** Inline script — runs before paint to avoid theme/mood flash. */
export const THEME_AND_MOOD_INLINE_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');var m=localStorage.getItem('${MOOD_STORAGE_KEY}');var v=['professional','classic','energy','fantasy'];document.documentElement.dataset.mood=v.indexOf(m)!==-1?m:'${DEFAULT_MOOD}'}catch(e){document.documentElement.dataset.mood='${DEFAULT_MOOD}'}})();`;
