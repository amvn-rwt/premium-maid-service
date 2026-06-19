import { WhatsAppIcon } from "@/components/icons";
import { CallDropdown } from "@/components/layout/CallDropdown";
import { buttonVariants } from "@/components/ui/button";
import { getPrimaryWhatsAppHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type ContactButtonsProps = {
  className?: string;
  iconOnly?: boolean;
};

export function ContactButtons({
  className = "",
  iconOnly = false,
}: ContactButtonsProps) {
  return (
    <div className={cn("flex shrink-0 items-center gap-1.5", className)}>
      <CallDropdown iconOnly={iconOnly} className="shrink-0" />
      <a
        href={getPrimaryWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={cn(
          buttonVariants({
            variant: "pillAccent",
            size: iconOnly ? "icon-lg" : "lg",
          }),
          "shrink-0",
        )}
      >
        <WhatsAppIcon className="size-4 shrink-0" aria-hidden />
        {!iconOnly ? <span className="hidden sm:inline">WhatsApp</span> : null}
      </a>
    </div>
  );
}
