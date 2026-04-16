import Navbar          from "@/components/Navbar";
import HeroSection     from "@/components/HeroSection";
import AboutSection    from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SendFilesSection from "@/components/SendFilesSection";
import GallerySection  from "@/components/GallerySection";
import ContestSection  from "@/components/ContestSection";
import ContactSection  from "@/components/ContactSection";
import Footer          from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SendFilesSection />
        <GallerySection />
        <ContestSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
