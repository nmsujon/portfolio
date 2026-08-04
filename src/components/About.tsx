"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Satisfied Clients", value: "30+" },
  { label: "Design Prototypes", value: "80+" },
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
              Hello! I&apos;m <span className="text-white">NM Sujon</span>, a dedicated <span className="text-accent">UI/UX Designer</span> with 2 years of professional experience in crafting high-impact digital solutions. I specialize in bridging user needs with business goals through intuitive, aesthetically compelling interface design.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              In my 2-year design journey, I&apos;ve built responsive web applications, mobile app UI/UX, interactive design systems, and wireframes that transform ideas into seamless digital experiences.
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
                  <h4 className="text-white font-bold">BSc in Computer Science</h4>
                  <p className="text-zinc-500 text-sm">University of Engineering & Technology</p>
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
                Additional Training
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold">Google UX Design Professional Certificate</h4>
                  <p className="text-zinc-500 text-sm">Coursera / Google</p>
                </div>
                <div>
                  <h4 className="text-white font-bold">Advanced UI Design Mastery</h4>
                  <p className="text-zinc-500 text-sm">Design Academy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
