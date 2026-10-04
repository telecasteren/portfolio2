import { Link } from "react-router";
import { me } from "@/data/me";
import Title from "@/components/layout/Title";
import Section from "@/components/layout/Section";
import { AccentDot } from "@/components/AccentDot";
import LinkButton from "@/components/layout/LinkButton";
import { DownloadCVLink } from "@/components/links/DownloadCVLink";

export default function Contact() {
  const email = me.email;
  const linkedIn = me.links.linkedin;
  const github = me.links.github;

  return (
    <Section id="contact" divider innerClasses="flex flex-col gap-8">
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

      <Link
        to={`mailto:${email}`}
        className="w-fit text-h3 text-accent md:text-h2"
      >
        {email} ↗
      </Link>

      <div className="flex max-w-fit flex-wrap items-center gap-4">
        <LinkButton
          external
          type="secondary"
          href={github}
          children="Github ↗"
        />
        <LinkButton
          external
          type="secondary"
          href={linkedIn}
          children="LinkedIn ↗"
        />
        <DownloadCVLink />
      </div>
    </Section>
  );
}
