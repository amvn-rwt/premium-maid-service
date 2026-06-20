import { EnquirySection } from "@/components/enquiry/enquiry-section";
import { HeroSection } from "@/components/hero/hero-section";
import { ServicesSection } from "@/components/services/services-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <EnquirySection />
    </main>
  );
}
