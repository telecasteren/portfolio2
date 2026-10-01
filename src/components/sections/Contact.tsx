import Title from "@/components/layout/Title";
import { AccentDot } from "@/components/AccentDot";
import { Link } from "react-router";
import Button from "@/components/layout/Button";

export default function Contact() {
  const email = "nilsen.tele@proton.me";

  return (
    <div id="about" className="flex flex-col gap-4 pt-30">
      <Title
        index={3}
        slug="CONTACT"
        styles="text-h1 max-w-200"
        title={
          <>
            Let's build cool things together
            <AccentDot />
          </>
        }
      />

      <Link to={`mailto:${email}`} className="text-h2 text-accent">
        {email} ↗
      </Link>

      <div className="flex max-w-fit items-center gap-4">
        <Button type="secondary">Github ↗</Button>
        <Button type="secondary">LinkedIn ↗</Button>
        <Button type="secondary">Download CV ↓</Button>
      </div>
    </div>
  );
}
