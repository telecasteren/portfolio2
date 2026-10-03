import { Link, NavLink } from "react-router";

interface LinkButtonProps {
  type: "primary" | "secondary";
  children: string | React.ReactNode;
  href: string;
  external?: boolean;
}

export default function LinkButton({
  type,
  children,
  href,
  external,
}: LinkButtonProps) {
  const shared =
    "pt-3 pb-3 pr-5 pl-5 rounded-sm transition duration-200 ease-in-out cursor-pointer font-mono text-mono-label";
  const primary = "bg-accent text-bg hover:brightness-85";
  const secondary =
    "border border-border-strong bg-bg text-text hover:border-accent";

  return external ? (
    <Link
      target="_blank"
      rel="noreferrer"
      aria-label="external link"
      to={href}
      className={`${shared} ${type === "primary" ? `${primary}` : `${secondary}`}`}
    >
      {children}
    </Link>
  ) : (
    <NavLink
      aria-label="internal link"
      to={href}
      className={`${shared} ${type === "primary" ? `${primary}` : `${secondary}`}`}
    >
      {children}
    </NavLink>
  );
}
