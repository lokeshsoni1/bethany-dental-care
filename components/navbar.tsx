"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PremiumIconButton } from "@/components/ui/button-with-icon";

export default function FloatingGlassNavbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50 transform-gpu">
      <div className="w-full bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        
        {/* Brand Vector Node Anchor */}
        <Link href="/" className="flex items-center space-x-2.5 cursor-pointer">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 3 / "Bethany".length,
                }
              }
            }}
            style={{ 
              fontFamily: "var(--font-caveat), cursive",
              willChange: "transform, opacity" 
            }}
            className="text-3xl font-extrabold tracking-[0.18em] text-white flex select-none transform-gpu"
          >
            {Array.from("Bethany").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 5 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: {
                      duration: 3 / "Bethany".length,
                      ease: "easeOut"
                    }
                  }
                }}
                className="inline-block transform-gpu"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </Link>

        {/* System Navigation Center Gaps */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-xs uppercase tracking-widest text-zinc-300 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Integrated Icon Trigger Element */}
        <div className="flex items-center">
          <Link href="/book-appointment">
            <PremiumIconButton 
              text="Book Appointment" 
              className="h-10 text-xs ps-5 pr-12"
            />
          </Link>
        </div>

      </div>
    </header>
  );
}

export { FloatingGlassNavbar as Navbar };

