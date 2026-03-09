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

// --- Configuration & Data ---
const DATA = {
  name: "Shola",
  // Updated to your local image paths
  navAvatar: "/you.jpeg", 
  heroAvatar: "/emote.jpeg",
  email: "Sholaupdates@gmail.com",
  cvLink: "https://docs.google.com/document/d/1DN9irqCovBHt4dAu5iWmQD_MtiejPhVf/edit?usp=drivesdk",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  projects: [
    {
      title: "Vantage Hype",
      description: "An AI-powered engine that transforms low and boring phrases into high-energy AI developed hype phrases for Web3 community raiders.",
      tags: ["OpenAI", "Next.js", "Tailwind"],
      link: "https://vantage-hype.vercel.app"
    }
  ]
};

// --- Sub-Components ---

function Badge({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-md text-xs font-medium text-zinc-700 dark:text-zinc-200">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function ProjectCard({ title, description, tags, link }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-6 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition-all shadow-sm"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-yellow-500">
          {title}
        </h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="text-sm leading-relaxed mb-6 text-zinc-600 dark:text-zinc-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
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
      
      {/* 1. Navigation - Updated with you.jpeg */}
      <nav className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img 
            src={DATA.navAvatar} 
            alt="Profile" 
            className="w-10 h-10 rounded-xl object-cover bg-yellow-400 border border-zinc-200 dark:border-zinc-800 shadow-sm"
          />
          <div className="flex gap-6 text-sm font-bold tracking-tight">
            <a href="#work" className="text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">Work</a>
            <a href="#projects" className="text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">Projects</a>
            <a href={`mailto:${DATA.email}`} className="text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </div>
        
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-all text-zinc-800 dark:text-zinc-400"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-4 pb-24">
        {/* 2. Hero Section - Updated with emote.jpeg */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12"
        >
          <img 
            src={DATA.heroAvatar} 
            alt={DATA.name} 
            className="w-24 h-24 rounded-full object-cover bg-yellow-400 border-2 border-zinc-200 dark:border-zinc-800 mb-2 shadow-lg hover:scale-105 transition-transform cursor-pointer"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Hi, I'm {DATA.name} — <span className="text-zinc-500 font-medium">A Web Developer & QA Specialist.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-xl text-zinc-600 dark:text-zinc-400 font-medium">
            I build high-performance web apps using modern technologies and specialized 
            testing frameworks. I specialize in creating seamless user experiences.
          </p>
        </motion.section>

        {/* 3. Tech Stack */}
        <section className="flex flex-wrap gap-3 mb-16">
          <Badge icon={<Code2 size={14} className="text-blue-500" />} label="TypeScript" />
          <Badge icon={<Layout size={14} className="text-cyan-500" />} label="React" />
          <Badge icon={<Globe size={14} className="text-zinc-800 dark:text-white" />} label="Next.js" />
          <Badge icon={<ShieldCheck size={14} className="text-green-500" />} label="QA Testing" />
        </section>

        {/* 4. Action Buttons */}
        <section className="flex flex-wrap gap-4 mb-16">
          <a
            href={DATA.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all font-bold text-xs uppercase tracking-widest"
          >
            <FileText size={16} />
            Resume / CV
          </a>
          <a
            href={`mailto:${DATA.email}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-all font-bold text-xs uppercase tracking-widest"
          >
            <Send size={16} />
            Get in touch
          </a>
        </section>

        {/* 5. Projects Section */}
        <section id="projects" className="mb-16 space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">Featured Projects</h2>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {DATA.projects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </section>

        {/* 6. Socials */}
        <section className="flex gap-6 mb-16 text-zinc-400">
          <a href={DATA.socials.linkedin} className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href={DATA.socials.github} className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
          <a href={`mailto:${DATA.email}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Mail size={20} /></a>
        </section>

        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 border-t border-zinc-200 dark:border-zinc-900 pt-8">
          Built with React & Framer Motion.
        </p>
      </main>
    </div>
  );
}
