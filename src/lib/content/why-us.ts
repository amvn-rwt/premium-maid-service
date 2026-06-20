import { siteConfig } from "@/lib/site";

export const whyUsContent = {
  title: "Why choose us",
  titleAccent: "what you can expect",
  description:
    "A straightforward placement process for households across Delhi NCR.",
  points: [
    {
      title: "Delhi NCR focused",
      description:
        "Placements across the region — share your locality when you enquire.",
    },
    {
      title: "Flexible arrangements",
      description: "Full-time, part-time, live-in, or 24-hour help.",
    },
    {
      title: "All key services",
      description:
        "Maids, cooks, babysitters, Japa maids, and dedicated house help.",
    },
    {
      title: "Easy to reach",
      description: "Enquire online, call us, or message on WhatsApp.",
    },
  ],
  ctaLabel: "Enquire Now",
  ctaNote: `Based in ${siteConfig.serviceArea}`,
} as const;
