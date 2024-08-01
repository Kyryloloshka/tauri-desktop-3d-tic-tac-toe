"use client";
import { useStateSelector } from "@/state";
import { Player } from "@/types";
import React from "react";

const MessageHead = () => {
  const isXNext = useStateSelector((state) => state.game.isXNext);
  const winner = useStateSelector((state) => state.game.winner);

  return (
    <h3 className="no-wrap select-none whitespace-nowrap uppercase text-sm text-light-2">
      {winner == null
        ? `${"Turn"} - ${isXNext ? Player.X : Player.O}`
        : `${"Winner"} - ${winner}`}
    </h3>
  );
};

export default MessageHead;
