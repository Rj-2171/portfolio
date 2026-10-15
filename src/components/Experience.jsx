import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Where I've Worked"
          title="Experience"
          description="Three years across data engineering, backend development, and cross-functional delivery."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[1.1rem] top-2 bottom-2 hidden w-px bg-border sm:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1}>
                <div className="relative flex gap-5">
                  <div className="hidden shrink-0 sm:block">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-accent shadow-sm">
                      <FiBriefcase size={16} />
                    </div>
                  </div>

                  <div className="card flex-1 p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-text">{job.role}</h3>
                        <p className="text-sm text-accent">{job.company}</p>
                      </div>
                      <p className="font-mono text-xs text-muted">{job.period}</p>
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
