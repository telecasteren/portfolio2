import { useState } from "react";
import { useLocation } from "react-router";
import { prodBaseUrl } from "@/lib/config";
import * as Popover from "@radix-ui/react-popover";
import { Share2 } from "lucide-react";

export const ShareLink = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const { pathname: currentUrl } = useLocation();
  const url = `${prodBaseUrl}${currentUrl}`;

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(url);
  };

  return (
    <Popover.Root>
      {" "}
      <Popover.Trigger
        asChild
        className="cursor-pointer rounded-sm border border-border-strong bg-bg pt-3 pr-5 pb-3 pl-5 font-mono text-mono-label text-text transition duration-200 ease-in-out hover:border-accent"
      >
        <div className="flex items-center gap-1 text-text-muted">
          <Share2 /> Share
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          className="flex items-center gap-4 rounded-md bg-surface-raised p-4"
        >
          <input value={url} readOnly className="rounded-sm bg-bg p-1" />
          <button
            onClick={() => handleCopy()}
            className="cursor-pointer rounded-sm border border-border-strong bg-bg px-3 py-2 font-mono hover:border-accent"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
