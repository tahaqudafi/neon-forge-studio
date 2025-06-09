import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform for job hunting",
    category: "SaaS Product",
    description: "Modern e-commerce solution with AI-powered recommendations and real-time analytics.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "AI/ML", "Stripe"]
  },
  {
    id: 2,
    title: "Housing Property Management System",
    category: "Web Application",
    description: "Housing Property Management System with advanced data visualization.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Google Conversion Funnel Review",
    category: "Business Integration",
    description: "Google Reviews funnel with advanced data visualization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tech: ["Next.js", "GraphQL", "Prisma", "Slack API"]
  }
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const currentItem = portfolioItems[currentIndex];

  return (
    <section id="portfolio" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results. See how I've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Portfolio Card */}
          <Card className="relative overflow-hidden bg-card/30 border-primary/20 backdrop-blur-sm p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-96 overflow-hidden">
                <img 
                  src={currentItem.image} 
                  alt={currentItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/20 text-primary rounded-full mb-4">
                    {currentItem.category}
                  </span>
                  <h3 className="text-3xl font-bold mb-4">{currentItem.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {currentItem.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm bg-muted/50 text-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-fit group bg-gradient-primary hover:scale-105 transition-all duration-300">
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 gap-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevSlide}
              className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-3">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={nextSlide}
              className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
