import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 md:hidden">
      {isExpanded ? (
        <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 shadow-2xl animate-fade-in max-w-xs">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm">Ready to start?</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 interactive-element"
              onClick={() => setIsExpanded(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Let's discuss your project and bring your ideas to life.
          </p>
          <div className="space-y-2">
            <Button 
              onClick={scrollToContact}
              className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 text-sm py-2 interactive-element"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/10 text-sm py-2 interactive-element"
              onClick={scrollToPortfolio}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-primary hover:scale-110 transition-all duration-300 animate-pulse-glow shadow-2xl interactive-element"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      )}
    </div>
  );
};

export default MobileCTA;
