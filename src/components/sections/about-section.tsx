"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "../ui/section";

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
    title: "Desenvolvedor Web Freelancer",
    date: "2019 - 2021",
    description: "Colaborei com vários clientes para criar sites e experiências digitais sob medida.",
  },
  {
    icon: GraduationCap,
    title: "Graduação em Ciência da Computação",
    date: "2015 - 2019",
    description: "Graduado com honras, com foco em engenharia de software e interação humano-computador.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection({ personalizedContent }: AboutSectionProps) {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === "lucca-profile"
  );

  return (
    <Section id="about" title="Sobre Mim">
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
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
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
              Um Vislumbre do Meu Mundo
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              {personalizedContent}
            </p>
            <p className="mt-4 text-muted-foreground">
              Sou um Desenvolvedor Full Stack e Criador Digital apaixonado por criar experiências digitais bonitas, funcionais e centradas no usuário. Eu prospero em dar vida a ideias, do conceito à implantação. Meu trabalho é uma mistura de código limpo, design moderno e uma busca incessante pela perfeição.
            </p>
          </motion.div>

          <div className="relative pl-6 border-l-2 border-primary/50">
            {timeline.map((item, index) => (
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
