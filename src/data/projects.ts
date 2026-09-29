import type { Project } from "./type";

export const projects: Project[] = [
  { slug: "", title: "", role: "", stack: [], year: "", image: "" },
  { slug: "", title: "", role: "", stack: [], year: "", image: "" },
  { slug: "", title: "", role: "", stack: [], year: "", image: "" },
];

export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);
