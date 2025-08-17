import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGame } from "@/hooks/useGame";

export default function Contact() {
  const { collectCoin } = useGame();

  // prefilled mailto (feel free to edit subject/body)
  const mailto = `mailto:Sebastianwagnac@gmail.com?subject=${encodeURIComponent(
    "Hello from your portfolio"
  )}&body=${encodeURIComponent(
    "Hi Sebastian,\n\nI saw your portfolio and would love to connect about..."
  )}`;

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">Send Message</h2>
        <p className="text-muted-foreground">Ready to start a new quest together?</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="border-2 border-accent bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">📜 Contact Scroll</CardTitle>
            <CardDescription>Choose your preferred method of communication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <Button variant="outline" className="h-16 shake-animation bg-transparent" asChild>
                <a href={mailto} onClick={collectCoin} aria-label="Email Sebastian Wagnac">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📧</div>
                    <div>Email Quest</div>
                  </div>
                </a>
              </Button>

              {/* LinkedIn */}
              <Button variant="outline" className="h-16 shake-animation bg-transparent" asChild>
                <a
                  href="https://www.linkedin.com/in/sebastianwagnac1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={collectCoin}
                  aria-label="Open LinkedIn profile"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">💼</div>
                    <div>LinkedIn Guild</div>
                  </div>
                </a>
              </Button>

              {/* GitHub */}
              <Button variant="outline" className="h-16 shake-animation bg-transparent" asChild>
                <a
                  href="https://github.com/cezuo"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={collectCoin}
                  aria-label="Open GitHub profile"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">🐙</div>
                    <div>GitHub Realm</div>
                  </div>
                </a>
              </Button>

              {/* Twitter / X (no link provided, keeps coin effect) */}
              <Button
                variant="outline"
                className="h-16 shake-animation bg-transparent"
                onClick={collectCoin}
                aria-label="Twitter (coming soon)"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🐦</div>
                  <div>Twitter Tavern</div>
                </div>
              </Button>
            </div>

            <div className="text-center pt-4">
              <Button size="lg" className="glow-animation" asChild>
                <a href={mailto} onClick={collectCoin} aria-label="Start collaboration via email">
                  🚀 Start Collaboration
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
