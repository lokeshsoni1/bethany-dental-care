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
              background: "rgba(255, 255, 255, 0.22)",
              backdropFilter: "blur(45px)",
              WebkitBackdropFilter: "blur(45px)",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow: "0 35px 70px -15px rgba(9, 29, 54, 0.25)",
              willChange: "transform, opacity, backdrop-filter"
            }}
            className="max-w-4xl transform-gpu"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0f172a]/10 text-xs font-black tracking-wide uppercase text-[#0f172a] mb-6 backdrop-blur-md">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 drop-shadow-sm">
              <span style={{
                background: "linear-gradient(to right, #0f766e, #1d4ed8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900
              }}>
                Specialized
              </span>
              <br />
              <span className="text-[#0f172a]">Dental Services</span>
            </h1>
            <p className="text-lg sm:text-2xl text-[#0f172a] max-w-3xl leading-relaxed mx-auto font-semibold">
              From custom smile redesigns to high-precision implant diagnostics, we offer cutting-edge dental mapping inside NYC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar (Module 2 Widget Trio Re-Theming & Tinted Glass Upscaling & Contrast fix) */}
      <section className="py-16 relative z-10 bg-transparent">
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
                  background: "rgba(255, 255, 255, 0.22)",
                  backdropFilter: "blur(45px)",
                  WebkitBackdropFilter: "blur(45px)",
                  border: "2px solid rgba(255, 255, 255, 0.4)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  boxShadow: "0 35px 70px -15px rgba(9, 29, 54, 0.25)",
                  willChange: "transform, opacity, backdrop-filter"
                }}
                className="flex items-center gap-6 rounded-2xl transform-gpu shadow-xl"
              >
                <div className="w-16 h-16 rounded-xl bg-zinc-900/10 flex items-center justify-center shrink-0 border border-zinc-950/20">
                  <item.icon className="w-8 h-8 text-[#0f172a]" />
                </div>
                <div>
                  <h3 style={{ color: "#0f172a" }} className="font-black text-xl mb-1">{item.title}</h3>
                  <p style={{ color: "#1e3a8a" }} className="text-sm font-bold">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List - Cyber-Glass Grid Layout (Module 3 Reset) */}
      <div className="relative w-full overflow-visible py-16">
        <div className="container mx-auto container-gutter max-w-5xl">
          <div className="space-y-12">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  animate={{ y: [0, -6, 0] }}
                  whileHover={{ 
                    scale: 1.025, 
                    y: -8, 
                    borderColor: "rgba(6, 182, 212, 0.8)", 
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.25)" 
                  }}
                  transition={{
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    },
                    scale: { type: "spring", stiffness: 350, damping: 22 },
                    y_hover: { type: "spring", stiffness: 350, damping: 22 }
                  }}
                  style={{
                    background: "rgba(224, 242, 254, 0.94)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "2px solid rgba(14, 165, 233, 0.4)",
                    borderRadius: "24px",
                    padding: "3rem",
                    boxShadow: "0 0 25px rgba(6, 182, 212, 0.15)",
                    willChange: "transform, opacity, backdrop-filter"
                  }}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transform-gpu"
                >
                  <div className="flex flex-col space-y-6 flex-grow text-slate-900">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center border border-sky-500/30 shadow-sm shrink-0">
                        <service.icon className="w-7 h-7 text-sky-700" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-base text-slate-800 leading-relaxed max-w-xl font-extrabold">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                          <span className="text-slate-900 text-sm font-black">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-auto shrink-0 self-stretch md:self-auto flex items-end">
                    <Button asChild size="lg" className="w-full md:w-fit bg-sky-600 hover:bg-sky-700 text-white font-bold h-12 rounded-xl">
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
              background: "rgba(255, 255, 255, 0.22)",
              backdropFilter: "blur(45px)",
              WebkitBackdropFilter: "blur(45px)",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "24px",
              padding: "3.5rem",
              boxShadow: "0 35px 70px -15px rgba(9, 29, 54, 0.25)",
              willChange: "transform, opacity, backdrop-filter"
            }}
            className="max-w-3xl mx-auto transform-gpu"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0f172a]/10 text-xs font-black tracking-wide uppercase text-[#0f172a] mb-6 backdrop-blur-md">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-base sm:text-lg text-slate-900 mb-8 sm:mb-10 font-bold">
              Book an appointment today and experience the difference of personalized, compassionate healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://calendly.com/venzorx-co/30min" className="w-full sm:w-auto">
                <PremiumIconButton 
                  text="Book Appointment" 
                  className="w-full sm:w-fit h-12 text-sm justify-center bg-sky-600 text-white hover:bg-sky-700"
                />
              </Link>
              <Button asChild size="lg" variant="outline" className="bg-[#0f172a]/10 border border-[#0f172a]/20 text-[#0f172a] hover:bg-[#0f172a]/20 h-12 rounded-full w-full sm:w-auto font-black px-8 shadow-sm">
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

