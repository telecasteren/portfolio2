import type { Project } from "@/data/type";
import Tag from "@/components/layout/Tag";
import LinkButton from "@/components/layout/LinkButton";

interface ProjectMetaProps {
  project: Project;
}

export const ProjectMeta = ({ project }: ProjectMetaProps) => {
  const roles = Object.entries(project.roles).map(([key, value]) => (
    <p key={key}>{value}</p>
  ));

  const metaTitleStyles = "font-mono text-mono-body text-text-muted";

  return (
    <section
      id="project-meta"
      aria-label="Project meta section"
      className="flex-start flex flex-wrap justify-start gap-6 self-stretch md:justify-center md:gap-35"
    >
      <div>
        <h2 className={metaTitleStyles}>ROLE</h2>
        <div className="mt-3">{roles}</div>
      </div>

      <div>
        <h3 className={metaTitleStyles}>STACK</h3>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <Tag key={item} tag={item} />
          ))}
        </div>
      </div>

      <div>
        <h4 className={metaTitleStyles}>YEAR</h4>
        <p className="mt-3">{project.year}</p>
      </div>

      <div>
        <h5 className={metaTitleStyles}>LINKS</h5>
        <div className="mt-3 flex items-center gap-3">
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
        </div>
      </div>
    </section>
  );
};
