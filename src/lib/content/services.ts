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

export type ServiceImage = {
  src: string;
  alt: string;
};

export type ServiceItem = {
  id: ServiceId;
  name: string;
  image: ServiceImage;
  highlights: readonly ServiceHighlight[];
  featured?: {
    label: string;
  };
};

export const serviceImages = {
  "all-rounder": {
    src: "/images/services/all-rounder.png",
    alt: "All-rounder maid tidying a living room in an Indian home",
  },
  cooking: {
    src: "/images/services/cooking.png",
    alt: "Cooking maid preparing food in an Indian kitchen",
  },
  babycare: {
    src: "/images/services/babycare.png",
    alt: "Babycare helper with a child in a comfortable Indian home",
  },
  japa: {
    src: "/images/services/japa.png",
    alt: "Japa maid providing newborn and mother care at home",
  },
  housemaid: {
    src: "/images/services/housemaid.png",
    alt: "Housemaid cleaning and organising a home in Delhi NCR",
  },
} as const satisfies Record<ServiceId, ServiceImage>;

export function getServiceImage(id: ServiceId) {
  return serviceImages[id];
}

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
      image: serviceImages["all-rounder"],
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
      image: serviceImages.cooking,
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
      image: serviceImages.babycare,
      highlights: [
        { icon: Baby, label: "Child care" },
        { icon: Home, label: "At home" },
        { icon: Clock3, label: "Flexible" },
      ],
    },
    {
      id: "japa",
      name: "Japa maid",
      image: serviceImages.japa,
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
      image: serviceImages.housemaid,
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
