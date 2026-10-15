import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile, stats, companies } from "../data/resume";

function useRotatingText(words, typingMs = 60, pauseMs = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? typingMs / 2 : typingMs
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingMs, pauseMs]);

  return text;
}

// "A, B, and C": reliable spacing since it's one plain string, not separate flex items.
function joinWithAnd(items) {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const roleText = useRotatingText(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background glow + grid texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob absolute -left-32 top-24 h-72 w-72 rounded-full bg-accent/15" />
        <div
          className="blob absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-accent-2/15"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-bg)_88%)]" />
      </div>

      <div className="section-container w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Text column */}
          <div>
            <motion.div
              {...fadeUp(0)}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-muted">{profile.availability}</span>
            </motion.div>

            <motion.p {...fadeUp(0.05)} className="mb-3 font-mono text-sm text-accent">
              Hi, my name is
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl font-extrabold leading-tight text-text sm:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              {...fadeUp(0.2)}
              className="mt-3 h-10 font-mono text-xl text-muted sm:text-2xl"
            >
              <span className="text-gradient font-semibold">{roleText}</span>
              <span className="animate-pulse text-accent">|</span>
            </motion.div>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-mono text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-surface px-6 py-3 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="mt-9 flex items-center gap-5">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-accent">
                <FiGithub size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-accent">
                <FiLinkedin size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted transition-colors hover:text-accent">
                <FiMail size={20} />
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              {...fadeUp(0.6)}
              className="mt-12 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-gradient text-2xl font-extrabold sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-tight text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-none"
          >
            <div className="relative mx-auto aspect-[2/3] w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent to-accent-2 opacity-20 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface p-2 shadow-xl shadow-slate-200/60">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full rounded-[1.4rem] object-cover"
                />
              </div>
              <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-accent/15" />
            </div>
          </motion.div>
        </div>

        {/* Trusted-experience strip */}
        <motion.div {...fadeUp(0.7)} className="mt-16 border-t border-border pt-8">
          <p className="font-mono text-sm text-muted">
            <span className="uppercase tracking-widest text-muted/70">Previously at </span>
            <span className="text-text">{joinWithAnd(companies)}</span>
          </p>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-muted hover:text-accent"
      >
        <FiArrowDown size={20} />
      </a>
    </section>
  );
}
