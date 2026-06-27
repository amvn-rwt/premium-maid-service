/**
 * Confirmed business details. Update when client answers land in
 * docs/CLIENT_QUESTIONNAIRE.md.
 */
export const siteConfig = {
  name: "Premium Maid Service",
  logoText: "PremiumMaidService",
  description:
    "Maids, cooks, babysitters, and Japa maids in Delhi NCR. Enquire by form, call, or WhatsApp.",
  serviceArea: "Delhi NCR",
  language: "en" as const,
  phones: [
    {
      label: "Primary",
      display: "+91 74281 27908",
      tel: "+917428127908",
      whatsapp: "917428127908",
      channels: { call: true, whatsapp: true },
    },
    {
      label: "Secondary",
      display: "+91 98714 39287",
      tel: "+919871439287",
      channels: { call: true, whatsapp: false },
    },
  ],
  primaryPhoneIndex: 0,
  contact: {
    enquiryEmail: "ankushhanry@icloud.com",
    showOfficeAddress: false,
    hours: {
      summary: "Mon–Sat, 10 AM – 7 PM",
      days: "Monday to Saturday",
      time: "10 AM – 7 PM",
    },
    enquiryRecipient: "Ankush (primary number / WhatsApp)",
    formSubmit: "email" as const,
  },
  pricing: {
    showOnSite: false,
    cta: "Contact us for rates",
  },
} as const;

export function getPrimaryPhone() {
  return siteConfig.phones[siteConfig.primaryPhoneIndex];
}
