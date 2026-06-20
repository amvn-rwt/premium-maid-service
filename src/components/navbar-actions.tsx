import { WhatsAppButton } from "@/components/whatsapp-button";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { heroContent } from "@/lib/content/hero";

export function NavbarActions() {
  return (
    <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
      <WhatsAppButton />
      <PillCtaButton href={heroContent.ctaHref} size="sm">
        {heroContent.cta}
      </PillCtaButton>
    </div>
  );
}
