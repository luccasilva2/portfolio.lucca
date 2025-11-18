"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/components/sections/portfolio-section";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;
  const project = projects.find((p) => p.id === projectId);
  const image = PlaceHolderImages.find((img) => img.id === projectId);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.back();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [router]);


  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Projeto não encontrado.
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center">
      <motion.div
        layoutId={`project-card-${projectId}`}
        className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-lg overflow-y-auto"
      >
        <div className="p-8">
           <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground"
            onClick={() => router.back()}
          >
            <X className="h-6 w-6"/>
            <span className="sr-only">Fechar</span>
          </Button>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
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
          
          <h1 className="text-4xl font-bold font-headline text-gradient mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">{tag}</Badge>
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>

          <div className="flex items-center gap-4 mt-8">
             <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4"/>
                    Ver Código Fonte
                </a>
             </Button>
             <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4"/>
                    Visitar Projeto
                </a>
             </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
