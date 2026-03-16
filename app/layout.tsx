import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Life Insurance | Protecting Georgia Families Since 1958",
  description:
    "Delta Life Insurance provides trusted life insurance, supplemental insurance, and fire & contents coverage throughout Georgia. Family-owned with personal home service for over 65 years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
