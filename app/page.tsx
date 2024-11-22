import Hero from "@/components/landing-page/hero";
import { Navbar } from "@/components/landing-page/navbar";

export default function Home() {
  return (
    <div className="font-mono flex flex-col space-y-2">
    <Navbar />
    <Hero />
    </div>
  );
}
