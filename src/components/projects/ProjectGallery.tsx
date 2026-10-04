import type { Project } from "@/data/type";

interface ProjectGalleryProps {
  project: Project;
}

export const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  return (
    <section
      id="project-gallery"
      aria-label="Project gallery section"
      className="w-full"
    >
      <div className="items-center self-stretch rounded-md">
        <img
          src={project.coverImage}
          alt={project.title}
          className="rounded-md object-contain"
        />
        <span className="mt-2 flex justify-end text-mono-body italic">
          {project.caption}
        </span>
      </div>
    </section>
  );
};
