"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiCss, SiHtml5, SiNodedotjs, SiPython, SiFlutter, SiFirebase,
  SiSupabase, SiMysql, SiMongodb, SiGit, SiDocker, SiLinux, SiN8N, SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const technologies = [
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: TbBrandReactNative, name: "React Native", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiHtml5, name: "HTML", color: "#E34F26" },
  { icon: SiCss, name: "CSS", color: "#1572B6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: FaJava, name: "Java", color: "#ED8B00" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiSupabase, name: "Supabase", color: "#3FCF8E" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiLinux, name: "Linux", color: "#FCC624" },
  { icon: SiN8N, name: "n8n", color: "#EA4B71" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

export function TechStackSection() {
  const { t } = useLanguage();
  const loop = [...technologies, ...technologies];

  return (
    <section id="tech" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow">
              <span className="mono text-primary/80">02</span> {t.techStack?.title}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-5xl">
              <span className="italic text-aurora">Stack</span> que uso no dia a dia
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            {t.techStack?.subtitle}
          </p>
        </motion.div>
      </div>

      {/* full-bleed marquee */}
      <div className="relative mask-fade-x">
        <div className="flex w-max gap-3 py-2 animate-marquee">
          {loop.map((tech, i) => (
            <div
              key={i}
              className="glass-soft hover-lift group flex items-center gap-3 rounded-full px-5 py-3"
            >
              <tech.icon className="h-5 w-5 shrink-0" style={{ color: tech.color }} />
              <span className="mono text-xs uppercase tracking-[0.18em] text-foreground/85">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
