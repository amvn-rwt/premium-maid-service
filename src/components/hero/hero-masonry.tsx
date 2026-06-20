import Image from "next/image";

import {
  MasonryTileAction,
  type MasonryTileActionConfig,
} from "@/components/hero/masonry-tile-action";
import { getPrimaryTelHref, getPrimaryWhatsAppHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type MasonryTile = {
  className: string;
  src: string;
  action?: MasonryTileActionConfig;
};

type MasonryColumn = {
  id: string;
  tiles: MasonryTile[];
};

/** Stable placeholder set — swap for real maid/home photos later. */
const PLACEHOLDER_IMAGES = [
  "https://picsum.photos/seed/pms-masonry-01/480/640",
  "https://picsum.photos/seed/pms-masonry-02/480/720",
  "https://picsum.photos/seed/pms-masonry-03/480/600",
  "https://picsum.photos/seed/pms-masonry-04/480/680",
  "https://picsum.photos/seed/pms-masonry-05/480/560",
  "https://picsum.photos/seed/pms-masonry-06/480/740",
  "https://picsum.photos/seed/pms-masonry-07/480/620",
  "https://picsum.photos/seed/pms-masonry-08/480/700",
  "https://picsum.photos/seed/pms-masonry-09/480/580",
  "https://picsum.photos/seed/pms-masonry-10/480/660",
  "https://picsum.photos/seed/pms-masonry-11/480/760",
  "https://picsum.photos/seed/pms-masonry-12/480/540",
  "https://picsum.photos/seed/pms-masonry-13/480/710",
  "https://picsum.photos/seed/pms-masonry-14/480/590",
  "https://picsum.photos/seed/pms-masonry-15/480/650",
  "https://picsum.photos/seed/pms-masonry-16/480/630",
  "https://picsum.photos/seed/pms-masonry-17/480/690",
  "https://picsum.photos/seed/pms-masonry-18/480/570",
  "https://picsum.photos/seed/pms-masonry-19/480/730",
  "https://picsum.photos/seed/pms-masonry-20/480/610",
  "https://picsum.photos/seed/pms-masonry-21/480/670",
] as const;

const MASONRY_ACTIONS = {
  call: {
    label: "Call now",
    hint: "Speak to us directly",
    href: getPrimaryTelHref(),
    icon: "phone",
  },
  whatsapp: {
    label: "WhatsApp",
    hint: "Quick chat enquiry",
    href: getPrimaryWhatsAppHref(),
    external: true,
    icon: "whatsapp",
  },
  enquire: {
    label: "Enquire",
    hint: "Tell us what you need",
    href: "#enquire",
    icon: "enquire",
  },
} as const satisfies Record<string, MasonryTileActionConfig>;

type MasonryTileLayout = {
  className: string;
  action?: keyof typeof MASONRY_ACTIONS;
};

type MasonryColumnLayout = {
  id: string;
  tiles: MasonryTileLayout[];
};

function assignPlaceholderImages(
  columns: MasonryColumnLayout[],
  startIndex: number,
): MasonryColumn[] {
  let index = startIndex;

  return columns.map((column) => ({
    ...column,
    tiles: column.tiles.map((tile) => ({
      className: tile.className,
      src: PLACEHOLDER_IMAGES[index++ % PLACEHOLDER_IMAGES.length],
      action: tile.action ? MASONRY_ACTIONS[tile.action] : undefined,
    })),
  }));
}

/**
 * Tall edge tiles sit above/below the visible window so clip boundaries
 * cut through large blocks — no thin slivers at top or bottom.
 */
const MASONRY_COLUMNS = assignPlaceholderImages(
  [
    {
      id: "left",
      tiles: [
        { className: "h-56 sm:h-64" },
        { className: "aspect-[4/5]", action: "call" },
        { className: "aspect-[3/4]" },
        { className: "h-56 sm:h-64" },
      ],
    },
    {
      id: "center",
      tiles: [
        { className: "h-64 sm:h-72" },
        { className: "aspect-[3/5]", action: "whatsapp" },
        { className: "aspect-[4/5]" },
        { className: "h-64 sm:h-72" },
      ],
    },
    {
      id: "right",
      tiles: [
        { className: "h-52 sm:h-60" },
        { className: "aspect-[3/5]", action: "enquire" },
        { className: "aspect-[4/6]" },
        { className: "aspect-[2/3]" },
        { className: "h-52 sm:h-60" },
      ],
    },
  ],
  0,
);

const MOBILE_COLUMNS = assignPlaceholderImages(
  [
    {
      id: "mobile-left",
      tiles: [
        { className: "h-48" },
        { className: "aspect-[4/5]", action: "call" },
        { className: "aspect-[3/5]" },
        { className: "h-48" },
      ],
    },
    {
      id: "mobile-right",
      tiles: [
        { className: "h-52" },
        { className: "aspect-[3/5]", action: "whatsapp" },
        { className: "aspect-[3/4]" },
        { className: "h-52" },
      ],
    },
  ],
  13,
);

function MasonryColumnTrack({
  tiles,
  className,
}: {
  tiles: MasonryTile[];
  className?: string;
}) {
  return (
    <div className={cn("flex h-full flex-col gap-3 sm:gap-4", className)}>
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={cn(
            "relative w-full shrink-0 overflow-hidden rounded-lg bg-primary/20",
            tile.className,
          )}
        >
          <Image
            src={tile.src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, 33vw"
          />
          {tile.action ? <MasonryTileAction action={tile.action} /> : null}
        </div>
      ))}
    </div>
  );
}

export function HeroMasonry() {
  return (
    <>
      <div className="absolute inset-x-3 top-1/2 grid h-[calc(100%+18rem)] -translate-y-1/2 grid-cols-2 gap-3 sm:hidden">
        {MOBILE_COLUMNS.map((column) => (
          <MasonryColumnTrack key={column.id} tiles={column.tiles} />
        ))}
      </div>

      <div className="absolute inset-x-4 top-1/2 hidden h-[calc(100%+20rem)] -translate-y-1/2 grid-cols-3 gap-4 sm:grid">
        {MASONRY_COLUMNS.map((column) => (
          <MasonryColumnTrack key={column.id} tiles={column.tiles} />
        ))}
      </div>
    </>
  );
}
