"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background px-6 md:px-12 lg:px-20 pt-28 pb-16"
    >
      {/* Background radial glow behind the hero content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Content (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8 order-2 lg:order-1">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            HI, I&apos;M NM SUJON 👋
          </motion.div>

          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.9] text-white flex flex-col"
            >
              <span>CREATIVE</span>
              <span className="text-accent">UI/UX DESIGNER</span>
              <span className="text-zinc-400 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight mt-2">
                2 YEARS EXPERIENCE
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed font-medium"
          >
            I craft intuitive, human-centric digital interfaces and high-fidelity user experiences that turn complex ideas into elegant, impactful products.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-2 flex flex-wrap gap-4"
          >
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-accent hover:bg-white text-black font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-accent/10"
            >
              GET IN TOUCH &rarr;
            </button>
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              VIEW PROJECTS
            </button>
          </motion.div>
        </div>

        {/* Right Side: Portrait with Yellow Glow & Stats (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center order-1 lg:order-2">
          
          {/* Slanted "99.8% SATISFACTION" badge above the portrait */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 12, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -top-12 right-12 bg-transparent border border-accent/40 text-accent font-black text-[9px] px-3.5 py-1.5 uppercase tracking-widest rounded-sm z-30"
          >
            99.8% SATISFACTION
          </motion.div>

          <div className="relative w-full max-w-[560px] h-[480px] sm:h-[580px] lg:h-[660px] flex items-center justify-center">
            
            {/* Soft radial glow directly behind the person */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] scale-95 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-full flex items-end justify-center [mask-image:linear-gradient(to_bottom,black_65%,transparent_96%)]"
            >
              <Image 
                src="/assets/my1.png" 
                alt="NM Sujon" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-contain object-bottom z-10"
                priority
              />
            </motion.div>

            {/* Overlay Yellow/Lime stats block (Bottom Left of the Image) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute bottom-4 left-0 bg-accent text-black p-5 px-6 flex flex-col items-start min-w-[155px] shadow-2xl z-30"
            >
              <span className="text-3xl md:text-4xl font-black tracking-tighter leading-none">50+</span>
              <span className="text-[9px] font-black uppercase tracking-widest mt-1 text-black/80 leading-tight">
                Projects Completed
              </span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
