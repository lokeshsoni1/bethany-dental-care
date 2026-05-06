import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="hero-padding">
        <div className="container mx-auto container-gutter max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            This is a demo terms of service page for Agrawal Clinic. In a live
            deployment, this content would describe the conditions of use, legal
            disclaimers, and limitations of liability for the clinic&apos;s
            website and services.
          </p>
          <p className="text-muted-foreground">
            All appointments, services, and medical references on this demo
            experience are illustrative only and should not be interpreted as
            real medical advice or treatment plans.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

