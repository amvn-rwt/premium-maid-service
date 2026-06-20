import { CornerRightDown } from "lucide-react";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/lib/content/hero";
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

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:items-start lg:justify-start">
        <PillCtaButton href="#enquire">{heroContent.cta}</PillCtaButton>
        <Button
          asChild
          variant="outline"
          className="group h-12 rounded-full border-border pl-6 pr-1.5 text-base font-medium"
        >
          <a href={heroContent.secondaryCtaHref}>
            <span>{heroContent.secondaryCta}</span>
            <span
              aria-hidden
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            >
              <CornerRightDown
                className="size-4 text-primary-foreground motion-safe:animate-pill-cta-icon motion-safe:group-hover:[animation-duration:3.25s]"
                strokeWidth={2.25}
              />
            </span>
          </a>
        </Button>
      </div>
    </div>
  );
}
