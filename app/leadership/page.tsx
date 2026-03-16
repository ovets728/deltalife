import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Leadership | Delta Life Insurance",
  description: "Meet the leadership team of Delta Life Insurance Company.",
};

const leaders = [
  {
    name: "Hilton H. Howell, Jr.",
    title: "Chairman",
    bio: "Leadership bio pending client review.",
  },
  {
    name: "Jeff Donohue",
    title: "Vice President and Controller",
    bio: "Leadership bio pending client review.",
  },
  {
    name: "Mike Pelham",
    title: "Vice President of Agencies",
    bio: "Leadership bio pending client review.",
  },
  {
    name: "Joel C. Moore",
    title: "Vice President/Director of Training and Education",
    bio: "Leadership bio pending client review.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Leadership</h1>
          <p className="text-lg text-white/90 mt-2">Delta Life and Delta Fire and Casualty Corporation Officers</p>
        </div>
      </section>

      {/* Note */}
      <section className="py-8 bg-secondary/10">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground text-center">
            Leadership bios are being updated. Please check back soon for complete profiles.
          </p>
        </div>
      </section>

      {/* Leadership Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <Card key={leader.name} className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{leader.name}</h3>
                      <p className="text-sm text-secondary font-medium mb-2">{leader.title}</p>
                      <p className="text-sm text-muted-foreground italic">{leader.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
