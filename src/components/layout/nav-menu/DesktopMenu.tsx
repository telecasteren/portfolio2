import { useScrollObserver } from "@/hooks/useScrollObserver";
import { navItems, ids } from "@/components/layout/nav-menu/navItems";
import { Link } from "react-router";

export const DesktopMenu = () => {
  const activeId = useScrollObserver(ids);
  return (
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
  );
};
