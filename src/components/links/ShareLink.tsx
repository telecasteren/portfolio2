import { Share2 } from "lucide-react";
import LinkButton from "../layout/LinkButton";
import { useLocation } from "react-router";
import {
  // devBaseUrl, -- use in dev mode
  prodBaseUrl,
} from "@/lib/config";

export const ShareLink = () => {
  const { pathname: currentUrl } = useLocation();
  const url = `${prodBaseUrl}${currentUrl}`;

  return (
    <LinkButton external type="secondary" href={url}>
      <div className="flex items-center gap-1 text-text-muted">
        <Share2 /> Share
      </div>
    </LinkButton>
  );
};
