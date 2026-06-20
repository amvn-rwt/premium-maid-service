import Image from "next/image";

/** Bright, high-key placeholders — swap for real maid/home photos later. */
const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=640&h=480&q=80",
    alt: "Bright modern kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=640&h=480&q=80",
    alt: "Light-filled living room",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=640&h=480&q=80",
    alt: "Clean white kitchen interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=640&h=480&q=80",
    alt: "Airy home interior",
  },
] as const;

export function HeroImageGrid() {
  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
      {HERO_IMAGES.map((image) => (
        <div
          key={image.src}
          className="relative min-h-0 overflow-hidden rounded-lg bg-background/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:scale-105"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
