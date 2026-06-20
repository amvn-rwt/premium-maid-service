import { EnquirySection } from "@/components/enquiry/enquiry-section";
import { HeroSection } from "@/components/hero/hero-section";
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { ReviewsSection } from "@/components/reviews/reviews-section";
import { ServicesSection } from "@/components/services/services-section";
import { WhyUsSection } from "@/components/why-us/why-us-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <ReviewsSection />
      <EnquirySection />
    </main>
  );
}
