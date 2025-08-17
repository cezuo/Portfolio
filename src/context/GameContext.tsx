import { useState, useCallback, type ReactNode } from "react";
import { GameContext, type GameCtx } from "./game-context";

interface GameProviderProps { children: ReactNode }

export function GameProvider({ children }: GameProviderProps) {
  const [gameState, setGameState] = useState({
    coins: 0,
    level: 1,
    experience: 0,
    showSparkles: false,              // <- track it
  });

  const collectCoin = useCallback(() => {
    // update stats
    setGameState(prev => {
      const coins = prev.coins + 1;
      const experience = prev.experience + 10;
      const level = Math.floor(experience / 100) + 1;
      return { ...prev, coins, level, experience, showSparkles: true };
    });

    // auto-hide sparkles after a moment
    setTimeout(() => {
      setGameState(prev => ({ ...prev, showSparkles: false }));
    }, 800);
  }, []);

  const resetGame = useCallback(() => {
    setGameState({ coins: 0, level: 1, experience: 0, showSparkles: false });
  }, []);

  const value: GameCtx = { ...gameState, collectCoin, resetGame };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
