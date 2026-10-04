import LinkButton from "@/components/layout/LinkButton";

export const HeroLinks = () => {
  return (
    <div
      aria-label="Navigate to section links"
      className="flex flex-wrap items-center gap-4"
    >
      <LinkButton type="primary" href="/#projects" children="See my work ↓" />
      <LinkButton type="secondary" href="/#contact" children="Get in touch" />
    </div>
  );
};
