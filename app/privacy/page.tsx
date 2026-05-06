import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="hero-padding">
        <div className="container mx-auto container-gutter max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            This is a demo privacy policy for Agrawal Clinic. In a production
            website, this page would outline how patient information and data
            are collected, stored, and protected in line with applicable laws.
          </p>
          <p className="text-muted-foreground">
            All forms and contact details on this demo experience are for
            showcase purposes only and do not represent a real medical practice
            or patient onboarding workflow.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

