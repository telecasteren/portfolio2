interface TitleProps {
  index: number;
  slug: string;
  title: string | React.ReactNode;
  styles?: string;
}

export default function Title({ index, slug, title, styles }: TitleProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-mono-small text-text-muted">
        <span className="text-accent">// 0{index}</span> {slug}
      </p>{" "}
      <h2 className={`${styles ? styles : "text-h2 text-text"}`}>{title}</h2>
    </div>
  );
}
