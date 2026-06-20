import { ArrowLeftRight } from "lucide-react";
import Link from "next/link";

import { ServiceVisualCard } from "@/components/services/service-visual-card";
import { servicesContent } from "@/lib/content/services";

const {
  title,
  titleAccent,
  description,
  scrollHint,
  items,
  footerNote,
  footerCta,
  footerCtaHref,
} = servicesContent;

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-xl">
            <h2
              id="services-heading"
              className="text-3xl leading-[1.08] tracking-tight text-balance sm:text-4xl"
            >
              <span className="block font-bold text-foreground">{title}</span>
              <span className="mt-1 block font-normal text-muted-foreground">
                {titleAccent}
              </span>
            </h2>
          </header>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty lg:text-right lg:text-[0.95rem]">
            {description}
          </p>
        </div>

        <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground sm:mt-10">
          <ArrowLeftRight className="size-3.5 shrink-0 opacity-70" aria-hidden />
          <span>{scrollHint}</span>
        </p>

        <div
          className="mt-4 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto [-ms-overflow-style:none] scrollbar-none sm:mt-5 sm:gap-5 [&::-webkit-scrollbar]:hidden"
          role="list"
        >
          {items.map((service) => (
            <ServiceVisualCard key={service.id} service={service} />
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          {footerNote}{" "}
          <Link
            href={footerCtaHref}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {footerCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
