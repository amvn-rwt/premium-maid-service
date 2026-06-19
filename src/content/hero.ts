/**
 * Hero copy and imagery — swap when client picks headline (Q38) or sends photos.
 *
 * Collage order (back → front): `back`, `middle`, `front`
 * Local files: `/images/hero/back.jpg`, `middle.jpg`, `front.jpg`
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
    /** Top layer — furthest back */
    back: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0?auto=format&fit=crop&w=1200&q=80",
      alt: "Bright family home living room with natural light",
      width: 1200,
      height: 900,
      source: "stock",
      credit: {
        photographer: "R ARCHITECTURE",
        url: "https://unsplash.com/photos/photo-1600585154340-be6161a56a0",
      },
    },
    /** Middle layer — offset right */
    middle: {
      src: "https://images.unsplash.com/photo-1556911220-e7bffc4ae6ba?auto=format&fit=crop&w=1000&q=80",
      alt: "Clean modern kitchen ready for daily cooking",
      width: 1000,
      height: 750,
      source: "stock",
      credit: {
        photographer: "Naomi Hébert",
        url: "https://unsplash.com/photos/photo-1556911220-e7bffc4ae6ba",
      },
    },
    /** Front layer — offset left, closest to viewer */
    front: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      alt: "Warm, well-furnished home interior",
      width: 1000,
      height: 750,
      source: "stock",
      credit: {
        photographer: "Collov Home Design",
        url: "https://unsplash.com/photos/photo-1600607687939-ce8a6c25118c",
      },
    },
  } satisfies Record<string, HeroImage>,
} as const;
