"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  Calendar,
  Home,
  Clock,
  CreditCard,
  Stethoscope,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    id: "appointments",
    icon: Calendar,
    label: "Appointments",
    questions: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can book an appointment through our website by visiting the 'Book Appointment' page, calling us at +91 98765 43210, or messaging us on WhatsApp. Our team will confirm your appointment within 2 hours during working hours.",
      },
      {
        question: "What are your working hours?",
        answer:
          "We're open Monday through Saturday from 9:00 AM to 8:00 PM. On Sundays, we're available for emergencies only. You can reach our emergency line 24/7 for urgent medical needs.",
      },
      {
        question: "Can I reschedule my appointment?",
        answer:
          "Yes, you can reschedule your appointment by calling us or through WhatsApp at least 4 hours before your scheduled time. Same-day cancellations may incur a nominal fee to cover administrative costs.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Please bring a valid ID, any previous medical records or test reports relevant to your visit, a list of current medications you're taking, and your insurance card if applicable.",
      },
    ],
  },
  {
    id: "homevisits",
    icon: Home,
    label: "Home Visits",
    questions: [
      {
        question: "Do you offer home visit services?",
        answer:
          "Yes, we provide comprehensive home visit services across Noida and Delhi NCR. This includes consultations, basic diagnostics, IV therapy, and ongoing care for patients who cannot visit the clinic.",
      },
      {
        question: "What areas do you cover for home visits?",
        answer:
          "We currently serve all sectors of Noida, Greater Noida, Ghaziabad, and selected areas of Delhi NCR. Please contact us to confirm if your area is within our service zone.",
      },
      {
        question: "How quickly can a doctor visit my home?",
        answer:
          "For non-emergency home visits, we typically schedule within 24-48 hours based on availability. For urgent needs, we try to accommodate same-day visits. Emergency home visits are prioritized and arranged as quickly as possible.",
      },
      {
        question: "Is there an additional charge for home visits?",
        answer:
          "Yes, home visits include an additional fee to cover travel and the convenience of receiving care at your doorstep. The exact fee depends on your location and the services required. We'll provide a clear estimate when you book.",
      },
    ],
  },
  {
    id: "services",
    icon: Stethoscope,
    label: "Medical Services",
    questions: [
      {
        question: "What services do you offer?",
        answer:
          "We offer a comprehensive range of services including general physician consultations, diabetes management, emergency care, IV fluids & hydration therapy, oxygen support, comprehensive diagnostics, and wellness consultations. Visit our Services page for detailed information.",
      },
      {
        question: "Do you provide emergency care?",
        answer:
          "Yes, we provide 24/7 emergency care. For medical emergencies, please call our emergency line immediately. Our team is equipped to handle various emergency situations and can coordinate hospital admissions if needed.",
      },
      {
        question: "Can you help with chronic disease management?",
        answer:
          "Absolutely. Dr. Agrawal specializes in managing chronic conditions including diabetes, hypertension, and other metabolic disorders. We create personalized management plans and provide regular monitoring to help patients maintain optimal health.",
      },
      {
        question: "Do you offer diagnostic services?",
        answer:
          "Yes, we offer a range of diagnostic services including blood tests, urine analysis, ECG, blood pressure monitoring, glucose testing, and lipid profiles. For advanced diagnostics, we have tie-ups with reputed labs and can arrange home sample collection.",
      },
    ],
  },
  {
    id: "payments",
    icon: CreditCard,
    label: "Payments & Insurance",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, all major credit/debit cards, UPI payments (GPay, PhonePe, Paytm), and bank transfers. Payment is typically collected at the time of service unless other arrangements have been made.",
      },
      {
        question: "Do you accept health insurance?",
        answer:
          "We accept cashless treatment under select insurance providers. Please contact us with your insurance details before your appointment, and we'll verify your coverage. For non-panel insurances, we provide detailed bills for reimbursement claims.",
      },
      {
        question: "What is the consultation fee?",
        answer:
          "Our consultation fees vary based on the type of visit and services required. For current fee structure, please call us or check during the booking process. We believe in transparent pricing with no hidden charges.",
      },
      {
        question: "Are there any packages for regular checkups?",
        answer:
          "Yes, we offer various health checkup packages including annual wellness packages, diabetes monitoring packages, and senior citizen health plans. These packages provide comprehensive care at discounted rates compared to individual services.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("appointments");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  const activeQuestions =
    faqCategories.find((cat) => cat.id === activeCategory)?.questions || [];

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
              FAQ
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 sm:mb-6"
            >
              Frequently Asked
              <br />
              <span className="text-gradient">Questions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Find answers to common questions about our services, appointments,
              home visits, and more. Can&apos;t find what you&apos;re looking for? Contact
              us directly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-12 lg:py-20">
        <div className="container mx-auto container-gutter">
          <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="lg:sticky lg:top-24 space-y-2">
                <p className="text-sm font-medium text-muted-foreground mb-4 px-4">
                  Categories
                </p>
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <category.icon className="w-5 h-5 shrink-0" />
                    <span className="font-medium text-sm">{category.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Questions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="space-y-4">
                {activeQuestions.map((item, index) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(item.question)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium text-foreground pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200",
                          openQuestions.includes(item.question) && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openQuestions.includes(item.question) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5 sm:mb-6 text-balance">
              Still Have Questions?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
              Our team is here to help. Reach out to us and we&apos;ll get back to you
              as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="glass-dark text-primary-foreground shadow-glow w-full sm:w-auto"
              >
                <Link href="/contact">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Us
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
