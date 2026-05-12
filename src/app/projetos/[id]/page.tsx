"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { projectsBase } from "@/lib/projects";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/language-provider";

export default function ProjectPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const params = useParams();
  const projectId = params.id as string;
  const baseProject = projectsBase.find((p) => p.id === projectId);
  const projectCopy = t.projects[projectId as keyof typeof t.projects];
  const project = baseProject && projectCopy ? { ...baseProject, ...projectCopy } : null;
  const image = PlaceHolderImages.find((img) => img.id === projectId);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center text-foreground/80">
        {t.project.notFound}
      </div>
    );
  }

  return (
    <div
      onClick={() => router.back()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-4 backdrop-blur-2xl md:p-8"
    >
      <motion.article
        layoutId={`project-card-${projectId}`}
        onClick={(e) => e.stopPropagation()}
        className="glass relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl"
      >
        <button
          onClick={() => router.back()}
          aria-label={t.project.close}
          className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background/40 text-foreground transition-colors hover:bg-foreground/10"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
            <p className="mono mb-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Case study
            </p>
            <h1 className="font-display text-4xl tracking-tight md:text-6xl">
              <span className="italic text-aurora">{project.title}</span>
            </h1>
          </div>
        </div>

        <div className="p-7 md:p-12">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="mono rounded-full border border-foreground/10 bg-foreground/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground/85"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {project.longDescription}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-foreground/10 pt-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm transition-colors hover:border-foreground/30 hover:bg-foreground/5"
            >
              <Github className="h-4 w-4" />
              {t.project.viewSource}
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <ExternalLink className="h-4 w-4" />
              {t.project.visit}
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
