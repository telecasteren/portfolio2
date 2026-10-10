import { useAlternativeImage } from "@/hooks/useAlternativeImage";
import type { Project } from "@/data/type";

interface ProjectDescriptionProps {
  project: Project;
}

export const ProjectDescription = ({ project }: ProjectDescriptionProps) => {
  const { showAlt, setShowAlt, hasAlt, src } = useAlternativeImage({
    mainImage: project.detailImage,
    subImage: project.detailImage2,
  });

  return (
    <section id="project-description" className="grid gap-20">
      <div
        id="project-goal"
        className="grid grid-cols-1 items-start gap-4 md:grid-cols-[200px_1fr] md:gap-12 lg:grid-cols-[280px_1fr] lg:gap-24"
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
              src={src}
              alt={`Detail image of ${project.title}`}
              className="rounded-md object-contain"
            />
            <span className="mt-2 flex justify-end text-mono-body italic">
              {project.detailCaption}
            </span>
            {hasAlt && (
              <button
                type="button"
                onClick={() => setShowAlt((prev) => !prev)}
                aria-pressed={showAlt}
                className="text-mono text-mono-body text-accent underline underline-offset-4"
              >
                {showAlt ? "Show dark theme" : "Show light theme"}
              </button>
            )}
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
