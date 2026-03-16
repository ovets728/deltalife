"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const products = [
  {
    name: "Delta Life Classic Preferred",
    description: "Whole Life Insurance with preferred rates for non-smokers.",
    features: [
      "Accidental Death and Waiver of Premium Included",
      "Children's Rider available",
    ],
    brochureUrl: "/brochures/classic-preferred.pdf",
  },
  {
    name: "10/20 Pay Whole Life Policy",
    description: "Pay your premiums over a shorter period of time, yet guarantee a lifetime of protection.",
    features: [
      "Accidental Death benefit — amount doubles if you die in an accident",
      "Loss of eyesight or limbs pays additional benefits",
      "Common Carrier Accidental Death — pays 3x the original face amount",
    ],
    brochureUrl: "/brochures/whole-life-10-20-pay.pdf",
  },
  {
    name: "Delta Life Protector Plan",
    description: "Graded Death Benefit for those unable to qualify for standard life insurance.",
    features: [
      "Simple issue graded death benefit",
      "Existing health conditions accepted",
      "Immediate benefit",
    ],
    brochureUrl: "/brochures/protector-plan.pdf",
  },
  {
    name: "Delta One Parent Family Plan",
    description: "An affordable way to protect your loved ones.",
    features: [
      "Whole life paid up at age 65",
      "Unlimited number of children covered",
      "Additional benefits for loss of sight or limbs",
    ],
    brochureUrl: "/brochures/one-parent-family.pdf",
  },
  {
    name: "Delta's 12-Point Protection Plan",
    description: "Comprehensive household contents insurance.",
    features: [
      "Protection against fire, and resulting smoke and water damage",
      "Coverage for lightning and storm damage",
      "Safeguards furniture, appliances, electronics, and clothing",
      "Simple and affordable package",
    ],
    brochureUrl: "/brochures/12-point-protection.pdf",
  },
  {
    name: "Delta Life Lump Sum Cancer Plan",
    description: "Financial protection when you need it most.",
    features: [
      "Benefits paid upon confirmed diagnosis of invasive or non-invasive Cancer",
      "Annual Wellness benefit",
      "Individual and family plans available",
    ],
    brochureUrl: "/brochures/cancer-plan.pdf",
  },
];

export default function ProductsPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: "", zipCode: "", products: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const message = `Product(s): ${formData.products}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nZip: ${formData.zipCode}`;
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, message, type: "quote" }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", address: "", zipCode: "", products: "" });
      }
    } catch (error) {
      console.error("Quote submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/stock/family-portrait.jpg" alt="Family portrait" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Insurance Products</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Experience the personal touch of home service insurance. We bring whole life insurance directly to your door — building lasting coverage through face-to-face relationships.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Whole Life Insurance <span className="text-muted-foreground mx-2">|</span> Supplemental Insurance <span className="text-muted-foreground mx-2">|</span> Fire &amp; Contents Insurance
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
            {products.map((product) => (
              <Card key={product.name} className="text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start justify-center">
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <a href={product.brochureUrl} download>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Download Brochure
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Request a Quote</h2>
              <p className="text-white/80">Quick, easy, and secure.</p>
            </div>

            {submitted ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground">An agent will contact you shortly with your personalized quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-white text-foreground" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-white text-foreground" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" inputMode="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="bg-white text-foreground" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input id="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required className="bg-white text-foreground" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input id="zipCode" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value.replace(/\D/g, "") })} required className="bg-white text-foreground" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="products">Product Interested In *</Label>
                  <select id="products" value={formData.products} onChange={(e) => setFormData({ ...formData, products: e.target.value })} required className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground">
                    <option value="">Select a product</option>
                    {products.map((p) => (
                      <option key={p.name} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Request Quote"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
