"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  AlertCircle,
  Home,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "45 Rockefeller Plaza, Suite 200",
      "New York, NY 10111",
    ],
    action: {
      label: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=45%20Rockefeller%20Plaza%2C%20Suite%20200%2C%20New%20York%2C%20NY%2010111",
    },
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (212) 555-0199", "+1 (212) 555-0190"],
    action: {
      label: "Call Now",
      href: "tel:+12125550199",
    },
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@bethanydentalnyc.com", "appointments@bethanydentalnyc.com"],
    action: {
      label: "Send Email",
      href: "mailto:hello@bethanydentalnyc.com",
    },
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: Emergency Only"],
  },
];

const inquiryTypes = [
  { id: "general", label: "General Inquiry", icon: MessageSquare },
  { id: "appointment", label: "Appointment", icon: Calendar },
  { id: "homevisit", label: "Home Visit", icon: Home },
  { id: "emergency", label: "Emergency", icon: AlertCircle },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ type: selectedType, ...formData });
  };

  return (
    <main className="min-h-screen">
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
              className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-xs font-medium tracking-wide uppercase text-primary mb-6"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6"
            >
              Get in Touch
              <br />
              <span className="text-gradient">We&apos;re Here to Help</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Have questions or need assistance? Reach out to us through any of
              the channels below. Our team is ready to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto container-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <Link
                    href={info.action.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    {info.action.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`p-3 rounded-xl border text-center transition-all duration-200 ${
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
                  className="w-full sm:w-auto min-h-11 glass-dark text-primary-foreground shadow-glow"
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
                      immediately or visit our clinic.
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

              {/* WhatsApp Card */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Chat on WhatsApp
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Quick queries? Message us on WhatsApp for support
                      during working hours.
                    </p>
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                    >
                      <Link
                        href="https://wa.me/12125550199"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Start Chat
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
