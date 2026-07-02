import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bethany Dental Care - Premium New York City Dental Clinic",
    template: "%s | Bethany Dental Care",
  },
  description:
    "Experience world-class personalized oral healthcare at Bethany Dental Care. We offer comprehensive dental services including general dentistry, cosmetic dentistry, emergency dental care, and cleanings at 45 Rockefeller Plaza, New York City.",
  keywords: [
    "Bethany Dental Care",
    "Manhattan dentist",
    "Rockefeller Plaza dentist",
    "NYC dental clinic",
    "private dentist New York",
    "cosmetic dentistry NYC",
    "emergency dentist NYC",
    "New York dentist",
  ],
  authors: [{ name: "Bethany Dental Care" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
          <MobileCtaBar />
        </SmoothScrollProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
