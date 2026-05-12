"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  DatabaseZap,
  Layers,
  PenTool,
  ServerCog,
  Smartphone,
} from "lucide-react";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";

const meta = [
  { icon: Layers, glow: "from-primary/30 to-transparent" },
  { icon: Smartphone, glow: "from-accent/30 to-transparent" },
  { icon: DatabaseZap, glow: "from-emerald-500/30 to-transparent" },
  { icon: BrainCircuit, glow: "from-fuchsia-500/30 to-transparent" },
  { icon: PenTool, glow: "from-highlight/40 to-transparent" },
  { icon: ServerCog, glow: "from-indigo-500/30 to-transparent" },
];

export function SkillsSection() {
  const { t } = useLanguage();
  const items = t.skills.items.map((s, i) => ({ ...s, ...meta[i] }));

  return (
    <Section
      id="skills"
      index="03"
      title={t.skills.sectionTitle}
      eyebrow="Expertise"
      subtitle={t.skills.sectionSubtitle}
    >
      <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((skill, i) => {
          const Icon = skill.icon ?? Layers;
          return (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-3xl p-7"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-br ${skill.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.04] text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl tracking-tight">{skill.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
