import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import USPSection from '@/components/sections/USPSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import SpecialMomentsSection from '@/components/sections/SpecialMomentsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import SpotifyFloatingButton from '@/components/SpotifyFloatingButton';
import EasterEggs from '@/components/EasterEggs';
import AllServicesSection from '@/components/sections/AllServicesSection';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SpotifyFloatingButton />
      <EasterEggs />

      <main className="relative">
        <HeroSection />
        <USPSection />
        <AboutSection />
        <ServicesSection />
        <AllServicesSection />
        <PortfolioSection />
        <SpecialMomentsSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
