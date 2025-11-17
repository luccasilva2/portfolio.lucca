"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title: string;
  subtitle?: string;
}

export function Section({ id, children, className, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-32", className)}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">
            <span className="text-gradient">{title.split(' ')[0]}</span>{' '}
            {title.split(' ').slice(1).join(' ')}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
