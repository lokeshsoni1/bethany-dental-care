"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, revealTransitionFast, subtleHoverLift } from "@/lib/motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  delay?: number;
  featured?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href = "/services",
  delay = 0,
  featured = false,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ ...revealTransitionFast, delay }}
      whileHover={subtleHoverLift}
    >
      <Link href={href} className="block h-full group">
        <div
          className={cn(
            "relative h-full p-5 sm:p-6 lg:p-8 rounded-2xl border transition-all duration-500 active:scale-[0.99]",
            featured
              ? "bg-primary text-primary-foreground border-primary shadow-soft"
              : "bg-card border-border hover:border-accent/30 hover:shadow-soft"
          )}
        >
          {/* Glow Effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
              featured ? "shadow-glow" : ""
            )}
          />

          {/* Icon */}
          <div
            className={cn(
              "w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110",
              featured ? "bg-accent/20" : "bg-primary/5"
            )}
          >
            <Icon
              className={cn(
                "w-7 h-7",
                featured ? "text-accent" : "text-primary"
              )}
            />
          </div>

          {/* Content */}
          <h3
            className={cn(
              "text-base sm:text-lg font-semibold mb-2.5 sm:mb-3",
              featured ? "text-primary-foreground" : "text-foreground"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-sm leading-relaxed mb-3.5 sm:mb-4",
              featured ? "text-primary-foreground/70" : "text-muted-foreground"
            )}
          >
            {description}
          </p>

          {/* Link Arrow */}
          <div
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              featured ? "text-accent" : "text-primary"
            )}
          >
            <span>Learn more</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          {/* Hover Border Gradient */}
          <motion.div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
              !featured && "ring-1 ring-accent/20"
            )}
          />
        </div>
      </Link>
    </motion.div>
  );
}
