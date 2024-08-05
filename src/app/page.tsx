"use client";

import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";

import CharacterDisplay from "@/components/character-display";
import RefreshButton from "@/components/refresh-button";
import Settings from "@/components/settings";
import { useCharactersStore } from "@/store/use-characters-store";

import useFreshCharacters from "../hook/use-fresh-characters";

export default function Home() {
  const freshCharacters = useFreshCharacters();
  const charactersFirstLoading = useCharactersStore(
    (store) => store.charactersFirstLoading
  );

  useEffect(() => {
    freshCharacters();
  }, [freshCharacters]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {charactersFirstLoading ? (
        <div className="animate-spin">
          <LoaderCircle className="h-10 w-10" />
        </div>
      ) : (
        <div>
          <section className="m-2 flex justify-between gap-4">
            <Settings />
            <RefreshButton />
          </section>
          <section className="flex justify-center">
            <CharacterDisplay />
          </section>
        </div>
      )}
    </main>
  );
}
