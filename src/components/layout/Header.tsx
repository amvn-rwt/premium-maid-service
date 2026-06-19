import { Container } from "@/components/ui/Container";
import { ContactButtons } from "@/components/layout/ContactButtons";
import { MobileNav } from "@/components/layout/MobileNav";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <SiteLogo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ContactButtons className="hidden md:flex" />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
