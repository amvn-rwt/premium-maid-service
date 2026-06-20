import { HeroCopy } from "@/components/hero/hero-copy";
import { HeroImageCallCard } from "@/components/hero/hero-image-call-card";
import { HeroImageGrid } from "@/components/hero/hero-image-grid";

export function HeroSection() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[48%] right-0 hidden bg-foreground lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center justify-center lg:items-start">
            <HeroCopy />
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-square">
              <HeroImageGrid />

              <div className="absolute top-1/2 left-1/2 z-10 w-[min(92%,14.5rem)] -translate-x-1/2 -translate-y-1/2 sm:w-52">
                <HeroImageCallCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
