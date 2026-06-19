import { Container } from "@/components/ui/Container";
import { ContactButtons } from "@/components/layout/ContactButtons";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { SiteLogo } from "@/components/layout/SiteLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <SiteLogo />

        <DesktopNav />

        <div className="flex items-center gap-1.5 lg:gap-2">
          <ContactButtons className="lg:hidden" iconOnly />
          <ContactButtons className="hidden lg:flex" />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
