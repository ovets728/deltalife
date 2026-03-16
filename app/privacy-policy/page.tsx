import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Delta Life Insurance",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <p className="text-lg font-semibold text-foreground mb-6">Information Only — No Response Necessary</p>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            Congress passed the Gramm-Leach-Bliley Act (&ldquo;GLB&rdquo;) which deals, in part, with how insurance companies treat nonpublic personal information. Delta Life Insurance Company strictly follows Georgia&apos;s privacy law which is, in most respects, more comprehensive and more stringent than the GLB standards. Protecting your privacy is very important to us and we welcome this opportunity to share our privacy practices with you.
          </p>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            As part of our insurance business, we obtain certain &ldquo;nonpublic personal financial information&rdquo; about you, which for ease of reading we will refer to as &ldquo;information&rdquo; in this notice. This information includes information we receive from you on applications for insurance or other forms, information about your transactions with us and information we may have received from a consumer reporting agency. We protect your information by:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="text-muted-foreground leading-relaxed">
              • Restricting access to your information to authorized individuals who need to know this information in order to provide service and products to you.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              • Maintaining physical, electronic, and procedural safeguards that protect your information.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              • Not disclosing information about you or any former customers to anyone, except as permitted by law.
            </li>
          </ul>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            Employees may share your information outside the company only as authorized by you or for a specific business purpose. The law permits us to share this information with our affiliates, including insurance companies and insurance service providers, and companies that perform marketing services for us or other financial institutions that have joint marketing agreements with us.
          </p>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            Consistent with the Fair Credit Reporting Act, our standard authorizations permit us to share information with our affiliates.
          </p>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            You do not need to call, or do anything as a result of this notice. It is meant to advise how we safeguard your nonpublic personal financial information. You may wish to file this notice with your insurance papers.
          </p>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            We make every effort to protect your information and only use it as was intended by you and as allowed by law. If you prefer to receive this notice annually, please provide your name, address and policy number(s) to the address below.
          </p>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <p className="font-semibold text-foreground">Delta Life Insurance Company</p>
            <p className="text-muted-foreground">4370 Peachtree Road NE</p>
            <p className="text-muted-foreground">Brookhaven, GA 30319</p>
          </div>
        </div>
      </div>
    </section>
  );
}
