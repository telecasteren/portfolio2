import { me } from "@/data/me";

const cvUrl = me.links.cv;
const CV = "CV-tcn.pdf";

export const DownloadCVLink = () => {
  return (
    <a
      download={CV}
      aria-role="link"
      href={cvUrl}
      className="cursor-pointer rounded-sm border border-border-strong bg-bg pt-3 pr-5 pb-3 pl-5 font-mono text-mono-label text-text transition duration-200 ease-in-out hover:border-accent"
    >
      Download CV ↓
    </a>
  );
};
