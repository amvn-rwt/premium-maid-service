import { CornerRightDown } from "lucide-react";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/lib/content/hero";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HeroCopy() {
  return (
    <div className="relative w-full max-w-2xl text-center lg:text-left">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 size-32 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:size-40 lg:-left-10 lg:translate-x-0"
      />

      <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 py-1.5 pr-3.5 pl-2 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
        <span className="flex size-6 items-center justify-center rounded-full bg-primary/15">
          <span className="size-2 rounded-full bg-primary" />
        </span>
        Serving {heroContent.location}
      </div>

      <h1 className="mx-auto mt-7 max-w-2xl text-[2.65rem] leading-[1.02] font-bold tracking-tight text-balance sm:text-5xl lg:mx-0 lg:mt-8 lg:max-w-none lg:text-[3.5rem]">
        <span className="text-foreground">
          {heroContent.headline.lead} {heroContent.headline.line2}{" "}
        </span>
        <span className="relative inline-block text-primary">
          <span className="relative z-10">
            {heroContent.headline.highlight}
          </span>
          <span
            aria-hidden
            className="absolute -bottom-0.5 left-0 z-0 h-[0.42em] w-full -skew-x-3 rounded-sm bg-primary/20"
          />
        </span>
        <span className="text-foreground">.</span>
      </h1>

      <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
        {heroContent.services.map((service) => (
          <li
            key={service}
            className={cn(
              "rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-sm font-medium text-foreground/90",
              service === "Japa maids" &&
                "border-primary/20 bg-primary/5 text-primary",
            )}
          >
            {service}
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-[1.05rem] lg:mx-0">
        {heroContent.supporting}
      </p>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
        <PillCtaButton
          href={heroContent.ctaHref}
          size="sm"
          className="shrink-0 sm:h-12 sm:pl-6 sm:pr-1.5 sm:text-base [&_span:last-child]:sm:size-9 [&_svg]:sm:size-4"
        >
          {heroContent.cta}
        </PillCtaButton>
        <Button
          asChild
          variant="outline"
          className="group h-9 shrink-0 rounded-full border-border pl-4 pr-1 text-sm font-medium sm:h-12 sm:pl-6 sm:pr-1.5 sm:text-base"
        >
          <a href={heroContent.secondaryCtaHref}>
            <span>{heroContent.secondaryCta}</span>
            <span
              aria-hidden
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground transition-transform duration-300 ease-out group-hover:scale-[1.04] sm:size-9"
            >
              <CornerRightDown
                className="size-3.5 text-primary-foreground motion-safe:animate-pill-cta-icon motion-safe:group-hover:[animation-duration:3.25s] sm:size-4"
                strokeWidth={2.25}
              />
            </span>
          </a>
        </Button>
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        Or email us at{" "}
        <a
          href={`mailto:${siteConfig.contact.enquiryEmail}`}
          className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          {siteConfig.contact.enquiryEmail}
        </a>
      </p>
    </div>
  );
}
