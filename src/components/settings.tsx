"use client";

import { CircleHelp, SettingsIcon } from "lucide-react";
import { useDebounceCallback } from "usehooks-ts";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useSettingsStore } from "@/store/use-settings-store";

import HandleMaxSize from "./handle-max-size";
import { Button } from "./ui/button";

const Settings = () => {
  const size = useSettingsStore((store) => store.size);
  const setSize = useSettingsStore((store) => store.setSize);
  const maxSize = useSettingsStore((store) => store.maxSize);
  const levelRange = useSettingsStore((store) => store.levelRange);
  const setLevelRange = useSettingsStore((store) => store.setLevelRange);
  const strokeCountRange = useSettingsStore((store) => store.strokeCountRange);
  const setStrokeCountRange = useSettingsStore(
    (store) => store.setStrokeCountRange
  );
  const debounceDelay = 200;

  const handleSizeChange = useDebounceCallback((value: [number]) => {
    setSize(value[0]);
  }, debounceDelay);

  const handleLevelRangeChange = useDebounceCallback(
    (value: [number, number]) => {
      setLevelRange(value);
    },
    debounceDelay
  );

  const handleStrokeCountRangeChange = useDebounceCallback(
    (value: [number, number]) => {
      setStrokeCountRange(value);
    },
    debounceDelay
  );

  return (
    <div>
      <HandleMaxSize />
      <Popover>
        <PopoverTrigger>
          <Button asChild>
            <div>
              <SettingsIcon />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="select-none border-none bg-transparent p-0 shadow-none">
          <Card className="m-0">
            <CardContent className="p-4">
              {/* Size */}
              <section className="mb-2">
                <h2 className="mb-2 block font-bold">Size</h2>
                <Label className="mb-2 block text-center">
                  {size} x {size}
                </Label>
                <Slider
                  defaultValue={[size]}
                  min={1}
                  max={maxSize}
                  step={1}
                  onValueChange={handleSizeChange}
                />
              </section>
              <Separator className="my-4" />

              {/* Level range */}
              <section className="mb-2">
                <h2 className="mb-2 flex items-center gap-[6px] font-bold">
                  Level range
                  <a
                    href="https://github.com/WantenMN/random-chinese-characters-generator#level-descriptions"
                    target="_blank"
                    title="Level description"
                  >
                    <CircleHelp className="w-4 translate-y-[1px]" />
                  </a>
                </h2>
                <div className="mb-2 flex justify-between px-1">
                  <Label className="block">1</Label>
                  <Label className="block">
                    [ {levelRange[0]} ~ {levelRange[1]} ]
                  </Label>
                  <Label className="block">3</Label>
                </div>
                <Slider
                  className="mb-4"
                  defaultValue={[levelRange[0], levelRange[1]]}
                  min={1}
                  max={3}
                  step={1}
                  minStepsBetweenThumbs={0}
                  onValueChange={handleLevelRangeChange}
                />
              </section>
              <Separator className="my-4" />

              {/* Stroke count range */}
              <section>
                <h2 className="mb-2 block font-bold">Stroke count range</h2>
                <div className="mb-2 flex justify-between px-1">
                  <Label className="block">1</Label>
                  <Label className="block">
                    [ {strokeCountRange[0]} ~ {strokeCountRange[1]} ]
                  </Label>
                  <Label className="block">36</Label>
                </div>
                <Slider
                  defaultValue={[strokeCountRange[0], strokeCountRange[1]]}
                  min={1}
                  max={36}
                  step={1}
                  minStepsBetweenThumbs={0}
                  onValueChange={handleStrokeCountRangeChange}
                />
              </section>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Settings;
