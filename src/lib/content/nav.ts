export const sectionAnchors = {
  home: "#",
  services: "#services",
  howItWorks: "#how-it-works",
  whyUs: "#why-us",
  reviews: "#reviews",
  enquire: "#enquire",
} as const;

export const navLinks = [
  { label: "Home", href: sectionAnchors.home },
  { label: "Services", href: sectionAnchors.services },
  { label: "How It Works", href: sectionAnchors.howItWorks },
  { label: "Why Us", href: sectionAnchors.whyUs },
  { label: "Reviews", href: sectionAnchors.reviews },
] as const;

export const mobileNavLinks = [
  ...navLinks,
  { label: "Enquire", href: sectionAnchors.enquire },
] as const;
