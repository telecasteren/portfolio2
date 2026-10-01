import { HeroCtas } from "@/components/HeroCtas";
import { AccentDot } from "@/components/AccentDot";
import { me } from "@/data/me";

export default function Hero() {
  const intro = "> hi, there! I'm";
  const name = me.name;
  const tagline = me.tagline;
  const subtitle = me.subtitle;
  const location = me.location;

  return (
    <div id="hero" className="grid gap-8">
      <p className="font-mono text-mono-body text-accent">{intro}</p>
      <h1 className="max-w-220 text-display">
        {name}
        <AccentDot /> {tagline}
        <AccentDot />
      </h1>

      <p className="max-w-180 text-body-1 text-text-muted">{subtitle}</p>

      <HeroCtas />

      <div className="flex items-center gap-2 text-mono-small text-text-muted">
        <img src="src/assets/Ellipse.svg" />
        {location}
      </div>
    </div>
  );
}
