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
    repo: "https://github.com/telecasteren/bits-auctions",
    url: "https://bits.telecasternilsen.com",
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
    repo: "https://github.com/NoroffFEU/jsfw-2025-v1-teles_jsf_ca_2026",
    url: "https://shopnet.telecasternilsen.com",
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
    repo: "https://github.com/telecasteren/foodiegram/tree/css-frameworks",
    url: "missing_link",
  },
];

export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);
