import { WhatsAppIcon } from "@/components/icons";
import { CallDropdown } from "@/components/layout/CallDropdown";
import { buttonVariants } from "@/components/ui/button";
import { getPrimaryWhatsAppHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type ContactButtonsProps = {
  className?: string;
};

export function ContactButtons({ className = "" }: ContactButtonsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CallDropdown className="min-w-0 flex-1 sm:flex-none" />
      <a
        href={getPrimaryWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "accent", size: "lg" }),
          "min-w-0 flex-1 sm:flex-none",
        )}
      >
        <WhatsAppIcon className="size-3.5 shrink-0" aria-hidden />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
