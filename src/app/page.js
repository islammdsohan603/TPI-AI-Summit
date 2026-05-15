import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Schedule from "@/app/components/Schedule";
import Speakers from "@/app/components/Speakers";
import Guests from "@/app/components/Guests";
import Pricing from "@/app/components/Pricing";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--page-bg)] text-white">
      <Navbar />
      <Hero />
      <Schedule />
      <Speakers />
      <Guests />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
