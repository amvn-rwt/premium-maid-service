import { HeroMasonry } from "@/components/hero/hero-masonry";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="grid lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-6 py-16 text-center lg:py-0">
        <h1 className="mt-3 max-w-xl text-4xl tracking-tight text-primary text-balance sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
          Design reset complete. Rules, skills, and docs are intact — ready to
          rebuild step by step.
        </p>
        <PillCtaButton className="mt-8" />
      </div>

      <div className="relative h-88 overflow-hidden sm:h-104 md:h-120 lg:h-[calc(100dvh-4rem)]">
        <HeroMasonry />
      </div>
    </section>
  );
}
