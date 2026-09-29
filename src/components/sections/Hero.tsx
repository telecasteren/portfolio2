import { HeroCtas } from "@/components/HeroCtas";
import { AccentDot } from "@/components/AccentDot";

export default function Hero() {
  const intro = "< hi, there! I'm";
  const name = "Tele Caster Nilsen";
  const tagline = "Frontend developer and coffee nerd";
  const subtitle =
    "Notoriously curious about everything. Building software one coffee at a time, all things user centric.";

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
        Oslo - Norway
      </div>
    </div>
  );
}
