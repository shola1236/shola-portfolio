"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Send, 
  FileText, 
  Moon, 
  Sun, 
  Code2, 
  Layout, 
  Globe, 
  Database, 
  ShieldCheck, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';

// --- Types & Configuration ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const DATA = {
  name: "Shola",
  email: "Sholaupdates@gmail.com",
  cvLink: "https://docs.google.com/document/d/1DN9irqCovBHt4dAu5iWmQD_MtiejPhVf/edit?usp=drivesdk",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  }
};

// --- Sub-Components ---

function Badge({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-200">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function ProjectCard({ title, description, tags, link }: Project) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group p-6 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-yellow-500">
          {title}
        </h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
          <ExternalLink size={18} />
        </a>
      </div>
      
      <p className="text-sm leading-relaxed mb-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mb-6">
        <a 
          href={link} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold rounded-lg hover:opacity-80 transition-opacity"
        >
          Explore
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// --- Main Page Component ---

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-600 dark:text-zinc-400 font-sans selection:bg-yellow-200 dark:selection:bg-zinc-800">
      
      {/* 1. Navigation */}
      <nav className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-zinc-200 dark:border-zinc-800">
             <span className="text-black font-bold text-xl">{DATA.name[0]}</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
            <a href={`mailto:${DATA.email}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-all text-zinc-800 dark:text-zinc-400"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* 2. Hero Section */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Hi, I'm {DATA.name} — <span className="text-zinc-500">A Web Developer & QA Specialist.</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl">
            I build high-performance web apps using modern technologies and specialized 
            testing frameworks. I specialize in creating seamless user experiences driven 
            by a keen eye for detail.
          </p>
        </motion.section>

        {/* 3. Tech Stack */}
        <section className="flex flex-wrap gap-3 mb-16">
          <Badge icon={<Code2 size={14} className="text-blue-500" />} label="TypeScript" />
          <Badge icon={<Layout size={14} className="text-cyan-500" />} label="React" />
          <Badge icon={<Globe size={14} className="text-zinc-800 dark:text-white" />} label="Next.js" />
          <Badge icon={<Cpu size={14} className="text-sky-500" />} label="Tailwind CSS" />
          <Badge icon={<Database size={14} className="text-blue-600" />} label="PostgreSQL" />
          <Badge icon={<ShieldCheck size={14} className="text-green-500" />} label="QA Testing" />
        </section>

        {/* 4. Action Buttons */}
        <section className="flex flex-wrap gap-4 mb-12">
          <a
            href={DATA.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all font-medium text-sm"
          >
            <FileText size={18} />
            Resume / CV
          </a>
          <a
            href={`mailto:${DATA.email}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-all font-medium text-sm"
          >
            <Send size={18} />
            Get in touch
          </a>
        </section>

        {/* 5. Projects Section */}
        <section id="projects" className="mb-16 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Featured Projects</h2>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <ProjectCard 
              title="Vantage Hype"
              description="An AI-powered engine that transforms low and boring phrases into high-energy AI developed hype phrases for Web3 community raiders, managers, and advertisers."
              tags={["OpenAI", "Next.js", "Tailwind"]}
              link="https://vantage-hype.vercel.app"
            />
          </div>
        </section>

        {/* 6. Socials */}
        <section className="flex gap-5 mb-16 text-zinc-400">
          <a href={DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            <Linkedin size={22} />
          </a>
          <a href={DATA.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            <Github size={22} />
          </a>
          <a href={`mailto:${DATA.email}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </section>

        <p className="text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-900 pt-8">
          Built with React & Framer Motion.
        </p>
      </main>
    </div>
  );
}
