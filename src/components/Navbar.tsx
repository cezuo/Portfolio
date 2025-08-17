import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";   // <-- alias
import { useGame } from "@/hooks/useGame";

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
    <header className="relative z-20 p-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        {/* left logo omitted for brevity */}

        <div className="flex gap-2">
          {items.map(i => (
            <NavLink
              key={i.to}
              to={i.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive
                  ? "bg-primary text-primary-foreground glow-animation"
                  : "bg-secondary text-secondary-foreground"}`
              }
              onClick={collectCoin}
            >
              {/* use Button styling via asChild (applies Button styles to the link) */}
              <Button asChild variant="ghost" className="px-0 py-0 h-auto">
                <span className="inline-flex items-center px-4 py-2">
                  <span className="mr-2">{i.icon}</span>{i.label}
                </span>
              </Button>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-card p-2 rounded border-2 border-accent">
          <span className="text-yellow-400">🪙</span>
          <span className="font-bold text-card-foreground">{coins}</span>
          {showSparkles && <div className="sparkle-animation text-accent">✨</div>}
        </div>
      </nav>
    </header>
  );
}
