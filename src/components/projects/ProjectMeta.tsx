import type { Project } from "@/data/type";
import Tag from "@/components/layout/Tag";
import LinkButton from "@/components/layout/LinkButton";

interface ProjectMetaProps {
  project: Project;
}

export const ProjectMeta = ({ project }: ProjectMetaProps) => {
  const roles = Array.isArray(project.roles) ? project.roles : [project.roles];

  const metaTitleStyles = "font-mono text-mono-body text-text-muted";

  return (
    <section
      id="project-meta"
      aria-labelledBy="project-meta-title"
      className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:px-0 lg:grid-cols-4"
    >
      <h2 id="project-meta-title" className="sr-only">
        Project details
      </h2>

      <dl className="contents">
        <div>
          <dt className={`${metaTitleStyles} mb-3`}>ROLE</dt>
          {roles.map((role) => (
            <dd key={role}>{role}</dd>
          ))}
        </div>

        <div>
          <dt className={metaTitleStyles}>STACK</dt>
          <dd className="flex flex-wrap items-center gap-2">
            {project.stack.map((item) => (
              <Tag key={item} tag={item} />
            ))}
          </dd>
        </div>

        <div>
          <dt className={metaTitleStyles}>YEAR</dt>
          <dd>{project.year}</dd>
        </div>

        <div>
          <dt className={metaTitleStyles}>LINKS</dt>
          <dd className="flex flex-wrap items-center gap-3">
            <LinkButton
              external
              type="primary"
              href={project.url}
              children="Live site ↗"
            />
            <LinkButton
              external
              type="secondary"
              href={project.repo}
              children="Github repo ↗"
            />
          </dd>
        </div>
      </dl>
    </section>
  );
};
