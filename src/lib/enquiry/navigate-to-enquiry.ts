import { sectionAnchors } from "@/lib/content/nav";
import { getServiceEnquireHref, type ServiceId } from "@/lib/content/services";

const enquireAnchorId = sectionAnchors.enquire.slice(1);

type NavigateToEnquiryOptions = {
  /** Delay before scrolling, e.g. to let a modal finish closing. */
  delay?: number;
};

/**
 * Smooth-scrolls to the enquiry form and selects a service.
 *
 * The service is applied only once the scroll settles (`scrollend`), so the
 * panel's crossfade + reveal entrance plays after arrival instead of competing
 * with the scroll. Needed because `#enquire?service=x` is not a real scroll
 * target. Left to the browser it scrolls to the top of the page.
 */
export function navigateToEnquiry(
  serviceId: ServiceId,
  { delay = 0 }: NavigateToEnquiryOptions = {},
) {
  if (typeof window === "undefined") return;

  const href = getServiceEnquireHref(serviceId);

  const applyService = () => {
    if (window.location.hash !== href) {
      window.history.replaceState(null, "", href);
    }
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  const run = () => {
    const target = document.getElementById(enquireAnchorId);

    if (!target) {
      applyService();
      return;
    }

    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(fallback);
      window.removeEventListener("scrollend", settle);
      applyService();
    };

    const fallback = window.setTimeout(settle, 800);
    window.addEventListener("scrollend", settle);

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (delay > 0) {
    window.setTimeout(run, delay);
  } else {
    run();
  }
}
