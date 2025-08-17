import { createContext } from "react";

export type GameCtx = {
  coins: number;
  showSparkles: boolean;
  collectCoin: () => void;
  level: number;
  experience: number;
  resetGame: () => void;
};

export const GameContext = createContext<GameCtx | null>(null);
