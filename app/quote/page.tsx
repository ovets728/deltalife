"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const productOptions = [
  "Delta Life Classic Preferred",
  "10/20 Pay Whole Life Policy",
  "Delta Life Protector Plan",
  "Delta One Parent Family Plan",
  "Delta's 12-Point Protection Plan",
  "Delta Life Lump Sum Cancer Plan",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({ name: "", address: "", email: "", products: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const message = `Product(s): ${formData.products}${formData.address ? `\nAddress: ${formData.address}` : ""}`;
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, message, type: "quote" }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", address: "", email: "", products: "" });
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
          <img src="/assets/stock/senior-couple.jpg" alt="Senior couple planning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Get a Quote</h1>
          <p className="text-lg text-white/90 mt-2">Start protecting your family today</p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg border p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-2">Request Your Free Quote</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and one of our experienced agents will contact you.
              </p>

              {submitted ? (
                <div className="text-center py-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
                  <p className="text-muted-foreground">An agent will contact you shortly with your personalized quote.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="123 Main St, Atlanta, GA 30301" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="products">Product Interested In *</Label>
                    <select id="products" value={formData.products} onChange={(e) => setFormData({ ...formData, products: e.target.value })} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground">
                      <option value="">Select a product</option>
                      {productOptions.map((p) => (
                        <option key={p} value={p}>{p}</option>
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
        </div>
      </section>
    </>
  );
}
