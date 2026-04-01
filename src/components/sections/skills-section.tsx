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
    gradient: "from-orange-500 to-red-500",
    bgGlow: "group-hover:shadow-orange-500/25",
  },
  {
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-500",
    bgGlow: "group-hover:shadow-blue-500/25",
  },
  {
    icon: DatabaseZap,
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "group-hover:shadow-emerald-500/25",
  },
  {
    icon: BrainCircuit,
    gradient: "from-purple-500 to-pink-500",
    bgGlow: "group-hover:shadow-purple-500/25",
  },
  {
    icon: PenTool,
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "group-hover:shadow-amber-500/25",
  },
  {
    icon: ServerCog,
    gradient: "from-indigo-500 to-violet-500",
    bgGlow: "group-hover:shadow-indigo-500/25",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function SkillsSection() {
  const { t } = useLanguage();
  const localizedSkills = skills.map((skill, index) => ({
    ...skill,
    title: t.skills.items[index]?.title ?? "",
    description: t.skills.items[index]?.description ?? "",
  }));

  return (
    <Section id="skills" title={t.skills.sectionTitle} subtitle={t.skills.sectionSubtitle}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {localizedSkills.map((skill, index) => (
          <motion.div
            key={skill.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`group h-full relative overflow-hidden border-transparent bg-gradient-to-br from-card via-card to-card/80 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl ${skill.bgGlow}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative flex flex-row items-center gap-4">
                <motion.div 
                  className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </motion.div>
                <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
