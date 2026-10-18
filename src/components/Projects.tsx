"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Apple, ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  year: string;
  desc: string;
  pill: string;
  tags: string[];
  image: string;
  caseStudyUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

const projectsList: Project[] = [
  {
    id: "pokelive",
    title: "PokéLive",
    year: "2026",
    desc: "A live stream shopping marketplace where users discover exclusive drops, watch real-time seller streams, and shop trending streetwear & electronics seamlessly.",
    pill: "Live Commerce",
    tags: ["UI/UX Design", "App Design"],
    image: "/assets/pokelive.png",
  },
  {
    id: "mathsbook",
    title: "Mathsbook",
    year: "2026",
    desc: "Master Math's With Instant Feedback — smart assignments, step-based feedback, and real-time student tracking for teachers and classrooms.",
    pill: "EdTech Platform",
    tags: ["UI/UX Design", "Web Application"],
    image: "/assets/Mathsbook.png",
  },
  {
    id: "axion-budget",
    title: "Axion Budget",
    year: "2026",
    desc: "Personal finance and budgeting mobile app featuring real-time financial health scoring, spending analysis, and automated bill reduction tracking.",
    pill: "Fintech App",
    tags: ["UI/UX Design", "Mobile App"],
    image: "/assets/axion budget.png",
  },
  {
    id: "fibre-pro",
    title: "Fibre Pro",
    year: "2026",
    desc: "Field service & intervention management platform with real-time profit tracking, technician scheduling, and operational field analytics.",
    pill: "Field SaaS",
    tags: ["UI/UX Design", "Mobile App"],
    image: "/assets/fibre pro.png",
  },
  {
    id: "gocalai",
    title: "GoCalAI",
    year: "2026",
    desc: "AI-powered fitness partner and calorie tracking landing page that creates personalized workout plans and scans meal nutrition in real-time.",
    pill: "AI Fitness",
    tags: ["UI/UX Design", "Landing Page"],
    image: "/assets/ramsai.png",
  },
  {
    id: "bassvangeet",
    title: "Baasvangeet",
    year: "2026",
    desc: "Smart grocery deals, price comparison, and daily essentials shopping app with instant local supermarket discounts and fuel price tracking.",
    pill: "E-Commerce",
    tags: ["UI/UX Design", "Mobile App"],
    image: "/assets/Bassvangeet.png",
  },
];

export default function Projects() {
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

        {/* 2x2 Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsList.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
              className="group relative bg-[#111112] border border-white/5 hover:border-accent/40 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5"
            >
              {/* Card Mockup Image Preview */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-black border border-white/5 mb-6 group/img">
                
                {/* Pill Badge (Top Left) */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="border border-accent/80 bg-black/80 backdrop-blur-md text-accent text-[9px] font-black px-2.5 py-1 rounded uppercase tracking-wider">
                    {proj.pill}
                  </span>
                </div>

                {/* Mockup Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority={idx < 2}
                  />
                </div>

                {/* Tags (Bottom Left) */}
                <div className="absolute bottom-4 left-4 z-20 flex gap-1.5 flex-wrap">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="border border-white/10 bg-black/70 backdrop-blur-md text-white/80 text-[8px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent transition-colors uppercase tracking-tight">
                      {proj.title}
                    </h3>
                    <span className="text-zinc-500 font-mono font-bold text-xs md:text-sm">
                      {proj.year}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                    {proj.desc}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-accent hover:bg-white text-black text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer rounded group/btn shadow-sm">
                    View Case Study <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer rounded">
                    <Play size={10} fill="currentColor" /> Play Store
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950/80 border border-white/10 hover:border-accent/40 text-[9px] font-black text-white uppercase tracking-widest transition-all cursor-pointer rounded">
                    <Apple size={10} /> App Store
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
