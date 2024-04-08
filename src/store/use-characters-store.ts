import { create } from "zustand";

type CharactersStoreState = {
  characters: string[];
  charactersFirstLoading: boolean;
  setCharacters: (c: string[]) => void;
};

export const useCharactersStore = create<CharactersStoreState>((set) => ({
  characters: [],
  charactersFirstLoading: true,
  setCharacters: (characters: string[]) =>
    set({ characters, charactersFirstLoading: false }),
}));
