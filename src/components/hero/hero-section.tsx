import { HeroCopy } from "@/components/hero/hero-copy";
import { HeroMasonry } from "@/components/hero/hero-masonry";

export function HeroSection() {
  return (
    <section className="grid lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-6 py-16 lg:items-start lg:px-10 lg:py-0 xl:px-14">
        <HeroCopy />
      </div>

      <div className="relative h-88 overflow-hidden sm:h-104 md:h-120 lg:h-[calc(100dvh-4rem)]">
        <HeroMasonry />
      </div>
    </section>
  );
}
