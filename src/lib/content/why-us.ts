import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BedDouble,
  Briefcase,
  ChefHat,
  Clock,
  FileText,
  HeartHandshake,
  Home,
  Hourglass,
  MessageCircle,
  MessagesSquare,
  Phone,
  SprayCan,
  Users,
} from "lucide-react";

import { siteConfig } from "@/lib/site";

export type WhyUsChip = {
  label: string;
  /** When set, the chip leads with this icon; otherwise it shows a dot bullet. */
  icon?: LucideIcon;
};

export type WhyUsItem = {
  icon: LucideIcon;
  label: string;
};

export type WhyUsPoint =
  | {
      kind: "chips";
      icon: LucideIcon;
      title: string;
      text: string;
      chips: WhyUsChip[];
    }
  | {
      kind: "iconList";
      icon: LucideIcon;
      title: string;
      text: string;
      items: WhyUsItem[];
    }
  | { kind: "stat"; eyebrow: string; stat: string; text: string };

export const whyUsContent = {
  title: "Why choose us",
  titleAccent: "what you can expect",
  description:
    "A straightforward placement process for households across Delhi NCR.",
  featured: {
    eyebrow: "Built around your needs",
    title: "Find the right help for your home",
    description:
      "Tell us what you need and we'll shortlist suitable candidates for your service, timing, and area, then meet them at home and decide, with no pressure to commit.",
    note: `${siteConfig.serviceArea} · ${siteConfig.contact.hours.summary}`,
  },
  points: [
    {
      kind: "chips",
      icon: Users,
      title: "All key services",
      text: "Trained help for every part of your home.",
      chips: [
        { label: "Maids", icon: SprayCan },
        { label: "Cooks", icon: ChefHat },
        { label: "Babysitters", icon: Baby },
        { label: "Japa maids", icon: HeartHandshake },
        { label: "House help", icon: Home },
      ],
    },
    {
      kind: "iconList",
      icon: Clock,
      title: "Flexible timings",
      text: "Choose the schedule that suits your household.",
      items: [
        { label: "Full-time", icon: Briefcase },
        { label: "Part-time", icon: Hourglass },
        { label: "Live-in", icon: BedDouble },
        { label: "24-hour", icon: Clock },
      ],
    },
    {
      kind: "stat",
      eyebrow: "Service area",
      stat: "Delhi NCR",
      text: "Across Delhi, Gurugram, Noida, Ghaziabad and nearby. Just share your locality when you enquire.",
    },
    {
      kind: "iconList",
      icon: MessagesSquare,
      title: "Easy to reach",
      text: `Reach us ${siteConfig.contact.hours.summary}.`,
      items: [
        { label: "Enquiry form", icon: FileText },
        { label: "Call us", icon: Phone },
        { label: "WhatsApp", icon: MessageCircle },
      ],
    },
  ] satisfies WhyUsPoint[],
} as const;
