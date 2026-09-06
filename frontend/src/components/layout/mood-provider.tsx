"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import {
  DEFAULT_MOOD,
  isMood,
  MOOD_STORAGE_KEY,
  type Mood,
} from "@/lib/mood";

const MoodPicker = dynamic(
  () =>
    import("@/components/layout/mood-picker").then((m) => m.MoodPicker),
  { ssr: false },
);

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

function subscribeMood(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-mood"],
  });
  return () => observer.disconnect();
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
  // Blocking script may set html[data-mood] before hydration; DOM is the source of truth.
  const mood = useSyncExternalStore(
    subscribeMood,
    readMoodFromDom,
    () => DEFAULT_MOOD,
  );
  const [pickerOpen, setPickerOpen] = useState(false);

  const setMood = useCallback((next: Mood) => {
    applyMood(next);
    setPickerOpen(false);
  }, []);

  const openPicker = useCallback(() => {
    setPickerOpen(true);
  }, []);

  const dismissPicker = useCallback(() => {
    setPickerOpen(false);
  }, []);

  const value = useMemo(
    () => ({ mood, setMood, openPicker }),
    [mood, setMood, openPicker],
  );

  return (
    <MoodContext.Provider value={value}>
      {children}
      {pickerOpen ? (
        <MoodPicker
          open
          currentMood={mood}
          onSelect={setMood}
          onDismiss={dismissPicker}
        />
      ) : null}
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
