/**
 * Confirmed business details — update when client answers land in
 * docs/CLIENT_QUESTIONNAIRE.md.
 */
export const siteConfig = {
  name: "Premium Maid Service",
  description:
    "Maids, cooks, babysitters, and Japa maids in Delhi NCR. Enquire by form, call, or WhatsApp.",
  serviceArea: "Delhi NCR",
  locale: {
    default: "en" as const,
    supported: ["en", "hi"] as const,
  },
  phones: [
    {
      label: "Phone 1",
      display: "+91 74281 27908",
      tel: "+917428127908",
      whatsapp: "917428127908",
    },
    {
      label: "Phone 2",
      display: "+91 98714 39287",
      tel: "+919871439287",
      whatsapp: "919871439287",
    },
  ],
  /** Primary CTA phone — pending client confirmation (question 3). */
  primaryPhoneIndex: 0,
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Book Now", href: "#enquire" },
  ],
  footer: {
    tagline: "Trusted domestic help for Delhi NCR homes",
    links: [
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Book Now", href: "#enquire" },
    ],
    /** Pending client confirmation (questionnaire Q4, Q5, Q6). */
    email: null as string | null,
    address: null as string | null,
    hours: null as string | null,
  },
} as const;

export type Locale = (typeof siteConfig.locale.supported)[number];

export function getPrimaryPhone() {
  return siteConfig.phones[siteConfig.primaryPhoneIndex];
}
