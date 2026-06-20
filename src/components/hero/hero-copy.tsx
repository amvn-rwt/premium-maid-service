import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/lib/content/hero";
import { cn } from "@/lib/utils";

export function HeroCopy() {
  return (
    <div className="relative max-w-xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-6 size-32 rounded-full bg-primary/10 blur-3xl sm:-left-10 sm:size-40"
      />

      <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 py-1.5 pr-3.5 pl-2 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
        <span className="flex size-6 items-center justify-center rounded-full bg-primary/15">
          <span className="size-2 rounded-full bg-primary" />
        </span>
        Serving {heroContent.location}
      </div>

      <h1 className="mt-7 text-[2.65rem] leading-[0.98] font-bold tracking-tight sm:text-5xl lg:mt-8 lg:text-[3.5rem]">
        <span className="block text-foreground">
          {heroContent.headline.lead}
        </span>
        <span className="mt-1 block text-foreground">
          {heroContent.headline.line2}{" "}
          <span className="relative inline-block text-primary">
            <span className="relative z-10">{heroContent.headline.highlight}</span>
            <span
              aria-hidden
              className="absolute -bottom-0.5 left-0 z-0 h-[0.42em] w-full -skew-x-3 rounded-sm bg-primary/20"
            />
          </span>
          <span className="text-foreground">.</span>
        </span>
      </h1>

      <ul className="mt-6 flex flex-wrap gap-2">
        {heroContent.services.map((service) => (
          <li
            key={service}
            className={cn(
              "rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-sm font-medium text-foreground/90",
              service === "Japa maids" && "border-primary/20 bg-primary/5 text-primary",
            )}
          >
            {service}
          </li>
        ))}
      </ul>

      <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-[1.05rem]">
        {heroContent.supporting}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <PillCtaButton>{heroContent.cta}</PillCtaButton>
        <Button
          asChild
          variant="outline"
          className="h-12 rounded-full border-border px-6 text-base font-medium"
        >
          <a href={heroContent.secondaryCtaHref}>{heroContent.secondaryCta}</a>
        </Button>
      </div>
    </div>
  );
}
