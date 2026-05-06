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
    default: "Agrawal Clinic - Dr. Amit Agrawal | Premium Healthcare in Noida",
    template: "%s | Agrawal Clinic",
  },
  description:
    "Experience world-class personalized healthcare at Agrawal Clinic. Dr. Amit Agrawal offers comprehensive medical services including general physician care, diabetes management, emergency care, and home visits in Noida, Delhi NCR.",
  keywords: [
    "Agrawal Clinic",
    "Dr. Amit Agrawal",
    "Noida clinic",
    "private healthcare",
    "general physician",
    "diabetes management",
    "home visits",
    "Delhi NCR doctor",
  ],
  authors: [{ name: "Dr. Amit Agrawal" }],
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
