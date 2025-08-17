"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGame } from "@/hooks/useGame";
import { useTypewriter } from "@/hooks/useTypewriter"; // <-- use the tiny hook
import { useNavigate } from "react-router-dom"; // <-- add this

export default function Home() {
  const { collectCoin } = useGame();
    const navigate = useNavigate();   

  const tagline =
    "Full-stack engineer building playful, pixel-perfect experiences. Explore my projects, learn more about me, or get in touch!";
  const typed = useTypewriter(tagline, 22); // ms per character

  return (
    <section className="space-y-12">
      <div className="text-center space-y-8 py-20">
        <div className="float-animation">
          <h1 className="text-7xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            Welcome to
            <br />
            <span className="text-primary glow-animation bg-gradient-to-r from-primary to-accent bg-clip-text">
              SebastianCraft
            </span>
          </h1>
        </div>

        {/* Typewriter line */}
        <p
          className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed min-h-[3.25rem] type-cursor"
          aria-live="polite"
        >
          {typed}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <Button
            size="lg"
            className="shake-animation glow-animation px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 border-2 border-accent shadow-lg"
            onClick={collectCoin}
          >
            Start Adventure
          </Button>
           <Button
          variant="secondary"
          size="lg"
          className="shake-animation px-8 py-4 text-lg font-semibold bg-card/90 hover:bg-card border-2 border-muted shadow-lg"
          onClick={() => {
            collectCoin();
            navigate("/projects");
          }}
        >
          View Projects
        </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <Card className="shake-animation border-4 border-accent bg-card/95 backdrop-blur-md shadow-2xl hover:shadow-accent/20 transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl text-card-foreground font-bold">The Developer</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">Level 99 Code Warrior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                React ⚛
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                Next.js 🌐
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                TypeScript 🔤
              </Badge>
            </div>
            <p className="text-card-foreground text-lg leading-relaxed">
              Specializing in crafting immersive web experiences with modern technologies. Always ready for the next
              coding quest!
            </p>
          </CardContent>
        </Card>

        <div className="relative flex justify-center">
          <div
            className="w-80 h-80 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl border-4 border-accent shadow-2xl flex items-center justify-center
                       float-animation will-change-transform overflow-hidden backdrop-blur-sm"
          >
            <img
              src="/images/bash1.png"
              alt="Sebastian's Avatar"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
