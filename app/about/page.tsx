import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Delta Life Insurance",
  description: "Learn about Delta Life Insurance Company — serving Georgia families since 1958 with personal home service insurance.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/stock/family-together.jpg"
            alt="Georgia family together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Delta Life</h1>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our History</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The company was created in 1958 by Atlanta businessman, philanthropist and entrepreneur J. Mack Robinson. At that time, Mr. Robinson owned a chain of finance companies and quickly identified the need for credit life insurance for his clients.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  In 1962, he expanded his business into the Home Service marketplace and this is the Delta Life Insurance Company and Delta Fire and Casualty Insurance Companies we have come to know today.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/assets/atlam_bldg.jpg"
                    alt="Atlam Building - Delta Life Insurance headquarters"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                The main mission of Delta Life Insurance Company and Delta Fire and Casualty Insurance Company is to provide basic, affordable life and casualty insurance products to Georgia&apos;s modest income market through daily, weekly and monthly contact with its clients.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground leading-relaxed">
                The core values for Delta Life Insurance and Delta Fire and Casualty Insurance Companies include high ethics, moral rightness and a personal relationship where our word is our bond. These values are what will keep Delta Life Insurance Company fulfilling the insurance needs of our clients for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Service Model */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Home Service Difference</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Delta Life agents visit policyholders in their homes to collect premiums on a weekly, bi-weekly, or monthly basis. This personal, face-to-face interaction sets us apart from other insurance providers.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our agents build genuine relationships with the families they serve, becoming a trusted advisor who understands each family&apos;s unique needs and circumstances.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This approach ensures our policyholders always have a personal point of contact — someone who knows them by name and is invested in their family&apos;s well-being.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/assets/stock/family-advisor.jpg"
                  alt="Delta Life agent visiting a family at home"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* J. Mack Robinson Memorial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">In Memoriam</h2>
            <h3 className="text-xl text-muted-foreground mb-8">The J. Mack Robinson Story (1923–2014)</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founder of Delta Life and Delta Fire and Casualty, Mr. Robinson was a prominent entrepreneur, businessman and philanthropist. In 1998, Georgia State University renamed their business school &ldquo;The J. Mack Robinson School of Business&rdquo; in his honor.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Mr. Robinson and his wife, Nita, were named Philanthropists of the Year in 1994 by the Georgia Chapter, National Society of Fundraising Executives. He was inducted into the Business Hall of Fame by Georgia State University in 1995 and received an Honorary Degree from Oglethorpe University that same year.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His legacy lives on through the company he founded and the countless Georgia families whose lives have been touched by Delta Life&apos;s commitment to personal service.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Link */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">Meet the people leading Delta Life today.</p>
          <Button asChild variant="default">
            <Link href="/leadership">Our Leadership Team</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
