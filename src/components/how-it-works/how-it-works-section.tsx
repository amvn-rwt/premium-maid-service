import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { HowItWorksVisual } from "@/components/how-it-works/how-it-works-visual";
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

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li key={step.step} className="relative flex">
                <article className="flex w-full flex-col rounded-3xl bg-background p-5 ring-1 ring-foreground/10 transition-shadow duration-300 ease-enter hover:shadow-[0_20px_50px_-24px_rgba(26,33,31,0.35)]">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-primary uppercase">
                      <span className="flex size-6 items-center justify-center rounded-full bg-primary/12 text-[11px] font-bold text-primary">
                        {step.step}
                      </span>
                      Step {step.step}
                    </span>
                    <span
                      aria-hidden
                      className="-mt-1 text-4xl font-bold leading-none text-foreground/8 tabular-nums"
                    >
                      0{step.step}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {step.description}
                  </p>

                  <div className="relative">
                    <HowItWorksVisual visual={step.visual} />
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-[11px] font-semibold whitespace-nowrap text-background shadow-[0_8px_20px_-8px_rgba(26,33,31,0.5)]">
                      {step.tag}
                    </span>
                  </div>
                </article>

                {!isLast ? (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-3 z-10 hidden size-7 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-background text-muted-foreground ring-1 ring-foreground/10 lg:flex"
                  >
                    <ArrowRight className="size-3.5" strokeWidth={2.5} />
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>

        <p className="mt-10 text-sm text-muted-foreground">
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
