"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "../three/hero-background";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-headline tracking-tighter"
          variants={itemVariants}
        >
          <span className="text-gradient">Lucca Silva</span> Oliveira
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
          variants={itemVariants}
        >
          Full Stack Developer & Digital Creator
        </motion.p>
        <motion.div className="mt-8" variants={itemVariants}>
          <Button asChild size="lg" className="group">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
