"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { DifficultyEnum, Player } from "@/types";
import { Separator } from "../ui/separator";
import { useActionCreators, useStateSelector } from "@/state/hooks";
import { gameActions } from "@/state/slices/game";
import {
  BotPlaysAs,
  Difficulty,
  FirstMoveFor,
  IsPlayWithBot,
  DisplayGame,
  IsCenterAvailable,
} from "./_components";
import { rubik } from "@/app/layout";

const DialogSettings = () => {
  const firstPlayer = useStateSelector((state) => state.game.firstPlayer);
  const isCenterAvailable = useStateSelector(
    (state) => state.game.isCenterAvailable
  );
  const isPlayWithBot = useStateSelector((state) => state.game.isPlayWithBot);
  const botPlayer = useStateSelector((state) => state.game.botPlayer);
  const botDifficulty = useStateSelector((state) => state.game.botDifficulty);
  const displayGameAs = useStateSelector((state) => state.game.displayGameAs);

  const [open, setOpen] = useState(false);
  const [selectedFirstPlayer, setSelectedFirstPlayer] =
    useState<Player>(firstPlayer);
  const [selectedIsCenterAvailable, setSelectedIsCenterAvailable] =
    useState(isCenterAvailable);
  const [selectedIsPlayWithBot, setSelectedIsPlayWithBot] =
    useState(isPlayWithBot);
  const [selectedBotPlayer, setSelectedBotPlayer] = useState(botPlayer);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyEnum>(botDifficulty);
  const [selectedDisplayGameAs, setSelectedDisplayGameAs] =
    useState(displayGameAs);

  const actions = useActionCreators(gameActions);

  const submitSettings = (e: any) => {
    e.preventDefault();
    actions.restartGame(selectedFirstPlayer);
    actions.setFirstPlayer(selectedFirstPlayer);
    actions.setIsXNext(selectedFirstPlayer === Player.X);
    actions.setIsCenterAvailable(selectedIsCenterAvailable);
    actions.setIsPlayWithBot(selectedIsPlayWithBot);
    actions.setBotPlayer(selectedBotPlayer);
    actions.setBotDifficulty(selectedDifficulty);
    actions.setDisplayGameAs(selectedDisplayGameAs);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger draggable="false" asChild>
        <button type="button">
          <img
            src="/assets/icons/settings.svg"
            alt="setting"
            className="h-6 cursor-pointer select-none"
          />
        </button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[425px] select-none bg-dark-2 shadow-primary border-primary-500/90`}
      >
        <form onSubmit={submitSettings}>
          <DialogHeader>
            <DialogTitle className="font-light text-sm md:text-md tracking-wider pr-3">
              Settings of game
            </DialogTitle>
          </DialogHeader>
          <div className={`${rubik.className} grid gap-4 py-4`}>
            <div className="grid grid-cols-5 items-center gap-2">
              <FirstMoveFor
                selectedFirstPlayer={selectedFirstPlayer}
                setSelectedFirstPlayer={setSelectedFirstPlayer}
              />
              <Separator className="col-span-5 w-full bg-dark-5" />
              <IsCenterAvailable
                selectedIsCenterAvailable={selectedIsCenterAvailable}
                setSelectedIsCenterAvailable={setSelectedIsCenterAvailable}
              />
              <Separator className="col-span-5 w-full bg-dark-5" />
              <DisplayGame
                displayGameAs={selectedDisplayGameAs}
                setDisplayGameAs={setSelectedDisplayGameAs}
              />
              {/* <Separator className="col-span-5 w-full bg-dark-5" />
              <IsPlayWithBot
                selectedIsPlayWithBot={selectedIsPlayWithBot}
                setSelectedIsPlayWithBot={setSelectedIsPlayWithBot}
              />
              <Separator className="col-span-5 w-full bg-dark-5" />
              <BotPlaysAs
                setSelectedBotPlayer={setSelectedBotPlayer}
                selectedIsPlayWithBot={selectedIsPlayWithBot}
                selectedBotPlayer={selectedBotPlayer}
              />
              <Separator className="col-span-5 w-full bg-dark-5" />
              <Difficulty
                setSelectedDifficulty={setSelectedDifficulty}
                selectedIsPlayWithBot={selectedIsPlayWithBot}
                selectedDifficulty={selectedDifficulty}
              /> */}
            </div>
          </div>
          <DialogFooter>
            <Button className="whitespace-normal" variant="neon" type="submit">
              Save and restart
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSettings;
