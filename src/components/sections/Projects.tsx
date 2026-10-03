import { projects } from "@/data/projects";
import Card from "@/components/layout/Card";
import Title from "@/components/layout/Title";
import Section from "@/components/layout/Section";

export default function Projects() {
  const projectList = projects;

  if (!projectList)
    return (
      <div className="mt-30 bg-surface-raised font-mono text-mono-small text-text-muted">
        [ no projects listed ]
      </div>
    );

  return (
    <Section id="projects" innerClasses="flex flex-col gap-12">
      <Title index={1} slug="SELECTED PROJECTS" title="Things I've built" />

      <div className="grid grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <Card
            key={index}
            index={index}
            title={project.title}
            content={project.subtitle}
            pages={projectList.length}
            img={project.coverImage}
            tags={project.stack}
            slug={project.slug}
          />
        ))}
      </div>
    </Section>
  );
}
