"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import luccaImage from "@/lib/lucca.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";

interface AboutSectionProps {
  personalizedContent: string;
}

const timeline = [
  {
    icon: GraduationCap,
    date: "Janeiro de 2026 - Presente",
    title: "Cursos EAD de alto valor",
    description: "Formações EAD de alto valor, com certificações em andamento e aplicação prática contínua.",
  },
  {
    icon: GraduationCap,
    date: "Fevereiro de 2026 - Presente",
    title: "Graduação (em andamento)",
    description: "Início da graduação, com foco em aprofundar base teórica e prática em tecnologia.",
  },
  {
    icon: Briefcase,
    date: "2021 - Presente",
    title: "Desenvolvedor Full Stack",
    description: "Construindo e escalando aplicações web modernas em uma startup de tecnologia em rápido crescimento.",
  },
  {
    icon: Briefcase,
    title: "Entra21 React Native",
    date: "2022 - 2023",
    description: "Participação no programa Entra21 na linguagem de React Native.",
  },
  {
    icon: GraduationCap,
    title: "Entra21 EAD Java",
    date: "Março - Setembro",
    description: "Novamente tendo a participação no programa Entra21 na linguagem de Java no modelo EAD.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export function AboutSection({ personalizedContent }: AboutSectionProps) {
  const { t } = useLanguage();
  const localizedTimeline = timeline.map((item, index) => ({
    ...item,
    date: t.about.timeline[index]?.date ?? item.date,
    title: t.about.timeline[index]?.title ?? item.title,
    description: t.about.timeline[index]?.description ?? item.description,
  }));

  return (
    <Section id="about" title={t.about.sectionTitle}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <motion.div
          className="lg:col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <Card className="overflow-hidden shadow-2xl shadow-primary/20 group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="aspect-square relative">
              <Image
                src={luccaImage}
                alt="Lucca Silva"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Full Stack Developer</span>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
            <h3 className="text-3xl font-bold font-headline text-gradient pl-4">
              {t.about.heading}
            </h3>
            <p className="mt-4 text-lg text-muted-foreground pl-4 leading-relaxed">
              {personalizedContent}
            </p>
            <p className="mt-4 text-muted-foreground pl-4 leading-relaxed">
              {t.about.paragraph}
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-accent/80 to-transparent"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
            {localizedTimeline.map((item, index) => (
              <motion.div
                key={index}
                className="group relative mb-6 pl-12 last:mb-0"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 8 }}
              >
                <motion.div 
                  className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/80 bg-card shadow-lg shadow-primary/20"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="h-3 w-3 text-primary" />
                </motion.div>
                <div className="absolute left-[9px] top-[10px] h-2 w-2 animate-pulse rounded-full bg-primary/70" />
                <div className="rounded-xl border border-primary/10 bg-card/50 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card/80 group-hover:shadow-xl group-hover:shadow-primary/5">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">{item.date}</p>
                  <h4 className="mt-1 text-lg font-semibold group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
