"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

import { HighlightLabel } from "@/components/ui/highlight-label";
import {
  getEnquiryServiceContent,
  type EnquiryServiceContent,
} from "@/lib/content/enquiry";
import type { ServiceId } from "@/lib/content/services";
import { cn } from "@/lib/utils";

type EnquiryVisualPanelProps = {
  serviceId: ServiceId;
  className?: string;
};

const revealDelay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

function EnquiryVisualPanelContent({
  content,
}: {
  content: EnquiryServiceContent;
}) {
  const isFeatured = Boolean(content.featured);

  return (
    <div
      className={cn(
        "relative aspect-4/5 w-full overflow-hidden lg:aspect-3/2",
        isFeatured && "ring-1 ring-inset ring-primary/35",
      )}
    >
      {/* Backdrop (image + scrim + badge) settles in as one unit. */}
      <div className="reveal-media absolute inset-0" style={revealDelay(0)}>
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          quality={85}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn(
            "object-cover",
            isFeatured ? "brightness-[0.92]" : "brightness-[0.97]",
          )}
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/55 to-foreground/10"
        />

        {content.featured ? (
          <span className="absolute top-4 left-4 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground">
            {content.featured.label}
          </span>
        ) : null}
      </div>

      {/* Overlay copy rises in after the backdrop, top to bottom. */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <HighlightLabel className="reveal" style={revealDelay(90)}>
          Enquiring about
        </HighlightLabel>
        <h3
          className="reveal mt-1 text-2xl font-semibold tracking-tight text-background sm:text-[1.65rem]"
          style={revealDelay(140)}
        >
          {content.name}
        </h3>
        <p
          className="reveal mt-2 text-sm leading-relaxed text-background/80 text-pretty"
          style={revealDelay(185)}
        >
          {content.tagline}
        </p>

        <ul
          className="reveal mt-4 flex flex-wrap gap-2"
          style={revealDelay(230)}
        >
          {content.highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-background/12 px-2.5 py-1 text-background/90"
            >
              <Icon
                className="size-3.5 shrink-0"
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="text-xs font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EnquiryVisualPanel({
  serviceId,
  className,
}: EnquiryVisualPanelProps) {
  const content = getEnquiryServiceContent(serviceId);

  return (
    <div
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-[1.35rem] ring-1 ring-foreground/10",
        className,
      )}
    >
      {/* Keyed on serviceId so a service change remounts this subtree and
          re-triggers the `@starting-style` entrance. */}
      <div key={serviceId} className="contents">
        <EnquiryVisualPanelContent content={content} />

        <div className="bg-foreground p-4 sm:p-5">
          <p
            className="reveal text-sm leading-relaxed text-background/75 text-pretty"
            style={revealDelay(270)}
          >
            {content.description}
          </p>

          <ul className="mt-4 space-y-3">
            {content.details.map(({ icon: Icon, label }, index) => (
              <li
                key={label}
                className="reveal flex items-center gap-3"
                style={revealDelay(310 + index * 45)}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-sm leading-snug text-background/90">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
