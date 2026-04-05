import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "projeto-1",
    title: "Nome do Projeto 1",
    description: "Descrição breve do projeto 1.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://projeto1.com",
    github: "https://github.com/felipe-augusto/projeto-1",
    image: "/images/projects/projeto-1.png",
  },
  {
    id: "projeto-2",
    title: "Nome do Projeto 2",
    description: "Descrição breve do projeto 2.",
    stack: ["React", "Node.js", "PostgreSQL"],
    url: "https://projeto2.com",
    github: "https://github.com/felipe-augusto/projeto-2",
    image: "/images/projects/projeto-2.png",
  },
];
