import { useScrollObserver } from "@/hooks/useScrollObserver";
import { useState } from "react";
import { Link } from "react-router";

const navItems = [
  { label: "01. projects", id: "projects" },
  { label: "02. about", id: "about" },
  { label: "03. contact", id: "contact" },
];
const ids = navItems.map((item) => item.id);

export default function Header() {
  const activeId = useScrollObserver(ids);
  const [menuOpen, setMenuOpen] = useState(false);

  const span = "~/";
  const initials = "tcn";

  return (
    <div className="fixed top-0 z-150 flex w-full items-center justify-between border-b border-b-border bg-bg p-12 px-6 py-4 md:px-12 lg:px-30 lg:py-12">
      <Link
        aria-label="Navigate home"
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="border-b border-transparent font-mono text-mono-body hover:border-b-accent"
      >
        <span className="text-accent">{span}</span>
        {initials}
      </Link>

      <button
        type="button"
        className="w-fit p-2 text-text md:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menue" : "Open menu"}
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          role="img"
          aria-label="Menu icon"
          aria-hidden="true"
        >
          {menuOpen ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute top-full left-0 w-full border-b border-b-border bg-bg px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4 font-mono text-body text-text-muted">
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
      )}

      <nav
        id="desktop-menu"
        aria-label="Navigation menu"
        className="hidden md:block"
      >
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
