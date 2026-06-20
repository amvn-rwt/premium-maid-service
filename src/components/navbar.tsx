import { Logo } from "@/components/logo";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { heroContent } from "@/lib/content/hero";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Logo />
        <PillCtaButton>{heroContent.cta}</PillCtaButton>
      </nav>
    </header>
  );
}
