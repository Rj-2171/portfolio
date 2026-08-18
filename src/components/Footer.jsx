import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-accent">
            <FiGithub size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent">
            <FiLinkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-accent">
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
