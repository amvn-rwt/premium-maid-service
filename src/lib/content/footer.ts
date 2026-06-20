import { heroContent } from "@/lib/content/hero";
import { siteConfig } from "@/lib/site";
import {
  getServiceEnquireHref,
  servicesContent,
} from "@/lib/content/services";

export const footerContent = {
  cta: {
    tagline: "Ready for reliable help at home?",
    supporting:
      "Share your requirements — we'll respond by call or WhatsApp.",
    primaryLabel: heroContent.cta,
    primaryHref: "#enquire",
    whatsappLabel: "WhatsApp Us",
  },
  linksHeading: "Quick links",
  servicesHeading: "Services",
  contactHeading: "Contact",
  servingLabel: `Serving ${siteConfig.serviceArea}`,
  descriptionLines: [
    "Maids, cooks, babysitters, and Japa maids in Delhi NCR.",
    "Enquire by form, call, or WhatsApp.",
  ],
} as const;

export const footerNavLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
] as const;

export const footerServiceLinks = servicesContent.items.map((service) => ({
  label: service.name,
  href: getServiceEnquireHref(service.id),
})) as readonly { label: string; href: string }[];
