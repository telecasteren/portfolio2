export const ProjectTitle = ({
  text,
  customFont,
}: {
  text: string;
  customFont?: string;
}) => {
  return (
    <h1
      className={
        customFont ? `${customFont} text-h2 md:text-h1` : "text-h2 md:text-h1"
      }
    >
      {text}
    </h1>
  );
};
