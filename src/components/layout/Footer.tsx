import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const name = "Tele Caster Nilsen";
  const footerLinks = [
    { label: "Github ↗", href: "https://github.com/telecasteren" },
    {
      label: "LinkedIn ↗",
      href: "www.linkedin.com/in/tele-caster-nilsen-7002b9249",
    },
    { label: "Email ↗", href: "mailto:nilsen.tele@proton.me" },
  ];

  const linkStyles =
    "border-b-2 border-transparent hover:border-b-border-strong text-mono-small font-mono text-text-muted";

  return (
    <footer
      aria-role="navigation"
      className="mt-30 flex w-full items-center justify-between border-t border-t-border p-12 pr-30 pl-30"
    >
      <Link aria-label="Navigate home" to="/" className={linkStyles}>
        © {currentYear} {name}
      </Link>
      <ul
        aria-label="Footer links menu"
        className="flex flex-row flex-wrap gap-6 text-text-muted"
      >
        {footerLinks.map((item) => (
          <Link aria-label={item.label} to={item.href}>
            <li className={linkStyles}>{item.label}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
}
