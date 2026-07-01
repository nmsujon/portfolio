"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "@/components/Icons";

const socials = [
  { icon: Github, href: "https://github.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
];

export default function SocialBar() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-8">
      <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-accent/30" />
      
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, color: "var(--accent)" }}
          className="text-zinc-500 transition-colors"
        >
          <social.icon size={20} />
        </motion.a>
      ))}

      <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-accent/30" />
    </div>
  );
}
