import { useAlternativeImage } from "@/hooks/useAlternativeImage";
import type { Project } from "@/data/type";

interface ProjectGalleryProps {
  project: Project;
}

export const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  const { showAlt, setShowAlt, hasAlt, src } = useAlternativeImage({
    mainImage: project.coverImage,
    subImage: project.coverImage2,
  });

  return (
    <section
      id="project-gallery"
      aria-label="Project gallery section"
      className="w-full"
    >
      <div className="items-center self-stretch rounded-md">
        <img
          src={src}
          alt={project.title}
          className="rounded-md object-contain"
        />
        <span className="mt-2 flex justify-end text-mono-body italic">
          {project.caption}
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
    </section>
  );
};
