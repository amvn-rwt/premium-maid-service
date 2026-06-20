import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Bath,
  ChefHat,
  Clock3,
  HeartHandshake,
  Home,
  Shirt,
  Soup,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import { sectionAnchors } from "@/lib/content/nav";

export type ServiceId =
  | "all-rounder"
  | "cooking"
  | "babycare"
  | "japa"
  | "housemaid";

export type ServiceHighlight = {
  icon: LucideIcon;
  label: string;
};

export type ServiceItem = {
  id: ServiceId;
  name: string;
  highlights: readonly ServiceHighlight[];
  featured?: {
    label: string;
  };
};

export const servicesSharedImage = {
  src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop",
  alt: "Warm, well-kept family home",
} as const;

export const servicesContent = {
  title: "Help for your home",
  titleAccent: "five ways we place",
  description:
    "Pick a service below. We'll match you with someone suited to your routine in Delhi NCR.",
  scrollHint: "Scroll sideways for more",
  footerNote: "Not sure yet?",
  footerCta: "Send a general enquiry",
  footerCtaHref: sectionAnchors.enquire,
  items: [
    {
      id: "all-rounder",
      name: "All-rounder",
      highlights: [
        { icon: Sparkles, label: "Cleaning" },
        { icon: UtensilsCrossed, label: "Kitchen" },
        { icon: Clock3, label: "Flexible" },
      ],
      featured: { label: "Popular choice" },
    },
    {
      id: "cooking",
      name: "Cooking maid",
      highlights: [
        { icon: Soup, label: "Daily meals" },
        { icon: ChefHat, label: "Kitchen care" },
        { icon: Clock3, label: "Flexible" },
      ],
      featured: { label: "Often requested" },
    },
    {
      id: "babycare",
      name: "Babycare",
      highlights: [
        { icon: Baby, label: "Child care" },
        { icon: Home, label: "At home" },
        { icon: Clock3, label: "Flexible" },
      ],
    },
    {
      id: "japa",
      name: "Japa maid",
      highlights: [
        { icon: HeartHandshake, label: "Mother care" },
        { icon: Bath, label: "Newborn" },
        { icon: Home, label: "Live-in" },
      ],
      featured: { label: "Specialist care" },
    },
    {
      id: "housemaid",
      name: "Housemaid",
      highlights: [
        { icon: Sparkles, label: "Deep clean" },
        { icon: Shirt, label: "Laundry" },
        { icon: Clock3, label: "Flexible" },
      ],
    },
  ] satisfies readonly ServiceItem[],
} as const;

export function getServiceEnquireHref(id: ServiceId) {
  return `${sectionAnchors.enquire}?service=${id}`;
}
