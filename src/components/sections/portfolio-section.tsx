"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section } from "../ui/section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Eye, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    id: "project-1",
    title: "App Web Futurista",
    description: "Uma plataforma inovadora para colaboração criativa, explorando o futuro das interfaces digitais com interatividade 3D e IA.",
    longDescription: "Este projeto foi um mergulho profundo em tecnologias de ponta. O objetivo era criar uma experiência de usuário que parecesse ter saído de um filme de ficção científica. Usamos Next.js para a estrutura, react-three-fiber para renderizar modelos 3D interativos em tempo real e Genkit para integrar funcionalidades de IA generativa, como a criação de conteúdo dinâmico. O desafio foi manter a performance alta enquanto entregávamos uma experiência visualmente rica e complexa.",
    tags: ["Next.js", "Three.js", "AI", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "E-commerce Redefinido",
    description: "Uma loja online de ponta com visualizações imersivas de produtos em 3D.",
    longDescription: "Reimaginamos a experiência de compra online. Em vez de imagens estáticas, criamos um showroom virtual onde os clientes podem interagir com produtos em 3D, girando, aproximando e até mesmo personalizando cores e materiais em tempo real. A plataforma foi construída com React e WebGL, com um backend robusto para gerenciar o catálogo e um pipeline de otimização de modelos 3D para garantir tempos de carregamento rápidos na web. A integração com Stripe facilita um checkout seguro e transparente.",
    tags: ["React", "WebGL", "Stripe", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Dashboard de Visualização de Dados",
    description: "Uma ferramenta poderosa para visualizar conjuntos de dados complexos com gráficos interativos.",
    longDescription: "Transformar dados brutos em insights acionáveis foi o foco deste projeto. Construímos um dashboard customizável que permite aos usuários explorar grandes volumes de dados através de gráficos dinâmicos e interativos. Utilizamos D3.js para o poder de visualização, combinado com React para a reatividade da interface. A integração com Firebase Firestore permite a sincronização de dados em tempo real entre múltiplos usuários, tornando-o uma ferramenta colaborativa poderosa.",
    tags: ["D3.js", "Firebase", "Tailwind CSS", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "Galeria de Arte Gerativa",
    description: "Uma galeria online que exibe peças de arte geradas por IA.",
    longDescription: "Este projeto explora a interseção entre arte e inteligência artificial. Criamos uma plataforma onde a IA gera obras de arte únicas com base em parâmetros fornecidos pelo usuário. Cada peça é um NFT que pode ser adquirido. O front-end, construído com Next.js e Framer Motion, oferece uma experiência de galeria fluida e elegante, enquanto o Genkit orquestra a geração de imagens no backend. A Vercel foi usada para garantir a escalabilidade e entrega rápida em todo o mundo.",
    tags: ["Genkit", "Framer Motion", "Vercel", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const image = PlaceHolderImages.find((img) => img.id === project.id);

  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
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
                <Link href={`/projetos/${project.id}`} scroll={false}>
                    <Eye className="mr-2 h-4 w-4"/>
                    Demo
                </Link>
             </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function PortfolioSection() {
  return (
    <Section id="projects" title="Trabalhos Selecionados" subtitle="Um vislumbre da minha paixão pela criação e resolução de problemas.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
