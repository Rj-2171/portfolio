import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile } from "../data/resume";
import useActiveSection from "../hooks/useActiveSection";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-lg font-bold text-text">
          <span className="text-gradient">&lt;RJ/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-text px-4 py-2 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-85"
          >
            <FiDownload size={14} /> Resume
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-text lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <ul className="section-container flex flex-col py-3">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-surface-2 hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-5 px-3 py-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-accent">
                <FiGithub size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent">
                <FiLinkedin size={18} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-auto flex items-center gap-2 rounded-full bg-text px-4 py-2 font-mono text-sm font-semibold text-bg"
              >
                <FiDownload size={14} /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
