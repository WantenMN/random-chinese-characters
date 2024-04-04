import { useEffect, useRef } from "react";
import { useWindowSize } from "usehooks-ts";

import { useSettingsStore } from "@/store/use-settings-store";

import { CharacterTile } from "./character-display";

const HandleMaxSize = () => {
  const characterTileRef = useRef<HTMLDivElement>(null);
  const { width = 0, height = 0 } = useWindowSize();
  const size = useSettingsStore((store) => store.size);
  const setMaxSize = useSettingsStore((store) => store.setMaxSize);
  const setSize = useSettingsStore((store) => store.setSize);

  useEffect(() => {
    if (!characterTileRef.current) {
      return;
    }

    const characterTileWidth = characterTileRef.current.clientWidth;

    const newMaxSize =
      Math.floor(Math.min(width, height) / characterTileWidth) - 1;

    if (newMaxSize < 1) {
      return;
    }

    if (newMaxSize < size) {
      setSize(newMaxSize);
    }

    setMaxSize(newMaxSize);
  }, [width, height, setMaxSize, setSize, size]);

  return (
    <div
      ref={characterTileRef}
      className="invisible absolute left-[-99999px] top-[-99999px]"
    >
      <CharacterTile character="" handleClick={() => {}} />
    </div>
  );
};

export default HandleMaxSize;
