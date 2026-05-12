"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const socials = [
  { icon: Github, href: "https://github.com/luccasilva2", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lucca-silva-oliveira/", label: "LinkedIn" },
  { icon: Mail, href: "#contact", label: "Email" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
});

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 md:pt-40"
    >
      <div className="container-edge w-full">
        {/* top meta strip */}
        <motion.div
          {...fade(0.1)}
          className="mb-12 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm"
        >
          <p className="mono uppercase tracking-[0.32em] text-muted-foreground">
            Portfolio — Vol. 03 / 2026
          </p>
          <span className="glass-chip">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-foreground/85">{t.hero.available}</span>
          </span>
        </motion.div>

        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-9">
            <motion.h1
              {...fade(0.2)}
              className="font-display text-[14vw] leading-[0.88] tracking-[-0.02em] md:text-[10rem] lg:text-[12rem]"
            >
              <span className="block italic text-aurora-shimmer">Lucca</span>
              <span className="block text-foreground">
                Silva <span className="italic font-light text-foreground/70">Oliveira</span>
              </span>
            </motion.h1>
          </div>

          <motion.div {...fade(0.45)} className="md:col-span-3">
            <p className="mono mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {t.hero.subtitle.split("&")[0]?.trim()}
            </p>
            <p className="max-w-xs text-base text-muted-foreground md:text-lg">
              Construindo experiências digitais com tipografia, movimento e propósito —
              do conceito ao deploy.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fade(0.6)}
          className="mt-16 flex flex-col gap-8 border-t border-foreground/10 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
            >
              {t.hero.cta}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-6 py-3 text-sm transition-all hover:border-foreground/30 hover:bg-foreground/10"
            >
              {t.hero.ctaSecondary}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Connect
            </p>
            <div className="h-px w-12 bg-foreground/15" />
            <div className="flex items-center gap-1">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-24 hidden items-center gap-3 md:flex"
        >
          <span className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <motion.span
            animate={{ x: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-px w-16 bg-gradient-to-r from-primary/70 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
