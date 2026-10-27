"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, FileText, Moon, Sun, ArrowUpRight } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiRust,
  SiPython,
  SiSolidity,
  SiNodedotjs,
  SiTailwindcss,
  SiPuppeteer,
  SiX,
} from "react-icons/si";
import type { IconType } from "react-icons";

// --- Data ---
const DATA = {
  name: "Shola",
  navAvatar: "/you.jpeg",
  heroAvatar: "/emote.jpeg",
  email: "Sholaupdates@gmail.com",
  cvLink:
    "https://docs.google.com/document/d/1DN9irqCovBHt4dAu5iWmQD_MtiejPhVf/edit?usp=drivesdk",
  socials: {
    x: "https://x.com/dykshola",
    github: "https://github.com/shola1236",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

const STACK: { label: string; Icon: IconType; color: string }[] = [
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
  { label: "SvelteKit", Icon: SiSvelte, color: "#FF3E00" },
  { label: "Rust", Icon: SiRust, color: "currentColor" },
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "Solidity", Icon: SiSolidity, color: "#8A8AFF" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Puppeteer", Icon: SiPuppeteer, color: "#40B5A4" },
];

type Project = {
  title: string;
  role: string;
  status: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "Astraeus AI",
    role: "Co-founder & lead developer",
    status: "Live",
    description:
      "A crypto-native marketplace for AI tools. Creators upload and sell ML tools, buyers pay with crypto, and every tool runs in a browser-based WebGPU sandbox.",
    tags: ["Next.js", "TypeScript", "WebGPU", "Crypto payments"],
    link: "https://app.astraeusai.xyz",
    featured: true,
  },
  {
    title: "Naira Plays",
    role: "Founder & backend developer",
    status: "Live",
    description:
      "A gaming platform for Nigerian players, built around a single Naira wallet. I started it and I build the backend.",
    tags: ["Backend", "Payments", "Next.js"],
    link: "https://naija-silk.vercel.app",
  },
  {
    title: "Rocko Finance",
    role: "Consultant",
    status: "Consulting",
    description:
      "A DeFi lending product. I advise on how it works for users and how it gets built.",
    tags: ["DeFi", "Lending", "Product"],
  },
  {
    title: "Doux.finance",
    role: "Beta tester",
    status: "Beta",
    description:
      "Testing early builds and reporting bugs and rough edges before public launch.",
    tags: ["DeFi", "QA", "Beta testing"],
  },
  {
    title: "Vantage Hype",
    role: "Builder",
    status: "Live",
    description:
      "An AI engine that turns flat phrases into high-energy hype lines for Web3 community raiders.",
    tags: ["OpenAI", "Next.js", "Tailwind"],
    link: "https://vantage-hype.vercel.app",
  },
];

// --- Components ---
function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] transition hover:border-[hsl(var(--accent))]"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
      />
    </button>
  );
}

function StackChip({ label, Icon, color }: { label: string; Icon: IconType; color: string }) {
  return (
    <li className="flex items-center gap-2 rounded-lg border border-[hsl(var(--line))] bg-[hsl(var(--card))] px-3 py-2 text-sm font-medium text-[hsl(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[hsl(var(--muted))]">
      <Icon size={16} style={{ color }} aria-hidden />
      {label}
    </li>
  );
}

function StatusDot({ status }: { status: string }) {
  const color =
    status === "Live" ? "bg-emerald-500" : status === "Beta" ? "bg-sky-500" : "bg-amber-500";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--muted))]">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      {status}
    </span>
  );
}

function ProjectCard({ title, role, status, description, tags, link, featured }: Project) {
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const body = (
    <>
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
            {title}
          </h3>
          <p className="mt-0.5 text-sm text-[hsl(var(--muted))]">{role}</p>
        </div>
        <div className="flex items-center gap-3">
          <StatusDot status={status} />
          {link && (
            <ArrowUpRight
              size={18}
              className="text-[hsl(var(--muted))] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--foreground))]"
            />
          )}
        </div>
      </div>
      <p className={`mb-6 text-sm leading-relaxed ${featured ? "max-w-xl text-base" : ""}`}>
        {description}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-[hsl(var(--line))] px-2 py-0.5 text-xs text-[hsl(var(--muted))]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  const cls = `spotlight group block rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--card))] p-6 transition hover:border-[hsl(var(--muted))] ${
    featured ? "md:col-span-2 md:p-8" : ""
  }`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={featured ? "md:col-span-2" : ""}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" onMouseMove={onMove} className={cls}>
          {body}
        </a>
      ) : (
        <div onMouseMove={onMove} className={cls}>
          {body}
        </div>
      )}
    </motion.article>
  );
}

// --- Page ---
export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(true);

  // Sync with whatever the pre-paint script applied.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  const iconLink =
    "grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--card))] text-[hsl(var(--muted))] transition hover:-translate-y-0.5 hover:border-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]";

  return (
    <div className="min-h-screen font-sans">
      {/* Subtle top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
        style={{
          background:
            "radial-gradient(600px 240px at 50% 0%, hsl(var(--accent) / 0.10), transparent 70%)",
        }}
      />

      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-6">
          <img
            src={DATA.navAvatar}
            alt="Shola"
            className="h-10 w-10 rounded-xl border border-[hsl(var(--line))] bg-yellow-400 object-cover"
          />
          <div className="flex gap-5 text-sm font-medium">
            <a href="#stack" className="text-[hsl(var(--foreground))] transition hover:opacity-60">Stack</a>
            <a href="#projects" className="text-[hsl(var(--foreground))] transition hover:opacity-60">Projects</a>
            <a href={`mailto:${DATA.email}`} className="text-[hsl(var(--foreground))] transition hover:opacity-60">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href={DATA.socials.x} target="_blank" rel="noopener noreferrer" aria-label="Shola on X" className={`${iconLink} h-9 w-9`}>
            <SiX size={14} />
          </a>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <img
            src={DATA.heroAvatar}
            alt={DATA.name}
            className="mb-6 h-24 w-24 rounded-full border-2 border-[hsl(var(--line))] bg-yellow-400 object-cover shadow-lg"
          />
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-[hsl(var(--foreground))] md:text-6xl">
            Hi, I'm {DATA.name}.
            <span className="block text-[hsl(var(--muted))]">I build for web3 and AI.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">
            Web developer, QA specialist and founder. I ship fast, well-tested products, from
            marketplaces and payment flows to the backends behind them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${DATA.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--foreground))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--background))] transition hover:opacity-85"
            >
              <Send size={15} />
              Get in touch
            </a>
            <a
              href={DATA.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--card))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--foreground))] transition hover:border-[hsl(var(--muted))]"
            >
              <FileText size={15} />
              Resume
            </a>
          </div>
        </motion.section>

        {/* Stack */}
        <section id="stack" className="mb-16 scroll-mt-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-[hsl(var(--foreground))]">Stack</h2>
          <ul className="flex flex-wrap gap-2.5">
            {STACK.map((s) => (
              <StackChip key={s.label} {...s} />
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16 scroll-mt-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-[hsl(var(--foreground))]">Projects</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* Socials */}
        <section className="flex items-center gap-3 border-t border-[hsl(var(--line))] pt-8">
          <a href={DATA.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X" className={iconLink}>
            <SiX size={16} />
          </a>
          <a href={DATA.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
            <Github size={18} />
          </a>
          <a href={DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${DATA.email}`} aria-label="Email" className={iconLink}>
            <Mail size={18} />
          </a>
        </section>
      </main>
    </div>
  );
}
