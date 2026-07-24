"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_MOOD,
  isMood,
  MOOD_PROMPT_SEEN_KEY,
  MOOD_STORAGE_KEY,
  type Mood,
} from "@/lib/mood";
import { MoodPicker } from "@/components/layout/mood-picker";
import { MoodEffects } from "@/components/layout/mood-effects";

type MoodContextValue = {
  mood: Mood;
  setMood: (mood: Mood) => void;
  openPicker: () => void;
};

const MoodContext = createContext<MoodContextValue | null>(null);

function readMoodFromDom(): Mood {
  const value = document.documentElement.dataset.mood;
  return isMood(value) ? value : DEFAULT_MOOD;
}

function applyMood(mood: Mood) {
  document.documentElement.dataset.mood = mood;
  try {
    localStorage.setItem(MOOD_STORAGE_KEY, mood);
  } catch {
    /* private browsing */
  }
}

export function MoodProvider({ children }: { children: ReactNode }) {
  const [mood, setMoodState] = useState<Mood>(() =>
    typeof document !== "undefined" ? readMoodFromDom() : DEFAULT_MOOD,
  );
  const [pickerOpen, setPickerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const initial = readMoodFromDom();
    setMoodState(initial);
    setHydrated(true);

    try {
      if (!localStorage.getItem(MOOD_PROMPT_SEEN_KEY)) {
        setPickerOpen(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setMood = useCallback((next: Mood) => {
    applyMood(next);
    setMoodState(next);
    try {
      localStorage.setItem(MOOD_PROMPT_SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
    setPickerOpen(false);
  }, []);

  const openPicker = useCallback(() => {
    setPickerOpen(true);
  }, []);

  const dismissPicker = useCallback(() => {
    try {
      localStorage.setItem(MOOD_PROMPT_SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
    setPickerOpen(false);
  }, []);

  const value = useMemo(
    () => ({ mood, setMood, openPicker }),
    [mood, setMood, openPicker],
  );

  return (
    <MoodContext.Provider value={value}>
      {children}
      {hydrated && <MoodEffects mood={mood} />}
      {hydrated && (
        <MoodPicker
          open={pickerOpen}
          currentMood={mood}
          onSelect={setMood}
          onDismiss={dismissPicker}
        />
      )}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const ctx = useContext(MoodContext);
  if (!ctx) {
    throw new Error("useMood must be used within MoodProvider");
  }
  return ctx;
}
