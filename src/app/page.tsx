"use client";

import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import CountriesServed from "@/components/CountriesServed";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      <Hero />
      <div className="space-y-0">
        <Categories />
        <CountriesServed />
        <Projects />
        <Contact />
      </div>

      {/* Background Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold">
        &copy; 2026 Nur Mohammad Sujon / Crafting Digital Excellence
      </footer>
    </main>
  );
}
