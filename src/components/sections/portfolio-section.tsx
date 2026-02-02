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
import { useLanguage } from "@/components/language-provider";
import { projectsBase } from "@/lib/projects";

const ProjectCard = ({
  project,
}: {
  project: (typeof projectsBase)[0] & {
    title: string;
    description: string;
    longDescription: string;
    codeLabel: string;
    demoLabel: string;
  };
}) => {
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
                    {project.codeLabel}
                </a>
             </Button>
             <Button asChild size="sm" >
               <Link href={`/projetos/${project.id}`} scroll={false}>
                  <Eye className="mr-2 h-4 w-4"/>
                  {project.demoLabel}
                </Link>
             </Button>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export function PortfolioSection() {
  const { t } = useLanguage();
  const projects = projectsBase.map((project) => ({
    ...project,
    ...t.projects[project.id as keyof typeof t.projects],
    codeLabel: t.portfolio.code,
    demoLabel: t.portfolio.demo,
  }));

  return (
    <Section id="projects" title={t.portfolio.sectionTitle} subtitle={t.portfolio.sectionSubtitle}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" style={{perspective: '1000px'}}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
