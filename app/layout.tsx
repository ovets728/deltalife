import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Life Insurance | Protecting Georgia Families Since 1958",
  description:
    "Delta Life Insurance provides trusted life insurance, supplemental insurance, and fire & contents coverage throughout Georgia. Family-owned with personal home service for over 65 years.",
  authors: [{ name: "Delta Life Insurance Company" }],
  metadataBase: new URL("https://www.delta-life.com"),
  openGraph: {
    title: "Delta Life Insurance | Protecting Georgia Families Since 1958",
    description:
      "Delta Life Insurance provides trusted life insurance, supplemental insurance, and fire & contents coverage throughout Georgia.",
    type: "website",
    images: [
      {
        url: "/assets/stock/family-home.jpg",
        width: 1200,
        height: 630,
        alt: "Delta Life Insurance - Protecting Georgia Families",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Life Insurance | Protecting Georgia Families Since 1958",
    description:
      "Trusted life insurance, supplemental insurance, and fire & contents coverage throughout Georgia since 1958.",
    images: ["/assets/stock/family-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
