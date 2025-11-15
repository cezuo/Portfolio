"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGame } from "@/hooks/useGame";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const { collectCoin } = useGame();
  const navigate = useNavigate();

  const tagline =
    "Full-stack engineer building playful, pixel-perfect experiences. Explore my projects, learn more about me, or get in touch!";
  const typed = useTypewriter(tagline, 22);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="space-y-12">
      <div className="text-center space-y-8 py-20">
        <motion.div
          className="float-animation"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            Welcome to
            <br />
            <motion.span
              className="text-primary glow-animation bg-gradient-to-r from-primary to-accent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              SebastianCraft
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed min-h-[3.25rem] type-cursor"
          aria-live="polite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {typed}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="shake-animation glow-animation px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 border-2 border-accent shadow-lg"
              onClick={collectCoin}
            >
              Start Adventure
            </Button>
          </motion.div>
          <motion.div variants={fadeInUp}>
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
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="shake-animation border-4 border-accent bg-card/95 backdrop-blur-md shadow-2xl hover:shadow-accent/20 transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl text-card-foreground font-bold">The Developer</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">Level 99 Code Warrior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={scaleIn} whileHover={{ scale: 1.1 }}>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                    React ⚛
                  </Badge>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ scale: 1.1 }}>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                    Next.js 🌐
                  </Badge>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ scale: 1.1 }}>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                    TypeScript 🔤
                  </Badge>
                </motion.div>
              </motion.div>
              <p className="text-card-foreground text-lg leading-relaxed">
                Specializing in crafting immersive web experiences with modern technologies. Always ready for the next
                coding quest!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-80 h-80 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl border-4 border-accent shadow-2xl flex items-center justify-center
                       float-animation will-change-transform overflow-hidden backdrop-blur-sm"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/images/bash1.png"
              alt="Sebastian's Avatar"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
