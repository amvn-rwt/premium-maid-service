"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

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

type BackdropLayer = {
  id: number;
  content: EnquiryServiceContent;
};

/**
 * Persistent stack of image layers. When the service changes a new layer is
 * pushed on top and crossfades in while the previous layer stays fully visible
 * underneath, then stale layers are pruned. This avoids the dark "flash" you
 * get from remounting a single image (new image fades up from nothing).
 */
function ServiceBackdrop({ content }: { content: EnquiryServiceContent }) {
  const [layers, setLayers] = useState<BackdropLayer[]>(() => [
    { id: 0, content },
  ]);
  const counterRef = useRef(0);
  const lastIdRef = useRef(content.id);

  useEffect(() => {
    if (content.id === lastIdRef.current) return;
    lastIdRef.current = content.id;
    counterRef.current += 1;
    setLayers((prev) => [...prev, { id: counterRef.current, content }]);
  }, [content]);

  const pruneToTop = useCallback(
    (event: React.TransitionEvent<HTMLDivElement>) => {
      if (event.propertyName !== "opacity") return;
      setLayers((prev) => (prev.length > 1 ? prev.slice(-1) : prev));
    },
    [],
  );

  return (
    <div className="absolute inset-0">
      {layers.map((layer, index) => {
        const isTop = index === layers.length - 1;
        const isBase = index === 0;
        const layerContent = layer.content;

        return (
          <div
            key={layer.id}
            aria-hidden={!isTop}
            className={cn("absolute inset-0", !isBase && "backdrop-layer")}
            onTransitionEnd={isTop && !isBase ? pruneToTop : undefined}
          >
            <Image
              src={layerContent.image.src}
              alt={isTop ? layerContent.image.alt : ""}
              fill
              priority={isBase}
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                "object-cover",
                layerContent.featured
                  ? "brightness-[0.92]"
                  : "brightness-[0.97]",
              )}
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/55 to-foreground/10"
            />

            {layerContent.featured ? (
              <span className="absolute top-4 left-4 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground">
                {layerContent.featured.label}
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function EnquiryVisualPanel({
  serviceId,
  className,
}: EnquiryVisualPanelProps) {
  const content = getEnquiryServiceContent(serviceId);
  const isFeatured = Boolean(content.featured);

  return (
    <div
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-[1.35rem] ring-1 ring-foreground/10",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-4/5 w-full overflow-hidden lg:aspect-3/2",
          isFeatured && "ring-1 ring-inset ring-primary/35",
        )}
      >
        <ServiceBackdrop content={content} />

        {/* Keyed on serviceId so the copy remounts and re-runs its staggered
            `@starting-style` reveal over the (persistent) crossfading photo. */}
        <div
          key={serviceId}
          className="absolute inset-x-0 bottom-0 p-4 sm:p-5"
        >
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

      <div key={serviceId} className="bg-foreground p-4 sm:p-5">
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
  );
}
