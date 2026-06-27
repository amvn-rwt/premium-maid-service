import { heroContent } from "@/lib/content/hero";
import { sectionAnchors } from "@/lib/content/nav";
import { siteConfig } from "@/lib/site";
import {
  getServiceEnquireHref,
  servicesContent,
  type ServiceId,
} from "@/lib/content/services";

export const footerContent = {
  cta: {
    tagline: "Ready for reliable help at home?",
    supporting:
      "Share your requirements — we'll respond by call or WhatsApp.",
    primaryLabel: heroContent.cta,
    primaryHref: sectionAnchors.enquire,
    whatsappLabel: "WhatsApp Us",
  },
  linksHeading: "Quick links",
  servicesHeading: "Services",
  contactHeading: "Contact",
  hoursLabel: siteConfig.contact.hours.summary,
  emailLabel: siteConfig.contact.enquiryEmail,
  servingLabel: `Serving ${siteConfig.serviceArea}`,
  descriptionLines: [
    "Maids, cooks, babysitters, and Japa maids in Delhi NCR.",
    "Enquire by form, call, or WhatsApp.",
  ],
} as const;

export const footerNavLinks = [
  { label: "Home", href: sectionAnchors.home },
  { label: "Services", href: sectionAnchors.services },
  { label: "How It Works", href: sectionAnchors.howItWorks },
  { label: "Why Us", href: sectionAnchors.whyUs },
  // { label: "Reviews", href: sectionAnchors.reviews },
  { label: "Enquire", href: sectionAnchors.enquire },
] as const;

export const footerServiceLinks = servicesContent.items.map((service) => ({
  label: service.name,
  href: getServiceEnquireHref(service.id),
  serviceId: service.id,
})) as readonly { label: string; href: string; serviceId: ServiceId }[];
