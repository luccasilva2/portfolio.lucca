"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock3, Rocket, Sparkles } from "lucide-react";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";

const icons = [Rocket, BookOpen, Sparkles];

export function NowSection() {
  const { t, language } = useLanguage();

  const lastUpdated = new Intl.DateTimeFormat(
    language === "zh" ? "zh-CN" : language,
    { day: "2-digit", month: "long", year: "numeric" }
  ).format(new Date());

  return (
    <Section
      id="now"
      index="05"
      title={t.now.sectionTitle}
      eyebrow="Now"
      subtitle={t.now.sectionSubtitle}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-center gap-3"
      >
        <span className="glass-chip">
          <Clock3 className="h-3.5 w-3.5 text-primary" />
          <span className="mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {t.now.lastUpdate}
          </span>
          <span className="text-foreground/85">{lastUpdated}</span>
        </span>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {t.now.items.map((item, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass group relative flex flex-col overflow-hidden rounded-3xl p-7"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.04] text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Now / 0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono rounded-full border border-foreground/10 bg-foreground/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
