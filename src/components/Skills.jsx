import { FiCode, FiCpu, FiDatabase, FiGlobe, FiTool } from "react-icons/fi";
import { skills } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = {
  Languages: FiCode,
  "AI, ML & Data Science": FiCpu,
  "Databases & Data Engineering": FiDatabase,
  "Web Development": FiGlobe,
  "Tools & Practices": FiTool,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-24">
      <div className="section-container">
        <SectionHeading eyebrow="What I Work With" title="Skills" />

        {/* Masonry-style columns so cards hug their own content height
            instead of stretching to match the tallest card in the row. */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {skills.map((group, i) => {
            const Icon = ICONS[group.category] ?? FiCode;
            return (
              <Reveal key={group.category} delay={i * 0.08} className="mb-5 break-inside-avoid">
                <div className="card group relative overflow-hidden p-6 transition-colors hover:border-accent/50">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-80" />

                  <div className="relative flex items-center gap-3">
                    <span className="rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 p-2.5 text-accent">
                      <Icon size={17} />
                    </span>
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-text">
                      {group.category}
                    </h3>
                  </div>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-text"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
