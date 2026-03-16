import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/assets/atlam_bldg.jpg"
              alt="Delta Life Insurance headquarters - Atlam Building"
              className="w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              About Our Company
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The company was created in 1958 by Atlanta businessman,
              philanthropist and entrepreneur J. Mack Robinson. At that time,
              Mr. Robinson owned a chain of finance companies and quickly
              identified the need for credit life insurance for his clients.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              In 1962, he expanded his business into the Home Service marketplace
              and this is the Delta Life Insurance Company and Delta Fire and
              Casualty Insurance Companies we have come to know today.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
