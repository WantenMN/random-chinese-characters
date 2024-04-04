import { create } from "zustand";

type CharactersStoreState = {
  characters: string[];
  setCharacters: (c: string[]) => void;
};

export const useCharactersStore = create<CharactersStoreState>((set) => ({
  characters: [],
  setCharacters: (characters: string[]) => set({ characters }),
}));
