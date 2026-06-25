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

import type { ServiceId } from "@/lib/content/services";

export type ServiceIncludedItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceDetailContent = {
  overview: string;
  includedLabel: string;
  included: readonly ServiceIncludedItem[];
  goodToKnowLabel: string;
  goodToKnow: readonly string[];
};

export const serviceDetailModalContent = {
  enquiringLabel: "Service",
  overviewLabel: "Overview",
  ctaLabel: "Enquire about this service",
  ctaAriaLabel: (name: string) => `Enquire about ${name}`,
  whatsappLabel: "Ask on WhatsApp",
  closeLabel: "Close",
} as const;

export const serviceDetailsContent: Record<ServiceId, ServiceDetailContent> = {
  "all-rounder": {
    overview:
      "One dependable person to keep your whole home running — cleaning, kitchen support, and the small daily tasks that add up. We match you with someone who fits your routine and stays consistent over time.",
    includedLabel: "What this help covers",
    included: [
      {
        icon: Sparkles,
        title: "Cleaning & tidying",
        description:
          "Sweeping, mopping, dusting, and keeping living spaces in order.",
      },
      {
        icon: UtensilsCrossed,
        title: "Kitchen support",
        description:
          "Washing utensils, basic prep, and keeping the kitchen clean.",
      },
      {
        icon: Shirt,
        title: "Laundry help",
        description: "Washing, drying, and folding as part of the daily flow.",
      },
      {
        icon: Clock3,
        title: "Flexible hours",
        description: "Full-time or part-time, scheduled around your household.",
      },
    ],
    goodToKnowLabel: "Good to know",
    goodToKnow: [
      "Best for homes that want one consistent helper for everyday tasks.",
      "The work scope is agreed with you up front — no surprises.",
      "Available as full-time, part-time, or live-in.",
    ],
  },
  cooking: {
    overview:
      "Fresh, home-style meals made the way your family likes them. Tell us your cuisine and preferences, and we'll match someone comfortable cooking in your kitchen.",
    includedLabel: "What this help covers",
    included: [
      {
        icon: Soup,
        title: "Daily meal prep",
        description: "Breakfast, lunch, or dinner — cooked fresh to your taste.",
      },
      {
        icon: ChefHat,
        title: "Kitchen hygiene",
        description: "A clean, well-kept kitchen after every meal.",
      },
      {
        icon: UtensilsCrossed,
        title: "Cuisine to match",
        description: "Veg, non-veg, or both — regional preferences welcome.",
      },
      {
        icon: Clock3,
        title: "Flexible timings",
        description: "Single or multiple meal slots through the day.",
      },
    ],
    goodToKnowLabel: "Good to know",
    goodToKnow: [
      "Share your meal preferences and timings when you enquire.",
      "Suited to families who want consistent home cooking.",
      "Available part-time for meal slots or full-time.",
    ],
  },
  babycare: {
    overview:
      "Attentive, gentle care for your child at home. We match a caregiver to your child's age and daily routine so days feel calm and well looked after.",
    includedLabel: "What this help covers",
    included: [
      {
        icon: Baby,
        title: "Feeding & routines",
        description: "Support with feeding, naps, and daily schedules.",
      },
      {
        icon: Home,
        title: "Care at home",
        description: "Supervised play and comfort in your own space.",
      },
      {
        icon: HeartHandshake,
        title: "Gentle attention",
        description: "Patient, caring support throughout the day.",
      },
      {
        icon: Clock3,
        title: "Flexible hours",
        description: "Day help or live-in, matched to your needs.",
      },
    ],
    goodToKnowLabel: "Good to know",
    goodToKnow: [
      "We match based on your child's age and routine.",
      "Share timings and any specific needs when you enquire.",
      "Available as day help or live-in.",
    ],
  },
  japa: {
    overview:
      "Specialist post-delivery support for mother and newborn. From newborn care to helping the mother rest and recover, a Japa maid looks after the early weeks at home.",
    includedLabel: "What this help covers",
    included: [
      {
        icon: HeartHandshake,
        title: "Mother's recovery",
        description: "Rest support, massage assistance, and post-delivery care.",
      },
      {
        icon: Bath,
        title: "Newborn care",
        description: "Bathing, feeding support, and gentle handling.",
      },
      {
        icon: Home,
        title: "Live-in support",
        description: "Round-the-clock help through the early weeks.",
      },
      {
        icon: Clock3,
        title: "Fixed-term care",
        description: "Arranged for the period you need after delivery.",
      },
    ],
    goodToKnowLabel: "Good to know",
    goodToKnow: [
      "Commonly placed as live-in for the post-delivery period.",
      "Share your due date or delivery date when you enquire.",
      "Focused specifically on newborn and mother care.",
    ],
  },
  housemaid: {
    overview:
      "Thorough cleaning and household upkeep, scheduled around your week. Ideal for homes that want deep, regular cleaning without the daily commitment.",
    includedLabel: "What this help covers",
    included: [
      {
        icon: Sparkles,
        title: "Deep cleaning",
        description: "Detailed cleaning of floors, surfaces, and rooms.",
      },
      {
        icon: Shirt,
        title: "Laundry & ironing",
        description: "Washing, drying, folding, and pressing.",
      },
      {
        icon: Home,
        title: "Household upkeep",
        description: "Dusting, organising, and keeping things in order.",
      },
      {
        icon: Clock3,
        title: "Flexible scheduling",
        description: "Daily, alternate days, or weekly visits.",
      },
    ],
    goodToKnowLabel: "Good to know",
    goodToKnow: [
      "Best for regular cleaning and upkeep without full-time help.",
      "Tell us your preferred days and times when you enquire.",
      "Available part-time or full-time.",
    ],
  },
};

export function getServiceDetailContent(id: ServiceId) {
  return serviceDetailsContent[id];
}
