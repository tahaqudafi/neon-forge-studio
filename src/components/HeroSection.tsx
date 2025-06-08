
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

const HeroSection = () => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Robot Background */}
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0" 
      />

      {/* Fallback gradient background */}
      <div className="absolute inset-0 z-5 bg-gradient-dark opacity-80"></div>

      {/* Original Background Effects - now with lower z-index */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pointer-events-none">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm mb-8 pointer-events-auto">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Building the future, one project at a time</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg">
            <span className="gradient-text">Build Beyond</span>
            <br />
            <span className="text-foreground">Limits</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
            Websites, apps, and tools that actually grow your business. 
            <br className="hidden md:block" />
            Transform your ideas into scalable digital solutions.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
            <Button size="lg" className="group relative px-8 py-6 text-lg font-semibold bg-gradient-primary hover:scale-105 transition-all duration-300 animate-pulse-glow">
              Let's Build Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-medium border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
