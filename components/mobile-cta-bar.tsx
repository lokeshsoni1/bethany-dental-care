"use client";

import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden">
      <div className="container mx-auto container-gutter py-3">
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/book-appointment"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            <Calendar className="h-4 w-4" />
            Book Now
          </Link>
          <Link
            href="tel:+919876543210"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-card px-4 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" />
            Call
          </Link>
        </div>
      </div>
    </div>
  );
}
