"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { rubik } from "@/app/layout";
import { appWindow } from "@tauri-apps/api/window";

const DialogQuit = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={(value: boolean) => setOpen(value)}>
      <DialogTrigger draggable="false" asChild>
        <Button className="px-12 text-md pointer-events-auto" variant="neon">
          Quit
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[425px] select-none bg-dark-2 shadow-primary border-primary-500/90 z-[1001]`}
      >
        <DialogTitle className={`${rubik.className} text-center py-4`}>
          <div
            data-glitch={"Are you sure you want to quit?"}
            className="glitch glitch-red max-w-[100vw]  text-center leading-10 whitespace-normal"
          >
            <span className="text-[#d23d3d]">
              Are you sure you want to quit?
            </span>
          </div>
        </DialogTitle>
        <DialogFooter>
          <Button
            onClick={() => appWindow.close()}
            className="whitespace-normal"
            variant="neon"
          >
            Yes
          </Button>
          <Button
            className="whitespace-normal"
            variant="neon"
            onClick={() => setOpen(false)}
          >
            No
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogQuit;
