import type { Project } from "@/data/type";
import { NavLink } from "react-router";
import { ProjectTitle } from "@/components/layout/ProjectTitle";
import { ShareLink } from "@/components/links/ShareLink";

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <section
      id="project-header"
      aria-label="Project header section"
      className="grid gap-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <NavLink
          to="/#projects"
          className="w-fit border-b border-transparent font-mono text-mono-label text-text-muted hover:border-text-muted"
        >
          ← cd ../projects
        </NavLink>

        <ShareLink />
      </div>
      <p className="font-mono text-mono-small text-accent">
        0{project.id} / 03
      </p>
      <ProjectTitle text={project.title} />
      <p className="max-w-200">{project.description}</p>
    </section>
  );
};
