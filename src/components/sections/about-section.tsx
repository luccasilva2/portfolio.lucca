"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import luccaImage from "@/lib/lucca.jpg";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";

interface AboutSectionProps {
  personalizedContent: string;
}

const icons = [GraduationCap, GraduationCap, Briefcase, Briefcase, GraduationCap];

export function AboutSection({ personalizedContent }: AboutSectionProps) {
  const { t } = useLanguage();
  const timeline = t.about.timeline;

  return (
    <Section
      id="about"
      index="01"
      title={t.about.sectionTitle}
      eyebrow="Profile"
      subtitle={t.about.heading}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Portrait + meta */}
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="glass aurora-border grain group relative overflow-hidden rounded-3xl p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image
                src={luccaImage}
                alt="Lucca Silva Oliveira"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="mono text-[11px] uppercase tracking-[0.28em] text-foreground/85">
                    Full Stack · Brazil
                  </span>
                </div>
              </div>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            <div className="glass-soft rounded-2xl p-4">
              <dt className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Foco</dt>
              <dd className="mt-1 font-display text-lg">Web · App · IA</dd>
            </div>
            <div className="glass-soft rounded-2xl p-4">
              <dt className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Base</dt>
              <dd className="mt-1 font-display text-lg">Brasil · Remoto</dd>
            </div>
          </dl>
        </motion.aside>

        {/* Bio + timeline */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="font-display text-2xl leading-snug text-foreground/95 md:text-3xl">
              {personalizedContent}
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.about.paragraph}
            </p>
          </motion.div>

          <ol className="relative mt-14 space-y-5 border-l border-foreground/10 pl-8">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-px top-0 h-32 w-px bg-gradient-to-b from-primary via-accent/70 to-transparent"
            />
            {timeline.map((item, i) => {
              const Icon = icons[i] ?? Briefcase;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative"
                >
                  <span className="absolute -left-[37px] top-2 inline-flex h-4 w-4 items-center justify-center rounded-full border border-foreground/20 bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary transition-all group-hover:scale-150 group-hover:bg-accent" />
                  </span>
                  <div className="glass-soft rounded-2xl p-5 transition-colors group-hover:bg-foreground/[0.06]">
                    <div className="flex items-center gap-3 text-xs">
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      <span className="mono uppercase tracking-[0.22em] text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="mt-2 font-display text-xl tracking-tight">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
