export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  roles: string[] | string;
  stack: string[];
  year: string;
  url?: string;
  repo?: string;
  image: string;
};
