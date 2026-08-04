"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Creative Digital Studio",
    role: "UI/UX Designer",
    period: "2024 - Present",
    description: "Designing modern web applications, mobile interfaces, and design systems. Conducting user testing, wireframing, and interactive prototyping for diverse client projects.",
  },
  {
    company: "Innovate Design Agency",
    role: "Junior Product & UI Designer",
    period: "2023 - 2024",
    description: "Crafted clean dashboard interfaces, mobile app concepts, and landing page layouts focusing on visual aesthetics, usability, and design consistency.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-background relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Professional Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            EXPERIENCE
          </h3>
          <div className="w-12 h-1 bg-slate-400 mt-6" />
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-400/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-black border-2 border-slate-400 z-10" />
              
              <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:border-slate-400/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-slate-400 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-zinc-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-slate-400/10 border border-slate-400/20 text-slate-400 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap h-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
