import type { Project } from "@/data/type";

interface ProjectDescriptionProps {
  project: Project;
}

export const ProjectDescription = ({ project }: ProjectDescriptionProps) => {
  return (
    <section id="project-description" className="grid gap-20">
      <div
        id="project-goal"
        className="grid grid-cols-[280px_1fr] items-start gap-24"
      >
        <p className="grid gap-2 text-h3">
          <span className="font-mono text-mono-small text-accent">01</span>The
          goal
        </p>

        <p className="text-body-1 text-text-muted">{project.goal}</p>
      </div>

      <div
        id="project-process"
        className="grid grid-cols-[280px_1fr] items-start gap-24"
      >
        <p className="grid gap-2 text-h3">
          <span className="font-mono text-mono-small text-accent">02</span>The
          process
        </p>

        <div className="grid gap-8">
          <p className="text-body-1 text-text-muted">{project.process}</p>

          <div>
            <img
              src={project.detailImage}
              alt={`Detail image of ${project.title}`}
              className="h-auto w-full rounded-md"
            />

            <span className="mt-2 flex justify-end text-mono-body italic">
              {project.detailCaption}
            </span>
          </div>
        </div>
      </div>

      <div
        id="project-lesson"
        className="grid grid-cols-[280px_1fr] items-start gap-24"
      >
        <p className="grid gap-2 text-h3">
          <span className="font-mono text-mono-small text-accent">03</span>What
          I learned
        </p>

        <p className="text-body-1 text-text-muted">{project.lesson}</p>
      </div>
    </section>
  );
};
