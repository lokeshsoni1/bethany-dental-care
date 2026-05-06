"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, revealTransitionFast, sectionStagger } from "@/lib/motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={sectionStagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {badge && (
        <motion.span
          variants={fadeUp}
          transition={revealTransitionFast}
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-4",
            light
              ? "bg-accent/20 text-accent"
              : "bg-primary/5 text-primary"
          )}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-balance",
          light ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed text-pretty",
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
