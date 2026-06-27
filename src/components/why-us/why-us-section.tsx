import { HighlightLabel } from "@/components/ui/highlight-label";
import { sectionAnchors } from "@/lib/content/nav";
import {
  whyUsContent,
  type WhyUsChip,
  type WhyUsItem,
  type WhyUsPoint,
} from "@/lib/content/why-us";

const { title, titleAccent, description, featured, points } = whyUsContent;

// Balanced asymmetric bento: a tall featured tile on the left, with a 2×2 set
// of tiles on the right (DOM order: services, coverage, flexible, easy).
const POINT_PLACEMENT = [
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
] as const;

const CARD =
  "group relative flex flex-col overflow-hidden rounded-none bg-foreground p-6 text-background ring-1 ring-inset ring-background/10 transition-colors duration-300 ease-enter hover:ring-background/20";

function CardHeader({
  icon: Icon,
  label,
}: {
  icon: WhyUsItem["icon"];
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-inset ring-primary/25 transition-transform duration-300 ease-enter group-hover:scale-[1.06]"
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <h3 className="text-base font-semibold tracking-tight text-background">
        {label}
      </h3>
    </div>
  );
}

function Chip({ chip }: { chip: WhyUsChip }) {
  const Icon = chip.icon;

  return (
    <li className="inline-flex items-center gap-1.5 rounded-full bg-background/8 px-2.5 py-1 text-xs font-medium text-background/85 ring-1 ring-inset ring-background/15">
      {Icon ? (
        <Icon className="size-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
      ) : (
        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-primary/70" />
      )}
      {chip.label}
    </li>
  );
}

function CardText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-sm leading-relaxed text-background/65 text-pretty">
      {children}
    </p>
  );
}

function IconRow({ item }: { item: WhyUsItem }) {
  const Icon = item.icon;

  return (
    <li className="flex items-center gap-2">
      <Icon className="size-4 shrink-0 text-primary" strokeWidth={2} aria-hidden />
      <span className="text-sm font-medium text-background">{item.label}</span>
    </li>
  );
}

function PointCard({ point }: { point: WhyUsPoint }) {
  if (point.kind === "chips") {
    return (
      <>
        <CardHeader icon={point.icon} label={point.title} />
        <CardText>{point.text}</CardText>
        <ul className="mt-4 flex flex-wrap gap-2">
          {point.chips.map((chip) => (
            <Chip key={chip.label} chip={chip} />
          ))}
        </ul>
      </>
    );
  }

  if (point.kind === "iconList") {
    return (
      <>
        <CardHeader icon={point.icon} label={point.title} />
        <CardText>{point.text}</CardText>
        <ul
          className={
            point.items.length > 3
              ? "mt-4 grid grid-cols-2 gap-x-4 gap-y-3"
              : "mt-4 flex flex-col gap-3"
          }
        >
          {point.items.map((item) => (
            <IconRow key={item.label} item={item} />
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <p className="text-xs font-semibold tracking-wide text-primary uppercase">
        {point.eyebrow}
      </p>
      <p className="mt-2 text-3xl font-bold tracking-tight text-background sm:text-4xl">
        {point.stat}
      </p>
      <p className="mt-auto pt-4 text-sm leading-relaxed text-background/65 text-pretty">
        {point.text}
      </p>
    </>
  );
}

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

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
          <li
            className={`${CARD} justify-between sm:col-span-2 sm:p-7 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-2`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-primary/25 blur-3xl"
            />

            <div className="relative">
              <HighlightLabel>{featured.eyebrow}</HighlightLabel>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-background text-balance sm:text-[2rem] sm:leading-[1.1]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-background/70 text-pretty sm:text-[0.95rem]">
                {featured.description}
              </p>
            </div>

            <p className="relative mt-10 text-xs font-medium tracking-wide text-background/55 uppercase">
              {featured.note}
            </p>
          </li>

          {points.map((point, index) => (
            <li
              key={point.kind === "stat" ? point.eyebrow : point.title}
              className={`${CARD} ${POINT_PLACEMENT[index]}`}
            >
              <PointCard point={point} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
