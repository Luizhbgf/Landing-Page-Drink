import SmoothScroll from "@/components/smooth-scroll";
import CinematicIntro from "@/components/cinematic-intro";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import DrinksGallery from "@/components/drinks-gallery";
import ServicesSection from "@/components/services-section";
import EventsGallery from "@/components/events-gallery";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <CinematicIntro />
      <Navbar />
      <main>
        <HeroSection />
        <DrinksGallery />
        <ServicesSection />
        <EventsGallery />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
