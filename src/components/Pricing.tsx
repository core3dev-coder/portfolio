import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Foundation Fix",
    description: "For specific, small-scale optimization projects",
    price: "$2,500",
    period: "per project",
    features: [
      "Performance audit & report",
      "Speed optimization (up to 40% improvement)",
      "Mobile responsiveness fixes",
      "Basic SEO improvements",
      "1 month post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Total Redesign",
    description: "For comprehensive rebuilds and feature additions",
    price: "$8,500",
    period: "per project",
    features: [
      "Complete UX/UI redesign",
      "Full-stack development",
      "Advanced features & integrations",
      "Conversion rate optimization",
      "3 months post-launch support",
      "Training & documentation",
    ],
    highlighted: true,
  },
  {
    name: "Full-Service Partnership",
    description: "For ongoing maintenance, CRO, and unlimited support",
    price: "$3,500",
    period: "per month",
    features: [
      "Unlimited design & development requests",
      "Priority support (24h response)",
      "Monthly performance reports",
      "Continuous A/B testing & optimization",
      "Dedicated account manager",
      "Strategic consulting sessions",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Partnership <span className="text-accent">Tiers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the engagement model that fits your business goals. 
            All packages include dedicated support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`bg-card border-border transition-all duration-300 ${
                tier.highlighted 
                  ? "border-primary shadow-[0_0_60px_rgba(251,146,60,0.3)] scale-105 relative z-10 animate-float" 
                  : "hover:border-primary/50 hover:scale-105 hover:-translate-y-2"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {tier.description}
                </CardDescription>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ {tier.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    tier.highlighted 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;