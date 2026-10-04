import Section from "@/components/layout/Section";
import { HeroLinks } from "@/components/links/HeroLinks";
import { AccentDot } from "@/components/AccentDot";
import { LocationDot } from "@/components/LocationDot";
import { me } from "@/data/me";

export default function Hero() {
  const intro = "> hi, there! I'm";
  const name = me.name;
  const tagline = me.tagline;
  const subtitle = me.subtitle;
  const location = me.location;

  return (
    <Section
      id="hero"
      divider
      className="pt-28 pb-10 md:pt-40 md:pb-30"
      innerClasses="grid gap-8"
    >
      <p className="font-mono text-mono-body text-accent">{intro}</p>
      <h1 className="max-w-220 text-display">
        {name}
        <AccentDot /> {tagline}
        <AccentDot />
      </h1>

      <p className="max-w-180 text-body-1 text-text-muted">{subtitle}</p>

      <HeroLinks />

      <div className="flex items-center gap-2 text-mono-small text-text-muted">
        <LocationDot />
        {location}
      </div>
    </Section>
  );
}
