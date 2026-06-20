import { cn } from "@/lib/utils";

type MasonryTile = {
  className: string;
};

type MasonryColumn = {
  id: string;
  tiles: MasonryTile[];
};

/**
 * Tall edge tiles sit above/below the visible window so clip boundaries
 * cut through large blocks — no thin slivers at top or bottom.
 */
const MASONRY_COLUMNS: MasonryColumn[] = [
  {
    id: "left",
    tiles: [
      { className: "h-56 sm:h-64" },
      { className: "aspect-[4/5]" },
      { className: "aspect-[3/4]" },
      { className: "h-56 sm:h-64" },
    ],
  },
  {
    id: "center",
    tiles: [
      { className: "h-64 sm:h-72" },
      { className: "aspect-[3/5]" },
      { className: "aspect-[4/5]" },
      { className: "h-64 sm:h-72" },
    ],
  },
  {
    id: "right",
    tiles: [
      { className: "h-52 sm:h-60" },
      { className: "aspect-[3/5]" },
      { className: "aspect-[4/6]" },
      { className: "aspect-[2/3]" },
      { className: "h-52 sm:h-60" },
    ],
  },
];

const MOBILE_COLUMNS: MasonryColumn[] = [
  {
    id: "mobile-left",
    tiles: [
      { className: "h-48" },
      { className: "aspect-[4/5]" },
      { className: "aspect-[3/5]" },
      { className: "h-48" },
    ],
  },
  {
    id: "mobile-right",
    tiles: [
      { className: "h-52" },
      { className: "aspect-[3/5]" },
      { className: "aspect-[3/4]" },
      { className: "h-52" },
    ],
  },
];

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
            "w-full shrink-0 rounded-lg bg-primary",
            tile.className,
          )}
        />
      ))}
    </div>
  );
}

export function HeroMasonry() {
  return (
    <>
      <div
        className="absolute inset-x-3 top-1/2 grid h-[calc(100%+18rem)] w-[calc(100%-1.5rem)] -translate-y-1/2 grid-cols-2 gap-3 sm:hidden"
        aria-hidden
      >
        {MOBILE_COLUMNS.map((column) => (
          <MasonryColumnTrack key={column.id} tiles={column.tiles} />
        ))}
      </div>

      <div
        className="absolute inset-x-4 top-1/2 hidden h-[calc(100%+20rem)] w-[calc(100%-2rem)] -translate-y-1/2 grid-cols-3 gap-4 sm:grid"
        aria-hidden
      >
        {MASONRY_COLUMNS.map((column) => (
          <MasonryColumnTrack key={column.id} tiles={column.tiles} />
        ))}
      </div>
    </>
  );
}
