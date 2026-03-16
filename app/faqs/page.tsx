import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ's | Delta Life Insurance",
  description: "Frequently asked questions about Delta Life Insurance products and services.",
};

const faqs = [
  {
    question: "What is home service insurance?",
    answer: "Home service insurance is a personal approach to insurance where Delta Life agents visit policyholders in their homes to collect premiums on a weekly, bi-weekly, or monthly basis. This builds genuine, lasting relationships between agents and the families they serve.",
  },
  {
    question: "What products does Delta Life offer?",
    answer: "Delta Life offers three main categories of insurance: Whole Life Insurance (Classic Preferred, 10/20 Pay, Protector Plan, One Parent Family Plan), Supplemental Insurance (Lump Sum Cancer Plan), and Fire & Contents Insurance (12-Point Protection Plan).",
  },
  {
    question: "What is the Delta Life Classic Preferred?",
    answer: "The Classic Preferred is a Whole Life Insurance policy with preferred rates for non-smokers. It includes Accidental Death and Waiver of Premium, with an optional Children's Rider available.",
  },
  {
    question: "What does the 12-Point Protection Plan cover?",
    answer: "The 12-Point Protection Plan is comprehensive household contents insurance that covers loss due to fire and resulting smoke and water damage, lightning, windstorm, hail, explosion, aircraft, vehicles, falling objects, riot, civil commotion, and sinkhole collapse. It safeguards furniture, appliances, electronics, and clothing.",
  },
  {
    question: "What is the Lump Sum Cancer Plan?",
    answer: "The Delta Life Lump Sum Cancer Plan pays benefits upon confirmed diagnosis of invasive or non-invasive Cancer. It includes an Annual Wellness benefit and is available as individual and family plans.",
  },
  {
    question: "How do I file a claim?",
    answer: "To file a claim, contact the Delta Life claims department by phone at 404-231-2111 or by email at claims@delta-life.com. You can also speak with your local agent for assistance.",
  },
  {
    question: "Where are Delta Life offices located?",
    answer: "Delta Life has 8 district offices across Georgia: Albany, Atlanta (headquarters), Augusta, Douglas, Dublin, Macon, Savannah, and Thomasville. Visit our District Offices page to find the location nearest you.",
  },
  {
    question: "How do I become a Delta Life agent?",
    answer: "Delta Life seeks candidates with integrity, a goal-oriented mindset, and the ability to work independently. The process includes completing an employment application, career profile assessment, in-depth interview, background checks, and drug screening. New agents receive five full weeks of intensive, one-on-one training. Visit our Careers page or download our recruiting brochure for more details.",
  },
  {
    question: "Can I get a quote online?",
    answer: "You can request a quote through our website by visiting the Products page and filling out the quote request form, or by contacting any of our district offices directly. An agent will follow up with a personalized quote.",
  },
];

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
