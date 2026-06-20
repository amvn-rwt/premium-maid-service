import { cn } from "@/lib/utils";

export type MasonryTileActionConfig = {
  label: string;
  hint: string;
  href: string;
  external?: boolean;
  icon: "phone" | "whatsapp" | "enquire";
};

type MasonryTileActionProps = {
  action: MasonryTileActionConfig;
};

export function MasonryTileAction({ action }: MasonryTileActionProps) {
  return (
    <div className="absolute inset-x-2 bottom-2 z-10 sm:inset-x-2.5 sm:bottom-2.5">
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-white/50",
          "bg-white/15 p-3.5 shadow-[0_8px_32px_-8px_rgba(26,33,31,0.18)] backdrop-blur-xl",
          "supports-backdrop-filter:bg-white/15 sm:p-4",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/60 via-white/30 to-transparent"
        />
        <div className="relative flex flex-col gap-3">
          <p className="text-[11px] leading-snug font-medium text-foreground/80 sm:text-xs">
            {action.hint}
          </p>
          <a
            href={action.href}
            {...(action.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={cn(
              "inline-flex h-10 w-full items-center justify-center rounded-full text-xs font-semibold sm:text-sm",
              "transition-[transform,background-color] duration-150 ease-out active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
              action.icon === "whatsapp"
                ? "bg-[#25D366]/90 text-white hover:bg-[#22c35e]"
                : "bg-foreground/90 text-background hover:bg-foreground",
            )}
          >
            {action.label}
          </a>
        </div>
      </div>
    </div>
  );
}
