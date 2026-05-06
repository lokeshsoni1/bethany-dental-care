"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotionQuery.matches) {
      document.documentElement.classList.remove("lenis");
      document.body.classList.remove("lenis");
      return;
    }

    const lenis = new Lenis({
      // Slightly shorter duration to avoid "sticky" feeling on stop
      duration: 0.75,
      // Soft ease-out curve that feels responsive on both wheel and touch
      easing: (t: number) => 1 - Math.pow(1 - t, 2),
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
      touchMultiplier: 1.15,
      wheelMultiplier: 0.85,
      gestureDirection: "vertical",
      normalizeWheel: true,
      autoResize: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    // Reset scroll position and recalculate dimensions after route transitions
    const timeoutId = window.setTimeout(() => {
      lenis.scrollTo(0, { immediate: true });
      lenis.resize();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  return <>{children}</>;
}
