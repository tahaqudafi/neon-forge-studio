
import { Globe, Smartphone, Layers, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    description: "Responsive, fast-loading websites that convert visitors into customers and grow with your business."
  },
  {
    icon: Layers,
    title: "SaaS Product Creation",
    description: "End-to-end SaaS development from concept to launch, built for scale and performance."
  },
  {
    icon: Zap,
    title: "Business Tool Integrations",
    description: "Seamless integrations that automate workflows and connect your favorite business tools."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development (coming soon)",
    description: "Native and cross-platform apps that deliver exceptional user experiences across all devices."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Services</span> That Scale
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            From concept to deployment, we deliver digital solutions that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative p-6 md:p-8 bg-card/50 border-primary/20 backdrop-blur-sm hover:bg-card/80 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:glow-primary interactive-element"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-4 md:mb-6 p-3 rounded-lg bg-gradient-primary/10 w-fit group-hover:bg-gradient-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 md:w-8 h-6 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
