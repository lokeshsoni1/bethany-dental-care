"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Shield,
  Activity,
  Award,
  Zap,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { PremiumIconButton } from "@/components/ui/button-with-icon";

const services = [
  {
    icon: Sparkles,
    title: "Advanced Prosthodontics & Implantology",
    shortDescription:
      "Restoring structural chewing vectors via premium titanium mapping.",
    description:
      "Engineered mapping protocols targeting precise bite occlusion and custom tooth morphology. Implants are designed using bio-compatible medical titanium vectors for 100% chew load tolerance.",
    features: [
      "Titanium implant anchors",
      "Full arches restorative mapping",
      "Precision porcelain crowns",
      "Digital bite load testing",
      "Neuromuscular bite adjustments",
      "Structural chewing optimization",
    ],
  },
  {
    icon: Zap,
    title: "Laser Periodontal Therapy",
    shortDescription:
      "High-efficiency microbiological soft tissue sanitization.",
    description:
      "Advanced water laser energy targeting pockets of infection to perform surgical sanitization of gums without drills or incisions. Drastically minimizes healing downtime and mitigates blood loss.",
    features: [
      "Laser micro-organism target",
      "Non-surgical soft tissue repair",
      "Deep root decontamination",
      "Accelerated recovery timeline",
      "Zero incision protocols",
      "Precision pocket depth shrink",
    ],
    featured: true,
  },
  {
    icon: Activity,
    title: "3D Digital Orthodontic Scanning",
    shortDescription:
      "Engineered diagnostic telemetry for precision occlusion adjustment.",
    description:
      "High-fidelity intraoral optical scanners that map tooth positions down to the micron. Deploys simulation engines to preview alignment trajectories before initializing custom aligner runs.",
    features: [
      "Micron-precision scanning",
      "Zero dental mold discomfort",
      "Real-time visual simulations",
      "Custom Invisalign sequencing",
      "Bite displacement analytics",
      "Digital progression archives",
    ],
  },
  {
    icon: Shield,
    title: "Neuromuscular Orofacial Rejuvenation",
    shortDescription:
      "Mitigating structural masseter load and friction failure points.",
    description:
      "Focused therapeutic treatments designed to neutralize TMJ friction, alleviate deep jaw strain, and resolve chronic dental grinding patterns by tracking facial muscle load limits.",
    features: [
      "TMJ compression relief",
      "Masseter muscle diagnostic scan",
      "Bite alignment balancing",
      "Night splint stabilization",
      "Nerve pathway calming",
      "Preventive enamel wear block",
    ],
  },
  {
    icon: Award,
    title: "Elite Esthetic Smile Reconstruction",
    shortDescription:
      "Veneer smile designs using premium translucent ceramic overlays.",
    description:
      "Master-crafted ultra-thin porcelain veneers customized for your specific facial symmetry. Deploys light-refracting ceramic matrices that mimic natural enamel translucency perfectly.",
    features: [
      "Custom translucent ceramics",
      "Facial symmetry smile design",
      "Ultra-thin cosmetic overlays",
      "High stain-resistant glazes",
      "Precision enamel prep guides",
      "Instant alignment makeover",
    ],
    featured: true,
  },
];

export default function ServicesPage() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  // Mobile Auto-Fade Interval Engine
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMobileIdx((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783661877/Medical_clinic_lobby_web_background_202607101107_gr0wsb.jpg')"
      }}
    >
      <Navbar />

      {/* Hero Section (Module 1 Hero Intro Dense Glass System) */}
      <section className="relative pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 overflow-hidden z-10">
        <div className="container mx-auto container-gutter relative text-center flex flex-col items-center justify-center">
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { type: "spring", stiffness: 350, damping: 22 },
              y_hover: { type: "spring", stiffness: 350, damping: 22 }
            }}
            style={{
              background: "rgba(9, 29, 54, 0.88)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
              willChange: "transform, opacity, backdrop-filter"
            }}
            className="max-w-4xl text-white transform-gpu"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase text-white mb-6 backdrop-blur-md">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-lg">
              Specialized
              <br />
              <span className="text-cyan-200">Dental Services</span>
            </h1>
            <p className="text-lg sm:text-2xl text-white max-w-3xl leading-relaxed mx-auto font-extrabold drop-shadow-md">
              From custom smile redesigns to high-precision implant diagnostics, we offer cutting-edge dental mapping inside NYC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar (Module 2 Widget Trio Re-Theming & Tinted Glass Upscaling) */}
      <section className="py-16 relative z-10 bg-transparent text-white">
        <div className="container mx-auto container-gutter max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Extended Hours",
                description: "Mon-Sat: 9AM-8PM",
              },
              {
                icon: Sparkles,
                title: "Specialized Orthodontics",
                description: "Advanced custom digital telemetry",
              },
              {
                icon: Shield,
                title: "Sterile Operatory",
                description: "Safe neuromuscular sedation suites",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                animate={{ y: [0, -6, 0] }}
                whileHover={{
                  scale: 1.025,
                  y: -10,
                  borderColor: "rgba(14, 165, 233, 0.45)",
                  boxShadow: "0 25px 50px rgba(14, 165, 233, 0.12)"
                }}
                transition={{
                  y: {
                    duration: 4.5 + (index * 0.3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  },
                  scale: { type: "spring", stiffness: 350, damping: 22 },
                  y_hover: { type: "spring", stiffness: 350, damping: 22 }
                }}
                style={{
                  background: "rgba(20, 184, 166, 0.12)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "2px solid rgba(45, 212, 191, 0.3)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  willChange: "transform, opacity, backdrop-filter"
                }}
                className="flex items-center gap-6 rounded-2xl transform-gpu shadow-xl"
              >
                <div className="w-16 h-16 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0 border border-teal-300/30">
                  <item.icon className="w-8 h-8 text-teal-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-100 font-semibold">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List - Stacking Parallax & Interval Engine (Module 3) */}
      <div ref={containerRef} className="relative w-full overflow-visible">
        
        {/* Desktop Stacking Parallax view (> 1024px Viewports) */}
        <section className="hidden lg:block relative w-full min-h-[400vh] bg-transparent">
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="max-w-5xl w-full relative h-[600px] flex items-center justify-center px-8 z-10">
              {services.map((service, index) => {
                const startProgress = index * 0.18;
                const endProgress = startProgress + 0.18;

                const p1 = Math.min(startProgress + 0.08, 0.9);
                const p2 = Math.min(endProgress, 0.95);
                const p3 = Math.min(endProgress + 0.08, 1.0);

                const y = useTransform(
                  scrollYProgress,
                  [0, startProgress, p1, p2, p3],
                  ["80vh", "80vh", "0px", "0px", "-20px"]
                );

                const t1 = Math.max(0, startProgress - 0.05);
                const t2 = startProgress;
                const t3 = Math.min(startProgress + 0.08, 0.9);
                const t4 = Math.min(endProgress, 0.95);
                const t5 = Math.min(endProgress + 0.05, 1.0);

                const scale = useTransform(
                  scrollYProgress,
                  [0, t1, t2, t3, t4, t5],
                  [0.95, 0.95, 1.0, 1.0, 0.94, 0.94]
                );
                const opacity = useTransform(
                  scrollYProgress,
                  [0, t1, t2, t3, t4, t5],
                  [0, 0, 1, 1, 0.6, 0.6]
                );

                return (
                  <motion.div
                    key={service.title}
                    style={{
                      y,
                      scale,
                      opacity,
                      background: "rgba(245, 250, 255, 0.08)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(200, 230, 255, 0.16)",
                      borderRadius: "24px",
                      padding: "3rem",
                      zIndex: index + 1,
                      willChange: "transform, opacity, backdrop-filter"
                    }}
                    className="absolute w-full flex flex-row items-center justify-between gap-12 transform-gpu shadow-2xl"
                  >
                    <div className="flex flex-col space-y-6 flex-grow text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-cyan-300" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-base text-white leading-relaxed max-w-xl font-extrabold">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                            <span className="text-white text-sm font-bold">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild size="lg" className="w-fit bg-cyan-500 hover:bg-cyan-600 text-black font-bold h-12 rounded-xl mt-4">
                        <Link href="/book-appointment">
                          Book Service
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mobile Zoom-Pop Sequence Engine (Viewport <= 1024px) */}
        <section className="lg:hidden py-16 px-4 relative z-10">
          <div className="w-[94vw] mx-auto h-[480px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {services.map((service, index) => {
                if (index !== activeMobileIdx) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background: "rgba(245, 250, 255, 0.08)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(200, 230, 255, 0.16)",
                      borderRadius: "24px",
                      padding: "2rem",
                      willChange: "transform, opacity, backdrop-filter",
                    }}
                    className="absolute inset-0 flex flex-col justify-between h-full transform-gpu shadow-2xl"
                  >
                    <div className="flex flex-col space-y-4 text-white flex-grow">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                          <service.icon className="w-6 h-6 text-cyan-300" />
                        </div>
                        <h2 className="text-xl font-extrabold tracking-tight leading-tight">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-xs text-white leading-relaxed line-clamp-4 font-bold">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 gap-2 pt-2">
                        {service.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                            <span className="text-white text-xs font-bold">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 mt-4">
                      <Button asChild size="lg" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold h-12 rounded-xl">
                        <Link href="/book-appointment">
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>
      </div>

      {/* CTA Section (Module 4 Bottom Service CTA Upgrade & Button Synchronization) */}
      <section className="section-padding relative z-10 bg-transparent text-white py-24">
        <div className="container mx-auto container-gutter text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(9, 29, 54, 0.94)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "24px",
              padding: "3.5rem",
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
              willChange: "transform, opacity, backdrop-filter"
            }}
            className="max-w-3xl mx-auto transform-gpu"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase text-white mb-6 backdrop-blur-md">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-base sm:text-lg text-slate-100 mb-8 sm:mb-10 font-bold">
              Book an appointment today and experience the difference of personalized, compassionate healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book-appointment" className="w-full sm:w-auto">
                <PremiumIconButton 
                  text="Book Appointment" 
                  className="w-full sm:w-fit h-12 text-sm justify-center bg-white text-black hover:bg-zinc-100"
                />
              </Link>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 h-12 rounded-full w-full sm:w-auto font-bold px-8 shadow-sm">
                <Link href="tel:+12125550199">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (212) 555-0199
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

