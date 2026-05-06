"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  Award,
  Users,
  Heart,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Building,
  Clock,
  Shield,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    year: "2008",
    title: "Medical Education",
    description:
      "Completed MBBS from a prestigious medical institution with distinction.",
  },
  {
    year: "2011",
    title: "Specialization",
    description:
      "Pursued MD in Internal Medicine, focusing on comprehensive patient care.",
  },
  {
    year: "2013",
    title: "Advanced Training",
    description:
      "Specialized training in Diabetes and Metabolic Disorders management.",
  },
  {
    year: "2015",
    title: "Agrawal Clinic Founded",
    description:
      "Established Agrawal Clinic in Noida with a vision of personalized healthcare.",
  },
  {
    year: "2020",
    title: "Home Visit Program",
    description:
      "Launched comprehensive home healthcare services across Delhi NCR.",
  },
  {
    year: "Present",
    title: "Continued Excellence",
    description:
      "Serving 5000+ happy patients with expanded services and modern facilities.",
  },
];

const facilities = [
  {
    icon: Building,
    title: "Modern Facility",
    description:
      "State-of-the-art clinic with comfortable waiting areas and private consultation rooms.",
  },
  {
    icon: Shield,
    title: "Advanced Equipment",
    description:
      "Latest diagnostic equipment for accurate assessments and effective treatment.",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description:
      "Flexible scheduling with extended clinic hours to accommodate busy lifestyles.",
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    description:
      "Designed for patient comfort with a calm, welcoming atmosphere.",
  },
];

const certifications = [
  "MBBS - Bachelor of Medicine and Surgery",
  "MD - Doctor of Medicine (Internal Medicine)",
  "Certified in Diabetes Management",
  "Member, Indian Medical Association (IMA)",
  "Member, Association of Physicians of India",
  "Advanced Life Support Certified",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative hero-padding overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto container-gutter relative">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-xs font-medium tracking-wide uppercase text-primary mb-6"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6"
            >
              Dedicated to Your Health
              <br />
              <span className="text-gradient">Since 2015</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Agrawal Clinic was founded with a simple mission: to provide
              compassionate, personalized healthcare that treats the whole
              person, not just the symptoms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-gutter">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-3xl p-8 lg:p-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional, patient-centered healthcare that
                combines medical expertise with genuine compassion. We strive to
                make quality healthcare accessible to every family in Noida and
                Delhi NCR through our clinic and home visit services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To be the most trusted healthcare provider in the region,
                recognized for our commitment to excellence, innovation, and the
                well-being of our community. We envision a healthier future for
                every family we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="section-padding">
        <div className="container mx-auto container-gutter">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Stethoscope className="w-20 h-20 text-primary" />
                    </div>
                    <p className="text-xl font-semibold text-foreground">
                      Dr. Amit Agrawal
                    </p>
                    <p className="text-muted-foreground">MBBS, MD</p>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-4"
              >
                {[
                  { value: "15+", label: "Years" },
                  { value: "5K+", label: "Patients" },
                  { value: "10K+", label: "Consultations" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card border border-border rounded-xl p-4 text-center shadow-soft"
                  >
                    <p className="text-xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-xs font-medium tracking-wide uppercase text-primary mb-4">
                Your Physician
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 sm:mb-6">
                Dr. Amit Agrawal
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dr. Amit Agrawal is a highly accomplished physician with over 15
                years of experience in providing comprehensive medical care. His
                patient-first approach has earned him the trust of thousands of
                families across Noida and Delhi NCR.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                After completing his medical education at prestigious
                institutions, Dr. Agrawal dedicated himself to building a
                practice that combines the latest medical advances with
                old-fashioned care and attention. He believes that every patient
                deserves to be heard, understood, and treated with dignity.
              </p>

              {/* Certifications */}
              <div className="space-y-3 mb-8">
                {certifications.slice(0, 4).map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground text-sm">{cert}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="group">
                <Link href="/book-appointment">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto container-gutter relative">
          <SectionHeading
            badge="Our Journey"
            title="A Legacy of Care"
            description="From humble beginnings to serving thousands, our journey has been driven by one goal: better health for our community."
            light
          />

          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-primary-foreground/20 lg:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2" />

                  {/* Content */}
                  <div
                    className={`flex-1 pl-20 lg:pl-0 ${
                      index % 2 === 0
                        ? "lg:pr-20 lg:text-right"
                        : "lg:pl-20 lg:text-left"
                    }`}
                  >
                    <span className="text-accent text-sm font-medium">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding">
        <div className="container mx-auto container-gutter">
          <SectionHeading
            badge="Our Facilities"
            title="World-Class Infrastructure"
            description="Our clinic is designed with your comfort and care in mind, featuring modern amenities and advanced medical equipment."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <facility.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {facility.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-gutter">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-xs font-medium tracking-wide uppercase text-primary mb-4">
                Visit Us
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-5 sm:mb-6">
                Conveniently Located in Noida
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our clinic is easily accessible and located in the heart of
                Sector 62, Noida. We offer ample parking and a comfortable,
                welcoming environment for all our patients.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Sector 62, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-muted-foreground text-sm">
                      Mon - Sat: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Sunday: Emergency Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Get Directions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/book-appointment">Book Visit</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive Map Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
