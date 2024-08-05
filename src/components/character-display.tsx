"use client";

import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";

import { useCharactersStore } from "@/store/use-characters-store";
import { useSettingsStore } from "@/store/use-settings-store";

const CharacterDisplay = () => {
  const size = useSettingsStore((store) => store.size);
  const characters = useCharactersStore((store) => store.characters);
  const [_, copy] = useCopyToClipboard();

  if (characters.length === 0) {
    characters.push(...Array(size ** 2));
  }

  const handleClick = (character: string | undefined) => {
    if (!character) {
      return;
    }

    copy(character)
      .then(() => {
        toast(`Copied! < ${character} >`);
      })
      .catch((error) => {
        toast.error("Failed to copy!");
      });
  };

  return (
    <div
      className="grid"
      //Tailwind CSS is not recommended using dynamic classes
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {characters.map((character, index) => (
        <CharacterTile
          key={index}
          character={character}
          handleClick={() => handleClick(character)}
        />
      ))}
    </div>
  );
};

export const CharacterTile = ({
  character,
  handleClick,
}: {
  character: string;
  handleClick: () => void;
}) => (
  <div
    className="hover:bg-hoverbg active:bg-activebg m-2 flex h-14 w-14 cursor-pointer items-center justify-center rounded border border-border bg-background text-2xl text-foreground transition-colors hover:border-slate-400"
    onClick={handleClick}
  >
    {character}
  </div>
);

export default CharacterDisplay;
