import type { LucideIcon } from "lucide-react";
import { CalendarClock, MapPin, MessagesSquare, Users } from "lucide-react";

import { siteConfig } from "@/lib/site";

export type WhyUsPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUsContent = {
  title: "Why choose us",
  titleAccent: "what you can expect",
  description:
    "A straightforward placement process for households across Delhi NCR.",
  points: [
    {
      icon: MapPin,
      title: "Delhi NCR focused",
      description:
        "Placements across the region — share your locality when you enquire.",
    },
    {
      icon: CalendarClock,
      title: "Flexible arrangements",
      description: "Full-time, part-time, live-in, or 24-hour help.",
    },
    {
      icon: Users,
      title: "All key services",
      description:
        "Maids, cooks, babysitters, Japa maids, and dedicated house help.",
    },
    {
      icon: MessagesSquare,
      title: "Easy to reach",
      description: "Enquire online, call us, or message on WhatsApp.",
    },
  ] satisfies WhyUsPoint[],
  featured: {
    eyebrow: "Built around your needs",
    title: "Find the right help for your home",
    description:
      "Tell us what you need and we'll match suitable candidates to your service, timing, and area.",
    note: `${siteConfig.serviceArea} · ${siteConfig.contact.hours.summary}`,
  },
} as const;
