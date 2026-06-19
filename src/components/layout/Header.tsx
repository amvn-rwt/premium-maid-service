import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { HeaderActions } from "@/components/layout/HeaderActions";
import { MobileNav } from "@/components/layout/MobileNav";
import { SiteLogo } from "@/components/layout/SiteLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-3">
        <SiteLogo />

        <DesktopNav />

        <div className="flex items-center gap-1.5">
          <HeaderActions />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
