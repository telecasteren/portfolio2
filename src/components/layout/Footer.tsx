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
      className="mt-30 flex w-full items-center justify-between border-t border-t-border p-12 pr-30 pl-30"
    >
      <NavLink aria-label="Navigate home" to="/" className={linkStyles}>
        © {currentYear} {name}
      </NavLink>
      <ul
        aria-label="Footer links menu"
        className="flex flex-row flex-wrap gap-6 text-text-muted"
      >
        {footerLinks.map((item) => (
          <NavLink key={item.label} aria-label={item.label} to={item.href}>
            <li className={linkStyles}>{item.label}</li>
          </NavLink>
        ))}
      </ul>
    </footer>
  );
}
