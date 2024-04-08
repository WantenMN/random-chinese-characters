import getRandomCharacters from "random-chinese-characters-generator";
import { useCallback } from "react";

import { fillArrayWithValues } from "@/lib/utils";
import { useCharactersStore } from "@/store/use-characters-store";
import { useSettingsStore } from "@/store/use-settings-store";

const useFreshCharacters = () => {
  const size = useSettingsStore((store) => store.size);
  const levelRange = useSettingsStore((store) => store.levelRange);
  const strokeCountRange = useSettingsStore((store) => store.strokeCountRange);
  const setCharacters = useCharactersStore((store) => store.setCharacters);
  const freshCharacters = useCallback(() => {
    setCharacters(
      fillArrayWithValues(
        size ** 2,
        getRandomCharacters({
          count: size ** 2,
          levelRange,
          strokeCountRange,
        })
      )
    );
  }, [setCharacters, size, levelRange, strokeCountRange]);
  return freshCharacters;
};

export default useFreshCharacters;
