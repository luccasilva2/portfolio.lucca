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
    id: "project-3",
    tags: ["Python", "API", "Server", "AI"],
    liveUrl: "luccasilva2.github.io/appQuanta-server/",
    githubUrl: "https://github.com/luccasilva2/appQuanta-server",
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
