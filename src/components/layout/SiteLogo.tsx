import Link from "next/link";
import { siteConfig } from "@/lib/site";

type SiteLogoProps = {
  className?: string;
  /** Light logo for navy (primary) backgrounds — e.g. footer. */
  inverted?: boolean;
};

export function SiteLogo({ className = "", inverted = false }: SiteLogoProps) {
  const premiumClass = inverted ? "text-primary-foreground" : "text-primary";
  const serviceClass = inverted ? "text-accent-on-primary" : "text-accent-light";

  return (
    <Link
      href="#home"
      aria-label={siteConfig.name}
      className={`group inline-block min-w-0 max-w-44 leading-snug tracking-normal transition-opacity hover:opacity-90 sm:max-w-none sm:leading-tight ${className}`}
    >
      <span className="block text-[0.9375rem] sm:text-lg sm:whitespace-nowrap">
        <span className={`font-semibold ${premiumClass}`}>Premium</span>{" "}
        <span className={`font-medium ${serviceClass}`}>Maid Service</span>
      </span>
    </Link>
  );
}
