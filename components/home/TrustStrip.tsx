import { Shield, Building2, Users } from "lucide-react";

const stats = [
  { icon: Shield, label: "65+ Years Serving Georgia" },
  { icon: Building2, label: "8 District Offices" },
  { icon: Users, label: "Personal Home Service" },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <Icon className="h-8 w-8 text-primary" />
                <span className="text-base font-semibold text-foreground">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
