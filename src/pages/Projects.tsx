"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGame } from "@/hooks/useGame";
import { motion } from "framer-motion";

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
    tech: ["Next.js", "Javascript", "Tailwind", "Express", "MongoDB", "Pexels API"],
    rarity: "Epic",
    icon: "🛍️",
    image: "images/fashionology.png",
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
    image: "images/mix-master.png",
  },
  {
    title: "UI-Blog App",
    description: "Minimal blog platform with MDX posts, tags, and dark mode.",
    tech: ["Next.js", "MDX", "Tailwind"],
    rarity: "Rare",
    icon: "✍️",
    image: "images/blog-app.png",
  },
  {
    title: "OOTD Detector",
    description: "Outfit-of-the-day detector that classifies clothing items from webcam photos.",
    tech: ["React", "TensorFlow.js", "Webcam", "YOLOv8", "Machine Learning"],
    rarity: "Legendary",
    icon: "📷",
    image: "images/ootd.png",
  },
  {
    title: "Plain Archive",
    description: "A minimalist E-commerce site for vintage clothing and accessories.",
    tech: ["React", "TypeScript", "Tailwind", "Stripe", "Prisma", "Firebase", "PostgreSQL"],
    rarity: "Rare",
    icon: "🛒",
    image: "images/Plain-archive.png",
  },
  {
    title: "Just-DANCE AI",
    description: "An AI-powered dance choreography generator.",
    tech: ["Next.js", "Python", "Choreography", "AI Models", "OpenAI"],
    rarity: "Epic",
    icon: "🕺",
    image: "images/just-dance.png",
  },
  {
    title: " DJ Gesture Controller",
    description: "A gesture-controlled DJ application for mixing music.",
    tech: ["React", "TypeScript", "Web Audio API", "Machine Learning"],
    rarity: "Rare",
    icon: "🎧",
    image: "images/dj-gesture.png",
  },
  {
    title: " EquiBull (Hackathon Project)",
    description: "An AI-powered equity housing platform.",
    tech: ["React", "JavaScript", "Firebase", "Gemini2.5", "AI Integration"],
    rarity: "Legendary",
    icon: "🏠",
    image: "images/equibull.png",
  }
] as const;

const rarityColors: Record<string, string> = {
  Legendary: "bg-yellow-500",
  Epic: "bg-purple-500",
  Rare: "bg-blue-500",
};

export default function Projects() {
  const { collectCoin } = useGame();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="space-y-8">
      <motion.div 
        className="text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-foreground mb-4">Project Inventory</h2>
        <p className="text-muted-foreground">Discover the artifacts I've crafted</p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className="shake-animation border-2 border-accent bg-card/80 backdrop-blur-sm transition-transform cursor-pointer overflow-hidden h-full"
              onClick={collectCoin}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
