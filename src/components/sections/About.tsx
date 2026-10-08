import Title from "@/components/layout/Title";
import Section from "@/components/layout/Section";
import Tag from "@/components/layout/Tag";
import { me } from "@/data/me";

export default function About() {
  const lingos = me.skills.languages;
  const frameworks = me.skills.frameworks;
  const tools = me.skills.tools;
  const misc = me.skills.misc;

  const sharedStyles = "flex flex-wrap items-center gap-2";

  return (
    <Section
      id="about"
      divider
      innerClasses="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24"
    >
      <div id="about-text" className="flex flex-col gap-6">
        <Title index={2} slug="ABOUT" title="A bit about me" />
        <p className="text-body text-text-muted">{me.bio}</p>
        <p className="font-mono text-mono-small text-text-muted">
          Motto: <span className="rainbow">{me.motto}</span>
        </p>

        <div className="font-mono text-accent">$ skills --list</div>

        <div className={sharedStyles}>
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
        className="flex aspect-5/6 w-full max-w-100 flex-col items-center justify-center self-center rounded-md border border-border"
      >
        <div id="overlay" className="group relative w-full">
          <img src={me.portrait} alt={me.name} className="w-full rounded-md" />
          <p className="absolute inset-0 z-50 flex items-center justify-center rounded-md bg-surface-raised/80 text-center font-mono text-mono-small text-text-muted opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100">
            [ portrait of shy person 5:6 ]
          </p>
        </div>
      </div>
    </Section>
  );
}
