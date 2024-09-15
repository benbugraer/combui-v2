import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { CSSProperties } from "react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Essential features for individuals",
    features: ["1 user", "10 projects", "5GB storage", "Basic support"],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "Advanced features for professionals",
    features: [
      "5 users",
      "50 projects",
      "25GB storage",
      "Priority support",
      "Advanced analytics",
    ],
    buttonText: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large teams",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "100GB storage",
      "24/7 dedicated support",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
  },
];

export default function PricingSection() {
  return (
    <section className="px-4 py-24 ">
      <div className="container mx-auto my-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              style={{ "--index": 4 } as CSSProperties}
              className={`flex flex-col ${
                index === 1
                  ? "border-primary shadow-lg md:scale-105 animate-in"
                  : ""
              }`}
            >
              <CardHeader className="animate-in">
                <CardTitle
                  className="text-2xl font-bold animate-in"
                  style={{ "--index": 5 } as CSSProperties}
                >
                  {tier.name}
                </CardTitle>
                <CardDescription
                  className="text-xl font-semibold animate-in"
                  style={{ "--index": 6 } as CSSProperties}
                >
                  {tier.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p
                  className="text-muted-foreground mb-4 animate-in"
                  style={{ "--index": 7 } as CSSProperties}
                >
                  {tier.description}
                </p>
                <ul
                  className="space-y-2 animate-in"
                  style={{ "--index": 8 } as CSSProperties}
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center animate-in"
                      style={{ "--index": 9 } as CSSProperties}
                    >
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full animate-in"
                  style={{ "--index": 10 } as CSSProperties}
                  variant={index === 1 ? "default" : "outline"}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
