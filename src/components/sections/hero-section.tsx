"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "../three/hero-background";
import { gsap } from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const timeline = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power4.out",
      },
    });

    timeline
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5 }
      )
      .fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.9"
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.9"
      );

  }, []);

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div
        className="relative z-10 text-center px-4"
      >
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-headline tracking-tighter opacity-0"
        >
          <span className="text-gradient">Lucca Silva</span> Oliveira
        </h1>
        <p
          ref={paragraphRef}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground opacity-0"
        >
          Desenvolvedor Full Stack & Criador Digital
        </p>
        <div ref={buttonRef} className="mt-8 opacity-0">
          <Button asChild size="lg" className="group">
            <Link href="#projects">
              Ver Meu Trabalho
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
