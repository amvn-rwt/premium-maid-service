import { Logo } from "@/components/logo";
import { NavbarActions } from "@/components/navbar-actions";
import { NavbarLinks } from "@/components/navbar-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <nav
        aria-label="Main navigation"
        className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6"
      >
        <Logo />

        <NavbarLinks />

        <div className="justify-self-end">
          <NavbarActions />
        </div>
      </nav>
    </header>
  );
}
