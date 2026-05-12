"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index?: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  index,
  title,
  subtitle,
  eyebrow,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32 scroll-mt-24", className)}
    >
      <div className="container-edge">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <p className="eyebrow">
              {index && <span className="mono text-primary/80">{index}</span>}
              {eyebrow ?? title}
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              {title.split(" ").map((word, i) =>
                i === 0 ? (
                  <span key={i} className="italic text-aurora">
                    {word}
                  </span>
                ) : (
                  <span key={i}> {word}</span>
                )
              )}
            </h2>
          </div>
          {subtitle && (
            <p className="max-w-md text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
