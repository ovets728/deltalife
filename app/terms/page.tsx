import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Delta Life Insurance",
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="text-3xl font-bold text-foreground mb-8">Terms and Conditions</h1>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Web Site Agreement</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The following terms and conditions govern the use by you of the Delta Life Insurance Company web site. The terms and conditions set forth herein apply to all materials, online communications and other information and materials that are or become available on this Web site (collectively, the &ldquo;Information&rdquo;). Please read these terms and conditions carefully before accessing this Web site. BY SIGNING ON AND USING THIS WEB SITE, YOU SPECIFICALLY AGREE TO EACH OF THE PROVISIONS OF THE FOLLOWING AGREEMENT.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">1. Downloading</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            You may download textual material from this Web site for your own personal, noncommercial use only, provided you do not modify the materials and keep intact all copyright and other proprietary notices. You may not further distribute or display such materials for any purpose.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">2. External Links</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            This Web site may contain links to other Web sites. Delta Life Insurance Company is not responsible for the availability of these external Web sites nor does it endorse or is it responsible for any of the contents, advertising, products or other materials on such external Web sites.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">3. Disclaimer of Warranties</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed uppercase text-xs">
            THIS WEB SITE AND THE INFORMATION IS PROVIDED ON AN &ldquo;AS IS&rdquo; BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, DELTA LIFE INSURANCE COMPANY DISCLAIMS ALL WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, WARRANTIES OF TITLE, NONINFRINGEMENT, OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">4. Limitation of Damages</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed uppercase text-xs">
            UNDER NO CIRCUMSTANCES SHALL DELTA LIFE INSURANCE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES THAT MAY RESULT FROM THE USE OR INABILITY TO USE THIS WEB SITE OR THE INFORMATION.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">5. Locality</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Delta Life Insurance Company operates and controls this Web site from its offices located in the state of Georgia in the United States. Delta Life Insurance Company makes no representation that the information or other materials in the Web site are appropriate or available for use in other locations.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">6. General</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Delta Life Insurance Company shall have the right at any time to change or discontinue any aspect or feature of the Web site. This agreement shall be governed by and construed in accordance with the laws of the State of Georgia. If any provision of this Agreement shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from this Agreement and shall not affect the validity and enforceability of any remaining provisions.
          </p>
        </div>
      </div>
    </section>
  );
}
