"use client";

import { RefreshCcw } from "lucide-react";
import { useCallback, useEffect, useTransition } from "react";
import { useToggle } from "usehooks-ts";

import { cn } from "@/lib/utils";

import useFreshCharacters from "../hook/use-fresh-characters";
import { Button } from "./ui/button";

const RefreshButton = () => {
  const [rotate, rotateToggle] = useToggle();
  const [_, startTransition] = useTransition();
  const freshCharacters = useFreshCharacters();

  const handleRefresh = useCallback(() => {
    startTransition(() => {
      // rotate icon
      rotateToggle();
    });

    freshCharacters();
  }, [freshCharacters, rotateToggle]);

  useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  return (
    <Button
      className="hover:bg-hoverbg active:bg-activebg border bg-background text-foreground"
      onClick={handleRefresh}
    >
      <RefreshCcw
        className={cn("transition-transform  duration-500", {
          "rotate-[360deg]": rotate,
        })}
      />
    </Button>
  );
};

export default RefreshButton;
