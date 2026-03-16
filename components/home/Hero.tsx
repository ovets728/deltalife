import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[550px] md:h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/stock/family-home.jpg"
          alt="Family in front of their Georgia home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Protecting Georgia Families Since 1958
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Personal home service insurance — we bring coverage directly to your
            door, building lasting relationships through face-to-face service.
          </p>
          <Button asChild variant="gold" size="lg" className="text-lg px-8 py-6">
            <Link href="/district-offices">
              <MapPin className="w-5 h-5 mr-2" />
              Find an Agent Near You
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
