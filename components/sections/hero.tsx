"use client";

import React from "react";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function CleanMinimalistHero() {
  return (
    // Updated parent layer: Absolute clean solid backdrop background alignment
    <section className="relative w-full min-h-screen bg-gradient-to-b from-zinc-50 to-white pt-40 pb-20 px-6 overflow-hidden">
      
      {/* ================================================================================= */}
      {/* ⚠️ CLEANUP INSTRUCTION: DO NOT RENDER PREVIOUS ABSTRACT BACKGROUND VECTORS HERE */}
      {/* Removed: Stethoscope SVG, Heart Shield Graphic, and Pulse Line decorative layers */}
      {/* ================================================================================= */}

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center items-start">
        
        {/* Noida Location Target Badge Tag Block */}
        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-800 mb-8 select-none">
          <span className="h-1.5 w-1.5 bg-cyan-500 rounded-full animate-pulse" />
          <span>Noida's Premier Private Clinic</span>
        </div>

        {/* Core Heading Layout Framework */}
        <h1 className="font-sans font-bold text-5xl sm:text-7xl lg:text-8xl text-zinc-900 tracking-tight leading-[1.05] max-w-4xl mb-6">
          Excellence in <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-cyan-600 to-cyan-500">Personalized Healthcare</span>
        </h1>

        {/* Context Description Copy Statement */}
        <p className="font-sans text-base sm:text-lg text-zinc-500 max-w-2xl leading-relaxed mb-10 font-medium">
          Experience world-class medical care with Dr. Amit Agrawal. Combining advanced diagnostics with compassionate treatment for families across Noida and Delhi NCR.
        </p>

        {/* Dual CTA Button Triggers Node Layout */}
        <div className="flex flex-wrap gap-4 items-center mb-16">
          <button className="flex items-center space-x-2 bg-[#1e3a5f] hover:bg-[#152944] text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.02]">
            <CalendarDays className="h-4 w-4" />
            <span>Book Appointment</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm">
            <span>Learn About Us</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* ================================================================================= */}
        {/* ⚠️ CLEANUP INSTRUCTION: MOUSE INDICATOR LOGIC WIPED CLEAN OUT OF THE LAYOUT FRAME */}
        {/* Removed: <div className="absolute bottom-6 left-1/2 ... "> scrolling mouse track code */}
        {/* ================================================================================= */}

        {/* Footer Medical Metadata Grid Arrays Row Segment */}
        <div className="w-full border-t border-zinc-100 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm text-zinc-500 font-medium">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full border border-cyan-500" />
            <span>MBBS, MD Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full border border-cyan-500" />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full border border-cyan-500" />
            <span>Home Visits Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}
