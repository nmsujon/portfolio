"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="bg-background px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            PROFESSIONAL FOCUS
          </h2>
          <div className="w-12 h-1 bg-slate-400 mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: "Design Tools",
              skills: ["Figma", "FigJam", "Adobe XD", "Photoshop", "Illustrator"]
            },
            {
              category: "UI/UX Expertise",
              skills: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Information Architecture", "WCAG Accessibility", "Responsive UI"]
            },
            {
              category: "Workflow",
              skills: ["Developer Handoff", "Design Tokens", "Jira", "Notion", "Agile/Scrum"]
            }
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-8 rounded-[32px] hover:border-slate-400/20 transition-colors"
            >
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-6">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-full border border-slate-400/30 bg-slate-400/5 text-zinc-300 text-xs font-medium hover:border-slate-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
    </section>
  );
}
