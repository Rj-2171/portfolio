import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
    icon: FiLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="I'm open to SWE, Data, ML/AI & TPM roles, plus interesting collaborations. Feel free to reach out."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                className="card group flex flex-col items-center gap-3 p-6 text-center transition-colors hover:border-accent/50"
              >
                <span className="rounded-xl bg-accent/10 p-3 text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">{label}</p>
                  <p className="mt-1 break-all text-xs text-muted">{value}</p>
                </div>
                <span className="flex items-center gap-1 font-mono text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-accent">
                  Open <FiArrowUpRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
