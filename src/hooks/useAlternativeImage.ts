import { useEffect, useState } from "react";

interface UseAlternativeImageProps {
  mainImage: string;
  subImage?: string;
}

export const useAlternativeImage = ({
  mainImage,
  subImage,
}: UseAlternativeImageProps) => {
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    if (subImage) new Image().src = subImage;
  }, [subImage]);

  const hasAlt = Boolean(subImage);
  const src = showAlt && subImage ? subImage : mainImage;

  return { showAlt, setShowAlt, hasAlt, src };
};
