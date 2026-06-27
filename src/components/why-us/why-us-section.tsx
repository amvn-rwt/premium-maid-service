import { HighlightLabel } from "@/components/ui/highlight-label";
import { sectionAnchors } from "@/lib/content/nav";
import { whyUsContent } from "@/lib/content/why-us";

const { title, titleAccent, description, points, featured } = whyUsContent;

// Explicit desktop placement keeps the 2×2 icon grid in the left two columns
// while the dark feature card fills the tall third column.
const POINT_PLACEMENT = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-2 lg:row-start-2",
] as const;

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

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <li
                key={point.title}
                className={`group flex flex-col rounded-3xl bg-muted/40 p-6 ring-1 ring-foreground/8 transition-colors duration-300 ease-enter hover:bg-muted/70 ${POINT_PLACEMENT[index]}`}
              >
                <span
                  aria-hidden
                  className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-inset ring-primary/15 transition-transform duration-300 ease-enter group-hover:scale-[1.06]"
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {point.description}
                </p>
              </li>
            );
          })}

          <li className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-foreground p-6 text-background ring-1 ring-foreground sm:col-span-2 sm:p-7 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-primary/25 blur-3xl"
            />

            <div className="relative">
              <HighlightLabel>{featured.eyebrow}</HighlightLabel>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-background text-balance sm:text-[1.75rem]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-background/70 text-pretty">
                {featured.description}
              </p>
            </div>

            <p className="relative mt-8 text-xs font-medium tracking-wide text-background/55 uppercase">
              {featured.note}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
