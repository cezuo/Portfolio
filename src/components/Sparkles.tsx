export default function Sparkles() {
  // 8 dots around center
  const points = [
    { x: 0, y: -16 }, { x: 12, y: -12 }, { x: 16, y: 0 }, { x: 12, y: 12 },
    { x: 0, y: 16 },  { x: -12, y: 12 }, { x: -16, y: 0 }, { x: -12, y: -12 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {points.map((p, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400/80 animate-ping"
          style={{
            transform: `translate(${p.x}px, ${p.y}px)`,
            animationDelay: `${i * 40}ms`,
          }}
        />
      ))}
    </div>
  );
}
