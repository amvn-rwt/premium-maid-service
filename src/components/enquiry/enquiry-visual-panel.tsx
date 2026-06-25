"use client";

import Image from "next/image";

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
      <Image
        src={content.image.src}
        alt={content.image.alt}
        fill
        priority
        quality={85}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          "object-cover transition-opacity duration-500 ease-out",
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

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <HighlightLabel>Enquiring about</HighlightLabel>
        <h3 className="mt-1 text-2xl font-semibold tracking-tight text-background sm:text-[1.65rem]">
          {content.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-background/80 text-pretty">
          {content.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
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
      <EnquiryVisualPanelContent content={content} />

      <div className="bg-foreground p-4 sm:p-5">
        <p className="text-sm leading-relaxed text-background/75 text-pretty">
          {content.description}
        </p>

        <ul className="mt-4 space-y-3">
          {content.details.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
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
  );
}
