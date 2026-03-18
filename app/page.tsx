import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutPreview from "@/components/home/AboutPreview";
import FamilyVideos from "@/components/home/FamilyVideos";
import ProductsPreview from "@/components/home/ProductsPreview";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <FamilyVideos />
      <ProductsPreview />
      <CTABanner />
    </>
  );
}
