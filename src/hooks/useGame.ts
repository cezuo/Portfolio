import { useContext } from "react";
import { GameContext, type GameCtx } from "@/context/game-context";

export function useGame(): GameCtx {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
