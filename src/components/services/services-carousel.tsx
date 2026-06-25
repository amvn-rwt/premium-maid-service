"use client";

import { useCallback, useState } from "react";

import { ServiceDetailModal } from "@/components/services/service-detail-modal";
import { ServiceVisualCard } from "@/components/services/service-visual-card";
import { servicesContent } from "@/lib/content/services";
import type { ServiceId, ServiceItem } from "@/lib/content/services";

const { items } = servicesContent;

export function ServicesCarousel() {
  const [activeId, setActiveId] = useState<ServiceId | null>(null);

  const handleSelect = useCallback((service: ServiceItem) => {
    setActiveId(service.id);
  }, []);

  const handleClose = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <>
      <div
        className="-mx-3 mt-1 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-3 px-3 py-3 [-ms-overflow-style:none] scrollbar-none sm:mt-2 sm:gap-5 [&::-webkit-scrollbar]:hidden"
        role="list"
      >
        {items.map((service) => (
          <ServiceVisualCard
            key={service.id}
            service={service}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <ServiceDetailModal serviceId={activeId} onClose={handleClose} />
    </>
  );
}
