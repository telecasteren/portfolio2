import { projects } from "@/data/projects";
import Card from "@/components/layout/Card";

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
      <div className="flex flex-col gap-4">
        <p className="text-mono-small text-text-muted">
          <span className="text-accent">// 01</span> SELECTED PROJECTS
        </p>
        <h2 className="text-h2 text-text">Things I've built</h2>
      </div>

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
