import { create } from "zustand";
import { persist } from "zustand/middleware";

type SettingsStoreState = {
  size: number;
  maxSize: number;
  levelRange: [number, number];
  strokeCountRange: [number, number];
  setSize: (n: number) => void;
  setMaxSize: (n: number) => void;
  setLevelRange: (r: [number, number]) => void;
  setStrokeCountRange: (r: [number, number]) => void;
};

export const useSettingsStore = create<SettingsStoreState>()(
  persist(
    (set) => ({
      size: 6,
      maxSize: 8,
      levelRange: [1, 2],
      strokeCountRange: [1, 36],
      setSize: (size) => set({ size }),
      setMaxSize: (maxSize) => set({ maxSize }),
      setLevelRange: (levelRange) => set({ levelRange }),
      setStrokeCountRange: (strokeCountRange) => set({ strokeCountRange }),
    }),
    {
      name: "settings",
    }
  )
);
