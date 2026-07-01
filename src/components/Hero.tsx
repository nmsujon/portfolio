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
          
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.85] text-white flex flex-col"
            >
              <span>WE BAKE</span>
              <span className="text-accent">DIGITAL</span>
              <span>PRODUCTS</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed font-semibold"
          >
            Engineered for the 2026 landscape. We combine industrial-grade code with high-sugar design aesthetics to deliver products that dominate markets.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-2"
          >
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-accent hover:bg-white text-black font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-accent/10"
            >
              START BAKING NOW &rarr;
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

          <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
            
            {/* Radial glow directly behind the person */}
            <div className="absolute inset-0 bg-accent/25 rounded-full blur-[70px] scale-90 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-full flex items-end justify-center"
            >
              <Image 
                src="/assets/designer1.png" 
                alt="Nur Mohammad Sujon" 
                fill
                className="object-contain z-10"
                priority
              />
            </motion.div>

            {/* Overlay Yellow/Lime stats block (Bottom Left of the Image) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-4 left-0 bg-accent text-black p-5 px-6 flex flex-col items-start min-w-[155px] shadow-2xl z-20"
            >
              <span className="text-3xl md:text-4xl font-black tracking-tighter leading-none">1.3K+</span>
              <span className="text-[9px] font-black uppercase tracking-widest mt-1 text-black/80 leading-tight">
                Projects Delivered
              </span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
