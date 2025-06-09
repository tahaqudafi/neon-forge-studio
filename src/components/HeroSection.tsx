
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

const HeroSection = () => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Robot Background - Made larger */}
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0 scale-125 md:scale-150" 
      />

      {/* Fallback gradient background */}
      <div className="absolute inset-0 z-5 bg-gradient-dark opacity-80"></div>

      {/* Original Background Effects - now with lower z-index */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pointer-events-none">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm mb-6 md:mb-8 pointer-events-auto">
            <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-muted-foreground">Building the future, one project at a time</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
            <span className="gradient-text">Build Beyond</span>
            <br />
            <span className="text-foreground">Limits</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed drop-shadow-lg px-2">
            Websites, apps, and tools that actually grow your business. 
            <br className="hidden sm:block" />
            Transform your ideas into scalable digital solutions.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pointer-events-auto px-2">
            <Button 
              size="lg" 
              className="group relative px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold bg-gradient-primary hover:scale-105 transition-all duration-300 animate-pulse-glow w-full sm:w-auto interactive-element"
              onClick={() => scrollToSection('why-work-with-us')}
            >
              Let's Build Together
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto interactive-element"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
