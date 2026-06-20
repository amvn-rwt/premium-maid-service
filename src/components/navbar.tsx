import { Logo } from "@/components/logo";
import { NavbarActions } from "@/components/navbar-actions";
import { NavbarLinks } from "@/components/navbar-links";
import { NavbarMobileMenu } from "@/components/navbar-mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]"
      >
        <Logo className="min-w-0 shrink" />

        <NavbarLinks />

        <div className="ml-auto flex shrink-0 items-center gap-0.5 sm:gap-1 lg:ml-0 lg:justify-self-end">
          <NavbarActions />
          <NavbarMobileMenu />
        </div>
      </nav>
    </header>
  );
}
