import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { HeroImageCollage } from "@/components/sections/HeroImageCollage";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { heroContent } from "@/content/hero";
import { cn } from "@/lib/utils";

export function Hero() {
  const { headline, subheadline, primaryCta, trustPoints } = heroContent;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border/60 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--background),var(--primary)_4%)_0%,var(--background)_55%)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative py-12 sm:py-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16 xl:gap-16">
        <div className="max-w-xl lg:max-w-none">
          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-primary text-balance sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            {headline}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            {subheadline}
          </p>

          <div className="mt-8">
            <Link
              href={primaryCta.href}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-11 px-5 text-base",
              )}
            >
              {primaryCta.label}
            </Link>
          </div>

          <ul className="mt-8 space-y-2.5" aria-label="Key points">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-foreground sm:text-base"
              >
                <CheckIcon
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 overflow-visible lg:mt-0">
          <HeroImageCollage />
        </div>
      </Container>
    </section>
  );
}
