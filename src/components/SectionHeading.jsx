import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-text sm:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-muted">{description}</p>
      )}
    </Reveal>
  );
}
