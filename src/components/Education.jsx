import { FiAward, FiStar, FiBookOpen } from "react-icons/fi";
import { education, certifications, achievements } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Background" title="Education & Certifications" />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education */}
          <Reveal>
            <div className="card h-full p-6">
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wide text-accent">
                Education
              </h3>
              <div className="space-y-5">
                {education.map((ed) => (
                  <div key={ed.school}>
                    <p className="font-semibold text-text">{ed.school}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted">{ed.period}</p>
                    <p className="mt-1.5 text-sm text-muted">{ed.degree}</p>
                    <p className="text-sm text-muted">
                      {ed.location}
                      {ed.detail ? ` · ${ed.detail}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={0.1}>
            <div className="card h-full p-6">
              <h3 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-accent">
                <FiStar size={15} /> Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Certifications: badge grid, scales well past 3+ entries */}
        <Reveal delay={0.15} className="mt-6">
          <div className="card p-6">
            <h3 className="mb-5 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-accent">
              <FiAward size={15} /> Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface-2 p-4 transition-colors hover:border-accent/40"
                >
                  <span className="mt-0.5 shrink-0 rounded-lg bg-accent/10 p-2 text-accent">
                    <FiBookOpen size={14} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug text-text">{cert.name}</p>
                    {cert.year && (
                      <p className="mt-0.5 font-mono text-xs text-muted">{cert.year}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
