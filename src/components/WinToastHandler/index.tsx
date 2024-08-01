"use client";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";
import { gameActions, useActionCreators, useStateSelector } from "@/state";
import { ToastAction } from "@radix-ui/react-toast";

const WinToastHandler = () => {
  const { toast } = useToast();
  const isXNext = useStateSelector((state) => state.game.isXNext);
  const winner = useStateSelector((state) => state.game.winner);
  const actions = useActionCreators(gameActions);
  const status = winner
    ? `${"Winner"}: ${winner}`
    : `${"Next Player"}: ${isXNext ? "X" : "O"}`;
  useEffect(() => {
    if (winner) {
      toast({
        title: "Game Over!",
        description: `${status}`,
        action: (
          <ToastAction
            className="px-3 py-1 rounded-md border border-input shadow-sm hover:shadow-[0px_0px_20px_0px_var(--shadow-primary-neon)] transition hover:border-[#AFFFDF] hover:text-[#75ebbc]"
            onClick={actions.restartGame}
            altText="Restart game"
          >
            Restart
          </ToastAction>
        ),
      });
    }
  }, [winner]);
  return null;
};

export default WinToastHandler;
