import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGame } from "@/hooks/useGame";

const projects = [
  
  {
    title: "Line Following Robot",
    description: "IR-guided robot that tracks a line path with calibrated sensor thresholds",
    tech: ["Arduino", "IR-sensors", "Electronics", "Programming"],
    rarity: "Epic",
    icon: "⚡",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project2.jpg-5AlyLN6VNLAYVVCFPPoDq5ROUTM9mn.jpeg",
  },
 
  
  {
    title: "Web Portfolio",
    description: "Interactive Terraria-themed portfolio showcasing full-stack development skills",
    tech: ["TypeScript", "Tailwind", "React"],
    rarity: "Rare",
    icon: "🌐",
    image: "/images/portfolio.png",
  },
  
  {
    title: "Fashionology",
    description: "Technology and fashion, an easier way to find your niche and explore your creative ability.",
    tech: ["Next.js", "Javascript", "Tailwind", "Express", "MongoDB" , "Pexels API"],
    rarity: "Epic",
    icon: "🛍️",
    image: "images/fashionology.png", // add later
  },
   {
    title: "Arduino Robot Car",
    description: "Autonomous yellow robot car with Arduino control system and sensor integration",
    tech: ["Arduino", "C++", "Motors", "Breadboard", "H-Bridge"],
    rarity: "Legendary",
    icon: "🤖",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project1.jpg-0kRXLCxKbZJuDOjss9H29Fq97tLjDz.jpeg",
  },
  
  {
    title: "Mix-Master",
    description: "Browser-based audio mixer with multi-track controls, effects, and live visualization.",
    tech: ["React", "TypeScript", "OpenAI", "Web Audio API"],
    rarity: "Rare",
    icon: "🎛️",
    image: "images/mix-master.png", // add later
  },
  {
    title: "UI-Blog App",
    description: "Minimal blog platform with MDX posts, tags, and dark mode.",
    tech: ["Next.js", "MDX", "Tailwind"],
    rarity: "Rare",
    icon: "✍️",
    image: "images/blog-app.png", // add later
  },
  {
    title: "OOTD Detector",
    description: "Outfit-of-the-day detector that classifies clothing items from webcam photos.",
    tech: ["React", "TensorFlow.js", "Webcam", "YOLOv8", "Machine Learning" ],
    rarity: "Legendary",
    icon: "📷",
    image: "images/ootd.png", // add later
  },
] as const;

const rarityColors: Record<string, string> = {
  Legendary: "bg-yellow-500",
  Epic: "bg-purple-500",
  Rare: "bg-blue-500",
};

export default function Projects() {
  const { collectCoin } = useGame();

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">Project Inventory</h2>
        <p className="text-muted-foreground">Discover the artifacts I've crafted</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="shake-animation border-2 border-accent bg-card/80 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer overflow-hidden"
            onClick={collectCoin}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="text-3xl">{project.icon}</div>
                <Badge className={`${rarityColors[project.rarity]} text-white`}>{project.rarity}</Badge>
              </div>
              <CardTitle className="text-card-foreground">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button className="w-full mt-4 glow-animation" onClick={collectCoin}>
                🔍 Examine Item
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
