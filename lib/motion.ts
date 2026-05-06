import type { Transition, Variants } from "framer-motion";

export const EASE_LUXURY: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export const revealTransition: Transition = {
  duration: 0.65,
  ease: EASE_LUXURY,
};

export const revealTransitionFast: Transition = {
  duration: 0.32,
  ease: EASE_LUXURY,
};

export const sectionStagger = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

export const softFade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: revealTransition,
  },
};

export const subtleHoverLift = {
  y: -4,
  scale: 1.01,
  transition: revealTransitionFast,
};

export const ambientFloat = {
  y: [0, -8, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
