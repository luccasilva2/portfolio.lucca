"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import { useLanguage } from "@/components/language-provider";
import { ParticleBackground } from "@/components/ui/particle-background";
import { TypingEffect } from "@/components/ui/typing-effect";
import { FloatingIcons } from "@/components/ui/floating-icons";

const socialLinks = [
  { icon: Github, href: "https://github.com/luccasilva2", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lucca-silva-oliveira/", label: "LinkedIn" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export function HeroSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const typingWords = t.hero.typingWords || [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Innovator",
  ];

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const timeline = gsap.timeline();

    timeline
      .fromTo(
        titleRef.current,
        { y: 80, opacity: 0, scale: 0.95, filter: "blur(10px)" },
        { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power4.out", delay: 0.2 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1.0"
      )
      .fromTo(
        paragraphRef.current,
        { y: 40, opacity: 0, filter: "blur(5px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.9"
      )
      .fromTo(
        socialRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

  }, []);

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <FloatingIcons />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.hero.available || "Disponível para projetos"}
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-headline tracking-tighter opacity-0"
        >
          <span className="text-gradient">Lucca Silva</span> Oliveira
        </h1>

        {/* Typing Effect */}
        <div
          ref={subtitleRef}
          className="mt-4 text-2xl md:text-3xl font-semibold h-10 opacity-0"
        >
          <TypingEffect words={typingWords} className="text-foreground/80" />
        </div>

        <p
          ref={paragraphRef}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground opacity-0 leading-relaxed"
        >
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div ref={buttonRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <MagneticButton>
            <Button asChild size="lg" className="group hero-glow text-base px-8">
              <Link href="#projects">
                {t.hero.cta}
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button asChild size="lg" variant="outline" className="group text-base px-8 border-primary/30 hover:border-primary hover:bg-primary/10">
              <Link href="#contact">
                {t.hero.ctaSecondary || "Entre em Contato"}
                <Mail className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Link>
            </Button>
          </MagneticButton>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="mt-12 flex items-center justify-center gap-4 opacity-0">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-3 rounded-full bg-card/50 border border-primary/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-card transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
