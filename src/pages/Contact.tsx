"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGame } from "@/hooks/useGame";
import { motion } from "framer-motion";

export default function Contact() {
  const { collectCoin } = useGame();

  const mailto = `mailto:Sebastianwagnac@gmail.com?subject=${encodeURIComponent(
    "Hello from your portfolio"
  )}&body=${encodeURIComponent(
    "Hi Sebastian,\n\nI saw your portfolio and would love to connect about..."
  )}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
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
        <h2 className="text-4xl font-bold text-foreground mb-4">Send Message</h2>
        <p className="text-muted-foreground">Ready to start a new quest together?</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2 border-accent bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground">📜 Contact Scroll</CardTitle>
              <CardDescription>Choose your preferred method of communication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="h-16 shake-animation bg-transparent w-full" asChild>
                    <a href={mailto} onClick={collectCoin} aria-label="Email Sebastian Wagnac">
                      <div className="text-center">
                        <div className="text-2xl mb-1">📧</div>
                        <div>Email Quest</div>
                      </div>
                    </a>
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="h-16 shake-animation bg-transparent w-full" asChild>
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
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="h-16 shake-animation bg-transparent w-full" asChild>
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
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="h-16 shake-animation bg-transparent w-full"
                    onClick={collectCoin}
                    aria-label="Twitter (coming soon)"
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">🐦</div>
                      <div>Twitter Tavern</div>
                    </div>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                className="text-center pt-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <Button size="lg" className="glow-animation" asChild>
                  <a href={mailto} onClick={collectCoin} aria-label="Start collaboration via email">
                    🚀 Start Collaboration
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
