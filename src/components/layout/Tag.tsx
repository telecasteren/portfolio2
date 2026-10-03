export default function Tag({ tag }: { tag: string }) {
  return (
    <div
      key={tag}
      className="rounded-sm border border-border bg-surface-raised px-2.5 py-1 font-mono text-mono-small text-text-muted"
    >
      {tag}
    </div>
  );
}
