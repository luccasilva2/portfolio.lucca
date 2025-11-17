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
    title: "Frontend Development",
    description: "Crafting beautiful and responsive user interfaces with React, Next.js, and modern CSS.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Building robust and scalable server-side applications using Node.js, Python, and SQL/NoSQL databases.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Automating workflows and deploying applications on platforms like Vercel, AWS, and Google Cloud.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring seamless experiences across all devices, from mobile phones to desktops.",
  },
  {
    icon: PenTool,
    title: "UI/UX Principles",
    description: "Applying design thinking to create intuitive, user-friendly, and aesthetically pleasing products.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Leveraging generative AI and large language models to build intelligent applications.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function SkillsSection() {
  return (
    <Section id="skills" title="My Expertise" subtitle="A versatile skill set to bring any digital vision to life.">
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
