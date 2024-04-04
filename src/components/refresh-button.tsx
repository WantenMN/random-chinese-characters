"use client";

import { RefreshCcw } from "lucide-react";
import getRandomCharacters from "random-chinese-characters-generator";
import { useCallback, useEffect, useTransition } from "react";
import { useToggle } from "usehooks-ts";

import { cn, fillArrayWithValues } from "@/lib/utils";
import { useCharactersStore } from "@/store/use-characters-store";
import { useSettingsStore } from "@/store/use-settings-store";

import { Button } from "./ui/button";

const RefreshButton = () => {
  const size = useSettingsStore((store) => store.size);
  const setCharacters = useCharactersStore((store) => store.setCharacters);
  const levelRange = useSettingsStore((store) => store.levelRange);
  const strokeCountRange = useSettingsStore((store) => store.strokeCountRange);
  const [rotate, rotateToggle] = useToggle();
  const [_, startTransition] = useTransition();

  const handleRefresh = useCallback(() => {
    startTransition(() => {
      // rotate icon
      rotateToggle();
    });

    setCharacters(
      fillArrayWithValues(
        size * size,
        getRandomCharacters({
          count: size * size,
          levelRange,
          strokeCountRange,
        })
      )
    );
  }, [size, setCharacters, levelRange, strokeCountRange, rotateToggle]);

  useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  return (
    <Button className="mb-2" onClick={handleRefresh}>
      <RefreshCcw
        className={cn("transition-transform  duration-500", {
          "rotate-[360deg]": rotate,
        })}
      />
    </Button>
  );
};

export default RefreshButton;
