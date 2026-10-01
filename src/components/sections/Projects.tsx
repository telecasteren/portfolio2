import { projects } from "@/data/projects";
import Card from "@/components/layout/Card";
import Title from "@/components/layout/Title";

export default function Projects() {
  const projectList = projects;

  if (!projectList)
    return (
      <div className="pt-30 font-mono text-mono-small text-text-muted">
        [ no projects listed ]
      </div>
    );

  return (
    <div
      id="projects"
      className="flex flex-col flex-wrap items-start gap-12 self-stretch pt-30"
    >
      <Title index={1} slug="SELECTED PROJECTS" title="Things I've built" />

      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        {projectList.map((project, index) => (
          <Card
            key={index}
            index={index}
            title={project.title}
            content={project.subtitle}
            pages={projectList.length}
            img={project.image}
            tags={project.stack}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
}
