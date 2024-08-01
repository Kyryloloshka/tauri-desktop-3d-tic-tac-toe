import React from "react";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";

export function IsPlayWithBot({
  selectedIsPlayWithBot,
  setSelectedIsPlayWithBot,
}: {
  selectedIsPlayWithBot: boolean;
  setSelectedIsPlayWithBot: any;
}) {
  const handlePlayWithBotChange = () => {
    setSelectedIsPlayWithBot((prev: boolean) => !prev);
  };

  return (
    <>
      <Label htmlFor="bot" className="col-span-4">
        Game with Bot
      </Label>
      <Checkbox
        defaultChecked={selectedIsPlayWithBot}
        onCheckedChange={handlePlayWithBotChange}
        className="col-span-1"
        id="bot"
      />
    </>
  );
}
