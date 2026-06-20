import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <h1 className="mt-3 max-w-xl text-4xl tracking-tight text-primary text-balance sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
        Design reset complete. Rules, skills, and docs are intact — ready to
        rebuild step by step.
      </p>
      <PillCtaButton className="mt-8" />
    </main>
  );
}
