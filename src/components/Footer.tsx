export default function Footer() {
  return (
    <footer className="relative z-10 text-center p-8 mt-16">
      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border-2 border-accent">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Sebastian — Crafted with ❤️ in the digital realm
        </p>
      </div>
    </footer>
  );
}
