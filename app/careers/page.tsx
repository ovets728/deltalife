import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, CheckCircle2, Star, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Delta Life Insurance",
  description: "Build a rewarding career with Delta Life Insurance. We offer training, support, and growth opportunities for insurance professionals.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/stock/professional.jpg" alt="Insurance professional" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Careers at Delta Life</h1>
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Delta Life Opportunity</h2>
            <p className="text-muted-foreground mb-6">For the right person, we provide the following opportunities:</p>
            <ul className="space-y-3 mb-8">
              {[
                "To establish a successful and prestigious career.",
                "To build a secure future for yourself and your loved ones.",
                "To achieve your full potential.",
                "To build relationships with other professionals and with those you serve.",
                "To help individuals and families attain peace of mind, prepare for the unexpected and secure their future.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              Our products include life, health and property insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Qualities We Seek</h2>
              <p className="text-muted-foreground mb-4">Candidates who are likely to succeed will possess:</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Integrity</li>
                <li>• Willingness to commit the time necessary to build a successful operation</li>
                <li>• A goal-oriented mindset</li>
              </ul>
              <p className="text-muted-foreground mb-4">Candidates will be able to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Work without close supervision</li>
                <li>• Express themselves effectively</li>
                <li>• Keep going when faced with adversity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Next Steps</h2>
              <p className="text-muted-foreground mb-4">If this sounds like the right job for you, you should complete:</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• An employment application</li>
                <li>• A career profile assessment to measure your potential for success as an agent</li>
              </ul>
              <p className="text-muted-foreground">
                We will then conduct an in-depth interview and obtain a credit and motor vehicle report. Finally, just prior to employment, all applicants are asked to take a drug-screening test and pass a criminal background check.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Rewards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <CardTitle>Training and Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>All Delta Life agents are assigned to a manager who provides training, direction and support.</p>
                <p>After assignment to an agency, new agents receive five full weeks of intensive, one-on-one training administered by their manager.</p>
                <p>Training and sales materials are furnished without charge.</p>
                <p>Extensive on-the-job training allows new agents to earn a paycheck while learning their profession.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-secondary" />
                  <CardTitle>Rewards and Recognition</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>The opportunity to become a Delta Life agent is an opportunity to build a better life. Delta Life offers:</p>
                <ul className="space-y-1">
                  <li>• Pay for Performance</li>
                  <li>• Flexible Work Hours</li>
                  <li>• Job Stability</li>
                </ul>
                <p>President&apos;s Club qualifiers earn trips for themselves and their spouses to exciting vacation spots such as Aruba, Cozumel, Las Vegas, New Orleans, New York, and San Francisco.</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Button asChild variant="gold" size="lg">
              <a href="/brochures/recruiting-full.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Recruiting Brochure
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
