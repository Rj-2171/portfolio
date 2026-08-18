import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project }) {
  return (
    <div className="card group relative flex h-full flex-col overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-25px_var(--color-accent)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent-2 opacity-70" />

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-text">{project.title}</h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="shrink-0 rounded-lg border border-border p-1.5 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <FiGithub size={14} />
          </a>
        )}
      </div>
      {project.subtitle && (
        <p className="mt-0.5 text-xs font-medium text-accent">{project.subtitle}</p>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="font-mono text-xs text-muted">{project.year}</span>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-mono text-xs text-text transition-colors group-hover:text-accent"
          >
            View code
            <FiArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="What I've Built"
          title="Projects"
          description="A mix of ML, data engineering, and full-stack work, built solo and with teams."
        />

        {/* flex-wrap + justify-center: a full row of 3 lays out normally, and any
            trailing row with fewer cards (e.g. the last 2 of 5) centers itself
            instead of hugging the left edge with a lopsided gap. */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.06}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
