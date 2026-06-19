/**
 * Hero copy and imagery — swap when client picks headline (Q38) or sends photos.
 *
 * Collage order (back → front): `back`, `middle`, `front`
 * Replace files in `public/images/hero/` or swap `src` when client sends licensed assets.
 *
 * Note: Shutterstock (and similar) require a paid license — do not hotlink without one.
 * Current photos are from Unsplash (free to use per their license).
 */
export type HeroImageSource = "stock" | "client" | "ai";

export type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  source: HeroImageSource;
  credit?: {
    photographer: string;
    url: string;
  };
};

export const heroContent = {
  headline: "Trusted domestic help for your home",
  subheadline:
    "All-rounder, cooking, babycare, Japa, and housemaid support — matched to your family's needs.",
  primaryCta: {
    label: "Book a Maid",
    href: "#enquire",
  },
  trustPoints: [
    "Serving Delhi NCR homes",
    "Full-time & part-time options",
    "Enquire by call, form, or WhatsApp",
  ] as const,
  images: {
    back: {
      src: "/images/hero/back.jpg",
      alt: "Bright modern living room in a family home",
      width: 1400,
      height: 1050,
      source: "stock",
      credit: {
        photographer: "Sidekix Media",
        url: "https://unsplash.com/photos/photo-1586023492125-27b2c045efd7",
      },
    },
    middle: {
      src: "/images/hero/middle.jpg",
      alt: "Clean kitchen with fresh ingredients for home cooking",
      width: 1200,
      height: 900,
      source: "stock",
      credit: {
        photographer: "Naomi Hébert",
        url: "https://unsplash.com/photos/photo-1556911220-bff31c812dba",
      },
    },
    front: {
      src: "/images/hero/front.jpg",
      alt: "Warm, well-furnished home interior with natural light",
      width: 1200,
      height: 900,
      source: "stock",
      credit: {
        photographer: "Collov Home Design",
        url: "https://unsplash.com/photos/photo-1600607687939-ce8a6c25118c",
      },
    },
  } satisfies Record<string, HeroImage>,
} as const;
