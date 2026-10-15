import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project }) {
  return (
    <div className="card flex h-full flex-col p-6 transition-colors hover:border-accent/40 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-text">{project.title}</h3>
          {project.subtitle && (
            <p className="mt-0.5 text-sm text-accent">{project.subtitle}</p>
          )}
        </div>
        {project.year && (
          <span className="shrink-0 font-mono text-xs text-muted">{project.year}</span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 self-start font-mono text-xs font-semibold text-text transition-colors hover:text-accent"
        >
          <FiGithub size={14} /> View Code <FiArrowUpRight size={12} />
        </a>
      )}
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
          description="A mix of coursework, hackathons, and internship work across ML, data engineering, and full-stack development."
        />

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 0.08}
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
