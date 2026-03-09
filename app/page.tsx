"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  Check, 
  Code2, 
  Globe, 
  Cpu, 
  Layout, 
  Database, 
  ShieldCheck,
  Github,
  Linkedin,
  Mail,
  Terminal
} from 'lucide-react';

export default function PortfolioPage() {
  const [copied, setCopied] = useState<boolean>(false);
  
  // Your Verified Credentials
  const name: string = "Shola Akinosi"; 
  const email: string = "Sholaupdates@gmail.com";
  const cvLink: string = "https://docs.google.com/document/d/1DN9irqCovBHt4dAu5iWmQD_MtiejPhVf/edit?usp=drivesdk&ouid=112740401476684133802&rtpof=true&sd=true";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-100 flex flex-col items-center justify-center p-8 overflow-hidden font-sans">
      {/* Vantage-Style Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <main className="relative z-10 max-w-xl w-full">
        {/* Profile Header */}
        <header className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="w-12 h-12 rounded-xl bg-white text-black mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <Terminal size={22} strokeWidth={2.5} />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            {name}
          </h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black">
            Web Developer & <span className="text-zinc-200">QA Specialist</span>
          </p>
        </header>

        {/* Technical Stack - Glassmorphism & SVG Icons */}
        <section className="mb-14 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
          <div className="flex flex-wrap gap-2.5">
            {[
              { name: 'TypeScript', icon: <Code2 size={12} /> },
              { name: 'Next.js', icon: <Globe size={12} /> },
              { name: 'React', icon: <Layout size={12} /> },
              { name: 'Tailwind', icon: <Cpu size={12} /> },
              { name: 'PostgreSQL', icon: <Database size={12} /> },
              { name: 'QA Testing', icon: <ShieldCheck size={12} /> }
            ].map((tech) => (
              <div 
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 cursor-default"
              >
                <span className="opacity-50 group-hover:opacity-100">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <footer className="flex flex-wrap gap-4 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {/* Resume Link */}
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/[0.04] backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-white/[0.08] transition-all duration-300 text-[11px] font-bold tracking-widest uppercase"
          >
            <FileText size={16} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
            Resume
          </a>

          {/* Email Copy Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full hover:bg-zinc-200 active:scale-95 transition-all duration-300 text-[11px] font-black tracking-widest uppercase shadow-xl"
          >
            {copied ? (
              <>
                <Check size={16} strokeWidth={3} className="text-green-600" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Get in touch</span>
              </>
            )}
          </button>

          {/* Minimal Social Links */}
          <div className="flex gap-5 ml-auto text-zinc-600">
            <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href={`mailto:${email}`} className="hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </footer>
      </main>
    </div>
  );
}
