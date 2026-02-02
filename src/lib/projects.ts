export type ProjectBase = {
  id: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projectsBase: ProjectBase[] = [
  {
    id: "project-1",
    tags: ["Dart", "Flutter", "AI", "No-Code"],
    liveUrl: "#",
    githubUrl: "https://github.com/luccasilva2/appQuanta",
  },
  {
    id: "project-2",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    liveUrl: "luccasilva2.github.io/Site_CH/",
    githubUrl: "https://github.com/luccasilva2/Site_CH",
  },
  {
    id: "project-3",
    tags: ["Python", "API", "Server", "AI"],
    liveUrl: "luccasilva2.github.io/appQuanta-server/",
    githubUrl: "https://github.com/luccasilva2/appQuanta-server",
  },
  {
    id: "project-4",
    tags: ["React", "Next.js", "Node.js"],
    liveUrl: "luccasilva2.github.io/portfolio.lucca/",
    githubUrl: "https://github.com/luccasilva2/portfolio.lucca",
  },
  {
    id: "project-5",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "luccasilva2.github.io/clinica-web/",
    githubUrl: "https://github.com/luccasilva2/clinica-web",
  },
  {
    id: "project-6",
    tags: ["HTML", "CSS", "Prototyping"],
    liveUrl: "luccasilva2.github.io/Sites",
    githubUrl: "https://github.com/luccasilva2/Sites",
  },
  {
    id: "project-7",
    tags: ["Python", "AI", "Machine Learning"],
    liveUrl: "luccasilva2.github.io/Minha_IA/",
    githubUrl: "https://github.com/luccasilva2/Minha_IA",
  },
  {
    id: "project-8",
    tags: ["C++", "AI", "Study", "Desktop"],
    liveUrl: "luccasilva2.github.io/Estudaai/",
    githubUrl: "https://github.com/luccasilva2/Estudaai",
  },
  {
    id: "project-9",
    tags: ["TypeScript", "React Native", "Finance"],
    liveUrl: "luccasilva2.github.io/Ativo-TCC/",
    githubUrl: "https://github.com/luccasilva2/Ativo-TCC",
  },
];
