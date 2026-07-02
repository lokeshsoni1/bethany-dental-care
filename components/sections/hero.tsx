"use client";

import React, { useState, useEffect } from "react";
import { PremiumIconButton } from "@/components/ui/button-with-icon";
import { Stethoscope, ShieldAlert, Clock } from "lucide-react";

const SLIDESHOW_IMAGES = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
];

export default function RedesignedClinicalHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 4000); // Strict 4-Second Dynamic Interval Loop
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen bg-zinc-950 pt-36 pb-6 px-4 md:px-8 flex flex-col justify-between overflow-hidden">
      
      {/* Dynamic Background Images Container Framework */}
      <div className="absolute inset-0 z-0">
        {SLIDESHOW_IMAGES.map((imgUrl, idx) => (
          <div
            key={imgUrl}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out transform scale-105 ${
              idx === currentSlide ? "opacity-40" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${imgUrl}')` }}
          />
        ))}
        {/* Anti-Glare Overlay Panel Layer: Strict 2-3% Dark Opacity Matrix Mask */}
        <div className="absolute inset-0 bg-zinc-950/3 md:bg-zinc-950/2 backdrop-blur-[2px] z-10" />
      </div>

      {/* Main Structural Matrix Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 my-auto">
        
        {/* Left Hand Vector: Brand Statements & Trigger Controls */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left items-start">
          <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] drop-shadow-md">
            Trusted Dental Care <br />for Every Generation
          </h1>
          <p className="font-sans text-sm sm:text-base text-zinc-200 max-w-xl leading-relaxed font-medium drop-shadow-sm">
            We combine modern technology with heartfelt service to ensure every generation enjoys a healthier, more confident smile.
          </p>
          
          {/* Dynamic Interactive Component Call Block */}
          <PremiumIconButton 
            text="Book a Visit" 
            className="mt-2 scale-105 shadow-xl"
            onClick={() => document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" })}
          />
        </div>

        {/* Right Hand Vector: 10-Minute Instant Response Callback Widget Panel (image_7c4f02.jpg) */}
        <div className="lg:col-span-5 bg-white rounded-[2rem] p-8 flex flex-col space-y-6 text-black shadow-2xl max-w-md w-full lg:justify-self-end border border-zinc-100 transform-gpu transition-all">
          <div className="flex flex-col space-y-1.5">
            <h3 className="font-sans font-bold text-2xl tracking-tight text-zinc-900">Book a visit</h3>
            <p className="font-sans text-xs text-zinc-500 font-medium">Get a callback within 10 minutes</p>
          </div>
          
          <form className="flex flex-col space-y-3.5" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-zinc-400 transition-colors font-medium placeholder:text-zinc-400 text-zinc-900"
            />
            <input 
              type="tel" 
              placeholder="Phone number" 
              className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-zinc-400 transition-colors font-medium placeholder:text-zinc-400 text-zinc-900"
            />
            <button 
              type="submit" 
              className="w-full py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-[0.99]"
            >
              Request a callback
            </button>
          </form>

          <p className="font-sans text-[11px] text-zinc-400 font-medium text-center">
            No spam. A real person calls you back, fast.
          </p>
        </div>

      </div>

      {/* Bottom Layout Element: Floating Glassmorphism Data Info Strips (image_7ca0fc.jpg) */}
      <div className="max-w-7xl mx-auto w-full relative z-20 mt-12 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Card Block 01: Schedule Nudges */}
          <div className="p-6 flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-white font-sans font-bold text-sm tracking-wide">Get An Appointment</span>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                Ready for a healthier smile? Book your visit today. <span className="text-cyan-400 underline cursor-pointer font-medium">Click here</span>
              </p>
            </div>
          </div>

          {/* Card Block 02: Emergency Comms Channels */}
          <div className="p-6 flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-rose-400">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-white font-sans font-bold text-sm tracking-wide">Emergency Contact</span>
              <p className="text-zinc-300 font-mono text-xs leading-relaxed">
                Call: <span className="font-sans font-bold text-white">+91 9307512816</span> <br />
                Email: <span className="text-zinc-400 hover:text-white transition-colors">hello@lumoradental.com</span>
              </p>
            </div>
          </div>

          {/* Card Block 03: Temporal Clinic Hour Metrics */}
          <div className="p-6 flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-cyan-400">
              <Clock className="h-5 w-5" />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <span className="text-white font-sans font-bold text-sm tracking-wide">Clinic Operating Hours</span>
              <div className="flex justify-between text-zinc-300 font-sans text-xs pr-2">
                <span>Mon - Fri:</span>
                <span className="font-mono text-white font-semibold">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-zinc-300 font-sans text-xs pr-2">
                <span>Sat - Sun:</span>
                <span className="font-mono text-white font-semibold">9:30 - 17:30</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
