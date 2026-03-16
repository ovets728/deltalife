import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Flame, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Whole Life Insurance",
    description:
      "Permanent protection with cash value that grows over time. Preferred rates for non-smokers, children's riders, and accidental death benefits.",
    icon: Heart,
  },
  {
    title: "Supplemental Insurance",
    description:
      "Lump sum cancer plan with benefits paid upon confirmed diagnosis. Annual wellness benefit with individual and family plans available.",
    icon: Shield,
  },
  {
    title: "Fire & Contents Insurance",
    description:
      "Comprehensive household contents insurance covering fire, lightning, windstorm, hail, and more. Simple and affordable protection.",
    icon: Flame,
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Insurance Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the personal touch of home service insurance. We bring
            coverage directly to your door.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card
                key={cat.title}
                className="text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <Link href="/products">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
