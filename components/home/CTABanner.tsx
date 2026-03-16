import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to protect your family?
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Contact us today to speak with one of our experienced agents about
          coverage that fits your needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="gold" size="lg" className="text-lg px-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 border-white text-white hover:bg-white/10"
          >
            <a href="tel:4042312111">
              <Phone className="w-5 h-5 mr-2" />
              404-231-2111
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
