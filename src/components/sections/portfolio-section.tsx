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

export const projects = [
  {
    id: "project-1",
    title: "appQuanta",
    description: "Criação automatizada de aplicativos a partir de ideias, sem código e sem complicações.",
    longDescription: "O appQuanta é uma plataforma revolucionária que permite a criação de aplicativos de forma automatizada diretamente de uma ideia. Utilizando tecnologias de ponta, o sistema interpreta os requisitos do usuário e gera a estrutura do aplicativo, incluindo a interface e a lógica de negócios, de maneira rápida e sem a necessidade de escrever código. O projeto foi desenvolvido em Dart com Flutter, garantindo uma experiência nativa e performática tanto no iOS quanto no Android.",
    tags: ["Dart", "Flutter", "AI", "No-Code"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Site_CH",
    description: "Site educativo sobre temas históricos e militares com conteúdo interativo.",
    longDescription: "O Site_CH é um portal educativo focado em temas históricos e militares, como a corrida armamentista e armas nucleares. Construído com as tecnologias mais modernas do ecossistema React, como Next.js e TypeScript, o site oferece uma experiência de aprendizado interativa e rica em conteúdo. A utilização do TailwindCSS garante uma interface responsiva e visualmente agradável, adaptada para todos os dispositivos.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Griffi",
    description: "Plataforma digital para gestão financeira pessoal, ajudando usuários a controlar gastos e economizar.",
    longDescription: "Griffi é uma ferramenta inovadora para gestão financeira. Desenvolvida em C++, a plataforma oferece alta performance e segurança para ajudar os usuários a controlar suas finanças, com funcionalidades para acompanhamento de gastos, visualização de receitas e planejamento de economias de forma simples e eficaz.",
    tags: ["C++", "Finance", "Desktop"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "Empresa",
    description: "Sistema de gerenciamento de funcionários e projetos desenvolvido em Java com JDBC e MySQL.",
    longDescription: "Este projeto é um sistema robusto para o gerenciamento de recursos humanos e projetos. Desenvolvido em Java, ele utiliza JDBC para a comunicação com um banco de dados MySQL, permitindo o cadastro, consulta, atualização e exclusão de informações sobre funcionários e projetos de forma segura e eficiente.",
    tags: ["Java", "MySQL", "JDBC", "Desktop"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-5",
    title: "appQuanta-server",
    description: "Servidor inteligente do Quanta: geração automática, APIs e gerenciamento de builds.",
    longDescription: "Servidor inteligente para a plataforma appQuanta. Responsável pela geração automática de código, gerenciamento de APIs e controle de builds dos aplicativos gerados. Construído em Python para garantir robustez e escalabilidade.",
    tags: ["Python", "API", "Server", "AI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-6",
    title: "Portfolio",
    description: "Portfólio de Lucca — desenvolvedor criativo e apaixonado por tecnologia.",
    longDescription: "Uma versão anterior do meu portfólio, desenvolvida com HTML, CSS e JavaScript puros para demonstrar minhas habilidades fundamentais de desenvolvimento web. Um projeto que mostra minhas raízes como desenvolvedor.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
   {
    id: "project-7",
    title: "clinica-web",
    description: "Sistema web para gerenciamento de clínicas. Feito com JavaScript.",
    longDescription: "Um sistema completo para gerenciamento de clínicas, permitindo o agendamento de consultas, cadastro de pacientes e prontuários eletrônicos. Desenvolvido com JavaScript, HTML e CSS.",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-8",
    title: "Sites",
    description: "Esqueleto inicial para prototipagem de sistemas web com 30 telas básicas em HTML e CSS.",
    longDescription: "Projeto de sistema web com 30 telas básicas em HTML e CSS simples, servindo como um esqueleto inicial robusto para a prototipagem rápida de novas aplicações e websites.",
    tags: ["HTML", "CSS", "Prototyping"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-9",
    title: "Hospital",
    description: "Protótipo de sistema de gerenciamento hospitalar.",
    longDescription: "Protótipo inicial de um sistema de gerenciamento hospitalar, criado com HTML e CSS para definir a estrutura e o layout das principais funcionalidades.",
    tags: ["HTML", "CSS", "Frontend"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-10",
    title: "Minha_IA",
    description: "Estudos e implementações de conceitos de Inteligência Artificial em Python.",
    longDescription: "Repositório dedicado aos meus estudos e implementações de algoritmos e conceitos de Inteligência Artificial utilizando Python. Inclui redes neurais, processamento de linguagem natural e mais.",
    tags: ["Python", "AI", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-11",
    title: "forms",
    description: "App de formulários inspirado no Google Forms, desenvolvido em Flutter.",
    longDescription: "Este projeto é um app de formulários inspirado no Google Forms, desenvolvido em Flutter e preparado para integração com Firebase. Ele permite criar, editar, visualizar e excluir formulários de maneira intuitiva.",
    tags: ["Flutter", "Dart", "Mobile", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-12",
    title: "Estudaai",
    description: "App para organização de rotina de estudos com funcionalidades inteligentes.",
    longDescription: "📚 Estuda.AI é um app em desenvolvimento focado em organizar a rotina de estudos de forma simples, intuitiva e eficiente. Com funcionalidades inteligentes e um visual moderno, ele ajuda estudantes a otimizar seu tempo e aprendizado.",
    tags: ["C++", "AI", "Study", "Desktop"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
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
                <div className="flex items-center gap-4 mt-6">
                   <Button asChild size="sm" variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <Github className="mr-2 h-4 w-4"/>
                          Código
                      </a>
                   </Button>
                   <Button asChild size="sm">
                      <Link href={`/projetos/${project.id}`} scroll={false} onClick={(e) => {
                          e.stopPropagation();
                      }}>
                          <Eye className="mr-2 h-4 w-4"/>
                          Demo
                      </Link>
                   </Button>
                </div>
              </CardContent>
            </div>
          </Link>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export function PortfolioSection() {
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
