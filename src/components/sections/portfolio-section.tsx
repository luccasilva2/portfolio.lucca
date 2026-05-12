"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Eye, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section } from "../ui/section";
import { useLanguage } from "@/components/language-provider";
import { projectsBase } from "@/lib/projects";

type LocalizedProject = (typeof projectsBase)[number] & {
  title: string;
  description: string;
  longDescription: string;
  codeLabel: string;
  demoLabel: string;
};

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: LocalizedProject;
  index: number;
  featured?: boolean;
}) {
  const image = PlaceHolderImages.find((img) => img.id === project.id);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-6deg", "6deg"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
      className={`group relative ${featured ? "md:col-span-2" : ""}`}
    >
      <motion.div
        layoutId={`project-card-${project.id}`}
        style={{ transform: "translateZ(40px)" }}
        className="glass relative h-full overflow-hidden rounded-3xl"
      >
        <Link href={`/projetos/${project.id}`} scroll={false} className="block">
          <div className={`relative w-full overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
            {image && (
              <Image
                src={image.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="mono rounded-full border border-foreground/20 bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-widest backdrop-blur">
                {String(index + 1).padStart(2, "0")} / Work
              </span>
            </div>
            <div className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-background/40 text-foreground backdrop-blur transition-transform group-hover:rotate-12">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </Link>

        <div className="relative flex flex-col gap-4 p-6 md:p-7">
          <div>
            <h3 className="font-display text-2xl tracking-tight md:text-3xl">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
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
          <div className="mt-2 flex items-center gap-2 border-t border-foreground/10 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3.5 py-1.5 text-xs transition-colors hover:border-foreground/30 hover:bg-foreground/5"
            >
              <Github className="h-3.5 w-3.5" />
              {project.codeLabel}
            </a>
            <Link
              href={`/projetos/${project.id}`}
              scroll={false}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <Eye className="h-3.5 w-3.5" />
              {project.demoLabel}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const { t } = useLanguage();
  const projects: LocalizedProject[] = projectsBase.map((p) => ({
    ...p,
    ...t.projects[p.id as keyof typeof t.projects],
    codeLabel: t.portfolio.code,
    demoLabel: t.portfolio.demo,
  }));

  return (
    <Section
      id="projects"
      index="06"
      title={t.portfolio.sectionTitle}
      eyebrow="Selected Work"
      subtitle={t.portfolio.sectionSubtitle}
    >
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        style={{ perspective: "1400px" }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}
