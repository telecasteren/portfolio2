import { useScrollObserver } from "@/hooks/useScrollObserver";
import { navItems, ids } from "@/components/layout/nav-menu/navItems";
import { Link } from "react-router";

export const MobileMenu = () => {
  const activeId = useScrollObserver(ids);
  return (
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
  );
};
