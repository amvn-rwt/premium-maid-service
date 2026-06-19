"use client";

import Image from "next/image";
import { useState } from "react";
import { heroContent, type HeroImage } from "@/content/hero";
import { cn } from "@/lib/utils";

type CollageSlotId = "back" | "middle" | "front";

const SLOT_Z: Record<CollageSlotId, number> = {
  back: 10,
  middle: 20,
  front: 30,
};

const HOVER_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const HOVER_MS = 420;
const HOVER_SCALE = 1.025;

type CollageSlotProps = {
  id: CollageSlotId;
  image: HeroImage;
  className: string;
  priority?: boolean;
  sizes: string;
  isTop: boolean;
  onActivate: (id: CollageSlotId) => void;
  onDeactivate: () => void;
};

function CollageSlot({
  id,
  image,
  className,
  priority,
  sizes,
  isTop,
  onActivate,
  onDeactivate,
}: CollageSlotProps) {
  return (
    <div
      role="img"
      aria-label={image.alt}
      tabIndex={0}
      onMouseEnter={() => onActivate(id)}
      onMouseLeave={onDeactivate}
      onFocus={() => onActivate(id)}
      onBlur={onDeactivate}
      onClick={() => onActivate(id)}
      className={cn(
        "absolute aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-muted shadow-md ring-1 ring-border/50",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        "motion-safe:transition-[transform,box-shadow,ring-color] motion-reduce:transition-none",
        "motion-safe:will-change-transform",
        isTop
          ? "motion-safe:shadow-xl ring-border/80"
          : "motion-safe:shadow-md ring-border/50",
        className,
      )}
      style={{
        zIndex: isTop ? 40 : SLOT_Z[id],
        transform: isTop ? `scale(${HOVER_SCALE})` : "scale(1)",
        transitionDuration: `${HOVER_MS}ms`,
        transitionTimingFunction: HOVER_EASE,
      }}
    >
      <Image
        src={image.src}
        alt=""
        aria-hidden
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function HeroImageCollage() {
  const { back, middle, front } = heroContent.images;
  const [activeId, setActiveId] = useState<CollageSlotId | null>(null);

  const isTop = (id: CollageSlotId) => activeId === id;

  return (
    <div className="relative mx-auto aspect-[5/5.4] w-full max-w-md overflow-visible sm:max-w-lg lg:max-w-none lg:aspect-[1/1.02]">
      <CollageSlot
        id="back"
        image={back}
        priority
        isTop={isTop("back")}
        onActivate={setActiveId}
        onDeactivate={() => setActiveId(null)}
        sizes="(max-width: 1024px) 68vw, 34vw"
        className="top-[2%] left-[20%] w-[68%] sm:w-[66%]"
      />
      <CollageSlot
        id="middle"
        image={middle}
        isTop={isTop("middle")}
        onActivate={setActiveId}
        onDeactivate={() => setActiveId(null)}
        sizes="(max-width: 1024px) 64vw, 32vw"
        className="top-[19%] right-0 w-[64%] sm:top-[30%] sm:w-[62%]"
      />
      <CollageSlot
        id="front"
        image={front}
        isTop={isTop("front")}
        onActivate={setActiveId}
        onDeactivate={() => setActiveId(null)}
        sizes="(max-width: 1024px) 70vw, 36vw"
        className="top-[37%] left-0 w-[72%] sm:top-[48%] sm:w-[70%]"
      />
    </div>
  );
}
