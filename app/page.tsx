"use client";

import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Send, 
  FileText, 
  Moon,
  Code2,
  Layout,
  Globe,
  Database,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function PortfolioPage() {
  const name = "Shola";
  const email = "Sholaupdates@gmail.com";
  const cvLink = "https://docs.google.com/document/d/1DN9irqCovBHt4dAu5iWmQD_MtiejPhVf/edit?usp=drivesdk";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-sans selection:bg-zinc-800">
      {/* 1. Navigation Bar */}
      <nav className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Avatar Placeholder - Matches the yellow circle in your reference */}
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden border-2 border-zinc-800">
             <span className="text-black font-bold text-xl">S</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <button className="p-2 rounded-lg border border-zinc-800 hover:bg-zinc-900 transition-colors">
          <Moon size={18} />
        </button>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* 2. Hero Section */}
        <section className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm {name} — <span className="text-zinc-500">A Web Developer & QA Specialist.</span>
          </h1>
          
          <p className="text-lg leading-relaxed max-w-2xl">
            I build high-performance web apps using modern technologies and specialized 
            testing frameworks. I specialize in creating seamless user experiences driven 
            by a keen eye for detail.
          </p>
        </section>

        {/* 3. Tech Stack Badges */}
        <section className="flex flex-wrap gap-3 mb-16">
          <Badge icon={<Code2 size={14} className="text-blue-400" />} label="TypeScript" />
          <Badge icon={<Layout size={14} className="text-cyan-400" />} label="React" />
          <Badge icon={<Globe size={14} className="text-white" />} label="Next.js" />
          <Badge icon={<Cpu size={14} className="text-sky-400" />} label="Tailwind CSS" />
          <Badge icon={<Database size={14} className="text-blue-600" />} label="PostgreSQL" />
          <Badge icon={<ShieldCheck size={14} className="text-green-400" />} label="QA Testing" />
        </section>

        {/* 4. Action Buttons */}
        <section className="flex flex-wrap gap-4 mb-12">
          <a
            href={cvLink}
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-white rounded-lg hover:bg-zinc-800 transition-all font-medium text-sm"
          >
            <FileText size={18} />
            Resume / CV
          </a>
          <button
            onClick={() => window.location.href = `mailto:${email}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg hover:bg-zinc-200 transition-all font-medium text-sm"
          >
            <Send size={18} />
            Get in touch
          </button>
        </section>

        {/* 5. Socials */}
        <section className="flex gap-5 mb-16 text-zinc-500">
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={22} /></a>
          <a href="#" className="hover:text-white transition-colors"><Github size={22} /></a>
          <a href={`mailto:${email}`} className="hover:text-white transition-colors"><Mail size={22} /></a>
        </section>

        {/* 6. Footer-style Text */}
        <p className="text-sm text-zinc-500 border-t border-zinc-900 pt-8">
          You can explore my projects, view my work experience, or contact me.
        </p>
      </main>
    </div>
  );
}

// Custom Badge Component to match the reference style
function Badge({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-md text-sm font-medium text-zinc-200">
      {icon}
      <span>{label}</span>
    </div>
  );
}
