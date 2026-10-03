import { useParams } from "react-router";
import { getProject } from "@/data/projects";
import NotFound from "@/pages/NotFound";
import { Divider } from "@/components/layout/Divider";

import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectDescription } from "@/components/projects/ProductDescription";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  return (
    <article className="mx-auto grid gap-16 px-6 py-10 md:p-30 md:pt-15">
      <ProjectHeader project={project} />
      <ProjectGallery project={project} />

      <Divider />

      <ProjectMeta project={project} />

      <Divider />

      <ProjectDescription project={project} />
    </article>
  );
}
