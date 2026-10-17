"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  year: string;
  desc: string;
  pill: string;
  tags: string[];
  image?: string;
  mockupType: "instasign" | "allrounder" | "pokelive";
}

const projects: Project[] = [
  {
    id: "pokelive",
    title: "PokéLive",
    year: "2026",
    desc: "Live stream shopping marketplace — browse live sellers across categories, watch real-time product demos, and check out in one tap. End-to-end mobile app design: home feed, category filters, seller hub, cart, and profile flows.",
    pill: "Live Commerce",
    tags: ["UI/UX Design", "App Design"],
    image: "/assets/pokelive-app.png",
    mockupType: "pokelive"
  },
  {
    id: "instasign",
    title: "InstaSignTracker",
    year: "2025",
    desc: "End-to-end B2B SaaS operations tool for commercial signage companies — managing orders, production, and installation tracking in one streamlined workflow.",
    pill: "B2B SaaS",
    tags: ["UI/UX Design", "Design System"],
    mockupType: "instasign"
  },
  {
    id: "allrounder",
    title: "Allrounder Pro",
    year: "2025",
    desc: "Field-service task and shift management mobile app for a German scaffolding firm — designed for fast, glove-friendly on-site usability.",
    pill: "Mobile App",
    tags: ["UI/UX Design", "UX Research"],
    mockupType: "allrounder"
  }

];

function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col space-y-6 group"
    >
      {/* Card Image Area */}
      <div className={`relative w-full overflow-hidden bg-black border border-[#575757] flex items-center justify-center transition-all duration-500 hover:border-accent/30 rounded-lg ${wide ? "h-[380px] lg:h-[420px]" : "h-[380px] lg:h-auto lg:aspect-[1.15/1]"}`}>
        <div className="absolute top-6 left-6 z-20">
          <span className="border border-accent bg-black text-accent text-[9px] font-black px-2.5 py-1 rounded-sm uppercase tracking-wider">
            {project.pill}
          </span>
        </div>

        <CardBackdrop id={project.id} />

        <div className="absolute bottom-6 left-6 z-20 flex gap-2">
          {project.tags.map((tag, tIdx) => (
            <span key={tIdx} className="border border-white/10 bg-black/60 text-white/80 text-[8px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute z-10 inset-0 flex items-center justify-center p-4 sm:p-6 transition-transform duration-500 group-hover:scale-[1.02]">
          {project.image ? (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={`${project.title} — app UI design`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 1200px"
              />
            </div>
          ) : (
            <div className="absolute bottom-0 flex justify-center w-full transition-transform duration-500 group-hover:scale-105 scale-95 lg:scale-100">
              <SmartphoneMockup type={project.mockupType} />
            </div>
          )}
        </div>
      </div>

      {/* Text Area */}
      <div className="flex flex-col space-y-3 px-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-zinc-500 font-bold text-xs md:text-sm">{project.year}</span>
        </div>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-accent hover:bg-white text-black text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer rounded-sm group/btn shadow-sm">
            View Case Study <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* Decorative card backdrops per project */
function CardBackdrop({ id }: { id: string }) {
  if (id === "instasign") {
    return (
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
          <span className="text-amber-600/30 text-xs md:text-sm font-black tracking-[0.4em] uppercase">INSTASIGN</span>
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
          <span className="text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">Operations Dashboard</span>
        </div>
      </div>
    );
  }
  if (id === "allrounder") {
    return (
      <div className="absolute inset-0 bg-[#060607] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none font-sans text-white/5 text-[3.5rem] md:text-[4.5rem] font-black tracking-tight leading-none uppercase">
          Allrounder
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
          <span className="text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">Field Workforce</span>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 bg-[#0b0608] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,63,94,0.03)_1px,transparent_1px)] bg-[size:28px_100%] pointer-events-none" />
      <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
        <span className="text-rose-500/30 text-xs md:text-sm font-black tracking-[0.4em] uppercase">POKELIVE</span>
      </div>
      <div className="absolute top-6 right-6 z-20 pointer-events-none">
        <span className="flex items-center gap-1.5 bg-rose-600 text-white text-[8px] font-black px-2.5 py-1 rounded-sm uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> Live
        </span>
      </div>
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <span className="text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">Live Shopping</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [p1, p2, p3] = projects;

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

        {/* Staggered 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            <ProjectCard project={p1} />
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col lg:mt-24">
            <ProjectCard project={p2} />
          </div>
        </div>

        {/* Wide Feature Card */}
        <div className="w-full">
          <ProjectCard project={p3} wide />
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
    case "instasign":
      screenBg = "bg-[#0c0c0e]";
      contentElement = <InstaSignScreen />;
      break;
    case "allrounder":
      screenBg = "bg-[#0a0a0c]";
      contentElement = <AllrounderScreen />;
      break;
    case "pokelive":
      screenBg = "bg-[#0d0809]";
      contentElement = <PokeliveScreen />;
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

/* InstaSignTracker — B2B SaaS operations dashboard */
const InstaSignScreen = () => (
  <div className="w-full h-full bg-[#0c0c0e] text-white flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />
    <div className="flex justify-between items-center px-1 mb-2">
      <div>
        <div className="text-[9px] font-black tracking-tight text-white leading-none">InstaSign</div>
        <div className="text-[6px] text-zinc-500 uppercase tracking-widest">Tracker</div>
      </div>
      <div className="w-5 h-5 bg-orange-600/20 border border-orange-500/30 rounded-full flex items-center justify-center">
        <span className="text-[6px] font-black text-orange-400">NT</span>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-1.5 mb-2">
      {[
        { v: "128", l: "Orders" },
        { v: "34", l: "In Prod." },
        { v: "12", l: "Installs" },
      ].map((s) => (
        <div key={s.l} className="bg-[#18181b] border border-white/5 rounded-lg p-1.5 text-center">
          <div className="text-[11px] font-black text-white leading-none">{s.v}</div>
          <div className="text-[5px] text-zinc-500 uppercase tracking-wider mt-0.5">{s.l}</div>
        </div>
      ))}
    </div>

    <div className="text-[6px] font-bold text-zinc-500 uppercase tracking-widest px-1 mb-1">Active Jobs</div>
    <div className="space-y-1.5">
      {[
        { t: "Mall facade — 12 panels", s: "In Production", c: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
        { t: "Showroom vinyl wrap", s: "Ready to Install", c: "text-sky-400 border-sky-500/30 bg-sky-500/10" },
        { t: "Office lobby signage", s: "Installed", c: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
      ].map((j) => (
        <div key={j.t} className="bg-[#18181b]/70 border border-white/[0.04] rounded-lg p-2">
          <div className="text-[7px] font-bold text-zinc-200 leading-tight">{j.t}</div>
          <span className={`inline-block mt-1 text-[5px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${j.c}`}>
            {j.s}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-auto bg-orange-600 rounded-lg py-1.5 text-center">
      <span className="text-[7px] font-black uppercase tracking-widest text-white">+ New Order</span>
    </div>
  </div>
);

/* Allrounder Pro — field-service shift & task management */
const AllrounderScreen = () => (
  <div className="w-full h-full bg-[#0a0a0c] text-white flex flex-col p-3 relative font-sans text-left">
    <div className="h-4" />
    <div className="px-1 mb-2">
      <div className="text-[9px] font-black tracking-tight text-white leading-none">Allrounder Pro</div>
      <div className="text-[6px] text-zinc-500">Scaffolding Team A · Berlin</div>
    </div>

    <div className="bg-gradient-to-br from-violet-600/30 to-violet-900/20 border border-violet-500/20 rounded-lg p-2 mb-2">
      <div className="text-[6px] font-bold text-violet-300 uppercase tracking-widest">Today&apos;s Shift</div>
      <div className="text-[10px] font-black text-white mt-0.5">07:00 – 15:00</div>
      <div className="text-[6px] text-zinc-400 mt-0.5">Site 14 · Nordring Warehouse</div>
      <button className="w-full mt-1.5 py-1 bg-violet-600 rounded text-[7px] font-black uppercase tracking-wider text-white">
        Check In
      </button>
    </div>

    <div className="text-[6px] font-bold text-zinc-500 uppercase tracking-widest px-1 mb-1">Tasks · 3 of 5 done</div>
    <div className="space-y-1.5">
      {[
        { t: "Erect bay 1–4 scaffold", done: true },
        { t: "Safety net inspection", done: true },
        { t: "Load platform assembly", done: true },
        { t: "Anchor torque check", done: false },
        { t: "Site photo report", done: false },
      ].map((task) => (
        <div key={task.t} className="flex items-center gap-1.5 bg-[#141417] border border-white/[0.04] rounded-lg px-2 py-1.5">
          <div className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${task.done ? "bg-emerald-500 border-emerald-500" : "border-zinc-600"}`}>
            {task.done && <span className="text-[6px] text-black font-black">✓</span>}
          </div>
          <span className={`text-[7px] font-semibold ${task.done ? "text-zinc-500 line-through" : "text-zinc-200"}`}>
            {task.t}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-auto flex justify-around items-center pt-2 border-t border-white/5">
      {["Home", "Tasks", "Team"].map((n, i) => (
        <span key={n} className={`text-[6px] font-bold uppercase tracking-wider ${i === 1 ? "text-violet-400" : "text-zinc-600"}`}>{n}</span>
      ))}
    </div>
  </div>
);

/* Pokelive — live shopping with 1-tap checkout */
const PokeliveScreen = () => (
  <div className="w-full h-full bg-[#0d0809] text-white flex flex-col relative font-sans text-left overflow-hidden">
    {/* Live video area */}
    <div className="relative h-[52%] bg-gradient-to-br from-rose-900/40 via-[#160a0e] to-black p-3 flex flex-col">
      <div className="h-4" />
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-1 bg-rose-600 text-white text-[6px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest">
          <span className="w-1 h-1 bg-white rounded-full animate-pulse" /> Live
        </span>
        <span className="text-[6px] text-zinc-400 font-bold">👁 2.4K watching</span>
      </div>
      <div className="mt-auto">
        <div className="text-[7px] font-bold text-white">@pokelive.store</div>
        <div className="text-[6px] text-zinc-400">Flash sale — up to 40% off tonight only</div>
      </div>
      {/* floating comments */}
      <div className="absolute right-2 bottom-16 space-y-1 text-right">
        {["🔥🔥🔥", "price please?", "ordered mine!"].map((c) => (
          <div key={c} className="text-[6px] text-zinc-300 bg-black/50 rounded-full px-2 py-0.5 inline-block ml-2">{c}</div>
        ))}
      </div>
    </div>

    {/* Product sheet */}
    <div className="flex-1 bg-[#141014] border-t border-white/10 rounded-t-2xl p-2.5 -mt-3 relative">
      <div className="w-8 h-1 bg-zinc-700 rounded-full mx-auto mb-2" />
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500/40 to-purple-600/40 border border-white/10 shrink-0" />
        <div className="flex-1">
          <div className="text-[7px] font-bold text-white leading-tight">Wireless Earbuds Pro</div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[9px] font-black text-white">৳2,499</span>
            <span className="text-[6px] text-zinc-500 line-through">৳3,999</span>
          </div>
        </div>
      </div>
      <button className="w-full mt-2 py-1.5 bg-rose-600 rounded-lg text-[7px] font-black uppercase tracking-widest text-white shadow-lg shadow-rose-600/30">
        Buy in 1 Tap
      </button>
      <div className="text-center text-[5px] text-zinc-500 mt-1">✓ In stock · Ships in 24h</div>
    </div>
  </div>
);
