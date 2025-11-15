"use client";

import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGame } from "@/hooks/useGame";
import { motion } from "framer-motion";

const linkBase = "px-4 py-2 font-bold rounded-md shake-animation";

export default function Navbar() {
  const { coins, showSparkles, collectCoin } = useGame();

  const items = [
    { to: "/",        label: "Home",    icon: "🏠" },
    { to: "/projects",label: "Projects",icon: "⚔️" },
    { to: "/about",   label: "About",   icon: "🧙‍♂️" },
    { to: "/contact", label: "Contact", icon: "📜" },
  ];

  return (
    <motion.header 
      className="relative z-20 p-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        {/* left logo omitted for brevity */}

        <div className="flex gap-2">
          {items.map((i, index) => (
            <motion.div
              key={i.to}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={i.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive
                    ? "bg-primary text-primary-foreground glow-animation"
                    : "bg-secondary text-secondary-foreground"}`
                }
                onClick={collectCoin}
              >
                <Button asChild variant="ghost" className="px-0 py-0 h-auto">
                  <span className="inline-flex items-center px-4 py-2">
                    <span className="mr-2">{i.icon}</span>{i.label}
                  </span>
                </Button>
              </NavLink>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex items-center gap-2 bg-card p-2 rounded border-2 border-accent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <span className="text-yellow-400">🪙</span>
          <span className="font-bold text-card-foreground">{coins}</span>
          {showSparkles && <div className="sparkle-animation text-accent">✨</div>}
        </motion.div>
      </nav>
    </motion.header>
  );
}
