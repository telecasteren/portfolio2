import Button from "@/components/layout/Button";

export const HeroCtas = () => {
  return (
    <div
      aria-label="Call-to-action buttons"
      className="flex items-center gap-4"
    >
      <Button type="primary" children="See my work ↓" />
      <Button type="secondary" children="Get in touch" />
    </div>
  );
};
