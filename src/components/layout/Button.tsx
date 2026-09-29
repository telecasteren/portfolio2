interface ButtonProps {
  type: "primary" | "secondary";
  children: string;
  onClick?: () => void;
}

export default function Button({ type, children, onClick }: ButtonProps) {
  const sharedStyles =
    "pt-3 pb-3 pr-5 pl-5 rounded-sm hover:scale-98 transition duration-200 ease-in-out cursor-pointer";

  return (
    <button
      aria-role="button"
      onClick={onClick}
      className={`${sharedStyles} ${type === "primary" ? "bg-accent font-mono text-bg" : "border border-border-strong bg-bg font-mono text-text"}`}
    >
      {children}
    </button>
  );
}
