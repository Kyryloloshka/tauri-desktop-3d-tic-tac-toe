"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const BgProvider = dynamic(() => import("@/components/BgProvider"), {
  ssr: false,
});

const DialogQuit = dynamic(() => import("@/components/DialogQuit"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-[100%] flex-auto gap-10 p-5 overflow-x-hidden">
      <BgProvider />
      {/* <div className="absolute pointer-events-none top-1/2 left-1/2 text-[7vw] whitespace-nowrap -z-10 opacity-5 -translate-y-[50%] font-semibold -translate-x-[50%]">3D Tic Tac Toe</div> */}
      <div className="flex z-20 pointer-events-none flex-col gap-5 justify-center items-center flex-auto">
        <h1 className="text-[calc(4vw+20px)] font-semibold text-primary-500 text-shadow-neon text-center">
          3D Tic Tac Toe
        </h1>
        <p className="text-sm pointer-events-auto tracking-wider text-center max-w-[550px] pb-3">
          Welcome to the exciting world of 3D Tic Tac Toe! Immerse yourself in a
          unique 3D experience where you will have the opportunity to deploy
          your strategy in 3D space and test your mental acuity in a new
          dimension of this classic game.
        </p>
        <Link href={"/play-game"}>
          <Button className="px-12 text-md pointer-events-auto" variant="neon">
            Play
          </Button>
        </Link>
        <DialogQuit />
      </div>
      <p className="absolute z-20 left-3 bottom-2 text-primary-500 text-shadow-neon">
        Desktop 0.0.1
      </p>
    </div>
  );
};
export default Home;
