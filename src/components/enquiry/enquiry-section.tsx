"use client";

import { useCallback, useEffect, useState } from "react";

import { EnquiryForm } from "@/components/enquiry/enquiry-form";
import { EnquiryVisualPanel } from "@/components/enquiry/enquiry-visual-panel";
import {
  defaultEnquiryServiceId,
  enquirySectionContent,
  parseServiceIdFromHash,
} from "@/lib/content/enquiry";
import type { ServiceId } from "@/lib/content/services";

function getInitialServiceId() {
  if (typeof window === "undefined") return defaultEnquiryServiceId;
  return parseServiceIdFromHash(window.location.hash) ?? defaultEnquiryServiceId;
}

function updateEnquireHash(serviceId: ServiceId) {
  const nextHash =
    serviceId === defaultEnquiryServiceId
      ? "#enquire"
      : `#enquire?service=${serviceId}`;

  if (window.location.hash !== nextHash) {
    window.history.replaceState(null, "", nextHash);
  }
}

export function EnquirySection() {
  const [serviceId, setServiceId] = useState<ServiceId>(defaultEnquiryServiceId);

  useEffect(() => {
    setServiceId(getInitialServiceId());

    const handleHashChange = () => {
      setServiceId(
        parseServiceIdFromHash(window.location.hash) ?? defaultEnquiryServiceId,
      );
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleServiceChange = useCallback((nextServiceId: ServiceId) => {
    setServiceId(nextServiceId);
    updateEnquireHash(nextServiceId);
  }, []);

  const { title, titleAccent, description } = enquirySectionContent;

  return (
    <section
      id="enquire"
      aria-labelledby="enquire-heading"
      className="scroll-mt-20 border-t border-border/60 bg-muted/35"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <header className="max-w-2xl">
          <h2
            id="enquire-heading"
            className="text-3xl leading-[1.08] tracking-tight text-balance sm:text-4xl"
          >
            <span className="block font-bold text-foreground">{title}</span>
            <span className="mt-1 block font-normal text-muted-foreground">
              {titleAccent}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-[0.95rem]">
            {description}
          </p>
        </header>

        <div className="mt-10 grid items-start gap-4 sm:gap-5 lg:grid-cols-2">
          <EnquiryVisualPanel serviceId={serviceId} className="lg:sticky lg:top-24" />
          <EnquiryForm
            serviceId={serviceId}
            onServiceChange={handleServiceChange}
          />
        </div>
      </div>
    </section>
  );
}
