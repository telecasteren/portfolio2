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
    <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-b-border bg-bg p-12 px-6 py-4 md:px-12 lg:px-30 lg:py-12">
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
            <li className="cursor-pointer hover:text-accent">
              <NavLink
                key={item.label}
                aria-label={`Go to ${item.label}`}
                to={item.hash}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
