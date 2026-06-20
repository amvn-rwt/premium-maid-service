import { CallDropdown } from "@/components/call-dropdown";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { heroContent } from "@/lib/content/hero";

export function NavbarActions() {
  return (
    <div className="flex shrink-0 items-center gap-1.5">
      <CallDropdown />
      <WhatsAppButton />
      <PillCtaButton size="sm">{heroContent.cta}</PillCtaButton>
    </div>
  );
}
