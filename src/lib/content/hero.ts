import { siteConfig } from "@/lib/site";
import { sectionAnchors } from "./nav";

export const heroContent = {
  location: siteConfig.serviceArea,
  headline: {
    lead: "Reliable help",
    line2: "for your",
    highlight: "Home",
  },
  services: ["Maids", "Cooks", "Babysitters", "Japa maids"] as const,
  supporting:
    "Full-time, part-time or live-in. Tell us what you need and we'll find the right fit.",
  cta: "Enquire Now",
  ctaHref: sectionAnchors.enquire,
  secondaryCta: "See Services",
  secondaryCtaHref: sectionAnchors.services,
} as const;
