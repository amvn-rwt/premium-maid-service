import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen">
      <Container className="flex min-h-screen flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          {siteConfig.serviceArea}
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Header and footer are in place. Next up: hero section.
        </p>
      </Container>
    </main>
  );
}
