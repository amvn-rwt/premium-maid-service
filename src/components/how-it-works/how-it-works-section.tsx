import Link from "next/link";

import { howItWorksContent } from "@/lib/content/how-it-works";
import { sectionAnchors } from "@/lib/content/nav";

const { title, titleAccent, description, steps, ctaLabel, ctaNote } =
  howItWorksContent;

export function HowItWorksSection() {
  return (
    <section
      id={sectionAnchors.howItWorks.slice(1)}
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-20 border-t border-border/60 bg-muted/35"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-xl">
            <h2
              id="how-it-works-heading"
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

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => (
            <li
              key={step.step}
              className="flex flex-col rounded-[1.35rem] bg-background p-5 ring-1 ring-foreground/10"
            >
              <span className="text-sm font-semibold text-primary">
                Step {step.step}
              </span>
              <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-muted-foreground">
          {ctaNote}{" "}
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
