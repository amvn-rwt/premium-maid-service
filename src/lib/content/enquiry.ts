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

import {
  servicesContent,
  type ServiceId,
  type ServiceItem,
} from "@/lib/content/services";

export type WorkType = "full-time" | "part-time" | "live-in" | "24-hours";

export type MealPreference = "veg" | "non-veg" | "both";

export type EnquiryDetail = {
  icon: LucideIcon;
  label: string;
};

export type EnquiryServiceContent = {
  id: ServiceId;
  name: string;
  tagline: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  highlights: ServiceItem["highlights"];
  details: readonly EnquiryDetail[];
  featured?: ServiceItem["featured"];
};

export const enquirySectionContent = {
  title: "Tell us what you need",
  titleAccent: "we'll handle the rest",
  description:
    "Share a few details and we'll call you back with options suited to your home in Delhi NCR.",
  privacyNote: "Your details are only used to respond to this enquiry.",
  submitLabel: "Send enquiry",
  whatsappLabel: "Or chat on WhatsApp",
  successHint: "We'll open WhatsApp with your details pre-filled — review and send.",
} as const;

export const workTypeOptions: readonly { value: WorkType; label: string }[] = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "live-in", label: "Live-in" },
  { value: "24-hours", label: "24 hours" },
] as const;

export const mealPreferenceOptions: readonly {
  value: MealPreference;
  label: string;
}[] = [
  { value: "veg", label: "Vegetarian" },
  { value: "non-veg", label: "Non-vegetarian" },
  { value: "both", label: "Both" },
] as const;

export const enquiryServicesContent: Record<ServiceId, EnquiryServiceContent> =
  {
    "all-rounder": {
      id: "all-rounder",
      name: "All-rounder",
      tagline: "Daily help across cleaning, kitchen, and errands",
      description:
        "Ideal when you need one reliable person for everyday household tasks — flexible hours, matched to your routine.",
      image: {
        src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop",
        alt: "Tidy, welcoming family living space",
      },
      highlights: servicesContent.items.find((s) => s.id === "all-rounder")!
        .highlights,
      details: [
        { icon: Sparkles, label: "Home cleaning & tidying" },
        { icon: UtensilsCrossed, label: "Kitchen & utensil care" },
        { icon: Clock3, label: "Full-time or part-time" },
      ],
      featured: { label: "Popular choice" },
    },
    cooking: {
      id: "cooking",
      name: "Cooking maid",
      tagline: "Fresh meals and a well-kept kitchen",
      description:
        "For families who want daily cooking support — tell us your meal preferences and we'll find someone comfortable in your kitchen.",
      image: {
        src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80&auto=format&fit=crop",
        alt: "Home kitchen with fresh ingredients",
      },
      highlights: servicesContent.items.find((s) => s.id === "cooking")!
        .highlights,
      details: [
        { icon: Soup, label: "Daily meal preparation" },
        { icon: ChefHat, label: "Kitchen hygiene & upkeep" },
        { icon: Clock3, label: "Veg, non-veg, or both" },
      ],
      featured: { label: "Often requested" },
    },
    babycare: {
      id: "babycare",
      name: "Babycare",
      tagline: "Safe, attentive care at home",
      description:
        "When you need a caregiver who understands feeding, playtime, and daily routines — matched for your child's age and schedule.",
      image: {
        src: "https://images.unsplash.com/photo-1515488042361-ee00e8170dc8?w=1200&q=80&auto=format&fit=crop",
        alt: "Calm nursery setting for child care",
      },
      highlights: servicesContent.items.find((s) => s.id === "babycare")!
        .highlights,
      details: [
        { icon: Baby, label: "Feeding & daily routines" },
        { icon: Home, label: "Care in your home" },
        { icon: Clock3, label: "Flexible hours" },
      ],
    },
    japa: {
      id: "japa",
      name: "Japa maid",
      tagline: "Specialist care for mother and newborn",
      description:
        "Post-delivery support for mother and baby — bathing, feeding assistance, rest for the mother, and attentive newborn care at home.",
      image: {
        src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80&auto=format&fit=crop",
        alt: "Gentle newborn and mother care at home",
      },
      highlights: servicesContent.items.find((s) => s.id === "japa")!.highlights,
      details: [
        { icon: HeartHandshake, label: "Mother rest & recovery support" },
        { icon: Bath, label: "Newborn bathing & care" },
        { icon: Home, label: "Live-in placement common" },
      ],
      featured: { label: "Specialist care" },
    },
    housemaid: {
      id: "housemaid",
      name: "Housemaid",
      tagline: "Deep cleaning and household upkeep",
      description:
        "For homes that need thorough cleaning, laundry, and organisation — scheduled around your week.",
      image: {
        src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1200&q=80&auto=format&fit=crop",
        alt: "Well-organised, clean home interior",
      },
      highlights: servicesContent.items.find((s) => s.id === "housemaid")!
        .highlights,
      details: [
        { icon: Sparkles, label: "Deep cleaning sessions" },
        { icon: Shirt, label: "Laundry & ironing" },
        { icon: Clock3, label: "Flexible scheduling" },
      ],
    },
  };

export const serviceSelectOptions = servicesContent.items.map((service) => ({
  value: service.id,
  label: service.name,
}));

export const defaultEnquiryServiceId: ServiceId = "all-rounder";

export function getEnquiryServiceContent(id: ServiceId) {
  return enquiryServicesContent[id];
}

export function parseServiceIdFromHash(hash: string): ServiceId | null {
  const raw = hash.startsWith("#") ? hash.slice(1) : hash;
  const [path, query = ""] = raw.split("?");
  if (path !== "enquire") return null;

  const service = new URLSearchParams(query).get("service");
  if (!service) return null;
  if (service in enquiryServicesContent) return service as ServiceId;
  return null;
}
