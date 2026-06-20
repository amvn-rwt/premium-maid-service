import { HeroCopy } from "@/components/hero/hero-copy";
import { HeroMasonry } from "@/components/hero/hero-masonry";

export function HeroSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start">
            <HeroCopy />
          </div>

          <div className="relative h-88 overflow-hidden sm:h-104 md:h-120 lg:h-112 xl:h-120">
            <HeroMasonry />
          </div>
        </div>
      </div>
    </section>
  );
}
