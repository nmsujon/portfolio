"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, X, Globe, MessageSquare, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Github, Linkedin, Twitter } from "./Icons";

const servicesList = [
  "Product Design",
  "UI/UX Audit",
  "Design Systems",
  "AI Integration",
];

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Product Design");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="py-28 bg-black px-6 md:px-12 lg:px-20 border-t border-white/5 relative overflow-hidden">
      
      {/* Background glow in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        
        {/* Sleek Bento Card CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-3xl bg-zinc-900/30 border border-white/10 p-8 sm:p-12 md:p-20 text-center flex flex-col items-center justify-center overflow-hidden backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
        >
          {/* Subtle Technical Dot Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#fff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Glowing Aura Spheres */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Interactive Floating Status Pill */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
            <span>Available for Q3-Q4 2026 Projects</span>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
              Let's craft the <br className="hidden sm:block" />
              <span className="text-gradient">next digital success.</span>
            </h2>
            
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto font-medium">
              Pick a service you need help with, and let’s start collaborating to bake high-fidelity user experiences.
            </p>

            {/* Service selector chips in banner */}
            <div className="flex flex-wrap justify-center gap-2.5 pt-4 max-w-xl mx-auto">
              {servicesList.map((service) => {
                const isActive = selectedService === service;
                return (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-4.5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "bg-accent text-black border-accent font-black shadow-[0_0_15px_rgba(221,242,71,0.25)]" 
                        : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>

            {/* Animated Call-to-action Button */}
            <div className="pt-8">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsOpen(true)}
                className="group relative px-10 py-5 bg-white text-black font-black text-[11px] uppercase tracking-widest hover:bg-accent transition-colors duration-500 cursor-pointer shadow-2xl flex items-center justify-center gap-3 mx-auto"
              >
                Get In Touch
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modern Glassmorphic Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-xl bg-zinc-950/95 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.8)] z-10 overflow-hidden"
            >
              {/* Top border glowing line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5"
              >
                <X size={16} />
              </button>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-accent flex items-center gap-1.5 mb-1">
                        <Sparkles size={10} /> Let's Collaborate
                      </span>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">Initiate Project</h3>
                      <p className="text-zinc-500 text-xs font-semibold mt-1">
                        You selected: <span className="text-white font-black">{selectedService}</span>
                      </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      {/* Interactive Custom Input Fields */}
                      <div className="space-y-1 relative">
                        <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/5 rounded-lg p-3.5 text-xs text-white focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-all" 
                          placeholder="What should I call you?" 
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/5 rounded-lg p-3.5 text-xs text-white focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-all" 
                          placeholder="Where can I reach you?" 
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Project Brief</label>
                        <textarea 
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full h-32 bg-white/5 border border-white/5 rounded-lg p-3.5 text-xs text-white focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-all resize-none" 
                          placeholder="Tell me briefly about what you want to bake..."
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-4.5 bg-accent text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-accent/5 mt-4"
                      >
                        Send Proposal
                        <Send size={12} />
                      </button>
                    </form>

                    {/* Direct Contact Info */}
                    <div className="pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
                      <div className="flex gap-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-accent transition-colors">
                          <Linkedin size={16} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-accent transition-colors">
                          <Twitter size={16} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-accent transition-colors">
                          <Github size={16} />
                        </a>
                      </div>
                      <span className="flex items-center gap-1.5 text-[9px] text-zinc-400 font-black uppercase tracking-widest">
                        <Globe size={11} className="text-accent" /> Dhaka, Bangladesh
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 space-y-4"
                  >
                    <motion.div
                      initial={{ rotate: -15, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="text-accent"
                    >
                      <CheckCircle2 size={64} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Proposal Sent!</h3>
                    <p className="text-zinc-400 text-xs max-w-xs leading-relaxed">
                      Thank you, <span className="text-white font-black">{formData.name}</span>. I have received your request for <span className="text-white font-black">{selectedService}</span>. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
