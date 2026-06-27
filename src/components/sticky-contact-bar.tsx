import { PhoneIcon } from "@/components/icons/phone-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { getPrimaryTelHref, getPrimaryWhatsAppHref } from "@/lib/contact";

export function StickyContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-end gap-2 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
      style={{ pointerEvents: "none" }}
    >
      <a
        href={getPrimaryTelHref()}
        aria-label="Call us"
        className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <PhoneIcon className="size-4 shrink-0" />
      </a>
      <a
        href={getPrimaryWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <WhatsAppIcon className="size-4 shrink-0" />
      </a>
    </div>
  );
}
