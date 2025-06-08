import { Card } from "@/components/ui/card";
import { Zap, Shield, Rocket, Users } from "lucide-react";
const benefits = [{
  icon: Zap,
  title: "Lightning Fast",
  description: "From concept to launch in weeks, not months. I use proven frameworks and methodologies to deliver quickly without compromising quality."
}, {
  icon: Rocket,
  title: "Built to Scale",
  description: "Every solution is architected for growth. Your digital products will handle increased traffic, users, and complexity as your business expands."
}, {
  icon: Shield,
  title: "Security First",
  description: "Enterprise-grade security practices built in from day one. Your data and your customers' data are protected with industry-leading standards."
}, {
  icon: Users,
  title: "Tailored Solutions",
  description: "No cookie-cutter approaches. Every project is custom-designed to fit your unique business needs, goals, and user requirements."
}];
const WhyWorkWithMeSection = () => {
  return <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Work With Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We don't just build products. We create digital experiences that drive real business results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => <Card key={index} className="group relative p-8 bg-card/30 border-primary/20 backdrop-blur-sm hover:bg-card/50 hover:border-primary/40 transition-all duration-500 hover:scale-105">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-primary/10 w-fit group-hover:bg-gradient-primary/20 transition-colors duration-300 group-hover:glow-primary">
                  <benefit.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>

              {/* Subtle border glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10"></div>
            </Card>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>)}
            </div>
            <span className="text-muted-foreground">Join our satisfied clients who've transformed their business</span>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyWorkWithMeSection;