"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  PenTool,
  Bot,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "../ui/section";

const skills = [
  {
    icon: Code,
    title: "Desenvolvimento Frontend",
    description: "Criando interfaces de usuário bonitas e responsivas com React, Next.js e CSS moderno.",
  },
  {
    icon: Database,
    title: "Desenvolvimento Backend",
    description: "Construindo aplicações do lado do servidor robustas e escaláveis usando Node.js, Python e bancos de dados SQL/NoSQL.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Automatizando fluxos de trabalho e implantando aplicações em plataformas como Vercel, AWS e Google Cloud.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Garantindo experiências perfeitas em todos os dispositivos, de celulares a desktops.",
  },
  {
    icon: PenTool,
    title: "Princípios de UI/UX",
    description: "Aplicando o pensamento de design para criar produtos intuitivos, fáceis de usar e esteticamente agradáveis.",
  },
  {
    icon: Bot,
    title: "Integração com IA",
    description: "Aproveitando IA generativa e modelos de linguagem grandes para construir aplicações inteligentes.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function SkillsSection() {
  return (
    <Section id="skills" title="Minha Expertise" subtitle="Um conjunto de habilidades versátil para dar vida a qualquer visão digital.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:border-primary transition-colors duration-300 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                   <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
