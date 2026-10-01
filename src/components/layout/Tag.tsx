export default function Tag({ tag }: { tag: string }) {
  return (
    <div
      key={tag}
      className="rounded-sm border border-border bg-surface-raised p-2.5 text-mono-small text-text-muted"
    >
      {tag}
    </div>
  );
}
