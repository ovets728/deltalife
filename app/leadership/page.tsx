import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Leadership | Delta Life Insurance",
  description: "Meet the leadership team of Delta Life Insurance Company and Atlantic American Corporation.",
};

const leaders = [
  {
    name: "Hilton H. Howell, Jr.",
    title: "Executive Vice President and Director",
    bio: "Mr. Howell is Chairman, President and Chief Executive Officer of Atlantic American Corporation, an insurance holding company consisting of Bankers Fidelity Life Insurance Company, American Southern Insurance Company, American Safety Insurance Company, and xCalibre Benefits. Mr. Howell is also Director, Vice Chairman, President and CEO of Gray Television, which owns and/or operates television stations in over 40 markets nationwide. Mr. Howell received his B.A. from Baylor University; a J.D., Cum Laude, from Baylor University Law School; and an MBA from the University of Texas. He is active in the Atlanta community and was appointed by Governor Zell Miller to serve on the board of the Georgia Department of Human Resources and on the Board of Regents of the University System of Georgia, serving as Chairman of both, and is a past member of the advisory boards of Skyland Trail, Zoo Atlanta, and Camp Sunshine. Mr. Howell currently serves on the Affiliate Board for NBCUniversal and the Advisory Board of Curant Health.",
  },
  {
    name: "Jim Falkler",
    title: "President, Delta Life Insurance Company",
    bio: "",
  },
  {
    name: "Jeff Donohue",
    title: "Vice President and Controller",
    bio: "Mr. Donohue began his career with Delta over 20 years ago as Controller. Prior to joining Delta Life, he served as Vice President of Reinsurance for Voyager Life Insurance Company. His insurance career began with Sun Life Insurance Company of America, as a Staff Accountant in financial reporting, eventually becoming the Manager of Corporate Planning and Budgeting. Jeff received a Bachelor of Science in Accounting from Florida State University and is a Fellow member of Life Management Institute.",
  },
  {
    name: "Donald E. Conn Jr.",
    title: "Vice President of Agencies",
    bio: "Don joined Delta Life Insurance Company and Delta Fire Casualty Insurance Company in 2011 as a Home Service Agent and assumed duties as Vice President of Agencies in August of 2013. Originally from Northern California, Don served in the United States Army Aviation Corps with tours of duty in Western Germany as part of NATO forces protecting western interests during the cold war and was involved in combat operations during Operation Desert Shield/Desert Storm and Occupation of Iraq. His educational background includes several key military leadership schools with advanced studies from University of Maryland and Central Texas College in Business Leadership and Management. He is a recipient of the coveted SGT Audie Murphy Leadership Award. Graduate of American College's Life Underwriting Training Council. Entered into the Home Service Insurance industry in 1999 with numerous leadership roles.",
  },
  {
    name: "Michael E. Pelham",
    title: "Vice President of Agencies",
    bio: "Mike joined Delta Life Insurance Company and Delta Fire Casualty Insurance Company as a Home Service Agent and assumed duties as Vice President of Agencies in 2013. He is a graduate of American College's Life Underwriting Training Council with experience in the Home Service Insurance industry since 1999 across numerous leadership roles.",
  },
  {
    name: "Joel C. Moore",
    title: "Vice President/Director of Training and Education",
    bio: "Mr. Moore has been with Delta Life for 24 years and served in Savannah as District Manager prior to taking his current position. Joel has also served in the Albany office as MTA and Coach for Basic Agent Training. Joel serves as Field Director for American Red Cross/National Disasters Savannah office, Effingham County Recreation Board Vice Chairman, Lions Club President/Treasurer, Civitan Club President/Treasurer, Coastal Basketball Official Association Treasurer, and Coastal Football Official Association Training Officer and Board Member.",
  },
  {
    name: "John G. Sample, Jr.",
    title: "Senior Vice President and CFO",
    bio: "Mr. Sample is Senior Vice President and CFO of Atlantic American Corporation. A graduate of Emory University with a B.B.A. degree in Accounting, he has been associated with Atlantic American since 2002. Prior to joining the Corporation, Mr. Sample was Audit Partner in the Atlanta office of Arthur Andersen from 1993 to 2002. He also served in a variety of positions with Arthur Andersen between 1978 and 1993, including four years as Audit Partner in Hamilton, Bermuda. Mr. Sample earned his Certified Public Accountant designation in 1980.",
  },
  {
    name: "John Dunbar",
    title: "Vice President and CIO",
    bio: "Mr. Dunbar is responsible for setting the information technology vision for the Corporation, including the planning, development, implementation, and management of all IT systems. John has over 20 years of progressively responsible experience in key leadership roles for multinational corporations. Prior to joining Atlantic American, John served as CIO and Vice President of IT with Aquilex Corporation in Atlanta. Previously, he was with EMS Technologies and BTG Americas, Inc. John received a Bachelor of Science in Finance from Florida State University and a Master of Science in Computer Information Systems from Georgia State University.",
  },
  {
    name: "Michael J. Brasser",
    title: "Vice President, Internal Audit",
    bio: "Mr. Brasser is Vice President, Internal Audit for Atlantic American Corporation. He has been with the company since 1983. Prior to joining Atlantic American, Mr. Brasser held accounting and auditing positions in the public accounting and banking industries. His professional designations include Certified Internal Auditor, Certified Fraud Examiner and Certified Financial Services Auditor. Mr. Brasser holds a B.B.A. degree in Accounting from Pace University.",
  },
  {
    name: "Barbara B. Snyder",
    title: "Vice President, Human Resources",
    bio: "Ms. Snyder is Vice President, Human Resources for Atlantic American Corporation. A native of Oakland, Maryland, Ms. Snyder earned a B.A. degree in English and Journalism from the University of Maryland. She worked for The Williams Companies in Tulsa, OK; CA Norgren in Denver, Colorado; and Miller-Zell in Atlanta prior to joining Atlantic American in 1986. She was promoted to her current position in 2000.",
  },
  {
    name: "Bruce Snyder",
    title: "Assistant Vice President, Information Services",
    bio: "Bruce Snyder joined Atlantic American in 1987 as an Applications Programmer. Two years later he was promoted to Systems Software Technician and continued in that role until he was promoted to Technical Support Manager in 1994. Nine years later, Bruce was named Director, Technical Support until his promotion to AVP, Information Services in 2009. Bruce is responsible for all systems support for the Corporation and subsidiaries. He plans and oversees the research, evaluation and integration of new technology, data administration, capacity planning, training and technical support for the technical support team. Bruce is a graduate of Pennsylvania State University.",
  },
  {
    name: "J. Mack Robinson",
    title: "Director Emeritus, Atlantic American Corporation",
    bio: "Principal owner and Director Emeritus of Atlantic American Corporation, Mr. Robinson is a prominent entrepreneur, businessman and philanthropist. The source of his wealth is investments, insurance and banking. Over the past 40 years, Mr. Robinson has acquired more than 40 businesses.",
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
                      {leader.bio && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                      )}
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
