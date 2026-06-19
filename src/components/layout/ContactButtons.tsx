import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { getPrimaryTelHref, getPrimaryWhatsAppHref } from "@/lib/contact";

type ContactButtonsProps = {
  size?: "sm" | "md";
  className?: string;
};

const sizeStyles = {
  sm: "px-3 py-2 text-sm gap-1.5",
  md: "px-4 py-2.5 text-sm gap-2",
};

export function ContactButtons({
  size = "md",
  className = "",
}: ContactButtonsProps) {
  const sizing = sizeStyles[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={getPrimaryTelHref()}
        className={`inline-flex items-center rounded-lg border border-primary/15 bg-background font-medium text-primary transition-colors hover:bg-muted-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${sizing}`}
      >
        <PhoneIcon />
        <span className="hidden sm:inline">Call</span>
      </a>
      <a
        href={getPrimaryWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center rounded-lg bg-accent font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${sizing}`}
      >
        <WhatsAppIcon />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
