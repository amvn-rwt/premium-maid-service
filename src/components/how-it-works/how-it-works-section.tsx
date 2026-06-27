import { ArrowRight } from "lucide-react";

import { HowItWorksVisual } from "@/components/how-it-works/how-it-works-visual";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
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

        <ol className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li key={step.step} className="relative flex">
                <article className="flex h-full w-full flex-col rounded-3xl bg-background p-5 shadow-[0_16px_44px_-28px_rgba(26,33,31,0.4)] ring-1 ring-foreground/10">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary/12 px-2.5 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                      Step {step.step}
                    </span>
                    <span
                      aria-hidden
                      className="-mt-1 text-4xl font-bold leading-none text-foreground/[0.07] tabular-nums"
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
                  <p className="sr-only">{step.srSummary}</p>
                  <span className="mt-3 inline-flex w-fit items-center rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background pb-[5px]">
                    {step.tag}
                  </span>
                  <HowItWorksVisual visual={step.visual} />
                </article>

                {!isLast ? (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-1.5 z-10 hidden size-7 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-background text-muted-foreground ring-1 ring-foreground/10 lg:flex"
                  >
                    <ArrowRight className="size-3.5" strokeWidth={2.5} />
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-pretty">{ctaNote}</p>
          <PillCtaButton href={sectionAnchors.enquire} size="sm">
            {ctaLabel}
          </PillCtaButton>
        </div>
      </div>
    </section>
  );
}
