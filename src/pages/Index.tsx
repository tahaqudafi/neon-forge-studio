
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyWorkWithMeSection from "@/components/WhyWorkWithMeSection";
import ContactSection from "@/components/ContactSection";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyWorkWithMeSection />
      <div id="contact">
        <ContactSection />
      </div>
      <MobileCTA />
    </div>
  );
};

export default Index;
