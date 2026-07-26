"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";

export function ResumeSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="resume"
      index="04"
      title={t.resume.sectionTitle}
      eyebrow="Resume"
      subtitle={t.resume.sectionSubtitle}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="glass aurora-border grain relative overflow-hidden rounded-3xl p-8 md:p-12"
      >
        <div className="relative grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.05] text-primary">
                <FileText className="h-5 w-5" />
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Currículo profissional.pdf · v2026
              </span>
            </div>
            <h3 className="mt-6 font-display text-3xl tracking-tight md:text-5xl">
              {t.resume.heading}
            </h3>
            <p className="mt-4 max-w-lg text-muted-foreground">
              {t.resume.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/Currículo profissional.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
              >
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                {t.resume.download}
              </Link>
              <Link
                href="/Currículo profissional.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm transition-all hover:border-foreground/30 hover:bg-foreground/5"
              >
                {t.resume.view}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* visual mock of a doc */}
          <div className="relative md:col-span-5">
            <div className="glass-soft mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg italic">Lucca.</p>
                <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  CV / 2026
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-2 w-3/4 rounded-full bg-foreground/15" />
                <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
                <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
              </div>
              <div className="mt-8 space-y-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    style={{ width: `${60 + ((i * 17) % 35)}%` }}
                    className="h-1.5 rounded-full bg-foreground/[0.08]"
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["TypeScript", "React", "Next.js", "Flutter", "Python"].map((tag) => (
                  <span
                    key={tag}
                    className="mono rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent blur-2xl"
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
