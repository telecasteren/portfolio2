import { Link } from "react-router";

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
    <div className="flex max-w-96 min-w-fit flex-1 flex-col items-start gap-3 rounded-md bg-surface">
      <div
        id="card-img"
        className="h-40 w-full overflow-hidden rounded-md bg-surface-raised object-contain"
      >
        {img ? (
          <img src={img} alt={title} className="w-full" />
        ) : (
          <p className="mt-12 text-center font-mono text-mono-small text-text-muted">
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

      <div id="card-footer" className="flex flex-col gap-4 p-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-sm border border-border bg-surface-raised p-2.5 text-mono-small text-text-muted"
              >
                {tag}
              </div>
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
