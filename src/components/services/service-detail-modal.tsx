"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, X } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { HighlightLabel } from "@/components/ui/highlight-label";
import { getPrimaryWhatsAppHref } from "@/lib/contact";
import { getEnquiryServiceContent } from "@/lib/content/enquiry";
import { sectionAnchors } from "@/lib/content/nav";
import {
  getServiceDetailContent,
  serviceDetailModalContent,
} from "@/lib/content/service-details";
import {
  getServiceEnquireHref,
  type ServiceId,
} from "@/lib/content/services";

type ServiceDetailModalProps = {
  serviceId: ServiceId | null;
  onClose: () => void;
};

const enquireAnchorId = sectionAnchors.enquire.slice(1);

export function ServiceDetailModal({
  serviceId,
  onClose,
}: ServiceDetailModalProps) {
  const [renderedId, setRenderedId] = useState<ServiceId | null>(serviceId);

  useEffect(() => {
    if (serviceId) setRenderedId(serviceId);
  }, [serviceId]);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) onClose();
    },
    [onClose],
  );

  const handleEnquire = useCallback(() => {
    if (!renderedId) return;
    const id = renderedId;

    onClose();
    window.history.replaceState(null, "", getServiceEnquireHref(id));
    window.dispatchEvent(new HashChangeEvent("hashchange"));

    window.setTimeout(() => {
      document
        .getElementById(enquireAnchorId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 280);
  }, [renderedId, onClose]);

  const content = renderedId ? getEnquiryServiceContent(renderedId) : null;
  const detail = renderedId ? getServiceDetailContent(renderedId) : null;
  const isFeatured = Boolean(content?.featured);

  return (
    <Dialog open={Boolean(serviceId)} onOpenChange={handleOpenChange}>
      {content && detail ? (
        <DialogContent
          showCloseButton={false}
          aria-describedby={`service-modal-desc-${content.id}`}
          className="flex max-h-[90dvh] w-[calc(100vw-1.5rem)] max-w-4xl flex-col overflow-hidden rounded-[1.6rem] bg-background shadow-2xl ring-1 ring-foreground/10 sm:w-[calc(100vw-3rem)] sm:rounded-[1.85rem] lg:max-h-[86dvh] lg:flex-row"
        >
          <DialogClose
            className="absolute top-3.5 right-3.5 z-20 inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-background/85 text-foreground ring-1 ring-foreground/10 backdrop-blur-sm transition-all duration-200 ease-enter hover:bg-background hover:scale-[1.04] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            aria-label={serviceDetailModalContent.closeLabel}
          >
            <X className="size-4" strokeWidth={2.25} />
          </DialogClose>

          <div className="relative w-full shrink-0 overflow-hidden lg:w-[44%]">
            <div className="relative aspect-4/5 w-full sm:aspect-3/2 lg:h-full lg:aspect-auto">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                quality={88}
                sizes="(max-width: 1024px) 100vw, 460px"
                className={`object-cover ${
                  isFeatured ? "brightness-[0.9]" : "brightness-[0.96]"
                }`}
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

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <HighlightLabel>
                  {serviceDetailModalContent.enquiringLabel}
                </HighlightLabel>
                <DialogTitle className="mt-1.5 text-2xl font-semibold tracking-tight text-background sm:text-3xl">
                  {content.name}
                </DialogTitle>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-background/80 text-pretty">
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
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-7 sm:py-7">
              <section>
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {serviceDetailModalContent.overviewLabel}
                </h3>
                <DialogDescription
                  id={`service-modal-desc-${content.id}`}
                  className="mt-2 text-[0.95rem] leading-relaxed text-foreground/90 text-pretty"
                >
                  {detail.overview}
                </DialogDescription>
              </section>

              <section className="mt-7">
                <HighlightLabel className="text-lg tracking-tight">
                  {detail.includedLabel}
                </HighlightLabel>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {detail.included.map(({ icon: Icon, title, description }) => (
                    <li
                      key={title}
                      className="flex gap-3 rounded-2xl border border-border/60 bg-muted/25 p-3.5"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon
                          className="size-4.5"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-foreground">
                          {title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-snug text-muted-foreground text-pretty">
                          {description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-7">
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {detail.goodToKnowLabel}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {detail.goodToKnow.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      <span className="text-sm leading-snug text-foreground/85 text-pretty">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="shrink-0 border-t border-border/60 bg-background/80 p-4 backdrop-blur-sm sm:p-5">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleEnquire}
                  aria-label={serviceDetailModalContent.ctaAriaLabel(content.name)}
                  className="group inline-flex h-12 min-w-0 flex-1 cursor-pointer items-center justify-between gap-3 rounded-full bg-foreground pr-1.5 pl-6 text-sm font-medium whitespace-nowrap text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
                >
                  <span className="truncate">
                    {serviceDetailModalContent.ctaLabel}
                  </span>
                  <span
                    aria-hidden
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  >
                    <ArrowUpRight
                      className="size-4 text-primary-foreground transition-transform duration-300 ease-enter group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </span>
                </button>

                <a
                  href={getPrimaryWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 text-sm font-medium text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:px-6"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  {serviceDetailModalContent.whatsappLabel}
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
