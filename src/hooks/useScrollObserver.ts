import { useEffect, useState } from "react";

export const useScrollObserver = (ids: string[]): string | null => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          } else {
            setActiveId((prev) => (prev === entry.target.id ? null : prev));
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
