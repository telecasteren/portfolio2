export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  caption?: string;
  description: string;
  roles: string[] | string;
  stack: string[];
  year: string;
  url: string;
  repo: string;
  coverImage: string;
  detailImage: string;
  goal: string;
  process: string;
  lesson: string;
};
