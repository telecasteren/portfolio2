import { Link, useParams } from "react-router";
import { getProject } from "@/data/projects";
import NotFound from "@/pages/NotFound";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  return (
    <article className="mx-auto">
      <Link to="/#projects">cd ../projects</Link>
      <h1 className="text-bg">PROJECT DETAILS</h1>
    </article>
  );
}
