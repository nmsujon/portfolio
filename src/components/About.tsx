"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Products Designed", value: "25+" },
  { label: "Countries Served", value: "3" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 lg:px-20 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
          {/* Content Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                PASSIONATE ABOUT DESIGN
              </h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                Architecting Human-Centric Experiences & High-Fidelity UI
              </p>
              <div className="w-12 h-1 bg-slate-400" />
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Hello! I&apos;m <span className="text-white">Nur Mohammad Sujon</span>, a <span className="text-accent">UI/UX & Product Designer</span> with 2+ years of experience designing scalable web and mobile applications across 30+ projects. I&apos;m expert at translating complex business logic into intuitive user experiences.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              At Spark Tech Agency, I led product design for 25+ web & mobile products — enterprise B2B SaaS platforms, workforce tools for German clients, and interactive live-commerce apps — building robust Figma design systems with WCAG accessibility and seamless developer handoffs.
            </p>
          </motion.div>

          {/* Content Right: Education & Training */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl"
            >
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold">B.Sc. (Bachelor of Science)</h4>
                  <p className="text-zinc-500 text-sm">Nawab Faizunnesa Govt. College, Cumilla — 2021 to Present</p>
                </div>
                <div>
                  <h4 className="text-white font-bold">HSC in Science — GPA 5.00</h4>
                  <p className="text-zinc-500 text-sm">Chandpur Govt. College, Chandpur — 2018 to 2020</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl"
            >
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">
                Core Strengths
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold">End-to-End Product Design</h4>
                  <p className="text-zinc-500 text-sm">User flows, wireframes & high-fidelity UI</p>
                </div>
                <div>
                  <h4 className="text-white font-bold">Scalable Figma Design Systems</h4>
                  <p className="text-zinc-500 text-sm">Design tokens, components & WCAG compliance</p>
                </div>
                <div>
                  <h4 className="text-white font-bold">UX Research & Usability Testing</h4>
                  <p className="text-zinc-500 text-sm">Data-driven iterations, seamless dev handoff</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
