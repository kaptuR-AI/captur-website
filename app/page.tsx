import ExtraSection from "@/components/landing-page/extra-section";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import { Navbar } from "@/components/landing-page/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <ExtraSection />
    <Footer />
    </>
  );
}
