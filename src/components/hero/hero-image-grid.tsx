import Image from "next/image";

const HERO_IMAGES = [
  {
    src: "/images/hero/trusted-helper.png",
    alt: "Professional home helper holding fresh folded towels in a bright bedroom",
  },
  {
    src: "/images/hero/kitchen-service.png",
    alt: "Housekeeper cleaning a kitchen countertop as a happy homeowner looks on",
  },
  {
    src: "/images/hero/family-care.png",
    alt: "Caregiver serving tea to an elderly woman while a child plays nearby",
  },
  {
    src: "/images/hero/clean-living-room.png",
    alt: "Spotless, sunlit living room after a professional home cleaning",
  },
] as const;

export function HeroImageGrid() {
  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
      {HERO_IMAGES.map((image) => (
        <div
          key={image.src}
          className="relative min-h-0 overflow-hidden rounded-lg bg-background/10 transition-transform duration-500 ease-enter motion-safe:hover:scale-105"
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
