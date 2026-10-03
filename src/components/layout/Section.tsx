interface SectionProps {
  id?: string;
  divider?: boolean;
  className?: string;
  innerClasses?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  divider,
  className = "py-30",
  innerClasses = "",
  children,
}: SectionProps) {
  return (
    <section
      className={`px-6 md:px-30 ${divider ? "border-t border-border" : ""} ${className}`}
    >
      <div
        id={id}
        className={`mx-auto max-w-content scroll-mt-12 ${innerClasses}`}
      >
        {children}
      </div>
    </section>
  );
}
