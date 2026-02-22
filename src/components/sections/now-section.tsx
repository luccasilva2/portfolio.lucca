"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, BookOpen, Clock3 } from "lucide-react";
import { Section } from "../ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const nowItems = [
  {
    icon: Rocket,
    title: "Construindo agora",
    description:
      "Projetos web com UX mais viva, animações inteligentes e foco em performance real no mobile.",
    tags: ["Next.js", "TypeScript", "Motion"],
  },
  {
    icon: BookOpen,
    title: "Estudando",
    description:
      "Arquitetura frontend escalável, padrões de design system e técnicas de interação avançada.",
    tags: ["Design System", "A11y", "Arquitetura"],
  },
  {
    icon: Sparkles,
    title: "Melhorando",
    description:
      "Polimento visual dos meus cases, documentação de decisões técnicas e storytelling dos projetos.",
    tags: ["Case Study", "UI Polish", "DX"],
  },
];

const lastUpdated = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
}).format(new Date());

export function NowSection() {
  return (
    <Section
      id="now"
      title="Now"
      subtitle="O que estou fazendo neste momento para evoluir como dev e entregar projetos melhores."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <Clock3 className="h-4 w-4 text-primary" />
        <span>Última atualização: {lastUpdated}</span>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {nowItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
          >
            <Card className="h-full border-primary/20 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
