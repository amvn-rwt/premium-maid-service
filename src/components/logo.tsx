import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  onDark?: boolean;
};

function Logo({ className, onDark = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.logoText}
      className={cn(
        "relative inline-flex items-center transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span
        aria-hidden
        className="relative z-0 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
      >
        P
      </span>
      <span
        aria-hidden
        className="relative z-10 -ml-3.5 text-lg font-bold tracking-tight"
      >
        <span className="text-primary-foreground">re</span>
        <span className={onDark ? "text-background" : "text-foreground"}>
          mium
        </span>
        <span className="text-primary">Maid</span>
        <span className={onDark ? "text-background" : "text-foreground"}>
          Service
        </span>
      </span>
    </Link>
  );
}

export { Logo };
