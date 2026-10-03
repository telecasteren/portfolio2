import { Link } from "react-router";
import Tag from "@/components/layout/Tag";

interface CardProps {
  index: number;
  img: string;
  title?: string;
  content?: string;
  pages?: number;
  tags?: string[];
  slug?: string;
}

export default function Card({
  title,
  content,
  pages,
  img,
  tags,
  slug,
  index,
}: CardProps) {
  return (
    <div className="flex w-full flex-col rounded-md bg-surface">
      <div
        id="card-img"
        className="w-full overflow-hidden rounded-t-md bg-surface-raised"
      >
        {img ? (
          <img
            src={img}
            alt={title}
            className="aspect-16/10 w-full object-contain"
          />
        ) : (
          <p className="mx-auto p-4 text-center font-mono text-mono-small text-text-muted">
            [ project screenshot 16:10 ]
          </p>
        )}
      </div>

      <div id="card-content" className="flex flex-col gap-4 p-4">
        <span className="font-mono text-mono-small text-accent">
          0{index + 1} / 0{pages}
        </span>
        <Link
          to={`/projects/${slug}`}
          className="w-fit border-b border-transparent text-h3 hover:border-text"
        >
          {title}
        </Link>
        <p className="text-text-muted">{content}</p>
      </div>

      <div id="card-footer" className="mt-auto flex flex-col gap-4 p-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        )}
        <Link
          to={`/projects/${slug}`}
          className="w-fit border-b border-transparent font-mono text-mono-label text-accent hover:border-accent"
        >
          View project →
        </Link>
      </div>
    </div>
  );
}
