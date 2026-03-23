import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnunsioPopup from "@/components/AnunsioPopup";

export default function Home() {
  return (
    <main>
      <AnunsioPopup />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
