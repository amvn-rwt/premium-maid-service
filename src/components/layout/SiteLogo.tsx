import Link from "next/link";
import { siteConfig } from "@/lib/site";

type SiteLogoProps = {
  className?: string;
  onDark?: boolean;
};

export function SiteLogo({ className = "", onDark = false }: SiteLogoProps) {
  return (
    <Link
      href="#home"
      className={`group inline-flex flex-col leading-tight ${className}`}
    >
      <span
        className={`text-lg font-semibold tracking-tight sm:text-xl ${
          onDark ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {siteConfig.name}
      </span>
      <span
        className={`text-xs font-medium tracking-wide uppercase ${
          onDark ? "text-primary-foreground/70" : "text-accent"
        }`}
      >
        {siteConfig.serviceArea}
      </span>
    </Link>
  );
}
