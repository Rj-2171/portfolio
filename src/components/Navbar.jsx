import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile } from "../data/resume";
import useActiveSection from "../hooks/useActiveSection";

const NAV_LINKS = [
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
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-mono text-lg font-semibold text-text"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent">&lt;</span>RJ
          <span className="text-accent">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link font-mono text-sm text-muted transition-colors hover:text-text ${
                  activeId === link.id ? "active text-text" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiGithub size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiLinkedin size={19} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
          >
            <FiDownload size={14} /> Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-text md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 font-mono text-sm text-muted hover:bg-surface hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-4 px-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
                <FiGithub size={19} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
                <FiLinkedin size={19} />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="ml-auto flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-sm text-text hover:border-accent hover:text-accent"
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
