"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Magnetic from "./Magnetic";
import { Home, User, Briefcase, Mail, Download, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "categories", label: "Categories" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Update isScrolled based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Initialize on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple intersection observer to update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'}`}>

      <div className="glassmorphism rounded-full px-2 py-2 flex items-center gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 cursor-pointer group"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/assets/2-Photoroom.png"
                alt="Logo"
                fill
                className="object-contain scale-[1.8] origin-center"
              />
            </div>
          </div>

        <div className="h-4 w-[1px] bg-white/10 mx-2" />

        {/* Nav Items Container */}
        <div 
          className="flex items-center relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredIndex === index;

            return (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(item.id);
                }}
                className={`
                  relative px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300
                  text-[11px] font-bold tracking-widest uppercase
                  ${isActive ? "text-white" : isHovered ? "text-white" : "text-zinc-500"}
                `}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Sliding Highlight */}
                <AnimatePresence>
                  {isHovered && (
                      <motion.div
                        layoutId="nav-highlight"
                        className="absolute inset-0 bg-white/[0.03] border border-white/5 rounded-full z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 35 }}
                      />
                  )}
                </AnimatePresence>

                {/* Active Indicator (Glow Line) */}
                {isActive && (
                  <motion.div
                    layoutId="active-line"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent shadow-[0_0_8px_rgba(221,242,71,0.8)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="h-4 w-[1px] bg-white/10 mx-2" />

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="mr-1 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 hover:text-black transition-colors duration-300 cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.1)] flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Resume</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </nav>
  );
}
