import type { Project } from "./type";

export const projects: Project[] = [
  {
    slug: "semester2",
    title: "Bits",
    subtitle: "This is Bits Listings",
    description: "This is Bits Listings",
    roles: ["Front-End Developer", "UX Designer", "Product Engineer"],
    stack: ["HTML", "Tailwind CSS", "Typescript"],
    year: "2025",
    image: "",
  },
  {
    slug: "jsframeworks",
    title: "Shopnet",
    subtitle: "This is Shopnet",
    description: "This is Shopnet",
    roles: ["Front-End Developer", "UX Designer", "Product Engineer"],
    stack: ["React", "Typescript", "Tanstack", "Redux Toolkit", "Zod"],
    year: "2026",
    image: "",
  },
  {
    slug: "cssframeworks",
    title: "FOODIEGRAM.",
    subtitle: "This is Foodiegram",
    description: "This is Foodiegram",
    roles: ["Front-End Developer", "UX Designer", "Product Engineer"],
    stack: ["HTML", "Tailwind CSS", "Typescript"],
    year: "2025",
    image: "",
  },
];

export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);
