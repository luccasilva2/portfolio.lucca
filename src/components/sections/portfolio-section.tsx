"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section } from "../ui/section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Eye, Github } from "lucide-react";
import { Button } from "../ui/button";

const projects = [
  {
    id: "project-1",
    title: "Futuristic Web App",
    description: "An innovative platform for creative collaboration.",
    tags: ["Next.js", "Three.js", "AI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "E-commerce Redefined",
    description: "A cutting-edge online store with immersive 3D product views.",
    tags: ["React", "WebGL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Data Visualization Dashboard",
    description: "A powerful tool for visualizing complex datasets with interactive charts.",
    tags: ["D3.js", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "Generative Art Gallery",
    description: "An online gallery showcasing AI-generated art pieces.",
    tags: ["Genkit", "Framer Motion", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const image = PlaceHolderImages.find((img) => img.id === project.id);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="relative h-full w-full rounded-lg bg-card p-6 flex flex-col justify-between">
          <div className="relative w-full aspect-video rounded-md overflow-hidden mb-4">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              )}
          </div>
          <div>
            <h3 className="text-xl font-bold font-headline">{project.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
             <Button asChild size="sm" variant="outline">
                <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4"/>
                    Code
                </Link>
             </Button>
             <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank">
                    <Eye className="mr-2 h-4 w-4"/>
                    Live Demo
                </Link>
             </Button>
          </div>
      </div>
    </motion.div>
  );
};

export function PortfolioSection() {
  return (
    <Section id="projects" title="Selected Works" subtitle="A glimpse into my passion for creation and problem-solving.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
