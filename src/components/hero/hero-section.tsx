import { HeroCopy } from "@/components/hero/hero-copy";
import { HeroMasonry } from "@/components/hero/hero-masonry";

export function HeroSection() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 right-0 hidden bg-primary lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center justify-center lg:items-start">
            <HeroCopy />
          </div>

          <div className="relative min-h-88 overflow-hidden sm:min-h-104 md:min-h-120 lg:min-h-112 xl:min-h-120">
            <HeroMasonry />
          </div>
        </div>
      </div>
    </section>
  );
}
