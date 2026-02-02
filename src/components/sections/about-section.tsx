"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import luccaImage from "@/lib/lucca.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";

interface AboutSectionProps {
  personalizedContent: string;
}

const timeline = [
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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
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
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden shadow-2xl shadow-primary/10">
            <div className="aspect-square relative">
              <Image
                src={luccaImage}
                alt="Lucca Silva"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Card>
        </motion.div>

        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold font-headline text-gradient">
              {t.about.heading}
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              {personalizedContent}
            </p>
            <p className="mt-4 text-muted-foreground">
              {t.about.paragraph}
            </p>
          </motion.div>

          <div className="relative pl-6 border-l-2 border-primary/50">
            {localizedTimeline.map((item, index) => (
              <motion.div
                key={index}
                className="mb-8 last:mb-0"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute w-6 h-6 bg-background rounded-full -left-[13px] border-2 border-primary flex items-center justify-center">
                  <item.icon className="w-3 h-3 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{item.date}</p>
                <h4 className="font-semibold text-lg mt-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
