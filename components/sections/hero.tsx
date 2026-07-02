"use client";

import React, { useState, useEffect } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";

// Production Cloudinary CDN Image Registry Array Map
const CDN_SLIDESHOW_RESOURCES = [
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996879/hero4_gebfei.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996879/hero2_uqlsgl.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996879/hero1_v9rgof.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996880/hero5_ska1po.jpg",
  "https://res.cloudinary.com/dbpdexty8/image/upload/v1782996880/hero3_rst29y.jpg"
];

export default function CloudinarySlideshowMinimalHero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    // Rigid 4000ms Infinite Chrono Synchronization Loop
    const tickerTimelineId = setInterval(() => {
      setActiveSlideIndex((currentStack) => (currentStack + 1) % CDN_SLIDESHOW_RESOURCES.length);
    }, 4000);
    return () => clearInterval(tickerTimelineId);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#09090b] pt-40 pb-20 px-6 overflow-hidden">
      
      {/* ================================================================================= */}
      {/* 🔥 CLOUDINARY HARDWARE-ACCELERATED SLIDESHOW LOOP FRAME */}
      {/* ================================================================================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {CDN_SLIDESHOW_RESOURCES.map((cdnUrl, trackingIndex) => (
          <div
            key={cdnUrl}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out transform scale-105 will-change-opacity ${
              trackingIndex === activeSlideIndex ? "opacity-35" : "opacity-0"
            }`}
            style={{ 
              backgroundImage: `url('${cdnUrl}')`,
              contain: "strict"
            }}
          />
        ))}
        
        {/* Anti-Glare Protective Filter Overlay Layer: Pure 2.5% Subtle Dark Veil + 3px Minimal Blur */}
        <div 
          className="absolute inset-0 bg-[#09090b]/25 backdrop-blur-[3px] z-10" 
          style={{ contain: "layout paint style" }}
        />
      </div>

      {/* ================================================================================= */}
      {/* ⚠️ CLEANUP INSTRUCTION: STETHOSCOPE, HEART, PULSE VECTOR SVGS ARE COMPLETELY DELETED HERE */}
      {/* ================================================================================= */}

      <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col justify-center items-start h-full">
        
        {/* Noida Location Target Badge Tag Block */}
        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-400 mb-8 select-none">
          <span className="h-1.5 w-1.5 bg-cyan-500 rounded-full animate-pulse" />
          <span>Noida's Premier Private Clinic</span>
        </div>

        {/* Core Heading Layout Framework */}
        <h1 className="font-sans font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] max-w-4xl mb-6 drop-shadow-md">
          Excellence in <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-cyan-400">Personalized Healthcare</span>
        </h1>

        {/* Context Description Copy Statement */}
        <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-10 font-medium drop-shadow-sm">
          Experience world-class medical care with Dr. Amit Agrawal. Combining advanced diagnostics with compassionate treatment for families across Noida and Delhi NCR.
        </p>

        {/* Dual CTA Button Triggers Node Layout */}
        <div className="flex flex-wrap gap-4 items-center mb-16">
          <button className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-black text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.02]">
            <CalendarDays className="h-4 w-4 stroke-[2.5]"/>
            <span>Book Appointment</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm">
            <span>Learn About Us</span>
            <ArrowRight className="h-4 w-4"/>
          </button>
        </div>

        {/* ================================================================================= */}
        {/* ⚠️ CLEANUP INSTRUCTION: FLOATING MOUSE SCROLLING INDICATOR ICON IS COMPLETELY REMOVED */}
        {/* ================================================================================= */}

        {/* Footer Medical Metadata Grid Arrays Row Segment */}
        <div className="w-full border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm text-zinc-400 font-medium">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full border border-cyan-400" />
            <span>MBBS, MD Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full border border-cyan-400" />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full border border-cyan-400" />
            <span>Home Visits Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}
