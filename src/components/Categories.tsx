"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Layers, PenTool } from "lucide-react";

const categories = [
  {
    num: "01",
    icon: Smartphone,
    title: "MOBILE DESIGN",
    desc: "Intuitive iOS & Android app experiences — from user flows to polished, high-fidelity interfaces.",
  },
  {
    num: "02",
    icon: Monitor,
    title: "WEB & SAAS",
    desc: "Complex B2B SaaS workflows and dashboards translated into clear, usable web products.",
  },
  {
    num: "03",
    icon: Layers,
    title: "DESIGN SYSTEMS",
    desc: "Scalable Figma component libraries with design tokens and WCAG accessibility baked in.",
  },
  {
    num: "04",
    icon: PenTool,
    title: "PROTOTYPING",
    desc: "Interactive prototypes and usability testing that validate ideas before a line of code.",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-background px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            CATEGORIES
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative bg-[#111112] border border-white/5 p-8 pb-6 flex flex-col items-start min-h-[380px] hover:border-accent/40 transition-all duration-300"
              >
                {/* Yellow/Lime Icon */}
                <div className="text-accent mb-8">
                  <IconComponent size={26} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="space-y-3 flex-grow">
                  <h3 className="text-lg md:text-xl font-black tracking-wide text-white uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                </div>

                {/* Separator line & Index number */}
                <div className="w-full mt-8 pt-4 border-t border-white/5">
                  <span className="text-xs font-bold font-mono text-white/90 select-none">
                    {cat.num}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
