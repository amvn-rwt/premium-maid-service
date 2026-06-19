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
    <div className={cn("flex items-center gap-1.5", className)}>
      <CallDropdown
        iconOnly={iconOnly}
        className={iconOnly ? undefined : "min-w-0 flex-1 sm:flex-none"}
      />
      <a
        href={getPrimaryWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={cn(
          buttonVariants({
            variant: "accent",
            size: iconOnly ? "icon-lg" : "lg",
          }),
          iconOnly ? undefined : "min-w-0 flex-1 sm:flex-none",
        )}
      >
        <WhatsAppIcon
          className={cn("shrink-0", iconOnly ? "size-4" : "size-3.5")}
          aria-hidden
        />
        {!iconOnly ? <span className="hidden sm:inline">WhatsApp</span> : null}
      </a>
    </div>
  );
}
