"use client";
import { Button } from "@/components/ui/button";
import { gameActions, useActionCreators } from "@/state";
import React from "react";

const RestartButton = () => {
  const actions = useActionCreators(gameActions);
  return (
    <Button
      onClick={() => {
        actions.restartGame();
      }}
      variant="neon"
      className={`flex-grow-0 md:flex-grow-1`}
    >
      Restart
    </Button>
  );
};

export default RestartButton;
