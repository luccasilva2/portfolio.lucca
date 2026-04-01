"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss,
  SiHtml5,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiLinux,
  SiN8N,
  SiFigma,
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

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            <span className="text-gradient">{t.techStack?.title || "Tech Stack"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.techStack?.subtitle || "Tecnologias que domino e uso no dia a dia"}
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
              animate={{ x: [0, -2000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {/* Double the items for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/10 flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <tech.icon
                      className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300"
                      style={{ color: tech.color }}
                    />
                    <span className="text-[10px] md:text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
