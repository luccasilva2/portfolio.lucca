"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section } from "../ui/section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Eye, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const allProjects = [
    {
    id: "project-1",
    title: "appQuanta",
    description: "Criação automatizada de aplicativos a partir de ideias, sem código e sem complicações.",
    longDescription: "O appQuanta é uma plataforma revolucionária que permite a criação de aplicativos de forma automatizada diretamente de uma ideia. Utilizando tecnologias de ponta, o sistema interpreta os requisitos do usuário e gera a estrutura do aplicativo, incluindo a interface e a lógica de negócios, de maneira rápida e sem a necessidade de escrever código. O projeto foi desenvolvido em Dart com Flutter, garantindo uma experiência nativa e performática tanto no iOS quanto no Android.",
    tags: ["Dart", "Flutter", "AI", "No-Code"],
    liveUrl: "#",
    githubUrl: "https://github.com/luccasilva2/appQuanta",
  },
  {
    id: "project-2",
    title: "Site_CH",
    description: "Site educativo sobre temas históricos e militares com conteúdo interativo.",
    longDescription: "O Site_CH é um portal educativo focado em temas históricos e militares, como a corrida armamentista e armas nucleares. Construído com as tecnologias mais modernas do ecossistema React, como Next.js e TypeScript, o site oferece uma experiência de aprendizado interativa e rica em conteúdo. A utilização do TailwindCSS garante uma interface responsiva e visualmente agradável, adaptada para todos os dispositivos.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    liveUrl: "luccasilva2.github.io/Site_CH/",
    githubUrl: "https://github.com/luccasilva2/Site_CH",
  },
  {
    id: "project-3",
    title: "appQuanta-server",
    description: "Servidor inteligente do Quanta: geração automática, APIs e gerenciamento de builds.",
    longDescription: "Servidor inteligente para a plataforma appQuanta. Responsável pela geração automática de código, gerenciamento de APIs e controle de builds dos aplicativos gerados. Construído em Python para garantir robustez e escalabilidade.",
    tags: ["Python", "API", "Server", "AI"],
    liveUrl: "luccasilva2.github.io/appQuanta-server/",
    githubUrl: "https://github.com/luccasilva2/appQuanta-server",
  },
  {
    id: "project-4",
    title: "Portfolio",
    description: "Portfólio de Lucca — desenvolvedor criativo e apaixonado por tecnologia.",
    longDescription: "Uma versão anterior do meu portfólio, desenvolvida com HTML, CSS e JavaScript puros para demonstrar minhas habilidades fundamentais de desenvolvimento web. Um projeto que mostra minhas raízes como desenvolvedor.",
    tags: ["React", "Next.js", "Node.js"],
    liveUrl: "luccasilva2.github.io/portfolio.lucca/",
    githubUrl: "https://github.com/luccasilva2/portfolio.lucca",
  },
  {
    id: "project-5",
    title: "clinica-web",
    description: "Sistema web para gerenciamento de clínicas. Feito com JavaScript.",
    longDescription: "Um sistema completo para gerenciamento de clínicas, permitindo o agendamento de consultas, cadastro de pacientes e prontuários eletrônicos. Desenvolvido com JavaScript, HTML e CSS.",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "luccasilva2.github.io/clinica-web/",
    githubUrl: "https://github.com/luccasilva2/clinica-web",
  },
  {
    id: "project-6",
    title: "Sites",
    description: "Esqueleto inicial para prototipagem de sistemas web com 30 telas básicas em HTML e CSS.",
    longDescription: "Projeto de sistema web com 30 telas básicas em HTML e CSS simples, servindo como um esqueleto inicial robusto para a prototipagem rápida de novas aplicações e websites.",
    tags: ["HTML", "CSS", "Prototyping"],
    liveUrl: "luccasilva2.github.io/Sites",
    githubUrl: "https://github.com/luccasilva2/Sites",
  },
  {
    id: "project-7",
    title: "Minha_IA",
    description: "Estudos e implementações de conceitos de Inteligência Artificial em Python.",
    longDescription: "Repositório dedicado aos meus estudos e implementações de algoritmos e conceitos de Inteligência Artificial utilizando Python. Inclui redes neurais, processamento de linguagem natural e mais.",
    tags: ["Python", "AI", "Machine Learning"],
    liveUrl: "luccasilva2.github.io/Minha_IA/",
    githubUrl: "https://github.com/luccasilva2/Minha_IA",
  },
  {
    id: "project-8",
    title: "Estudaai",
    description: "App para organização de rotina de estudos com funcionalidades inteligentes.",
    longDescription: "📚 Estuda.AI é um app em desenvolvimento focado em organizar a rotina de estudos de forma simples, intuitiva e eficiente. Com funcionalidades inteligentes e um visual moderno, ele ajuda estudantes a otimizar seu tempo e aprendizado.",
    tags: ["C++", "AI", "Study", "Desktop"],
    liveUrl: "luccasilva2.github.io/Estudaai/",
    githubUrl: "https://github.com/luccasilva2/Estudaai",
  },
  {
    id: "project-9",
    title: "Ativo-TCC",
    description: "Aplicativo de finanças pessoais para controle de receitas, gastos e saldo.",
    longDescription: "💸💸 Ativo: controle suas finanças pessoais com facilidade. Acompanhe receitas, gastos e saldo com clareza e mantenha seu orçamento sempre em dia.",
    tags: ["TypeScript", "React Native", "Finance"],
    liveUrl: "luccasilva2.github.io/Ativo-TCC/",
    githubUrl: "https://github.com/luccasilva2/Ativo-TCC",
  },
];

const ProjectCard = ({ project }: { project: (typeof allProjects)[0] }) => {
  const image = PlaceHolderImages.find((img) => img.id === project.id);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full"
    >
      <motion.div
        layoutId={`project-card-${project.id}`}
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-full"
      >
        <Card className="group h-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
          <Link href={`/projetos/${project.id}`} scroll={false} className="block h-full">
            <div className="flex flex-col h-full">
              <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                )}
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </div>
          </Link>
          <div className="p-6 pt-0 flex items-center gap-4">
             <Button asChild size="sm" variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Github className="mr-2 h-4 w-4"/>
                    Código
                </a>
             </Button>
             <Button asChild size="sm" >
               <Link href={`/projetos/${project.id}`} scroll={false}>
                  <Eye className="mr-2 h-4 w-4"/>
                  Demo
                </Link>
             </Button>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export function PortfolioSection() {
  const projects = allProjects;
  return (
    <Section id="projects" title="Trabalhos Selecionados" subtitle="Um vislumbre da minha paixão pela criação e resolução de problemas.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" style={{perspective: '1000px'}}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
