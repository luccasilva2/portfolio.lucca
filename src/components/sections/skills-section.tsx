"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Smartphone,
  PenTool,
  BrainCircuit,
  DatabaseZap,
  ServerCog,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";

const skills = [
  {
    icon: Layers,
    title: "Desenvolvimento Full Stack",
    description: "Criação de soluções completas, do front-end ao back-end, com foco em performance e escalabilidade.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos",
    description: "Construção de aplicativos móveis nativos e híbridos para iOS e Android com interfaces modernas.",
  },
  {
    icon: DatabaseZap,
    title: "Integração com Banco de Dados",
    description: "Modelagem e integração de bancos de dados SQL e NoSQL, garantindo a eficiência e segurança dos dados.",
  },
  {
    icon: BrainCircuit,
    title: "Criação de Redes Neurais para IAs",
    description: "Desenvolvimento e treinamento de modelos de machine learning e redes neurais para aplicações inteligentes.",
  },
  {
    icon: PenTool,
    title: "UI/UX",
    description: "Projetando interfaces intuitivas e experiências de usuário envolventes que resolvem problemas reais.",
  },
  {
    icon: ServerCog,
    title: "Desenvolvimento de Sistemas",
    description: "Arquitetura e desenvolvimento de sistemas complexos e distribuídos para diversas finalidades.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function SkillsSection() {
  const { t } = useLanguage();
  const localizedSkills = skills.map((skill, index) => ({
    ...skill,
    title: t.skills.items[index]?.title ?? skill.title,
    description: t.skills.items[index]?.description ?? skill.description,
  }));

  return (
    <Section id="skills" title={t.skills.sectionTitle} subtitle={t.skills.sectionSubtitle}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {localizedSkills.map((skill, index) => (
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
