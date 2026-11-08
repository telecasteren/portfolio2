import { useState } from "react";
import { Link } from "react-router";
import {
  DesktopMenu,
  MobileMenu,
  OpenMobileMenu,
} from "@/components/layout/nav-menu/index";

export default function Header() {
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

      <OpenMobileMenu
        menuOpen={menuOpen}
        openMenu={() => setMenuOpen((open) => !open)}
      />
      {menuOpen && <MobileMenu />}
      <DesktopMenu />
    </div>
  );
}
