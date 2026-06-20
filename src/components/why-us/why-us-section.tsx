import Link from "next/link";

import { sectionAnchors } from "@/lib/content/nav";
import { whyUsContent } from "@/lib/content/why-us";

const { title, titleAccent, description, points, ctaLabel, ctaNote } =
  whyUsContent;

export function WhyUsSection() {
  return (
    <section
      id={sectionAnchors.whyUs.slice(1)}
      aria-labelledby="why-us-heading"
      className="scroll-mt-20 border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-xl">
            <h2
              id="why-us-heading"
              className="text-3xl leading-[1.08] tracking-tight text-balance sm:text-4xl"
            >
              <span className="block font-bold text-foreground">{title}</span>
              <span className="mt-1 block font-normal text-muted-foreground">
                {titleAccent}
              </span>
            </h2>
          </header>

          <p className="max-w-sm text-sm leading-snug text-muted-foreground text-pretty lg:text-right lg:text-[0.95rem]">
            {description}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {points.map((point) => (
            <li
              key={point.title}
              className="rounded-[1.35rem] bg-muted/50 p-5 ring-1 ring-foreground/8"
            >
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {point.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-muted-foreground">
          {ctaNote}.{" "}
          <Link
            href={sectionAnchors.enquire}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {ctaLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
