"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Apple } from "lucide-react";

interface Project {
  id: string;
  title: string;
  year: string;
  desc: string;
  pill: string;
  tags: string[];
  mockupType: "mon5majeur" | "celestial" | "football-tilted" | "clearsite" | "saharan" | "fitfuelz" | "gwaupp";
}

const largeProjectsList: Project[] = [
  {
    id: "mon5majeur",
    title: "Mon5majeur",
    year: "2026",
    desc: "Track live football with AI-powered match predictions, real-time stats, and smart league analytics at your fingertips.",
    pill: "AI Fintech",
    tags: ["App Development", "UI/UX Design"],
    mockupType: "mon5majeur"
  },
  {
    id: "celestial",
    title: "Football League",
    year: "2026",
    desc: "Track live football with AI-powered match predictions, real-time stats, and smart league analytics at your fingertips.",
    pill: "AI Fintech",
    tags: ["App Development", "UI/UX Design"],
    mockupType: "celestial"
  },
  {
    id: "football",
    title: "Football League",
    year: "2026",
    desc: "Track live football with AI-powered match predictions, real-time stats, and smart league analytics at your fingertips.",
    pill: "AI Fintech",
    tags: ["App Development", "UI/UX Design"],
    mockupType: "football-tilted"
  },
  {
    id: "clearsite",
    title: "Clearsite",
    year: "2026",
    desc: "Track live football with AI-powered match predictions, real-time stats, and smart league analytics at your fingertips.",
    pill: "AI Fintech",
    tags: ["Web Development", "UI/UX Design"],
    mockupType: "clearsite"
  }
];

const smallProjectsList: Project[] = [
  {
    id: "saharan",
    title: "Saharan",
    year: "2026",
    desc: "Track live football with AI-powered match predictions, real-time stats, and smart league analytics at your fingertips.",
    pill: "AI Fintech",
    tags: ["App Development", "UI/UX Design"],
    mockupType: "saharan"
  },
  {
    id: "fitfuelz",
    title: "Fitfuelz",
    year: "2025",
    desc: "Track live football with AI-powered match predictions, real-time stats, and smart league analytics at your fingertips.",
    pill: "AI Fintech",
    tags: ["App Development", "UI/UX Design"],
    mockupType: "fitfuelz"
  },
  {
    id: "gwaupp",
    title: "GWAUPP",
    year: "2026",
    desc: "Track live football with AI-powered match predictions, real-time stats, and smart league analytics at your fingertips.",
    pill: "AI Fintech",
    tags: ["App Development", "UI/UX Design"],
    mockupType: "gwaupp"
  }
];

export default function Projects() {
  const p1 = largeProjectsList[0];
  const p2 = largeProjectsList[1];
  const p3 = largeProjectsList[2];
  const p4 = largeProjectsList[3];

  return (
    <section id="projects" className="py-24 bg-background px-6 md:px-12 lg:px-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Title Section */}
        <div className="flex items-center justify-center w-full relative py-6">
          <div className="h-[2px] bg-accent/80 flex-grow max-w-[20%] md:max-w-[30%] lg:max-w-[38%]" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-[0.2em] px-4 md:px-8 shrink-0 uppercase">
            PROJECTS
          </h2>
          <div className="h-[2px] bg-accent/80 flex-grow max-w-[20%] md:max-w-[30%] lg:max-w-[38%]" />
        </div>

        {/* 1. Large 12-Column Staggered Grid (Row 1 & 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (col-span-7) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col space-y-16 lg:space-y-24">
            
            {/* Project 1: Mon5majeur (Wide, Full Width in col-span-7) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col space-y-6 group"
            >
              {/* Card Image Area */}
              <div className="relative w-full h-[380px] lg:h-auto lg:aspect-[1.25/1] overflow-hidden bg-black border border-[#575757] flex items-center justify-center transition-all duration-500 hover:border-accent/30 rounded-lg">
                <div className="absolute top-6 left-6 z-20">
                  <span className="border border-accent bg-black text-accent text-[9px] font-black px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    {p1.pill}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#080809] overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
                  <svg className="absolute inset-0 w-full h-full stroke-orange-500/10 stroke-[0.5] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="100%" x2="50%" y2="0" />
                    <line x1="100%" y1="100%" x2="50%" y2="0" />
                    <line x1="0" y1="50%" x2="50%" y2="0" />
                    <line x1="100%" y1="50%" x2="50%" y2="0" />
                  </svg>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(234,88,12,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,88,12,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
                    <span className="text-amber-650/30 text-xs md:text-sm font-black tracking-[0.4em] uppercase">MON5MAJEUR</span>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                    <span className="text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">Overview</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                  {p1.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="border border-white/10 bg-black/60 text-white/80 text-[8px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute z-10 flex justify-center w-full transition-transform duration-500 group-hover:scale-105 bottom-0 scale-95 lg:scale-100">
                  <SmartphoneMockup type={p1.mockupType} />
                </div>
              </div>

              {/* Text Area */}
              <div className="flex flex-col space-y-3 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent transition-colors">
                    {p1.title}
                  </h3>
                  <span className="text-zinc-500 font-bold text-xs md:text-sm">{p1.year}</span>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                  {p1.desc}
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Play size={10} fill="currentColor" /> Play Store
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Apple size={10} /> App Store
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Project 3: Football League (Tilted, Width scaled to 5/12 of total grid container width) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[71.4%] flex flex-col space-y-6 group"
            >
              {/* Card Image Area */}
              <div className="relative w-full h-[380px] lg:h-auto lg:aspect-[1.05/1] overflow-hidden bg-black border border-[#575757] flex items-center justify-center transition-all duration-500 hover:border-accent/30 rounded-lg">
                <div className="absolute top-6 left-6 z-20">
                  <span className="border border-accent bg-black text-accent text-[9px] font-black px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    {p3.pill}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#050811] overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_100%] pointer-events-none" />
                  <div className="absolute top-6 right-6 pointer-events-none">
                    <span className="text-zinc-500/80 text-[10px] font-black tracking-widest uppercase">Football League</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                  {p3.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="border border-white/10 bg-black/60 text-white/80 text-[8px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute z-10 flex justify-center w-full transition-transform duration-500 group-hover:scale-105 bottom-[5%] rotate-[-10deg] scale-[0.85] lg:scale-90">
                  <SmartphoneMockup type={p3.mockupType} />
                </div>
              </div>

              {/* Text Area */}
              <div className="flex flex-col space-y-3 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent transition-colors">
                    {p3.title}
                  </h3>
                  <span className="text-zinc-500 font-bold text-xs md:text-sm">{p3.year}</span>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                  {p3.desc}
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Play size={10} fill="currentColor" /> Play Store
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Apple size={10} /> App Store
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column (col-span-5, Staggered offset lg:mt-24) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col space-y-16 lg:space-y-24 lg:mt-24">
            
            {/* Project 2: Football League (Celestial) (Narrow, Full Width in col-span-5) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col space-y-6 group"
            >
              {/* Card Image Area */}
              <div className="relative w-full h-[380px] lg:h-auto lg:aspect-[1.05/1] overflow-hidden bg-black border border-[#575757] flex items-center justify-center transition-all duration-500 hover:border-accent/30 rounded-lg">
                <div className="absolute top-6 left-6 z-20">
                  <span className="border border-accent bg-black text-accent text-[9px] font-black px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    {p2.pill}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#060607] overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none font-serif text-white/5 text-[5rem] md:text-[6.5rem] tracking-tight leading-none">
                    Celestial
                  </div>
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[18%] pointer-events-none" 
                    style={{
                      clipPath: 'polygon(15% 0%, 25% 12%, 40% 6%, 58% 15%, 72% 4%, 88% 18%, 100% 100%, 0% 100%)',
                      background: 'linear-gradient(to bottom, #3f3f46, #18181b 80%)',
                    }}
                  />
                  <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-[110px] h-[12px] bg-black/70 blur-md rounded-full pointer-events-none" />
                </div>

                <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                  {p2.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="border border-white/10 bg-black/60 text-white/80 text-[8px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute z-10 flex justify-center w-full transition-transform duration-500 group-hover:scale-105 bottom-[14%] scale-90 lg:scale-95">
                  <SmartphoneMockup type={p2.mockupType} />
                </div>
              </div>

              {/* Text Area */}
              <div className="flex flex-col space-y-3 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent transition-colors">
                    {p2.title}
                  </h3>
                  <span className="text-zinc-500 font-bold text-xs md:text-sm">{p2.year}</span>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                  {p2.desc}
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Play size={10} fill="currentColor" /> Play Store
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Apple size={10} /> App Store
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Project 4: Clearsite (Wide, Width scaled to 7/12, translated -28.57% left to align right edge) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[140%] lg:-translate-x-[28.57%] flex flex-col space-y-6 group"
            >
              {/* Card Image Area */}
              <div className="relative w-full h-[380px] lg:h-auto lg:aspect-[1.25/1] overflow-hidden bg-black border border-[#575757] flex items-center justify-center transition-all duration-500 hover:border-accent/30 rounded-lg">
                <div className="absolute top-6 left-6 z-20">
                  <span className="border border-accent bg-black text-accent text-[9px] font-black px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    {p4.pill}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#080808] overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-600/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none font-serif text-white/5 text-[5rem] md:text-[7rem] font-bold tracking-[0.2em] leading-none uppercase">
                    Clearsite
                  </div>
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[18%] pointer-events-none" 
                    style={{
                      clipPath: 'polygon(10% 0%, 25% 10%, 42% 5%, 60% 12%, 78% 3%, 92% 14%, 100% 100%, 0% 100%)',
                      background: 'linear-gradient(to bottom, #4b5563, #18181b 70%)',
                    }}
                  />
                  <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-[110px] h-[12px] bg-black/70 blur-md rounded-full pointer-events-none" />
                </div>

                <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                  {p4.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="border border-white/10 bg-black/60 text-white/80 text-[8px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute z-10 flex justify-center w-full transition-transform duration-500 group-hover:scale-105 bottom-[14%] scale-90 lg:scale-95">
                  <SmartphoneMockup type={p4.mockupType} />
                </div>
              </div>

              {/* Text Area */}
              <div className="flex flex-col space-y-3 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent transition-colors">
                    {p4.title}
                  </h3>
                  <span className="text-zinc-500 font-bold text-xs md:text-sm">{p4.year}</span>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                  {p4.desc}
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Play size={10} fill="currentColor" /> Play Store
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Apple size={10} /> App Store
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* 2. Small 3-Column Responsive Grid (Row 3, Horizontally Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {smallProjectsList.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group flex flex-col space-y-6"
            >
              {/* Card Mockup Area with explicit size ratio aspect-[1.2/1] */}
              <div className="relative w-full h-[320px] md:h-auto md:aspect-[1.2/1] overflow-hidden bg-black border border-[#575757] flex items-center justify-center transition-all duration-500 hover:border-accent/30 rounded-lg">
                
                {/* Pill in top-left */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="border border-accent bg-black text-accent text-[8px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {proj.pill}
                  </span>
                </div>

                {/* Background rendering for small mockup types */}
                {proj.mockupType === "saharan" && (
                  <div className="absolute inset-0 bg-[#07131b] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-600/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none font-sans font-black text-cyan-500/10 text-3xl md:text-4xl tracking-[0.2em] leading-none uppercase">
                      SaHaRan
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
                      <span className="text-white/20 text-[8px] font-bold tracking-[0.2em] uppercase">Overview</span>
                    </div>
                  </div>
                )}

                {proj.mockupType === "fitfuelz" && (
                  <div className="absolute inset-0 bg-[#130707] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute top-10 left-0 right-0 text-center pointer-events-none">
                      <span className="text-red-655/20 text-xs md:text-sm font-black tracking-[0.3em] uppercase">FITFUELZ</span>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
                      <span className="text-white/20 text-[8px] font-bold tracking-[0.2em] uppercase">Overview</span>
                    </div>
                  </div>
                )}

                {proj.mockupType === "gwaupp" && (
                  <div className="absolute inset-0 bg-[#040c08] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:20px_100%] pointer-events-none" />
                    <div className="absolute top-5 right-5 pointer-events-none">
                      <span className="text-emerald-500/40 text-[9px] font-black tracking-widest uppercase">GWAUPP</span>
                    </div>
                  </div>
                )}

                {/* Bottom-left Tag list inside card */}
                <div className="absolute bottom-5 left-5 z-20 flex gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="border border-white/10 bg-black/60 text-white/80 text-[7px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Phone mockup scaled down slightly for small cards */}
                <div className="absolute z-10 flex justify-center w-full transition-transform duration-500 group-hover:scale-95 bottom-[-15%] md:bottom-[-20%] lg:bottom-[-22%] scale-[0.75] md:scale-80 lg:scale-85">
                  <SmartphoneMockup type={proj.mockupType} />
                </div>

              </div>

              {/* Card Meta / Text */}
              <div className="flex flex-col space-y-3 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-white group-hover:text-accent transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-zinc-550 font-bold text-xs">{proj.year}</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed font-medium">
                  {proj.desc}
                </p>

                {/* Play/App Store buttons */}
                <div className="flex gap-2.5 pt-1">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[8px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Play size={9} fill="currentColor" /> Play Store
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[8px] font-black text-white uppercase tracking-widest transition-all cursor-pointer">
                    <Apple size={9} /> App Store
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* Smartphone Mockup CSS Renderer */
function SmartphoneMockup({ type }: { type: Project["mockupType"] }) {
  let screenBg = "bg-zinc-900";
  let contentElement: React.ReactNode = null;

  switch (type) {
    case "mon5majeur":
      screenBg = "bg-[#0c0c0e]";
      contentElement = <Mon5majeurScreen />;
      break;
    case "celestial":
      screenBg = "bg-[#0a0a0c]";
      contentElement = <CelestialScreen />;
      break;
    case "football-tilted":
      screenBg = "bg-[#0a0a0c]";
      contentElement = <FootballScreen />;
      break;
    case "clearsite":
      screenBg = "bg-white";
      contentElement = <ClearsiteScreen />;
      break;
    case "saharan":
      screenBg = "bg-[#07131b]";
      contentElement = <SaharanScreen />;
      break;
    case "fitfuelz":
      screenBg = "bg-[#130707]";
      contentElement = <FitfuelzScreen />;
      break;
    case "gwaupp":
      screenBg = "bg-[#040c08]";
      contentElement = <GwauppScreen />;
      break;
  }

  return (
    <div className="relative w-[170px] h-[340px] bg-black border-4 border-zinc-800 rounded-[26px] p-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex-shrink-0 z-10 select-none">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-b-lg z-20 flex items-center justify-center">
        <div className="w-6 h-0.5 bg-zinc-800 rounded-full" />
      </div>

      {/* Screen Frame */}
      <div className={`w-full h-full ${screenBg} rounded-[18px] overflow-hidden border border-zinc-900`}>
        {contentElement}
      </div>
    </div>
  );
}

/* App Screens components */
const Mon5majeurScreen = () => (
  <div className="w-full h-full bg-[#0c0c0e] text-white flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />
    
    <div className="flex justify-between items-center px-1 mb-2">
      <span className="text-[7px] font-bold text-zinc-500">Rate 10</span>
      <div className="w-6 h-3 bg-zinc-800 rounded-full flex items-center justify-center">
        <span className="text-[5px] font-bold text-orange-500">PRO</span>
      </div>
    </div>

    <div className="bg-[#18181b] border border-white/5 rounded-lg p-2 space-y-1.5 mb-2">
      <div className="flex justify-between items-center">
        <span className="text-[6px] font-bold text-zinc-400 uppercase tracking-wider">With Global Leagues</span>
        <span className="text-[5px] text-zinc-500">2026</span>
      </div>
      <div className="text-xs font-black tracking-tight text-white leading-none">MON5MAJEUR</div>
      <div className="text-[6px] text-zinc-400 leading-normal">Track and manage your fantasy sports teams with AI insights.</div>
      
      <button className="w-full py-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded text-[7px] font-black uppercase tracking-wider text-white shadow-md">
        Join Active League
      </button>
    </div>

    <div className="grid grid-cols-2 gap-1.5 mb-2">
      <div className="bg-[#18181b]/60 border border-white/[0.03] rounded p-1.5 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] text-orange-500 font-bold leading-none">+</span>
        <span className="text-[5px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Join League</span>
      </div>
      <div className="bg-[#18181b]/60 border border-white/[0.03] rounded p-1.5 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] text-orange-500 font-bold leading-none">+</span>
        <span className="text-[5px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Create League</span>
      </div>
    </div>

    <div className="space-y-1 mt-auto">
      <div className="text-[6px] font-black text-zinc-500 uppercase tracking-wider">Top Matches Today</div>
      <div className="bg-[#18181b]/40 border border-white/[0.02] rounded p-1 flex justify-between items-center text-[6px]">
        <span className="text-zinc-300">Inter FC</span>
        <span className="text-orange-500 font-bold">VS</span>
        <span className="text-zinc-300">Monaco FC</span>
        <span className="bg-zinc-800 px-1 py-0.5 rounded text-[5px] text-zinc-400">Join</span>
      </div>
    </div>
  </div>
);

const CelestialScreen = () => (
  <div className="w-full h-full bg-[#0a0a0c] text-white flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />

    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-1">
        <div className="w-3.5 h-3.5 rounded-full bg-zinc-800 border border-white/10" />
        <span className="text-[6px] text-zinc-400 font-semibold">Active User</span>
      </div>
      <span className="text-[6px] text-accent font-bold">CELESTIAL</span>
    </div>

    <div className="bg-[#121215] border border-white/5 rounded-lg p-2 space-y-1 mb-2 relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-12 h-12 bg-blue-500/10 rounded-full blur-lg" />
      
      <div className="flex justify-between items-center text-[5px] text-zinc-500 font-bold uppercase tracking-wider">
        <span>Active Match</span>
        <span className="text-accent">Live</span>
      </div>
      <div className="text-[8px] font-black text-white">Aston Villa vs Arsenal</div>
      <div className="flex items-baseline gap-1">
        <span className="text-xs font-black text-accent">1 - 2</span>
        <span className="text-[5px] text-zinc-500">76' Min</span>
      </div>
    </div>

    <div className="bg-[#121215]/80 border border-white/[0.03] rounded-lg p-2 space-y-1">
      <div className="text-[6px] font-bold text-zinc-400 uppercase tracking-wider">Win Probability</div>
      <div className="flex gap-1 items-end h-8">
        {[20, 35, 45, 60, 50, 65, 80].map((h, i) => (
          <div key={i} className="flex-1 bg-accent/20 hover:bg-accent transition-colors rounded-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex justify-between text-[5px] text-zinc-500">
        <span>AST</span>
        <span>DRAW</span>
        <span>ARS</span>
      </div>
    </div>

    <div className="mt-auto border-t border-white/[0.05] pt-1.5 flex justify-around text-[5px] text-zinc-500 font-bold uppercase">
      <span className="text-white">Home</span>
      <span>Stats</span>
      <span>Leagues</span>
    </div>
  </div>
);

const FootballScreen = () => (
  <div className="w-full h-full bg-[#0a0a0c] text-white flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />

    <div className="flex justify-between items-center mb-3">
      <span className="text-[6px] text-zinc-400 font-bold uppercase tracking-wider">Lineup Creator</span>
      <span className="px-1 py-0.5 bg-green-500/10 text-green-400 rounded text-[5px] font-semibold">Active</span>
    </div>

    <div className="bg-emerald-950/20 border border-emerald-500/10 rounded-lg p-2 mb-2">
      <div className="text-[5px] text-emerald-400 font-bold uppercase tracking-wider mb-1">Squad Roster</div>
      <div className="space-y-1">
        {[
          { name: "K. De Bruyne", pos: "MID", selected: true },
          { name: "E. Haaland", pos: "FWD", selected: true },
          { name: "V. van Dijk", pos: "DEF", selected: false },
        ].map((player, idx) => (
          <div key={idx} className="flex items-center justify-between p-1 bg-[#121215]/60 border border-white/[0.03] rounded text-[6px]">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="text-zinc-300">{player.name}</span>
            </div>
            <span className={player.selected ? "text-accent font-bold" : "text-zinc-600"}>
              {player.selected ? "✓" : "+"}
            </span>
          </div>
        ))}
      </div>
    </div>

    <button className="w-full py-1 bg-accent text-black rounded text-[7px] font-black uppercase tracking-wider mb-2">
      Finalize Roster
    </button>
  </div>
);

const ClearsiteScreen = () => (
  <div className="w-full h-full bg-white text-zinc-900 flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />

    <div className="flex justify-between items-center mb-3">
      <span className="text-[7px] font-black tracking-widest text-zinc-950 uppercase">Clearsite</span>
      <span className="text-[6px] font-bold text-zinc-500">ADMIN</span>
    </div>

    <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-2 space-y-1 mb-2">
      <div className="w-full h-12 bg-zinc-200 rounded relative overflow-hidden flex items-center justify-center">
        <span className="text-[6px] text-zinc-400 font-bold">HOUSE IMAGE</span>
      </div>
      <div className="flex justify-between items-center pt-1">
        <span className="text-[8px] font-black text-zinc-900">Modern Villa</span>
        <span className="text-[7px] font-bold text-emerald-600">$4,500/mo</span>
      </div>
      <div className="text-[5px] text-zinc-500 leading-tight">3 Beds, 2 Baths, 2,400 sqft in Downtown Core.</div>
    </div>

    <div className="grid grid-cols-2 gap-1.5 mb-2">
      <div className="bg-zinc-50 border border-zinc-100 rounded p-1 flex flex-col">
        <span className="text-[7px] font-black text-zinc-900 leading-tight">12</span>
        <span className="text-[4px] font-bold text-zinc-400 uppercase">Viewings</span>
      </div>
      <div className="bg-zinc-50 border border-zinc-100 rounded p-1 flex flex-col">
        <span className="text-[7px] font-black text-zinc-900 leading-tight">3</span>
        <span className="text-[4px] font-bold text-zinc-400 uppercase">Contracts</span>
      </div>
    </div>

    <button className="w-full py-1 bg-zinc-950 text-white rounded text-[7px] font-black uppercase tracking-wider mt-auto">
      Approve Listing
    </button>
  </div>
);

const SaharanScreen = () => (
  <div className="w-full h-full bg-[#07131b] text-white flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />
    <span className="text-[7px] font-black tracking-wider text-cyan-400 mb-2">SAHARA FIN</span>

    <div className="bg-[#121b22] border border-white/5 rounded-lg p-2 space-y-1 mb-2">
      <span className="text-[5px] text-zinc-500 uppercase">Net Balance</span>
      <div className="text-xs font-black text-white leading-none">$14,285.00</div>
    </div>

    <div className="bg-[#121b22]/80 border border-white/[0.03] rounded p-1.5 space-y-1">
      <div className="flex gap-1 items-end h-8 justify-between">
        {[10, 18, 14, 28, 16, 22, 26].map((h, i) => (
          <div key={i} className="flex-1 bg-cyan-500/20 hover:bg-cyan-500 transition-colors rounded-sm" style={{ height: `${h}px` }} />
        ))}
      </div>
    </div>
  </div>
);

const FitfuelzScreen = () => (
  <div className="w-full h-full bg-[#130707] text-white flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />
    <span className="text-[7px] font-black tracking-wider text-red-500 mb-2">FITFUELZ</span>

    <div className="bg-[#1c0f0f] border border-white/5 rounded-lg p-2 space-y-1.5 mb-1.5">
      <div className="flex justify-between items-center text-[5px] text-red-400 font-bold">
        <span>DELUXE MEALS</span>
        <span>★ 4.9</span>
      </div>
      <div className="text-[8px] font-black text-white leading-none">Fresh Grilled Salmon</div>
      <div className="text-[5px] text-zinc-500 leading-tight">Rich in Omega-3 and proteins.</div>
    </div>

    <button className="w-full py-1 bg-red-600 text-white rounded text-[6px] font-black uppercase tracking-wider mt-auto">
      Add to Diet Plan
    </button>
  </div>
);

const GwauppScreen = () => (
  <div className="w-full h-full bg-[#040c08] text-white flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />
    <span className="text-[7px] font-black tracking-widest text-emerald-400 mb-2">GWAUPP</span>

    <div className="bg-[#0c1811] border border-white/5 rounded-lg p-2 space-y-1.5 mb-2">
      <span className="text-[5px] text-zinc-500 uppercase">Carbon Offset Score</span>
      <div className="text-xs font-black text-emerald-400 leading-none">88.5 kW/h</div>
      <div className="text-[5px] text-zinc-400">Carbon offset saved: +12.4%</div>
    </div>

    <div className="h-5 w-full bg-emerald-500/10 rounded border border-emerald-500/20 flex items-center justify-between px-2 text-[5px] text-emerald-400 font-bold mt-auto">
      <span>ACTIVE GATEWAY</span>
      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
    </div>
  </div>
);
