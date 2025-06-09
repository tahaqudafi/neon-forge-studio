import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-lg mx-auto text-center">
            <Card className="p-12 bg-card/30 border-primary/20 backdrop-blur-sm">
              <div className="animate-pulse-glow w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. We'll review your project details and get back to you within 24 hours.
              </p>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your idea into reality? Tell us about your project and let's create something amazing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="p-6 bg-card/30 border-primary/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Response</h3>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Get a detailed project proposal and timeline for your idea.
                </p>
              </Card>

              <Card className="p-6 bg-card/30 border-primary/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary/20">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Schedule a Call</h3>
                    <p className="text-sm text-muted-foreground">Free consultation</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Discuss your project in detail and explore possibilities.
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/10">
                  Currently unavailable
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8 bg-card/30 border-primary/20 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">Project Type</Label>
                      <div className="relative group">
                        <select
                          id="project"
                          value={formData.project}
                          onChange={(e) => handleInputChange("project", e.target.value)}
                          className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm appearance-none cursor-pointer ring-offset-background transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:border-primary/40 hover:bg-card/50 backdrop-blur-sm"
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="website">Website Design</option>
                          <option value="app">Mobile App (currently unavailable)</option>
                          <option value="saas">SaaS Platform</option>
                          <option value="integration">Business Integration</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown className="h-4 w-4 text-primary transition-transform duration-300 group-focus-within:rotate-180" />
                        </div>
                        <div className="absolute inset-0 rounded-md bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <div className="relative group">
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm appearance-none cursor-pointer ring-offset-background transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:border-primary/40 hover:bg-card/50 backdrop-blur-sm"
                        required
                      >
                        <option value="">Select budget range</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown className="h-4 w-4 text-primary transition-transform duration-300 group-focus-within:rotate-180" />
                      </div>
                      <div className="absolute inset-0 rounded-md bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors min-h-[120px]"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group bg-gradient-primary hover:scale-105 transition-all duration-300 py-6 text-lg animate-pulse-glow"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
