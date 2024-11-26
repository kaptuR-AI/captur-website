import ExtraSection from "@/components/landing-page/extra-section";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import { Navbar } from "@/components/landing-page/navbar";
import StepsSection from "@/components/landing-page/stepsSection";
import ImpactSection from "@/components/landing-page/impact-section";
import BuiltForSection from "@/components/landing-page/builtForSection";
import TestimonialSection from "@/components/landing-page/testimonialSection";

export default function Home() {
  return (
    <div className="space-y-6">
      <Navbar />
      <Hero />
      <StepsSection />
      <ImpactSection />
      <BuiltForSection />
      <TestimonialSection />
      <ExtraSection />
      <Footer />
    </div>
  );
}
