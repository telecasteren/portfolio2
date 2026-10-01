import Title from "@/components/layout/Title";
import Tag from "@/components/layout/Tag";
import { me } from "@/data/me";

export default function About() {
  const lingos = me.skills.languages;
  const frameworks = me.skills.frameworks;
  const tools = me.skills.tools;
  const misc = me.skills.misc;

  const sharedStyles = "flex flex-wrap items-center gap-3";

  return (
    <div id="about" className="grid w-full grid-cols-2 gap-24 pt-30">
      <div id="about-text" className="flex flex-col gap-6">
        <Title index={2} slug="ABOUT" title="A bit about me" />
        <p className="text-body text-text-muted">{me.bio}</p>

        <div className="font-mono text-accent">$ skills --list</div>

        <div className="flex flex-wrap items-center gap-3">
          {lingos.map((l) => (
            <Tag key={l} tag={l} />
          ))}
        </div>

        <div className={sharedStyles}>
          {frameworks.map((f) => (
            <Tag key={f} tag={f} />
          ))}
        </div>

        <div className={sharedStyles}>
          {tools.map((t) => (
            <Tag key={t} tag={t} />
          ))}
        </div>

        <div className={sharedStyles}>
          {misc.map((m) => (
            <Tag key={m} tag={m} />
          ))}
        </div>
      </div>

      <div
        id="about-img"
        className="h-140 w-120 rounded-md border border-border bg-surface-raised"
      />
    </div>
  );
}
