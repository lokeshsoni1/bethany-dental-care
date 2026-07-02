"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  Activity,
  Syringe,
  Droplets,
  Home,
  Wind,
  TestTube,
  Heart,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
  Clock,
  Shield,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Stethoscope,
    title: "General Physician",
    shortDescription:
      "Comprehensive medical consultations for all ages with personalized treatment plans.",
    description:
      "Our general physician services cover a wide range of health concerns, from routine checkups to complex medical conditions. Our team takes a thorough approach to diagnosis and treatment, ensuring every patient receives personalized care.",
    features: [
      "Complete health assessments",
      "Chronic disease management",
      "Preventive care guidance",
      "Health counseling",
      "Prescription management",
      "Referrals to specialists",
    ],
  },
  {
    icon: Activity,
    title: "Diabetes Management",
    shortDescription:
      "Expert care and monitoring for diabetes with lifestyle guidance and medication management.",
    description:
      "Our specialized diabetes care program helps patients manage their condition effectively through a combination of medication, lifestyle modifications, and regular monitoring. We work closely with each patient to develop a sustainable management plan.",
    features: [
      "Blood sugar monitoring",
      "HbA1c tracking",
      "Diet and nutrition planning",
      "Medication optimization",
      "Complication prevention",
      "Lifestyle coaching",
    ],
    featured: true,
  },
  {
    icon: Syringe,
    title: "Emergency Care",
    shortDescription:
      "Round-the-clock emergency medical services with rapid response protocols.",
    description:
      "When medical emergencies arise, our team is ready to provide immediate, life-saving care. We&apos;re equipped to handle a wide range of emergency situations with the urgency and expertise they require.",
    features: [
      "24/7 availability",
      "Rapid response protocols",
      "Emergency stabilization",
      "Critical care support",
      "Ambulance coordination",
      "Hospital admission assistance",
    ],
  },
  {
    icon: Droplets,
    title: "IV Fluids & Hydration",
    shortDescription:
      "Professional IV therapy for dehydration, vitamin infusions, and recovery support.",
    description:
      "Our IV therapy services provide rapid relief for dehydration and deliver essential nutrients directly to your system. Whether recovering from illness or seeking wellness optimization, our IV treatments are administered safely and effectively.",
    features: [
      "Dehydration treatment",
      "Electrolyte replenishment",
      "Vitamin infusions",
      "Post-illness recovery",
      "Energy boost therapy",
      "Immune support",
    ],
  },
  {
    icon: Home,
    title: "Home Visit Support",
    shortDescription:
      "Convenient medical care at your doorstep across Manhattan and New York City.",
    description:
      "We understand that visiting a clinic isn&apos;t always possible. Our home visit service brings quality medical care to your doorstep, perfect for elderly patients, those with mobility issues, or anyone who prefers the comfort of home.",
    features: [
      "In-home consultations",
      "Elderly care",
      "Post-operative checkups",
      "Chronic condition monitoring",
      "Sample collection",
      "IV administration at home",
    ],
    featured: true,
  },
  {
    icon: Wind,
    title: "Oxygen Support",
    shortDescription:
      "Comprehensive respiratory care with oxygen therapy and monitoring services.",
    description:
      "For patients requiring respiratory support, we provide comprehensive oxygen therapy services. Our team ensures proper oxygen delivery and monitors patients to maintain optimal oxygen saturation levels.",
    features: [
      "Oxygen therapy",
      "Saturation monitoring",
      "Respiratory assessment",
      "Equipment guidance",
      "Home oxygen setup",
      "Emergency respiratory care",
    ],
  },
  {
    icon: TestTube,
    title: "Comprehensive Diagnostics",
    shortDescription:
      "Advanced diagnostic testing with quick results and expert interpretation.",
    description:
      "Accurate diagnosis is the foundation of effective treatment. Our diagnostic services utilize the latest testing methods to provide quick, reliable results that guide treatment decisions.",
    features: [
      "Blood tests",
      "Urine analysis",
      "ECG monitoring",
      "Blood pressure monitoring",
      "Glucose testing",
      "Lipid profile",
    ],
  },
  {
    icon: Heart,
    title: "Wellness Consultations",
    shortDescription:
      "Preventive health checkups and wellness programs for optimal health.",
    description:
      "Prevention is better than cure. Our wellness consultations help you stay ahead of potential health issues through regular checkups, lifestyle guidance, and personalized wellness programs.",
    features: [
      "Annual health checkups",
      "Preventive screenings",
      "Lifestyle counseling",
      "Nutrition guidance",
      "Stress management",
      "Fitness recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative hero-padding overflow-hidden">
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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6"
            >
              Comprehensive
              <br />
              <span className="text-gradient">Healthcare Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              From routine checkups to specialized care, we offer a complete
              range of medical services designed to meet your health needs at
              every stage of life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-10 sm:py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto container-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Extended Hours",
                description: "Mon-Sat: 9AM-8PM",
              },
              {
                icon: Home,
                title: "Home Visits",
                description: "Available across New York City",
              },
              {
                icon: Shield,
                title: "Emergency Care",
                description: "24/7 availability",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container mx-auto container-gutter">
          <div className="space-y-14 sm:space-y-20 lg:space-y-28">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
                className={cn(
                  "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {service.featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-4">
                      Popular Service
                    </span>
                  )}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center",
                        service.featured ? "bg-primary" : "bg-primary/10"
                      )}
                    >
                      <service.icon
                        className={cn(
                          "w-8 h-8",
                          service.featured ? "text-accent" : "text-primary"
                        )}
                      />
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button asChild size="lg" className="group">
                    <Link href="/book-appointment">
                      Book This Service
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className={cn(
                      "relative aspect-[4/3] rounded-3xl overflow-hidden",
                      service.featured
                        ? "bg-gradient-to-br from-primary via-primary to-navy"
                        : "bg-gradient-to-br from-primary/10 to-accent/10"
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon
                        className={cn(
                          "w-24 h-24",
                          service.featured
                            ? "text-accent/30"
                            : "text-primary/20"
                        )}
                      />
                    </div>

                    {/* Floating Elements */}
                    {service.featured && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                        >
                          <p className="text-primary-foreground text-sm font-medium">
                            24/7 Available
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                        >
                          <p className="text-primary-foreground text-sm font-medium">
                            Expert Care
                          </p>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-xs font-medium tracking-wide uppercase text-primary mb-4">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 sm:mb-6 text-balance">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
              Book an appointment today and experience the difference of
              personalized, compassionate healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="glass-dark text-primary-foreground shadow-glow w-full sm:w-auto"
              >
                <Link href="/book-appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="tel:+919876543210">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 98765 43210
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
