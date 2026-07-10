"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  AlertCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const branches = [
  {
    name: "Rockefeller Center Suite",
    address: "45 Rockefeller Plaza, Suite 200, New York, NY 10111",
    phone: "+1 (212) 555-0199",
    hours: "Mon - Sat: 9:00 AM - 8:00 PM | Sun: Emergency Only",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783538213/Modern_dental_operatory_interior__2K_202607090041_ukinvc.jpg"
  },
  {
    name: "Upper East Side Clinic",
    address: "820 Fifth Avenue, Suite 105, New York, NY 10065",
    phone: "+1 (212) 555-0180",
    hours: "Mon - Fri: 8:00 AM - 7:00 PM | Sat: 9:00 AM - 4:00 PM",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783538213/Modern_dental_operatory_interior__2K_202607090041_ukinvc.jpg"
  },
  {
    name: "Tribeca Operatory Suite",
    address: "200 Chambers Street, Suite A, New York, NY 10007",
    phone: "+1 (212) 555-0177",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM | Sun: Closed",
    image: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783538213/Modern_dental_operatory_interior__2K_202607090041_ukinvc.jpg"
  }
];

const inquiryTypes = [
  { id: "general", label: "General Inquiry", icon: MessageSquare },
  { id: "appointment", label: "Appointment", icon: Calendar },
  { id: "emergency", label: "Emergency", icon: AlertCircle },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("general");
  const [activeBranch, setActiveBranch] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBranch((prev) => (prev + 1) % branches.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedContactText = encodeURIComponent(`Hi Venzorx, my name is ${formData.name}. I am inquiring about ${selectedType}. Reach me at ${formData.email} / ${formData.phone}. I just checked the Bethany Dental Care interface layout and want to get a similar system generated for my practice. Message: ${formData.message}`);
    window.open(`https://wa.me/918595598458?text=${encodedContactText}`, '_blank');
  };

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(9, 25, 44, 0.45), rgba(9, 25, 44, 0.45)), url('https://res.cloudinary.com/dbpdexty8/image/upload/v1783632651/Luxury_dental_clinic_interior_2K_202607100300_flsexz.jpg')"
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-12 overflow-hidden z-10 bg-transparent">
        <div className="container mx-auto container-gutter relative text-center flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "2px solid rgba(255, 255, 255, 0.45)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow: "0 35px 70px -15px rgba(9, 25, 44, 0.25)"
            }}
            className="max-w-4xl transform-gpu text-[#0f172a]"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0f172a]/10 text-xs font-black tracking-wide uppercase text-[#0f172a] mb-6 backdrop-blur-md">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Get in Touch
              <br />
              <span className="text-sky-700">We&apos;re Here to Help</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-800 max-w-2xl leading-relaxed mx-auto font-semibold">
              Have questions or need assistance? Reach out to us through any of
              our premium operatory suites in NYC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Branch Carousel */}
      <section className="py-12 bg-transparent relative overflow-hidden z-10">
        <div className="container mx-auto container-gutter max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "2px solid rgba(255, 255, 255, 0.45)",
              borderRadius: "24px",
              padding: "3rem",
              boxShadow: "0 35px 70px -15px rgba(9, 25, 44, 0.25)"
            }}
            className="transform-gpu"
          >
            <h2 className="text-xl sm:text-3xl font-black text-center text-[#0f172a] mb-10">
              Our Elite NYC Branches
            </h2>

            <div className="relative h-[320px] sm:h-[240px] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBranch}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full max-w-2xl bg-white/70 border border-white/40 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-soft transform-gpu will-change-transform relative z-10"
                >
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-black text-[#0f172a]">
                      {branches[activeBranch].name}
                    </h3>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-sm font-extrabold text-slate-800">
                        <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                        {branches[activeBranch].address}
                      </p>
                      <p className="flex items-center gap-2 text-sm font-extrabold text-slate-800">
                        <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                        +91 8595598458
                      </p>
                      <p className="flex items-center gap-2 text-xs font-black text-slate-700">
                        <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                        {branches[activeBranch].hours}
                      </p>
                    </div>
                  </div>
                  
                  <Link href="https://calendly.com/venzorx-co/30min">
                    <Button className="bg-[#0f172a] hover:bg-[#0f172a]/90 text-white font-bold px-6 py-2.5 rounded-full cursor-pointer whitespace-nowrap">
                      Book Here <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2.5 mt-8">
              {branches.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBranch(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeBranch === i ? "w-8 bg-[#0f172a]" : "w-2.5 bg-slate-400"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-10 sm:py-12 lg:py-20">
        <div className="container mx-auto container-gutter">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-5 sm:mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <Label className="text-foreground mb-3 block">
                    Type of Inquiry
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                          selectedType === type.id
                            ? "border-accent bg-accent/10"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <type.icon
                          className={`w-5 h-5 mx-auto mb-1 ${
                            selectedType === type.id
                              ? "text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={`text-xs font-medium ${
                            selectedType === type.id
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {type.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (212) XXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full min-h-[150px] rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto min-h-11 bg-primary hover:bg-primary/95 text-primary-foreground shadow-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Embedded Google Map */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative shadow-soft">
                <iframe
                  title="Bethany Dental Care Location - Rockefeller Plaza NYC"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2599723659223!2d-73.98083838459385!3d40.75895427932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ffb4be61a9%3A0xe54e3d37a8b4b1a4!2s45%20Rockefeller%20Plaza%2C%20New%20York%2C%20NY%2010111!5e0!3m2!1sen!2sus!4v1700000000000"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing 45 Rockefeller Plaza, Suite 200, New York, NY 10111"
                />
              </div>

              {/* Emergency Card */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Dental Emergency?
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you&apos;re experiencing a dental emergency, please call
                      our dedicated lines immediately.
                    </p>
                    <Button
                      asChild
                      variant="destructive"
                      size="sm"
                      className="bg-destructive hover:bg-destructive/90"
                    >
                      <Link href="tel:+12125550199">
                        <Phone className="w-4 h-4 mr-2" />
                        Emergency Line
                      </Link>
                    </Button>
                  </div>
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
