"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
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
        <h2 className="text-4xl font-bold text-foreground mb-4">Character Stats</h2>
        <p className="text-muted-foreground">Learn about the player behind the code</p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="border-2 border-accent bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground">🧙‍♂️ Background Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-card-foreground">
                Hi, I'm Sebastian Wagnac, a third-year Computer Engineering student at the University of South Florida. My
                love for creating started young—whether it was building a brand-new LEGO set or designing a school project
                in elementary school, I was drawn to the process of bringing ideas to life.
              </p>
              <p className="text-card-foreground">
                As a Black Haitian-American entering an engineering field where I am often in the minority, I've learned
                to turn that reality into motivation. It pushes me to exceed limits, to prove that my perspective matters,
                and to create work that blends artistry with technology in a way that's both innovative and human.
              </p>
              <p className="text-card-foreground">
                My experience as Founder & CEO of an e-commerce platform has shaped me into a business-minded problem
                solver, able to think on both the micro and macro level—building things that are not just functional, but
                also meaningful, impactful, and deeply personal.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-2 border-accent bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground">⚡ Skills & Abilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { skill: "Frontend Development", level: 95 },
                  { skill: "Backend Development", level: 88 },
                  { skill: "UI/UX Design", level: 89 },
                  { skill: "Problem Solving", level: 99 },
                ].map((s, index) => (
                  <div key={s.skill} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-card-foreground">{s.skill}</span>
                      <span className="text-black font-semibold">{s.level}%</span>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-emerald-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${s.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="border-2 border-accent bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">🎮 Life Adventures</CardTitle>
            <CardDescription>Beyond the code - exploring the world</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "images/bash2.jpg", label: "🎹 Music" },
                { src: "images/bash4.jpg", label: "🚣 Adventure" },
                { src: "images/bash3.jpg", label: "🌃 Style" },
                { src: "images/bash5.png", label: "😄 Fun" },
              ].map((item, index) => (
                <Thumb key={item.src} src={item.src} label={item.label} index={index} />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

function Thumb({ src, label, index }: { src: string; label: string; index: number }) {
  return (
    <motion.div 
      className="relative group cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={label}
        className="w-full h-44 sm:h-52 md:h-60 lg:h-72 object-cover rounded border-3 border-accent/80 hover:border-accent transition-all duration-300 shadow-lg"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center backdrop-blur-sm">
        <span className="text-white text-sm font-semibold">{label}</span>
      </div>
    </motion.div>
  );
}
