// src/components/Background.tsx
export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {/* animated / static background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-35"
        style={{
          backgroundImage: "url('/images/UndergroundJungleNewBetter.gif')",
          imageRendering: "pixelated",
        }}
      />
      {/* reduce darkness so sparkles show */}
      <div className="absolute inset-0 bg-black/20" />

      {/* sparkles */}
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className={`sparkle sparkle-anim mix-blend-screen ${i % 5 === 0 ? "sparkle-lg" : ""}`}
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            // random-ish duration & delay via CSS vars
            // (keeps Tailwind purging happy and still customizable)
            ["--dur" as string]: `${1.6 + (i % 6) * 0.25}s`,
            ["--delay" as string]: `${(i % 5) * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}
