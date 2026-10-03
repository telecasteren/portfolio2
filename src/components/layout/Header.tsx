import { NavLink, Link } from "react-router";

export default function Header() {
  const span = "~/";
  const initials = "tcn";
  const navItems = [
    { label: "01. projects", hash: "/#projects" },
    { label: "02. about", hash: "/#about" },
    { label: "03. contact", hash: "/#contact" },
  ];

  return (
    <div className="flex w-full items-center justify-between border-b border-b-border bg-bg p-12 pr-30 pl-30">
      <Link
        aria-label="Navigate home"
        to="/"
        className="border-b border-transparent font-mono text-mono-body hover:border-b-accent"
      >
        <span className="text-accent">{span}</span>
        {initials}
      </Link>
      <nav aria-label="Navigation menu">
        <ul className="flex flex-row flex-wrap gap-8 font-mono text-mono-body text-text-muted">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              aria-label={`Go to ${item.label}`}
              to={item.hash}
            >
              <li className="cursor-pointer hover:text-accent">{item.label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}
