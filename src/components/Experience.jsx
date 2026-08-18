import { experience } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Career So Far"
          title="Experience"
          description="Where I've worked and what I built while I was there."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]" />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1}>
                <li className="relative pl-8 sm:pl-10">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:h-[18px] sm:w-[18px]" />

                  <div className="card p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold text-text">
                        {job.role} <span className="text-accent">· {job.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-muted">{job.period}</span>
                    </div>

                    <ul className="mt-3 space-y-2">
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
                          className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
