"use client";

import { useCallback, type MouseEvent } from "react";
import Link from "next/link";

import { navigateToEnquiry } from "@/lib/enquiry/navigate-to-enquiry";
import type { ServiceId } from "@/lib/content/services";

type EnquireServiceLinkProps = {
  href: string;
  serviceId: ServiceId;
  className?: string;
  children: React.ReactNode;
};

/**
 * A footer/service link that smooth-scrolls to the enquiry form and selects the
 * service. The `#enquire?service=x` href is kept for no-JS / new-tab use, but on
 * a normal click we handle the scroll ourselves. Otherwise the browser can't
 * resolve the compound hash and scrolls to the top of the page.
 */
export function EnquireServiceLink({
  href,
  serviceId,
  className,
  children,
}: EnquireServiceLinkProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      navigateToEnquiry(serviceId);
    },
    [serviceId],
  );

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
