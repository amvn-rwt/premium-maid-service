import { sectionAnchors } from "@/lib/content/nav";
import { heroContent } from "@/lib/content/hero";

export const mobileNavContent = {
  menuAriaLabel: "Mobile navigation",
  callLabel: "Call",
  whatsappLabel: "WhatsApp",
  enquireLabel: heroContent.cta,
  enquireHref: sectionAnchors.enquire,
  callAriaLabel: "Call us",
  whatsappAriaLabel: "Chat on WhatsApp",
} as const;
