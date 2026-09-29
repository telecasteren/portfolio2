import { Link, useParams } from "react-router";
import { getProject } from "@/data/projects";

export default function Projects() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project)
    return (
      <div className="font-mono text-mono-small text-text-muted">
        [ no projects ]
      </div>
    );

  return (
    <div id="projects">
      <Link to={`/projects/${project.slug}`}>
        <p className="text-accent">[ projects section ]</p>
      </Link>
    </div>
  );
}
