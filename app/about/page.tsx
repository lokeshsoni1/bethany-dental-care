"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Briefcase, 
  Star, 
  Users, 
  CheckCircle, 
  Stethoscope, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const milestones = [
  {
    year: "2006",
    title: "Clinic Foundation",
    description: "Bethany Dental Care was founded at 45 Rockefeller Plaza, setting a new benchmark for elite oral healthcare in NYC."
  },
  {
    year: "2012",
    title: "Advanced Orthodontics & Invisalign",
    description: "Integrated clear aligner workflows, becoming a premier provider of customized Invisalign treatments."
  },
  {
    year: "2018",
    title: "Bio-Telemetry Occlusal Mapping",
    description: "Adopted T-Scan force telemetry mapping to proactively balance bite alignment and protect natural enamel profiles."
  },
  {
    year: "2026",
    title: "Sterile Operatory Expansion",
    description: "Expanded our clinical facility with state-of-the-art sterile surgical suites and neuromuscular oral sedation suites."
  }
];

const team = [
  {
    name: "Dr. Sarah Bethany, DDS, DMD",
    title: "Clinical Director & Lead Executive",
    degree: "Columbia University Dental Medicine",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783536399/ChatGPT_Image_Jul_9_2026_12_14_21_AM_hspagz.png",
    featured: true
  },
  {
    name: "Dr. Michael Chang, DDS",
    title: "Lead Orthodontics Specialist",
    degree: "Harvard School of Dental Medicine",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop",
    featured: false
  },
  {
    name: "Dr. Elena Rostova, DMD",
    title: "Precision Endodontics Operator",
    degree: "Penn Dental Medicine",
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=300&auto=format&fit=crop",
    featured: false
  },
  {
    name: "Dr. Yasmin Al-Fayed, DDS",
    title: "Periodontal & Biomaterial Specialist",
    degree: "NYU College of Dentistry",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
    featured: false
  },
  {
    name: "Dr. Marcus Brody, DDS",
    title: "Oral & Maxillofacial Surgeon",
    degree: "Columbia University Dental Medicine",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f0471?q=80&w=300&auto=format&fit=crop",
    featured: false
  }
];

const jobs = [
  {
    title: "Lead Orthodontics Operator",
    type: "Full-Time | Rockefeller Center",
    salary: "$180,000 - $240,000 / Year",
    description: "Orchestrate high-velocity Invisalign and advanced orthodontic treatments inside our luxury operatory suites."
  },
  {
    title: "Clinical Dental Assistant",
    type: "Full-Time | Tribeca",
    salary: "$35 - $45 / Hour",
    description: "Provide precision assistance during endodontic and neuromuscular oral sedation procedures in sterile zones."
  },
  {
    title: "Head Medical Receptionist",
    type: "Full-Time | Rockefeller Center",
    salary: "$65,000 - $80,000 / Year",
    description: "Manage elite patient relations, scheduling pipelines, and coordinate intake for corporate accounts."
  }
];

const awards = [
  {
    title: "NDA Excellence Award",
    organization: "National Dental Association",
    year: "2024",
    desc: "Recognized for clinical precision and implementation of sterile operatory safeguards."
  },
  {
    title: "Top Cosmetic Design Registry",
    organization: "Aesthetic Dentistry Council",
    year: "2025",
    desc: "Certified for elite achievements in digital smile design and porcelain veneers."
  },
  {
    title: "Invisalign Elite Provider",
    organization: "Align Technology Inc.",
    year: "2026",
    desc: "Awarded to the top 1% of dental practices demonstrating high-volume orthodontic excellence."
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Hook up scroll telemetry for the chronological milestones dots timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto container-gutter relative">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-xs font-semibold tracking-wide uppercase text-primary mb-6"
            >
              About Bethany Dental Care
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6"
            >
              Redefining Clinical
              <br />
              <span className="text-gradient">Dental Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              For over two decades, Bethany Dental Care has delivered elite oral healthcare and anxiety-free dentistry to the regional community.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION A: Clinic Origins Narrative */}
      <section className="py-14 sm:py-16 lg:py-20 relative z-10">
        <div className="container mx-auto container-gutter max-w-4xl">
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Origins & Vision</h2>
            <p>
              Bethany Dental Care was engineered over twenty years ago with a singular objective: to combine state-of-the-art digital dental mapping with a zero-anxiety clinical methodology. Located in the heart of Manhattan at 45 Rockefeller Plaza, our practice has grown from a single treatment room into a premier multi-disciplinary clinic serving thousands of professionals.
            </p>
            <p>
              Under the clinical leadership of Dr. Sarah Bethany, our team has pioneered the use of preventative bio-telemetry, enabling us to diagnose and address tooth wear and occlusal friction points before they result in pain or structural failure. We believe in high-efficiency, evidence-based treatments administered in premium sterile suites.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION B: The Chronological Dots Timeline Chart */}
      <section ref={containerRef} className="py-14 sm:py-20 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto container-gutter max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">Our Chronological Milestones</h2>
          
          <div className="relative border-l border-primary/20 dark:border-white/10 ml-4 sm:ml-8 pl-8 space-y-12">
            {/* Scroll reactive progress line overlay */}
            <motion.div 
              className="absolute left-0 top-0 w-0.5 bg-accent origin-top transform-gpu"
              style={{ height: pathHeight }}
            />
            
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center z-10 shadow-glow">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:border-accent/30 transition-all duration-300 transform-gpu hover:-translate-y-0.5">
                  <span className="inline-block text-sm font-bold text-accent mb-1">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: The Clinical Team Grid Mesh Architecture */}
      <section className="relative overflow-hidden bg-transparent py-14 sm:py-20">
        {/* Enforce dedicated section background image with 3% blur filter */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-[0.03] transform-gpu filter blur-[2px]" 
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783540390/Bethany_Dental_Care_wall_2K_202607090122_gzbl9h.jpg')` 
          }}
        />

        <div className="container mx-auto container-gutter relative z-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground mb-4">Our Clinical Specialist Team</h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16 text-sm sm:text-base">
            A collaborative panel of elite clinicians, each holding credentials from leading institutions.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Top row: Centralized Lead Doctor */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-sm bg-card border border-primary/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-accent/40 transition-colors group transform-gpu"
              >
                <div className="aspect-[4/3] relative bg-muted overflow-hidden">
                  <img 
                    src={team[0].image} 
                    alt={team[0].name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{team[0].name}</h3>
                  <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">{team[0].title}</p>
                  <p className="text-xs text-muted-foreground">{team[0].degree}</p>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Two doctors side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              {team.slice(1, 3).map((doctor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card border border-primary/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-accent/30 transition-colors group transform-gpu"
                >
                  <div className="aspect-[4/3] relative bg-muted overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{doctor.name}</h3>
                    <p className="text-xs font-bold text-accent tracking-widest uppercase mb-2">{doctor.title}</p>
                    <p className="text-xs text-muted-foreground">{doctor.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: Two doctors side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              {team.slice(3, 5).map((doctor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card border border-primary/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-accent/30 transition-colors group transform-gpu"
                >
                  <div className="aspect-[4/3] relative bg-muted overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{doctor.name}</h3>
                    <p className="text-xs font-bold text-accent tracking-widest uppercase mb-2">{doctor.title}</p>
                    <p className="text-xs text-muted-foreground">{doctor.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION D: Human Resources & Careers Gateway */}
      <section className="py-14 sm:py-20 bg-muted/10 relative z-10">
        <div className="container mx-auto container-gutter">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground mb-4">Join Our Practice</h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12 text-sm">
            We are looking for dedicated clinical specialists and support operators.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-950 border border-white/10 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-soft hover:border-accent/40 transition-colors transform-gpu"
              >
                <div>
                  <Briefcase className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>
                  <p className="text-xs text-slate-400 font-semibold mb-3">{job.type}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{job.description}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{job.salary}</span>
                  <Link href="/contact" className="text-xs font-bold text-accent flex items-center gap-1 hover:underline">
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: "What We've Achieved" Recognition Block */}
      <section className="py-14 sm:py-20 bg-transparent relative z-10">
        <div className="container mx-auto container-gutter">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground mb-12">Clinical Recognitions & Credentials</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center text-center space-y-4 hover:border-accent/30 transition-colors shadow-soft"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-soft">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{award.title}</h3>
                <p className="text-xs font-bold text-accent uppercase tracking-widest">{award.organization} | {award.year}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
