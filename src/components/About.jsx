import { FiMapPin, FiBriefcase, FiCode, FiCompass } from "react-icons/fi";
import { profile } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FACTS = [
  { icon: FiMapPin, label: "Based in", value: profile.location },
  { icon: FiBriefcase, label: "Experience", value: "3+ years, Deloitte & HighRadius" },
  { icon: FiCode, label: "Targeting", value: "SWE/Data/ML/AI roles & technical PM roles" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Introduction" title="About Me" />

        <div className="grid gap-10 md:grid-cols-5 md:items-start">
          <Reveal className="md:col-span-3">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary}
            </p>

            {profile.pmNote && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <span className="mt-0.5 shrink-0 rounded-lg bg-accent/10 p-2 text-accent">
                  <FiCompass size={16} />
                </span>
                <p className="text-sm leading-relaxed text-muted">{profile.pmNote}</p>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className="card space-y-5 p-6">
              {FACTS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-lg bg-accent/10 p-2 text-accent">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted">
                      {label}
                    </p>
                    <p className="text-sm text-text">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
