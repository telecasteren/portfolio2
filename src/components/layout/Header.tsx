import { useScrollObserver } from "@/hooks/useScrollObserver";
import { Link } from "react-router";

const navItems = [
  { label: "01. projects", id: "projects" },
  { label: "02. about", id: "about" },
  { label: "03. contact", id: "contact" },
];
const ids = navItems.map((item) => item.id);

export default function Header() {
  const activeId = useScrollObserver(ids);

  const span = "~/";
  const initials = "tcn";

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-b-border bg-bg p-12 px-6 py-4 md:px-12 lg:px-30 lg:py-12">
      <Link
        aria-label="Navigate home"
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="border-b border-transparent font-mono text-mono-body hover:border-b-accent"
      >
        <span className="text-accent">{span}</span>
        {initials}
      </Link>
      <nav aria-label="Navigation menu">
        <ul className="flex flex-row flex-wrap gap-8 font-mono text-mono-body text-text-muted">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="current cursor-pointer hover:text-accent"
            >
              <Link
                aria-label={`Go to ${item.label}`}
                to={`/#${item.id}`}
                className={activeId === item.id ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
