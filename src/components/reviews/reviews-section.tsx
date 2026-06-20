import Link from "next/link";

import { sectionAnchors } from "@/lib/content/nav";
import { reviewsContent } from "@/lib/content/reviews";

const { title, titleAccent, description, emptyMessage, ctaLabel } =
  reviewsContent;

export function ReviewsSection() {
  return (
    <section
      id={sectionAnchors.reviews.slice(1)}
      aria-labelledby="reviews-heading"
      className="scroll-mt-20 border-t border-border/60 bg-muted/35"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-xl">
            <h2
              id="reviews-heading"
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

        <div className="mt-10 rounded-[1.35rem] bg-background px-6 py-10 text-center ring-1 ring-foreground/10 sm:px-10 sm:py-12">
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
            {emptyMessage}
          </p>
          <Link
            href={sectionAnchors.enquire}
            className="mt-5 inline-flex text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
