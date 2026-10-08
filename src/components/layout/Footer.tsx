import { NavLink } from "react-router";
import { me } from "@/data/me";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const name = me.name;
  const footerLinks = [
    { label: "Github ↗", href: me.links.github },
    {
      label: "LinkedIn ↗",
      href: me.links.linkedin,
    },
    { label: "Email ↗", href: me.email },
  ];

  const linkStyles =
    "border-b-2 border-transparent hover:border-b-border-strong text-mono-small font-mono text-text-muted";

  return (
    <footer
      aria-label="Footer navigation"
      className="flex w-full flex-col items-center gap-4 border-t border-t-border px-6 py-20 md:flex-row md:justify-between md:px-12 md:py-10 lg:px-30"
    >
      <NavLink aria-label="Navigate home" to="/" className={linkStyles}>
        © {currentYear} {name}
      </NavLink>
      <ul
        aria-label="Footer links menu"
        className="flex flex-row flex-wrap gap-6 text-text-muted"
      >
        {footerLinks.map((item) => (
          <li key={item.label} className={linkStyles}>
            <NavLink key={item.label} aria-label={item.label} to={item.href}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
