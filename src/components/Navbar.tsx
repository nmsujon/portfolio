"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download, ArrowRight, Menu, X, Sparkles } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update isScrolled based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-[1100px] transition-all duration-300 ${
          isScrolled ? "py-1" : "py-0"
        }`}
      >
        <div className="glassmorphism rounded-full px-3 py-2 flex items-center justify-between md:justify-start gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 backdrop-blur-xl bg-black/60">
          
          {/* Logo */}
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 px-2 md:px-4 cursor-pointer group"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/assets/2-Photoroom.png"
                alt="NM Sujon Logo"
                fill
                className="object-contain scale-[1.6] origin-center"
              />
            </div>
            <span className="hidden sm:inline-block text-xs font-black text-white tracking-wider uppercase">
              NM SUJON
            </span>
          </div>

          <div className="hidden md:block h-4 w-[1px] bg-white/10 mx-2" />

          {/* Desktop Nav Items */}
          <div
            className="hidden md:flex items-center relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredIndex === index;

              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    relative px-4 lg:px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300
                    text-[11px] font-bold tracking-widest uppercase cursor-pointer
                    ${isActive ? "text-white" : isHovered ? "text-white" : "text-zinc-400"}
                  `}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Sliding Highlight */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        layoutId="nav-highlight"
                        className="absolute inset-0 bg-white/[0.06] border border-white/10 rounded-full z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 35 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Active Glow Line */}
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

          <div className="hidden md:block h-4 w-[1px] bg-white/10 mx-2 ml-auto" />

          {/* Desktop CTA Resume */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors duration-300 cursor-pointer shadow-lg shadow-accent/10"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </motion.button>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-black font-black text-[9px] uppercase tracking-wider cursor-pointer"
            >
              <Download className="w-3 h-3" />
              <span>CV</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white cursor-pointer active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-zinc-950/95 border border-white/15 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl flex flex-col space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-1.5">
                <Sparkles size={12} /> Menu
              </span>
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">
                NM Sujon Portfolio
              </span>
            </div>

            <div className="flex flex-col space-y-2 pt-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                      isActive
                        ? "bg-accent text-black font-black shadow-md shadow-accent/20"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={14} className={isActive ? "text-black" : "text-zinc-500"} />
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 bg-white text-black font-black text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Download size={14} /> Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
