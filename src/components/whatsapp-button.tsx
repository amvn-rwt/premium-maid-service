import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { getPrimaryWhatsAppHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
};

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  return (
    <a
      href={getPrimaryWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        buttonVariants({ size: "icon-lg" }),
        "border-transparent bg-foreground text-[#25D366] hover:bg-foreground/90",
        className,
      )}
    >
      <WhatsAppIcon className="size-4 shrink-0" aria-hidden />
    </a>
  );
}
