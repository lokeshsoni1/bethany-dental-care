"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, Calendar, ArrowRight, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Patient since 2019",
    content:
      "Dr. Agrawal's attention to detail and genuine concern for my health has made all the difference. The home visit service during my recovery was exceptional. I couldn't have asked for better care.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Diabetes Care Patient",
    content:
      "Managing my diabetes has become so much easier with Dr. Agrawal's guidance. His personalized approach and regular monitoring have transformed my health. My HbA1c levels have never been better.",
    rating: 5,
    featured: true,
  },
  {
    name: "Anita Verma",
    role: "Family Healthcare",
    content:
      "Our entire family trusts Agrawal Clinic for all our healthcare needs. The clinic is modern, clean, and the staff is incredibly professional. Dr. Agrawal treats us like family.",
    rating: 5,
  },
  {
    name: "Sunil Gupta",
    role: "Emergency Care Patient",
    content:
      "When my father had a health emergency at midnight, Dr. Agrawal was available immediately. His quick response and expert care saved my father's life. We are forever grateful.",
    rating: 5,
  },
  {
    name: "Meena Patel",
    role: "Home Visit Patient",
    content:
      "As an elderly patient with mobility issues, the home visit service has been a blessing. Dr. Agrawal comes to my home for regular checkups, making healthcare truly accessible.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Wellness Program",
    content:
      "The comprehensive wellness checkup at Agrawal Clinic helped detect early signs of a condition I wasn't aware of. Early detection and Dr. Agrawal's treatment plan have been life-changing.",
    rating: 5,
  },
  {
    name: "Kavita Reddy",
    role: "Patient since 2020",
    content:
      "What sets Dr. Agrawal apart is that he actually listens. He takes time to understand your concerns and explains everything clearly. It's rare to find such patient-centered care.",
    rating: 5,
  },
  {
    name: "Arun Mehta",
    role: "IV Therapy Patient",
    content:
      "I was severely dehydrated after a bout of illness, and the IV therapy at Agrawal Clinic helped me recover quickly. The treatment was administered professionally and I felt better within hours.",
    rating: 5,
  },
  {
    name: "Sunita Joshi",
    role: "Regular Patient",
    content:
      "From the warm reception to Dr. Agrawal's thorough consultation, every aspect of the experience is premium. The clinic maintains the highest standards of hygiene and care.",
    rating: 5,
    featured: true,
  },
  {
    name: "Rahul Tiwari",
    role: "Corporate Health Checkup",
    content:
      "Our company chose Agrawal Clinic for employee health checkups, and it was an excellent decision. The process was efficient, and the reports were detailed and helpful.",
    rating: 5,
  },
  {
    name: "Deepa Nair",
    role: "Chronic Care Patient",
    content:
      "Living with a chronic condition is challenging, but Dr. Agrawal's continuous support and optimistic approach have given me hope. He goes beyond treating symptoms to improving quality of life.",
    rating: 5,
  },
  {
    name: "Manoj Kumar",
    role: "Patient since 2017",
    content:
      "I've been Dr. Agrawal's patient for over 7 years now. His consistency in providing excellent care and his knowledge of my medical history makes every consultation effective.",
    rating: 5,
  },
];

const stats = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Recommend Us" },
  { value: "15+", label: "Years of Trust" },
];

export default function TestimonialsPage() {
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
              Testimonials
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6"
            >
              What Our Patients
              <br />
              <span className="text-gradient">Say About Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Real stories from real patients. Discover why thousands of
              families trust Agrawal Clinic for their healthcare needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto container-gutter">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding">
        <div className="container mx-auto container-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 lg:p-16 relative overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 text-accent/30 mx-auto mb-8" />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                &quot;Dr. Agrawal is not just a doctor; he&apos;s a healer in the truest
                sense. His dedication to patient care, combined with his
                expertise, creates an unparalleled healthcare experience. Our
                family has been under his care for years, and we couldn&apos;t be
                more grateful.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl font-semibold text-accent">
                  R
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">The Kapoor Family</p>
                  <p className="text-primary-foreground/70">
                    Patients since 2016
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-gutter">
          <SectionHeading
            badge="Patient Stories"
            title="More Reviews From Our Community"
            description="Each testimonial represents a patient's journey with us — their trust, their recovery, and their satisfaction."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                featured={testimonial.featured}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto container-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5 sm:mb-6 text-balance">
              Join Our Growing Family of Satisfied Patients
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
              Experience the difference of personalized, compassionate healthcare.
              Book your consultation today and become part of our community.
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
              <Button asChild size="lg" variant="outline" className="group w-full sm:w-auto">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
