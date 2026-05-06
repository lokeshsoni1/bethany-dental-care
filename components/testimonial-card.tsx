"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, revealTransitionFast, subtleHoverLift } from "@/lib/motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  delay?: number;
  featured?: boolean;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  delay = 0,
  featured = false,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ ...revealTransitionFast, delay }}
      whileHover={subtleHoverLift}
      className={cn(
        "relative p-5 sm:p-6 lg:p-8 rounded-2xl border transition-all duration-300 active:scale-[0.99]",
        featured
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card border-border hover:border-accent/30 hover:shadow-soft"
      )}
    >
      {/* Quote Icon */}
      <Quote
        className={cn(
          "w-10 h-10 mb-4",
          featured ? "text-accent/30" : "text-primary/10"
        )}
      />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating
                ? featured
                  ? "text-accent fill-accent"
                  : "text-yellow-400 fill-yellow-400"
                : "text-muted-foreground/30"
            )}
          />
        ))}
      </div>

      {/* Content */}
      <p
        className={cn(
          "text-sm sm:text-base leading-relaxed mb-5 sm:mb-6",
          featured ? "text-primary-foreground/90" : "text-muted-foreground"
        )}
      >
        &quot;{content}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold",
            featured ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"
          )}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p
            className={cn(
              "font-semibold",
              featured ? "text-primary-foreground" : "text-foreground"
            )}
          >
            {name}
          </p>
          <p
            className={cn(
              "text-sm",
              featured ? "text-primary-foreground/60" : "text-muted-foreground"
            )}
          >
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
