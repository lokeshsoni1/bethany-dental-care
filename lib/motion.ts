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
  scale: 1.025,
  y: -10,
  borderColor: "rgba(14, 165, 233, 0.45)",
  boxShadow: "0 25px 50px rgba(14, 165, 233, 0.12)",
  transition: {
    type: "spring",
    stiffness: 350,
    damping: 22
  }
};

export const ambientFloat = (index = 0) => ({
  y: [0, -6, 0],
  transition: {
    duration: 4.5 + (index * 0.3),
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.25,
  },
});
